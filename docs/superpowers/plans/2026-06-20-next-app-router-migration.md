# Next.js 16 App Router 마이그레이션 Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** main(Vite + react-router SPA)의 폴리시된 코드를 베이스로, Next.js 16 App Router + pnpm으로 마이그레이션하고 Vercel 배포까지 동작시킨다.

**Architecture:** main의 컴포넌트 본문(버그수정·a11y·타입 전부)을 그대로 유지하고, ① react-router→next/navigation ② layout→page 경계로 깨지는 prop-drilling을 `useCursorHandlers` 훅으로 대체 ③ Vite 설정/엔트리를 App Router 구조로 교체 ④ 자산을 public/로 이동 — 네 축의 기계적 변환만 수행한다. stale 브랜치(`25.11.28TodoNext`)는 머지하지 않고 패턴 참고만 한다.

**Tech Stack:** Next.js 16 (App Router, React Compiler), React 19, TypeScript 5.9, Zustand 5(단일 `useStore`), Sass, Swiper 12, GSAP, smooth-scrollbar, Biome, pnpm, Vercel.

**검증 모델:** 이 프로젝트엔 단위 테스트 러너가 없다(애니메이션/UI 포트폴리오). 따라서 각 태스크의 검증 게이트는 **`pnpm build`(next 타입체크+빌드) 통과 + dev 서버 렌더 실측(chrome-devtools 콘솔/네트워크) + 5라우트 브라우저 패리티 QA**다. 빌드는 app/ 구조와 SSR 가드가 갖춰지는 Task 7부터 통과하므로, 그 이전 태스크는 더 좁은 게이트(설치 성공/grep/파일 존재)로 검증한다.

**참고 문서:** [설계 spec](../specs/2026-06-20-next-app-router-migration-design.md)

---

## 파일 구조 (생성/수정/삭제 맵)

**생성:**
- `next.config.ts` — Next 설정(strict, reactCompiler, SVGR)
- `tsconfig.json`(교체) — Next 스타일 + `@/*` 별칭
- `app/layout.tsx` — RootLayout(html/body/metadata/전역 CSS)
- `app/page.tsx`, `app/about/page.tsx`, `app/skill/[list]/page.tsx`, `app/footprint/page.tsx`, `app/not-found.tsx` — 라우트 진입(서버 컴포넌트, 얇은 래퍼)
- `src/components/appShell/AppShell.tsx` — 영속 클라이언트 셸(기존 App.tsx 대체)
- `src/hooks/useCursorHandlers.ts` — 커서 핸들러 훅(App.tsx 로직 추출)
- `src/types/svgr.d.ts` — SVGR 모듈 선언(기존 `src/index.d.ts` 대체)

**수정:**
- `package.json` — Vite 제거, Next/SVGR/react-compiler 추가, 스크립트
- `src/views/*`(구 `src/pages/*`, 리네임됨) — home/aboutDetail/footprintDetail/skillDetail/notFound: props→훅, 라우터 전환
- `src/components/header/header.tsx`, `smoothScroll/smoothScroll.tsx`, `scrollValueAnimation/scrollValueAnimation.tsx` — useLocation→usePathname
- `src/components/main/main.tsx` — 비디오 경로
- `src/components/iconSlider/iconSlider.tsx` — window 가드 + icon-svg.json 경로
- `src/utils/useWindowSize.tsx` — 뒤집힌 가드 수정
- `src/style/_path.scss` — `$img-url` 웹루트화
- react-device-detect 사용처 — mounted 게이트

**삭제:**
- `index.html`, `index.tsx`(루트 엔트리), `vite.config.ts`, `src/App.tsx`, `src/components/contentSwitcher/`(폴더), `public/_redirects`, `netlify.toml`, `.browserslistrc`, `src/index.d.ts`

**이동:**
- `src/static/{images,fonts,videos}` → `public/{images,fonts,videos}`
- `src/static/images/favicon/*` → `public/favicon/*`
- `src/static/images/icon-svg.json` → `src/data/icon-svg.json`
- `src/pages/` → `src/views/`

---

## Task 0: 브랜치 생성 + spec 커밋

**Files:** (git 작업, spec 파일은 이미 워킹트리에 존재)

- [ ] **Step 1: main에서 작업 브랜치 생성**

```bash
git stash -u                       # 현재 stale 워킹트리의 untracked spec/plan 임시 보관
git checkout main
git checkout -b feat/next-app-router
git stash pop                      # spec/plan 문서 복원(untracked로 따라옴)
```

기대: `feat/next-app-router` 브랜치, 워킹트리에 `docs/superpowers/specs/...` 와 `docs/superpowers/plans/...` 두 문서가 untracked로 존재. 그 외 트리는 main과 동일.

- [ ] **Step 2: 베이스가 main인지 확인**

Run: `git log --oneline -1 && git show HEAD:package.json | grep '"name"'`
기대: HEAD는 main의 최신 커밋(`b2e2b31`), package.json name은 `portfolio`(main 베이스 확인). app/ 디렉터리 없음, `src/store/useStore.ts` 존재.

- [ ] **Step 3: 계획/설계 문서 커밋**

```bash
git add docs/superpowers/specs/2026-06-20-next-app-router-migration-design.md docs/superpowers/plans/2026-06-20-next-app-router-migration.md
git commit -m "docs: Next App Router 마이그레이션 설계/계획 문서 추가"
```

---

## Task 1: 툴링/설정 교체 (Vite → Next)

**Files:**
- Modify: `package.json`
- Create: `next.config.ts`
- Replace: `tsconfig.json`
- Create: `src/types/svgr.d.ts`
- Delete: `src/index.d.ts`, `vite.config.ts`, `index.html`, `index.tsx`, `public/_redirects`, `netlify.toml`, `.browserslistrc`

- [ ] **Step 1: package.json 교체**

`dependencies`/`devDependencies`/`scripts`를 아래로 교체(`react`/`react-dom`/`gsap`/`swiper`/`smooth-scrollbar`/`zustand`/`react-device-detect`/`sass`/`typescript`/`@biomejs/biome` 버전은 기존 main 값 유지):

```jsonc
{
  "name": "portfolio",
  "version": "1.0.0",
  "license": "MIT",
  "private": true,
  "scripts": {
    "dev": "next dev",
    "build": "next build",
    "start": "next start",
    "lint": "biome check .",
    "lint:fix": "biome check --write .",
    "format": "biome format --write ."
  },
  "dependencies": {
    "gsap": "^3.15.0",
    "next": "16.0.4",
    "react": "19.2.7",
    "react-device-detect": "^2.1.2",
    "react-dom": "19.2.7",
    "smooth-scrollbar": "^8.8.4",
    "swiper": "^12.2.0",
    "zustand": "5.0.14"
  },
  "devDependencies": {
    "@biomejs/biome": "2.5.0",
    "@svgr/webpack": "^8.1.0",
    "@types/node": "^26.0.0",
    "@types/react": "19.2.17",
    "@types/react-dom": "^19.2.3",
    "@types/smooth-scrollbar": "^8.2.5",
    "babel-plugin-react-compiler": "^1.0.0",
    "sass": "1.101.0",
    "typescript": "^5.9.3"
  }
}
```

`"type": "module"`는 제거한다(Next는 next.config.ts를 자체 처리; main의 `type:module`은 Vite용이었음).

- [ ] **Step 2: next.config.ts 생성**

```ts
import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
  reactStrictMode: true,
  reactCompiler: true,
  // vite-plugin-svgr의 `*.svg?react` 대체: svg를 React 컴포넌트로 임포트.
  webpack(config) {
    config.module.rules.push({
      test: /\.svg$/i,
      issuer: /\.[jt]sx?$/,
      use: ['@svgr/webpack'],
    });
    return config;
  },
};

export default nextConfig;
```

(주의: Next 16 기본 번들러가 Turbopack이면 `next build`에서 webpack 설정 경고가 날 수 있다. 그 경우 Task 7 검증에서 `turbopack.rules`로 전환하거나 `--webpack` 플래그를 쓴다 — Task 9의 SVGR 검증 단계에서 확정한다.)

- [ ] **Step 3: tsconfig.json 교체**

```jsonc
{
  "compilerOptions": {
    "target": "ES2020",
    "lib": ["dom", "dom.iterable", "esnext"],
    "allowJs": true,
    "skipLibCheck": true,
    "strict": true,
    "noEmit": true,
    "esModuleInterop": true,
    "module": "esnext",
    "moduleResolution": "bundler",
    "resolveJsonModule": true,
    "isolatedModules": true,
    "jsx": "preserve",
    "incremental": true,
    "forceConsistentCasingInFileNames": true,
    "plugins": [{ "name": "next" }],
    "paths": { "@/*": ["./src/*"] }
  },
  "include": ["next-env.d.ts", "**/*.ts", "**/*.tsx", ".next/types/**/*.ts"],
  "exclude": ["node_modules"]
}
```

- [ ] **Step 4: SVGR 타입 선언 생성, 구 선언 삭제**

Create `src/types/svgr.d.ts`:

```ts
// vite-plugin-svgr/client 참조 대체: svg를 React 컴포넌트로 선언.
declare module '*.svg' {
  import type { FC, SVGProps } from 'react';
  const content: FC<SVGProps<SVGSVGElement>>;
  export default content;
}
```

```bash
git rm src/index.d.ts
```

- [ ] **Step 5: Vite/엔트리/배포 잔재 삭제**

```bash
git rm index.html index.tsx vite.config.ts public/_redirects netlify.toml .browserslistrc
```

(`.browserslistrc`가 없으면 그 인자만 제외하고 실행.)

- [ ] **Step 6: pnpm 설치**

Run: `pnpm install`
기대: 성공, `pnpm-lock.yaml` 생성, `node_modules/next` 존재.
Run: `pnpm exec next --version`
기대: `Next.js v16.x` 출력.

- [ ] **Step 7: 커밋**

```bash
git add -A
git commit -m "build: Vite 제거 + Next 16/pnpm 툴체인 도입 (설정 레이어)"
```

---

## Task 2: 자산 이동 (src/static → public)

**Files:** git mv 이동 작업

- [ ] **Step 1: 이미지/폰트/비디오 이동**

```bash
mkdir -p public
git mv src/static/images public/images
git mv src/static/fonts public/fonts
git mv src/static/videos public/videos
```

- [ ] **Step 2: favicon 분리, icon-svg.json을 src/data로 이동**

```bash
git mv public/images/favicon public/favicon
mkdir -p src/data
git mv public/images/icon-svg.json src/data/icon-svg.json
```

(`src/static/languages`가 있으면 i18n 미사용이므로 `git rm -r src/static/languages` — main에 i18next는 이미 없음.)

- [ ] **Step 3: 잔여 src/static 정리 확인**

Run: `ls src/static 2>/dev/null; echo "---"; ls public`
기대: `src/static`은 비었거나 없음. `public/`에 `images fonts videos favicon` 존재.
빈 `src/static` 디렉터리가 남으면 `git status`로 확인(빈 디렉터리는 git이 무시).

- [ ] **Step 4: 커밋**

```bash
git add -A
git commit -m "chore: 정적 자산을 src/static에서 public/으로 이동 (Next 관례)"
```

---

## Task 3: src/pages → src/views 리네임 (Pages Router 충돌 방지)

**이유:** Next.js는 `src/pages/`를 Pages Router 디렉터리로 자동 인식한다. App Router(app/)와 공존하면 `src/pages/*`가 의도치 않은 라우트가 된다. 구현 컴포넌트를 `src/views/`로 옮긴다.

**Files:**
- Move: `src/pages/` → `src/views/`
- Modify: `src/components/contentSwitcher/contentSwitcher.tsx`(곧 삭제되지만 일단 import 깨짐 방지), 기타 `../../pages/` 참조처

- [ ] **Step 1: 디렉터리 리네임**

```bash
git mv src/pages src/views
```

- [ ] **Step 2: `pages/` 참조 전수 검색**

Run: `grep -rn "pages/" src --include=*.tsx --include=*.ts | grep -vE "node_modules"`
기대: `../../pages/...` 또는 `@/pages/...` 형태 import 목록. 주로 `src/components/contentSwitcher/contentSwitcher.tsx`(`../../pages/home` 등). 이 목록을 다음 스텝에서 `views/`로 치환.

- [ ] **Step 3: 참조 경로 치환**

`contentSwitcher.tsx`의 `../../pages/home`, `../../pages/aboutDetail`, `../../pages/skillDetail`, `../../pages/footprintDetail`, `../../pages/notFound` → `../../views/...`로 교체. (contentSwitcher는 Task 5에서 삭제되지만, 중간 grep 검증을 위해 일단 맞춰둔다.)
Step 2에서 나온 다른 참조처도 동일하게 `views/`로.

- [ ] **Step 4: 검증**

Run: `grep -rn "pages/" src --include=*.tsx --include=*.ts | grep -vE "node_modules"`
기대: 출력 없음(모든 참조가 views/로 전환).

- [ ] **Step 5: 커밋**

```bash
git add -A
git commit -m "refactor: src/pages를 src/views로 리네임 (Next Pages Router 충돌 회피)"
```

---

## Task 4: useCursorHandlers 훅 생성

**Files:**
- Create: `src/hooks/useCursorHandlers.ts`

**근거:** main `src/App.tsx`의 `_onHover/_onClick/_onLeave/pageTimer/screenCoverTimer` 로직을 그대로 추출하되 `navigate(path)` → `router.push(path)`로만 바꾼다. main 단일 `useStore`의 액션(`changeFirstClassName/changeSecondClassName/changeText/changeSwitchAnimation/changeButtonDelay`)을 그대로 쓴다 → 스토어 변경 없음.

- [ ] **Step 1: 훅 작성**

```ts
'use client';

import { useRouter } from 'next/navigation';
import useStore from '@/store/useStore';

export interface CursorHandlers {
  // 마우스 오버: 커서 형태/텍스트 변경.
  onHover: (hoverCursor: string, hoverText?: string | null) => void;
  // 좌클릭: 스크린 커버 + 딜레이 후 페이지 전환.
  onClick: (path: string, hoverText?: string | null) => void;
  // 커서 형태 초기화.
  onLeave: (hoverText?: string | null) => void;
  // 지정 시간 후 라우터 이동(헤더 등에서 직접 사용).
  pageTimer: (path: string, timer: number) => void;
}

// App Router에서는 layout->page 간 props 전달이 불가하므로,
// 기존 App.tsx의 커서 핸들러 로직을 훅으로 추출해 어느 클라이언트 컴포넌트에서나 호출한다.
export default function useCursorHandlers(): CursorHandlers {
  const cursorClass = useStore((s) => s.changeFirstClassName);
  const cursorSecondClass = useStore((s) => s.changeSecondClassName);
  const cursorText = useStore((s) => s.changeText);
  const screenCover = useStore((s) => s.changeSwitchAnimation);
  const onChangeButtonDelay = useStore((s) => s.changeButtonDelay);

  const router = useRouter();

  const onLeave = (hoverText?: string | null) => {
    cursorClass('');
    cursorSecondClass('');
    hoverText && cursorText(hoverText);
  };

  const onHover = (hoverCursor: string, hoverText?: string | null) => {
    cursorClass(hoverCursor);
    hoverText && cursorText(hoverText);
  };

  // 스크린 커버가 화면을 덮은 뒤 커버/버튼딜레이 해제.
  const screenCoverTimer = () => {
    setTimeout(() => {
      screenCover(false);
      onChangeButtonDelay(false);
    }, 2000);
  };

  // 일정 시간 후 라우터 이동(기존 navigate -> router.push).
  const pageTimer = (path: string, timer: number) => {
    setTimeout(() => {
      router.push(path);
    }, timer);
  };

  const onClick = (path: string, hoverText?: string | null) => {
    hoverText && onLeave(hoverText);
    onChangeButtonDelay(true);
    screenCover(true);
    screenCoverTimer();
    pageTimer(path, 1000);
  };

  return { onHover, onClick, onLeave, pageTimer };
}
```

- [ ] **Step 2: useStore 액션명 일치 확인**

Run: `grep -nE "changeFirstClassName|changeSecondClassName|changeText|changeSwitchAnimation|changeButtonDelay" src/store/useStore.ts`
기대: 5개 액션 모두 useStore에 정의되어 있음(없으면 실제 이름으로 훅을 맞춘다).

(빌드 검증은 Task 7에서 일괄. 단독 커밋은 Task 5와 묶는다.)

---

## Task 5: App Router 스캐폴딩 (layout + AppShell + pages)

**Files:**
- Create: `app/layout.tsx`, `src/components/appShell/AppShell.tsx`, `src/components/appShell/index.tsx`
- Create: `app/page.tsx`, `app/about/page.tsx`, `app/skill/[list]/page.tsx`, `app/footprint/page.tsx`, `app/not-found.tsx`
- Delete: `src/App.tsx`, `src/components/contentSwitcher/`

- [ ] **Step 1: AppShell 작성 ('use client' 경계)**

기존 `src/App.tsx`의 JSX 구조를 옮기되, 핸들러는 `useCursorHandlers()`에서 받고, `<ContentSwitcher>` 자리에 `{children}`을 둔다. Header/Contact는 main과 동일한 prop 인터페이스(`_onHover` 등)를 유지하므로 그 컴포넌트들은 수정 불필요.

Create `src/components/appShell/AppShell.tsx`:

```tsx
'use client';

import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import type { ReactNode } from 'react';

import Contact from '@/components/contact';
import CustomCursor from '@/components/customCursor';
import FilmEffect from '@/components/filmEffect';
import Header from '@/components/header';
import ScrollValueAnimation from '@/components/scrollValueAnimation';
import SmoothScroll from '@/components/smoothScroll';
import SwitchAnimation from '@/components/switchAnimation';
import useCursorHandlers from '@/hooks/useCursorHandlers';

// SSR(서버 렌더) 단계에서 window 접근을 피하기 위해 가드.
if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger);
}

// 모든 라우트에 걸쳐 유지되는 영속 셸. 기존 App.tsx를 대체한다.
export default function AppShell({ children }: { children: ReactNode }) {
  const { onHover, onClick, onLeave, pageTimer } = useCursorHandlers();

  return (
    <CustomCursor>
      <Header _onHover={onHover} _onClick={onClick} _onLeave={onLeave} pageTimer={pageTimer} />
      <SmoothScroll>{children}</SmoothScroll>
      <ScrollValueAnimation />
      <FilmEffect />
      <Contact _onHover={onHover} _onLeave={onLeave} />
      <SwitchAnimation />
    </CustomCursor>
  );
}
```

Create `src/components/appShell/index.tsx`:

```tsx
export { default } from './AppShell';
```

- [ ] **Step 2: app/layout.tsx 작성**

전역 SCSS는 main의 `src/style/index.scss`(App.tsx가 import하던 것). 메타데이터는 기존 index.html의 `<head>`에서 이전.

Create `app/layout.tsx`:

```tsx
import type { Metadata, Viewport } from 'next';
import type { ReactNode } from 'react';

import AppShell from '@/components/appShell';
import '@/style/index.scss';
import 'swiper/css';

export const metadata: Metadata = {
  title: "Do Young Lee's Portfolio",
  description: 'Hello, this is the portfolio site of front developer Lee Do-young.',
  authors: [{ name: '이도영 (Do-Young Lee)' }],
  icons: {
    icon: [
      { url: '/favicon/favicon-32x32.png', sizes: '32x32', type: 'image/png' },
      { url: '/favicon/favicon-16x16.png', sizes: '16x16', type: 'image/png' },
      { url: '/favicon/android-icon-192x192.png', sizes: '192x192', type: 'image/png' },
    ],
    apple: '/favicon/apple-icon-180x180.png',
  },
};

export const viewport: Viewport = {
  themeColor: '#424242',
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="ko">
      <body>
        <AppShell>{children}</AppShell>
      </body>
    </html>
  );
}
```

(전역 SCSS 경로 확인: `ls src/style/index.scss`. 다른 이름이면 그 경로로 import. swiper 모듈 CSS는 Task 9에서 슬라이더 사용 모듈에 맞춰 보강.)

- [ ] **Step 3: 라우트 페이지 5개 작성 (서버 컴포넌트, 얇은 래퍼)**

view 컴포넌트는 Task 6에서 `'use client'` + 훅으로 전환되므로, page.tsx는 단순 렌더만 한다.

Create `app/page.tsx`:

```tsx
import Home from '@/views/home';

export default function Page() {
  return <Home />;
}
```

Create `app/about/page.tsx`:

```tsx
import AboutDetail from '@/views/aboutDetail';

export default function Page() {
  return <AboutDetail />;
}
```

Create `app/skill/[list]/page.tsx`:

```tsx
import SkillDetail from '@/views/skillDetail';

export default function Page() {
  return <SkillDetail />;
}
```

Create `app/footprint/page.tsx`:

```tsx
import FootprintDetail from '@/views/footprintDetail';

export default function Page() {
  return <FootprintDetail />;
}
```

Create `app/not-found.tsx`:

```tsx
import NotFound from '@/views/notFound';

export default function NotFoundPage() {
  return <NotFound />;
}
```

(각 view의 배럴 `index.tsx` default export가 컴포넌트인지 확인: `ls src/views/home/index.tsx` 등. main 구조상 `src/views/home/index.tsx`→`home.tsx` 재노출.)

- [ ] **Step 4: App.tsx, contentSwitcher 삭제**

```bash
git rm src/App.tsx
git rm -r src/components/contentSwitcher
```

- [ ] **Step 5: 커밋(훅 포함)**

```bash
git add -A
git commit -m "feat: App Router 구조(layout/AppShell/pages) + useCursorHandlers 훅 도입"
```

---

## Task 6: view 컴포넌트 라우팅/핸들러 재배선

**Files:**
- Modify: `src/views/home/home.tsx`, `src/views/aboutDetail/aboutDetail.tsx`, `src/views/footprintDetail/footprintDetail.tsx`, `src/views/skillDetail/skillDetail.tsx`, `src/views/notFound/notFound.tsx`

**규칙:** 이들은 서버 page.tsx가 직접 import하는 **클라이언트 경계 진입점**이다 → 파일 최상단에 `'use client'` 추가. 핸들러 props 제거 후 `useCursorHandlers()` 호출. 하위 섹션 컴포넌트(Main/About/Skill/Footprint 등)로는 기존과 동일하게 props로 전달.

- [ ] **Step 1: home.tsx 재배선**

`'use client'` 추가. 시그니처 `({ _onHover, _onClick, _onLeave }) => ...` → `() => ...`로 바꾸고 본문 첫 줄에서 `const { onHover: _onHover, onClick: _onClick, onLeave: _onLeave } = useCursorHandlers();` 로 받는다(하위 전달부의 변수명 보존). `import useCursorHandlers from '@/hooks/useCursorHandlers';` 추가.

예시(상단부):

```tsx
'use client';

import useCursorHandlers from '@/hooks/useCursorHandlers';
// ...기존 import 유지...

const Home = () => {
  const { onHover: _onHover, onClick: _onClick, onLeave: _onLeave } = useCursorHandlers();
  // ...기존 본문 그대로(Main/About/Skill/Footprint에 _onHover 등 전달)...
};
```

- [ ] **Step 2: aboutDetail.tsx / footprintDetail.tsx 재배선**

각 파일 상단 `'use client'` 추가. 시그니처에서 `_onHover`/`_onLeave` props 제거 → `const { onHover: _onHover, onLeave: _onLeave } = useCursorHandlers();`. import 추가. 나머지 본문(GSAP/Swiper/zustand) 그대로.

- [ ] **Step 3: skillDetail.tsx 재배선 (라우터 + 파라미터)**

`'use client'` 추가. 변경점:
1. props `_onHover`/`_onLeave` 제거 → `useCursorHandlers()`.
2. `react-router-dom`의 `useNavigate`/`useLocation` 제거 → `import { useRouter, useParams } from 'next/navigation';`
3. 탭 클릭의 `navigate(\`/skill/${url}\`)` → `router.push(\`/skill/${url}\`)`.
4. **딥링크 동작 보존(main의 강점):** 현재 main은 `location.pathname.split('/skill/')[1]`로 `currentUrl` 초기화. → `const params = useParams();` 후 `const currentUrl = (params.list as string) ?? '...'` 형태로 `[list]` 세그먼트에서 유도. `location.pathname` 비교/`changeHistoryList` 로직도 `params.list` 기반으로 재포인트.

예시(상단부):

```tsx
'use client';

import { useParams, useRouter } from 'next/navigation';
import useCursorHandlers from '@/hooks/useCursorHandlers';
// ...

const SkillDetail = () => {
  const { onHover: _onHover, onLeave: _onLeave } = useCursorHandlers();
  const router = useRouter();
  const params = useParams<{ list: string }>();
  const currentList = params.list; // 기존 pathname.split('/skill/')[1] 대체
  // ...탭 전환: router.push(`/skill/${url}`) ...
};
```

main의 `skillDetail.tsx`에서 `location`/`navigate`를 쓰던 모든 지점을 위 매핑으로 치환(특히 `currentUrl` 초기값을 라우트 세그먼트에서 유도해 딥링크 유지).

- [ ] **Step 4: notFound.tsx 재배선**

`'use client'` 추가. `react-router-dom` 제거 → `import { usePathname, useRouter } from 'next/navigation';`. `navigate(-1)` → `const router = useRouter(); router.back();`. `location.pathname`(잘못된 경로 표시) → `const pathname = usePathname();`.

- [ ] **Step 5: 검증(정적)**

Run: `grep -rn "react-router-dom" src/views`
기대: 출력 없음.
Run: `grep -rln "useCursorHandlers" src/views`
기대: home, aboutDetail, footprintDetail, skillDetail 4개(notFound는 커서 핸들러 미사용 가능 — main notFound는 props 없음).

- [ ] **Step 6: 커밋**

```bash
git add -A
git commit -m "refactor: view 컴포넌트를 next/navigation + useCursorHandlers로 재배선"
```

---

## Task 7: 컴포넌트 라우터 스왑 + 첫 빌드 통과

**Files:**
- Modify: `src/components/header/header.tsx`, `src/components/smoothScroll/smoothScroll.tsx`, `src/components/scrollValueAnimation/scrollValueAnimation.tsx`

**규칙:** 이 3개는 AppShell(클라이언트) 하위라 자동 클라이언트지만, `react-router-dom`을 쓰므로 교체 필요. (Header/Contact는 prop 인터페이스 유지 — AppShell이 props 전달.)

- [ ] **Step 1: header.tsx — useLocation → usePathname**

`import { useLocation } from 'react-router-dom';` 제거 → `import { usePathname } from 'next/navigation';`. `const location = useLocation();` → `const pathname = usePathname();`. 본문의 `location.pathname` 비교(로고 호버/클릭, gnb active 비교)를 `pathname`으로 치환. effect dep `[location]` → `[pathname]`. (Header는 props로 `_onHover/_onClick/_onLeave/pageTimer`를 계속 받음 — 변경 없음.)

- [ ] **Step 2: smoothScroll.tsx — useLocation → usePathname**

동일 치환. `location.pathname`으로 `/footprint`에서 `opacity-none` 클래스 토글하던 부분 → `pathname`. effect dep 갱신. **main의 단일 init + 동일참조 리스너 제거 + destroy 구조는 그대로 보존**(stale의 재초기화 버그를 들이지 않는다).

- [ ] **Step 3: scrollValueAnimation.tsx — useLocation → usePathname**

동일 치환. 경로별 퍼센트 인디케이터 가시성 판단의 `location.pathname` → `pathname`, dep `[location]` → `[pathname]`.

- [ ] **Step 4: react-router-dom 전수 제거 확인**

Run: `grep -rn "react-router" src`
기대: 출력 없음(전 코드베이스에서 react-router 제거 완료).

- [ ] **Step 5: 첫 빌드 — 알려진 타입에러 1개 동시 수정**

조사에서 확인된 빌드 차단: `src/components/smoothScroll/smoothScroll.tsx`의 `React.ReactChild`(React 19에서 제거됨). children 타입을 `React.ReactNode`로 수정.

Run: `pnpm build`
기대: 처음엔 실패할 수 있음(타입에러/SSR). 나오는 오류를 순서대로 수정:
- `React.ReactChild` → `React.ReactNode`(smoothScroll).
- 남은 `react-router-dom` 타입/임포트 → 0(Step 4에서 확인).
- 그 외 타입 오류가 나오면 해당 파일에서 main 코드 기준으로 정정.
SSR 런타임 크래시(window/document)는 Task 8에서 다루므로, 이 스텝의 목표는 **타입체크 + 컴파일 통과**까지다. (`next build`가 prerender 단계에서 window 에러로 멈추면 Task 8 먼저 수행 후 재시도.)

- [ ] **Step 6: 커밋**

```bash
git add -A
git commit -m "refactor: 컴포넌트 라우터를 usePathname으로 스왑 + ReactChild 타입 수정"
```

---

## Task 8: SSR 가드 버그 수정 + react-device-detect 게이트

**Files:**
- Modify: `src/components/iconSlider/iconSlider.tsx`, `src/utils/useWindowSize.tsx`, react-device-detect 사용처

**근거:** `'use client'` 컴포넌트도 초기 HTML은 서버에서 렌더되므로(SSR), 렌더/모듈 스코프의 `window`/`navigator` 접근은 여전히 크래시·하이드레이션 불일치를 일으킨다.

- [ ] **Step 1: iconSlider.tsx — 렌더 본문의 window.innerHeight 가드**

`src/components/iconSlider/iconSlider.tsx:134-141`에서 렌더 중 `window.innerHeight` 직접 사용 → mounted 상태로 게이트:

```tsx
const [innerHeight, setInnerHeight] = React.useState(0);
React.useEffect(() => {
  const update = () => setInnerHeight(window.innerHeight);
  update();
  window.addEventListener('resize', update);
  return () => window.removeEventListener('resize', update);
}, []);
// 렌더부의 window.innerHeight 참조를 innerHeight 상태로 치환(초기 SSR=0).
```

(실제 사용 맥락에 맞게 변수명/계산 보존. 핵심은 렌더 단계에서 직접 `window` 접근 제거.)

- [ ] **Step 2: useWindowSize.tsx — 뒤집힌 가드 수정**

`src/utils/useWindowSize.tsx:4-7`의 `isSSR` 판정이 반대(window 존재 시 true). 정정:

```tsx
const isClient = typeof window !== 'undefined';
const [windowSize, setWindowSize] = React.useState({
  width: isClient ? window.innerWidth : 0,
  height: isClient ? window.innerHeight : 0,
});
```

(기존 로직 형태 유지하되 `typeof window !== 'undefined'`가 클라이언트를 의미하도록 정정.)

- [ ] **Step 3: react-device-detect 하이드레이션 게이트**

`isDesktop`/`isMobile`은 서버에서 false → 렌더 분기 시 mismatch. 사용처(about, contact, customCursor, footprint, scrollValueAnimation, smoothScroll, skillDetail)에서 렌더 분기에 쓰이면 mounted 게이트를 거친다. 공용 훅으로 단순화:

Create `src/hooks/useMounted.ts`:

```ts
'use client';
import { useEffect, useState } from 'react';

// 클라이언트 마운트 이후에만 true. UA 기반 분기의 하이드레이션 불일치 방지용.
export default function useMounted() {
  const [mounted, setMounted] = useState(false);
  useEffect(() => setMounted(true), []);
  return mounted;
}
```

사용처에서 렌더 분기가 `isDesktop`에 의존하면 `const mounted = useMounted();` 후 `mounted && isDesktop`처럼 게이트. (이벤트 핸들러/effect 내부의 `isDesktop` 사용은 SSR 영향 없으므로 그대로 둔다 — 렌더 출력에 영향을 주는 곳만 게이트.)

Run: `grep -rln "react-device-detect" src`
기대: 사용처 목록. 각 파일에서 **렌더 JSX 분기**에 isDesktop/isMobile이 쓰이는지 확인하고, 쓰이는 곳만 게이트.

- [ ] **Step 4: 빌드 재검증**

Run: `pnpm build`
기대: 타입체크 + prerender 통과(window/navigator 크래시 0). 빌드 성공 메시지.

- [ ] **Step 5: 커밋**

```bash
git add -A
git commit -m "fix: SSR window 가드 버그 2건 + react-device-detect 하이드레이션 게이트"
```

---

## Task 9: 자산 경로 수정 (비디오/SCSS/icon-svg/SVGR)

**Files:**
- Modify: `src/components/main/main.tsx`, `src/style/_path.scss`, `src/components/iconSlider/iconSlider.tsx`, `src/views/skillDetail/skillDetail.tsx`, `src/components/header/header.tsx`(SVGR), `app/layout.tsx`(swiper css)

- [ ] **Step 1: main.tsx 비디오 경로**

`src/components/main/main.tsx:21`의 `const src640 = new URL('../../static/videos/video640.mp4', import.meta.url);` → `const src640 = '/videos/video640.mp4';`. (VideoToCanvas에 문자열 src 전달. `new URL`/`import.meta.url` 제거.)

- [ ] **Step 2: SCSS $img-url 웹루트화**

`src/style/_path.scss`(main: `$img-url: '../../static/images/';`) → `$img-url: '/images/';`. (이동된 public/images 참조. `url(#{$img-url}...)`가 웹루트에서 해석됨.)

Run: `grep -rn "static/images\|static/videos\|static/fonts" src`
기대: 출력 없음(모든 static 경로 참조 제거). 남으면 해당 SCSS/TS에서 `/images|/videos|/fonts` 웹루트로 교체.

- [ ] **Step 3: icon-svg.json import 경로**

`src/components/iconSlider/iconSlider.tsx`와 `src/views/skillDetail/skillDetail.tsx`의 `import ... from '../../../public/images/icon-svg.json'` → `import iconSvg from '@/data/icon-svg.json';`(Task 2에서 src/data로 이동함). `resolveJsonModule:true`로 정상 import.

Run: `grep -rn "public/images/icon-svg" src`
기대: 출력 없음.

- [ ] **Step 4: SVGR 동작 확인 (header의 3개 svg)**

`src/components/header/header.tsx`는 `*.svg`를 React 컴포넌트로 import(main: `'...svg?react'`). Next에선 `?react` 쿼리가 없으므로 `import HeaderLogo from '@/.../logo.svg';` 형태로 바꾸고 Task 1의 webpack SVGR 규칙으로 컴포넌트화. main header의 import 3개(CloseIcon/HeaderLogo/MenuIcon) 경로에서 `?react` 제거.

Run: `pnpm build`
기대: SVGR 규칙으로 svg 컴포넌트 import 성공. 만약 Turbopack에서 webpack 규칙이 무시/경고면:
- `next.config.ts`를 turbopack 규칙으로 전환:
```ts
turbopack: {
  rules: { '*.svg': { loaders: ['@svgr/webpack'], as: '*.js' } },
},
```
또는 빌드를 `next build --webpack`으로. 동작하는 쪽으로 확정하고 next.config 정리.

- [ ] **Step 5: swiper 모듈 CSS 보강**

Run: `grep -rn "from 'swiper/modules'\|swiper/css" src`
기대: 슬라이더가 쓰는 모듈(예: Pagination/Navigation/Autoplay) 확인. 사용 모듈에 대응하는 CSS를 `app/layout.tsx`에 추가(예: `import 'swiper/css/pagination';`). 기본 `swiper/css`는 이미 import됨.

- [ ] **Step 6: 빌드 + 커밋**

Run: `pnpm build`
기대: 성공.

```bash
git add -A
git commit -m "fix: 자산 경로(비디오/SCSS/icon-svg) 웹루트화 + SVGR/swiper CSS 설정"
```

---

## Task 10: dev 서버 + 브라우저 QA (5 라우트)

**검증 도구:** chrome-devtools MCP(+ next-devtools). "데브툴" 워크플로로 dev 서버와 브라우저를 함께 띄운다.

- [ ] **Step 1: dev 서버 기동**

Run(백그라운드): `pnpm dev`
기대: `Local: http://localhost:3000` (포트 다르면 그 값 사용). 컴파일 에러 0.

- [ ] **Step 2: next-devtools init + 라우트 구조 확인**

next-devtools `init` 후 라우트 트리에 `/`, `/about`, `/skill/[list]`, `/footprint`, 그리고 not-found가 잡히는지 확인. dev 서버 로그에 빌드/런타임 에러 없는지 확인.

- [ ] **Step 3: 각 라우트 브라우저 실측**

chrome-devtools로 다음 URL 진입 후 각각 콘솔 에러/네트워크 404를 실측, 스크린샷 보관:
- `http://localhost:3000/` — 메인(비디오/캔버스, GSAP 인트로, 커서)
- `http://localhost:3000/about`
- `http://localhost:3000/skill/lib` — 딥링크(파라미터 유도) 동작 확인
- `http://localhost:3000/footprint`
- `http://localhost:3000/존재하지않는경로` — not-found 렌더

각 페이지 검증 항목:
- 콘솔 에러 0(특히 hydration mismatch 경고 0).
- 네트워크 404 0(이미지/폰트/비디오/icon-svg).
- 커서 추적·호버 텍스트 동작, GSAP/스크롤 애니메이션 동작, swiper 슬라이더 동작.
- 헤더 내비게이션 클릭 시 페이지 전환(스크린 커버 애니메이션 포함) 동작.

- [ ] **Step 4: 발견 이슈 수정 루프**

각 이슈는 근본 원인 파악 후 해당 파일 수정 → dev HMR로 재확인. (자산 404 → 경로, hydration 경고 → 게이트 누락, 애니메이션 미동작 → 'use client' 경계/registerPlugin 가드 재점검.) 수정마다 원자적 커밋.

- [ ] **Step 5: 빌드 산출물 최종 확인**

Run: `pnpm build && pnpm start`
기대: 프로덕션 빌드 성공 + `pnpm start`로 5라우트 정상(Step 3 항목 재확인 1회).

- [ ] **Step 6: 커밋**

```bash
git add -A
git commit -m "test: 5개 라우트 브라우저 QA 통과 + 발견 이슈 수정"
```

---

## Task 11: Vercel 배포 설정

**Files:** (대부분 zero-config; 필요 시 `.vercelignore`만)

- [ ] **Step 1: Vercel 인식 확인**

Next App Router는 Vercel zero-config. 별도 `vercel.json` 불필요(특수 설정 없을 시). `package.json`의 `build: next build`, `dev`/`start` 스크립트가 표준인지 확인.

- [ ] **Step 2: 배포(사용자 계정 필요)**

옵션 A(권장, 사용자 수행): GitHub에 `feat/next-app-router` 푸시 → Vercel 대시보드에서 repo import → 프레임워크 자동감지(Next.js) → Deploy.
옵션 B(CLI): `pnpm dlx vercel` (사용자 로그인 토큰 필요).

기대: Vercel 빌드 로그 성공, 프리뷰 URL 발급.

- [ ] **Step 3: 프리뷰 URL 검증**

프리뷰 URL에서 Task 10 Step 3의 5라우트 항목을 재확인(콘솔/네트워크/애니메이션). 자산 경로(웹루트 `/images` 등)가 프로덕션에서도 정상인지 확인.

(이 태스크는 사용자 계정/연결이 필요하므로, 자동화 불가 부분은 사용자에게 핸드오프하고 결과를 함께 확인.)

---

## Task 12: main 반영 (PR)

- [ ] **Step 1: 최종 정합 점검**

Run: `pnpm build && pnpm lint`
기대: 빌드 성공, Biome 통과(또는 잔여 경고 검토). `grep -rn "react-router\|vite\|src/static\|src/pages\|i18next" src app` → 마이그레이션 잔재 0(데이터 JSON 내 'Redux' 등 콘텐츠 문자열 제외).

- [ ] **Step 2: 브랜치 푸시 + PR 생성**

```bash
git push -u origin feat/next-app-router
gh pr create --base main --title "Next.js 16 App Router 마이그레이션 (pnpm + Vercel)" --body "<요약: 설계 spec 링크, 변환 4축, 검증 결과(빌드/5라우트 QA/Vercel 프리뷰)>"
```

- [ ] **Step 3: 리뷰 후 머지**

CI(있으면) 통과 + 사용자 리뷰 후 머지. (배포가 Netlify→Vercel로 바뀌므로 main 머지 후 기존 Netlify 사이트 처리도 사용자와 확인.)

---

## Self-Review (작성자 체크 결과)

**1. Spec coverage:** spec §4 A~G 전 항목이 태스크에 매핑됨 — A→Task1/2, B→Task5, C→Task6/7, D→Task4/6, E→Task8, F→Task9, G→Task11. §5 단계별 검증→Task7/8/10. §6 위험(React Compiler×GSAP, smooth-scrollbar, 하이드레이션, 자산404, stale 금지)→Task8/10 검증 게이트 + 본 계획 전반에서 main 코드 보존 원칙. 갭 없음.

**2. Placeholder scan:** 신규 파일은 전부 실제 코드 제시. 기계적 수정은 파일+규칙+스니펫+grep 검증으로 구체화. "투자 검증" 성격 스텝(swiper 모듈 CSS, SVGR turbopack 분기, main-content 래퍼)은 모두 **구체 grep/명령 + 분기 처리**를 동반 — 모호한 placeholder 아님.

**3. Type consistency:** `useCursorHandlers`가 반환하는 `{onHover,onClick,onLeave,pageTimer}`를 AppShell/뷰에서 동일하게 구조분해. Header/Contact는 main의 `_onHover/_onClick/_onLeave/pageTimer` prop명 유지(AppShell이 매핑 전달). useStore 액션명은 Task4 Step2에서 실제 존재 확인 게이트.

**미해결로 남겨 실행 중 확정할 1건:** index.html의 `<main id="root" class="main-content">` 래퍼가 SCSS/smooth-scrollbar에서 참조되는지 → Task 10 Step 4에서 `grep -rn "main-content\|#root" src` 후 스타일/스크롤 타깃이면 AppShell의 구조에 `<main className="main-content">` 래퍼를 복원한다. (레이아웃/스크롤 영향 가능성이 있어 QA 단계에서 실측 확정.)
