# 설계: Next.js 16 App Router 마이그레이션 (main 베이스)

- 작성일: 2026-06-20
- 대상 저장소: `F:\port` (portfolio)
- 작업 브랜치(예정): `feat/next-app-router` (from `main`)
- 참고 브랜치: `25.11.28TodoNext` (stale Next Pages-Router WIP — 머지하지 않음, 청사진으로만 참고)

## 1. 배경 — 두 갈래로 갈라진 마이그레이션

공통 조상(`ce8363d`)에서 두 방향으로 분기했다.

- **`main`**: Parcel → **Vite 8 + react-router-dom 7** SPA로 가며 잘 정리됨. React 19, TS 5.9, **단일 Zustand 스토어**(`src/store/useStore.ts`, Cursor+CommonValue 통합, devtools), Swiper 12, Biome, i18next/Redux 완전 제거, 동작/메모리 누수 버그 수정, a11y, 안정 list key, 타입 안정성. Netlify 배포. `package.json` name=`portfolio`.
- **`25.11.28TodoNext`**(현재 워킹트리): 옛 베이스에서 갈라진 단일 WIP 커밋 `194d007 "pnpm+next+zustand로 변경중"`. **Next.js 16 Pages Router** + pnpm. 옛 베이스라 i18next/`@types/react-redux` 잔재가 남아있고, 같은 컴포넌트들을 기계적으로 포팅하며 main의 수정들을 **퇴화**시킴.

두 방향은 양립 불가: Next.js는 Vite와 react-router를 모두 대체한다. 따라서 단순 머지는 불가능하다.

## 2. 조사로 확정된 사실 (4개 병렬 에이전트 실측)

### 2.1 stale 브랜치 완성도
- Pages Router 기준 ~72% (실라우트 5개 진짜 구현, import 전부 해결). 그러나 **App Router 목표 기준으론 더 낮음**.
- 빌드 차단 결함: ① `smoothScroll.tsx:18`의 `React.ReactChild`(React 19 타입에서 제거 → `next build` 타입체크 실패) ② 구현 폴더(`home/`, `aboutDetail/`, `footprintDetail/`, `skillDetail/`)가 `src/pages/` 아래 있어 `/home` 등 깨진 자동 라우트 생성.
- `getStaticProps/getServerSideProps/getStaticPaths` 전무 → 포팅할 데이터 페칭 API 없음. 순수 라우팅/클라이언트 경계 변환.

### 2.2 공유 컴포넌트 10개 전부 `main`이 진실원천 (결정적 근거)
stale은 기계적 포팅하며 다음을 잃거나 깨뜨렸다:

| 컴포넌트 | main이 가졌고 stale이 잃은 것 |
|---|---|
| **smoothScroll** | 메모리 누수/중복 init 수정(단일 init + 동일 참조 리스너 제거 + destroy). stale은 deps에 init 함수를 넣어 **재초기화 버그**로 재도입, 익명 리스너 누수. |
| **header** | 키보드 a11y 전체(role/tabIndex/aria-label/`onActivateKey` Enter·Space 헬퍼/type=button/aria-hidden SVG). stale이 **전부 삭제** + raw `<svg>` ~300줄 인라인(Parcel 우회용, Next엔 무의미). |
| **skillDetail** | URL에서 `currentUrl` 유도(딥링크 동작). stale은 `'language'`로 **하드코딩**(딥링크 깨짐). |
| **contact** | 안정적 `useCallback` + 정확한 effect deps. stale은 매 렌더 재생성 함수로 퇴화 + deps에서 누락. |
| **main** | 깔끔한 타입. stale은 **깨진 비디오 경로**(`new URL('../../../public/...')`) + i18next 주석 잔재. |
| about / skill / footer 등 | 타입 `any` 회귀, `parseInt` radix 누락, `const→let`, type=button 제거, biome-ignore 주석 제거 등 전반 퇴화. |

→ **결론: main을 베이스로 한다. stale을 이어가면 위 퇴화를 그대로 출시한다.**

### 2.3 stale에서 이식할 가치 (얇음)
- `useCursorHandlers()` **훅 패턴** — prop-drilling 대체(App Router 적합). *패턴만* 차용, 로직은 main 것.
- public/ 자산 경로 문자열(`/images/...`), app/ 디렉터리 방향.
- ⚠️ stale의 SSR window 가드 중 2개는 버그 → main 기준으로 새로 수정.
- ⚠️ stale의 분리 스토어(`src/stores/*`)·스토어 액션 리네임은 **채택하지 않음**. main의 단일 `useStore.ts` 유지 → 컴포넌트 스토어 액션명 변경 불필요.

### 2.4 main의 Vite/react-router 결합 (변환 대상)
- 라우터 표면은 작음: `index.tsx`의 `BrowserRouter`; `contentSwitcher.tsx`의 5라우트 `<Routes>`(`/`, `/about`, `/skill/:list`, `/footprint`, `*`); `App.tsx`/`skillDetail`/`notFound`의 `useNavigate`; header/scrollValueAnimation/smoothScroll/skillDetail/notFound의 `useLocation`. **`<Link>`/`<Outlet>`/`useParams` 없음.** `:list`는 `location.pathname.split('/skill/')[1]`로 파싱.
- Vite 결합: `vite-plugin-svgr` `?react`(header 3개 SVG), `new URL(...import.meta.url)`(비디오, `main.tsx`), `vite.config.ts`(manualChunks/svgr/port/outDir), `index.html`, `src/index.d.ts`의 svgr 참조, `_redirects`+netlify SPA 폴백, SCSS `$img-url` url() 경로.
- 자산 import 2종: ES static import(`import x from './x.jpg'`, `.svg?react`)와 SCSS `url(#{$img-url}...)`.
- `react-device-detect`가 7개 파일 모듈 스코프에서 사용 → SSR/하이드레이션 위험.

## 3. 확정 결정 (사용자 승인)

1. **전략**: main 베이스 + App Router 재적용. stale의 얇은 배선만 이식. ✅
2. **라우터**: Next.js **App Router**. ✅
3. **패키지 매니저**: **pnpm**. ✅
4. **배포**: **Vercel로 이전**(Netlify→Vercel). ✅
5. **커서 핸들링**: main의 `App.tsx` 핸들러를 `useCursorHandlers()` 클라이언트 훅으로 추출(main 단일 스토어 사용). ✅(권고 승인)
6. **린트**: **Biome 유지**(main 표준, eslint-config-next 미도입). ✅
7. **React Compiler**: `reactCompiler: true` 활성화하되 GSAP 수동 DOM과의 충돌은 검증 단계에서 확인, 문제 시 비활성화. ✅

## 4. 작업 분해

### A. 툴링/설정 교체
- `package.json`:
  - 제거: `vite`, `@vitejs/plugin-react`, `vite-plugin-svgr`, `browserslist`, `autoprefixer`, `caniuse-lite`.
  - 추가: `next@16`, `@svgr/webpack`, `babel-plugin-react-compiler`.
  - 유지: `react`/`react-dom` 19, `gsap`, `smooth-scrollbar`, `swiper`, `zustand`, `react-device-detect`, `sass`, `@biomejs/biome`, `typescript`.
  - scripts: `dev: next dev`, `build: next build`, `start: next start`, `lint: biome check .` (main의 lint:fix/format 유지).
  - pnpm으로 설치(`pnpm-lock.yaml` 신규 생성).
- `next.config.ts` 신규: `reactStrictMode: true`, `reactCompiler: true`, SVGR 규칙(webpack rule 또는 turbopack rules).
- `tsconfig.json`: Next 스타일(jsx `preserve`, `plugins:[{name:'next'}]`, `moduleResolution:'bundler'`, `paths: {'@/*': ['./src/*']}`, `next-env.d.ts` 포함).
- 삭제: `index.html`, `index.tsx`(루트 BrowserRouter 엔트리), `vite.config.ts`, `public/_redirects`, `netlify.toml`, `.browserslistrc`.
- **자산 이동(중요)**: main은 자산이 `src/static/{images,fonts,videos}`에 있고 `public/`이 없다 → `git mv src/static/images → public/images`, `src/static/fonts → public/fonts`, `src/static/videos → public/videos`로 이동(`public/languages`는 i18n 제거로 불필요하면 생략). 이동 후 모든 참조 경로를 웹루트(`/images`, `/fonts`, `/videos`)로 갱신.
- favicon: `src/static/images/favicon/*` → `app/icon.*`/`app/apple-icon.*`(파일 컨벤션) 또는 `public/favicon/` + `metadata.icons`.

### B. App Router 구조 (`app/`)
- `app/layout.tsx`(RootLayout): `<html lang="ko"><body>{children}</body></html>`, `export const metadata: Metadata`(title/description/author/theme-color — index.html `<head>`에서 이전), 전역 CSS import(`globals.scss` + swiper css).
- `AppShell`(`'use client'`, 신규 — 기존 `App.tsx` 대체): CustomCursor · Header · SmoothScroll · ScrollValueAnimation · FilmEffect · Contact · SwitchAnimation + `{children}`. layout이 렌더 → 네비게이션 간 영속.
- 페이지(전부 `'use client'`):
  - `app/page.tsx` → Home(Main+About+Skill+Footprint)
  - `app/about/page.tsx` → AboutDetail
  - `app/skill/[list]/page.tsx` → SkillDetail
  - `app/footprint/page.tsx` → FootprintDetail
  - `app/not-found.tsx` → NotFound
- 제거: `contentSwitcher.tsx`(App Router 디렉터리 트리가 대체; React.lazy/Suspense는 Next 자동 코드 스플리팅으로 불필요).

### C. 라우팅 재배선 (main 컴포넌트 → `next/navigation`)
- `useNavigate` → `useRouter().push` (AppShell pageTimer, skillDetail 탭 전환).
- `navigate(-1)` → `useRouter().back()` (notFound).
- `useLocation`/`location.pathname` → `usePathname()` (header, scrollValueAnimation, smoothScroll, skillDetail, notFound). effect deps `[location]` → `[pathname]`.
- skillDetail: `pathname.split('/skill/')[1]` → `useParams().list`. **main의 "URL에서 currentUrl 유도"(딥링크 동작) 보존**.

### D. 커서 핸들링 (App Router 필수)
- App Router는 layout→page props 전달 불가 → main의 prop-drilling(`_onHover/_onClick/_onLeave/pageTimer`) 경로가 깨짐.
- main `App.tsx`의 핸들러 로직을 `src/hooks/useCursorHandlers.ts`(`'use client'`)로 추출. main 단일 `useStore`(`changeText`/`changeFirstClassName`/`changeSecondClassName` 등) 그대로 사용. `pageTimer`의 `navigate` → `useRouter().push`.
- props 받던 컴포넌트(Header, Contact, 그리고 ContentSwitcher를 통해 전달받던 Home 계열) → `useCursorHandlers()` 호출로 전환.
- stale의 훅에서 패턴(루프 방지 가드 포함)만 참고, main 단일 스토어에 맞게 작성.

### E. 클라이언트 경계 / SSR 수정
- `'use client'` 추가 대상: AppShell, header, smoothScroll, scrollValueAnimation, skillDetail, notFound, customCursor, main, footprint, about, contact, aboutDetail, footprintDetail, skill, iconSlider, videoToCanvas, splitText, textSlider, tooltip, switchAnimation, filmEffect, languageSelectors, useCursorHandlers — 즉 hooks/effects/refs/브라우저 API/router 쓰는 모든 컴포넌트.
- 버그 수정(2):
  - `iconSlider.tsx:134-141` 렌더 본문의 `window.innerHeight`(무가드) → mounted state로 게이트.
  - `useWindowSize.tsx:4-7` 뒤집힌 `typeof window` 가드(`isSSR`가 window 존재 시 true) → 정정.
- `react-device-detect`: 모듈 스코프 UA 평가 → mounted 게이트로 하이드레이션 불일치 방지(최소 변경; CSS 미디어쿼리 대체는 후속).
- `videoToCanvas/index.js`(plain JS) → DOM/canvas 클라이언트 전용, `'use client'`.

### F. 자산
- 전제: A의 자산 이동(`src/static/* → public/*`) 완료 후 경로 갱신.
- header SVG 3개(`?react`) → SVGR 규칙 처리. `src/index.d.ts`의 vite-plugin-svgr 참조 제거 → `declare module '*.svg'` (SVGR 컴포넌트) 선언으로 교체.
- 비디오: `main.tsx:21`의 `new URL('../../static/videos/video640.mp4', import.meta.url)` → 문자열 `'/videos/video640.mp4'`(public 이동분 참조).
- SCSS `$img-url`(`_path.scss`, main에선 `'../../static/images/'`) → 웹루트 `'/images/'`. 참조 이미지(about-*-opacity.png, footprint-arrow.svg, film.gif, noise.gif, main1920.jpg)는 `public/images/`로 이동된 분 사용.
- `icon-svg.json`: `../../../public/images/icon-svg.json` import 안티패턴 → `src/data/`로 이동 후 정상 import (iconSlider, skillDetail).
- 컴포넌트 이미지 static import(`import x from './x.jpg'`)는 Next 정적 import로 동작 — 동작하는 곳은 유지, public 문자열 전환은 필요한 곳만.

### G. 배포 (Vercel)
- zero-config로 App Router 인식. 빌드 `next build`, 출력 `.next`.
- Vercel 프로젝트 연결(사용자 계정). 환경변수 불필요(정적 포트폴리오).

## 5. 단계별 실행 + 검증 기준

1. **브랜치 + 툴링 교체**: `main`→`feat/next-app-router`, package.json/next.config/tsconfig 교체, Vite/index.html 삭제, `pnpm install`.
   - 검증: `pnpm install` 성공, `pnpm next --version` 인식.
2. **App Router 구조 + 라우팅 + `'use client'`**: app/ 트리, layout, AppShell, next/navigation 전환, contentSwitcher 제거.
   - 검증: **`pnpm build`(next build) 타입체크 + 빌드 통과** (smoothScroll `ReactChild` 등 타입에러 0).
3. **자산/SVGR/비디오/SCSS 경로**: SVGR 규칙, 비디오/아이콘 경로, `$img-url`.
   - 검증: `pnpm dev` 진입 시 5개 라우트에서 404/콘솔 에러 없음(chrome-devtools 네트워크/콘솔 실측).
4. **커서 훅 + SSR 가드 수정**: useCursorHandlers 추출/배선, 가드 버그 2개 수정, react-device-detect 게이트.
   - 검증: 하이드레이션 경고 없음, 커서 추적/호버 텍스트/페이지 전환·GSAP 애니메이션 동작.
5. **브라우저 QA (5 라우트)**: `/`, `/about`, `/skill/[list]`, `/footprint`, 없는 경로(404).
   - 검증: main(Vite) 대비 시각/인터랙션 패리티(스크린샷/스냅샷/콘솔/네트워크 증거).
6. **Vercel 배포**: 프로젝트 연결, 프로덕션 빌드.
   - 검증: Vercel 빌드 성공 + 프리뷰 URL에서 5 라우트 정상.
7. **main 반영**: PR 생성 → 리뷰 → 머지.

## 6. 위험 / 주의

- **React Compiler × GSAP**: 수동 DOM 변이/ref 기반 애니메이션과 컴파일러 메모이제이션 충돌 가능 → 4~5단계에서 실측, 문제 시 `reactCompiler:false`로 폴백.
- **smooth-scrollbar + ScrollTrigger scrollerProxy**: skillDetail의 가장 복잡한 결합 → main 구조 보존 + `'use client'`로 가장 주의 깊게 이식.
- **하이드레이션 불일치**: `react-device-detect`(`isDesktop/isMobile`)가 서버에서 false → 렌더 분기 시 mismatch. mounted 게이트 필수.
- **자산 404**: SCSS `url()` 웹루트 전환 누락 시 배경 이미지 404 → 3단계에서 네트워크 실측.
- **Biome × Next**: Biome는 Next 전용 규칙(no `<img>` 등)을 모름 → 기능엔 무관, 정책상 허용.
- **stale 머지 금지**: 어떤 경우에도 stale 컴포넌트 본문을 가져오지 않음(퇴화 유입 방지). 청사진/패턴 참고만.

## 7. 범위 밖 (이번 작업 제외)

- `react-device-detect` → CSS 미디어쿼리 완전 대체(후속 가능).
- `next/image` 도입(현재 전부 `<img>` 유지; 동작 우선).
- 디자인/레이아웃 변경, 신규 기능.
- i18n 재도입(main 결정대로 제거 유지).
