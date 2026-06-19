# Portfolio

개인 포트폴리오 웹사이트. 커스텀 커서, 스무스 스크롤, 스크롤 기반 애니메이션, 영상→캔버스 변환 등 인터랙션 중심으로 구성되어 있습니다.

## 기술 스택

- **UI**: React 19 + TypeScript 5
- **번들러**: Vite 8 (Rolldown)
- **상태 관리**: Zustand
- **라우팅**: react-router-dom v7
- **애니메이션**: GSAP (ScrollTrigger), smooth-scrollbar, Swiper 12
- **스타일**: Sass
- **린트/포맷**: Biome
- **배포**: Netlify

## 시작하기

```bash
# 의존성 설치
yarn install

# 개발 서버 실행 (http://localhost:1234)
yarn start

# 프로덕션 빌드 (dist/ 생성)
yarn build
```

> Node 버전은 `.node-version`(20.19.0)을 따릅니다.

## 스크립트

| 명령 | 설명 |
| --- | --- |
| `yarn start` | Vite 개발 서버 실행 |
| `yarn build` | 타입 체크(`tsc`) 후 Vite 프로덕션 빌드 (`dist/`) |
| `yarn preview` | 빌드 결과 로컬 미리보기 |
| `yarn lint` | Biome로 린트 + 포맷 검사 |
| `yarn lint:fix` | Biome 자동 수정 적용 |
| `yarn format` | Biome 포맷터로 코드 포맷 |

## 프로젝트 구조

```
.
├── index.html            # 진입 HTML
├── index.tsx             # React 진입점 (createRoot, Router)
├── i18n.tsx              # i18next 초기화
├── vite.config.ts        # Vite 설정
├── postcss.config.js     # PostCSS (autoprefixer)
├── biome.json            # Biome 설정
├── public/               # 정적 파일 (빌드 시 dist 루트로 복사, 예: _redirects)
├── src/
│   ├── App.tsx           # 루트 컴포넌트 (전역 커서/전환 이벤트 정의)
│   ├── components/       # 재사용 컴포넌트 (header, customCursor, smoothScroll 등)
│   ├── pages/            # 라우트 단위 페이지 (home, aboutDetail, skillDetail 등)
│   ├── store/            # Zustand 전역 스토어 (useStore)
│   ├── style/            # 전역 Sass (reset, typography 등)
│   └── static/           # 폰트/이미지/영상/언어 리소스
└── dist/                 # 빌드 산출물
```

## 라이선스

[MIT](./LICENSE)
