# Portfolio

개인 포트폴리오 웹사이트. 커스텀 커서, 스무스 스크롤, 스크롤 기반 애니메이션, 영상→캔버스 변환, 다국어(한국어/영어) 등 인터랙션 중심으로 구성되어 있습니다.

## 기술 스택

- **UI**: React 19 + TypeScript
- **번들러**: Parcel 2
- **상태 관리**: Zustand
- **라우팅**: react-router-dom v6
- **애니메이션**: GSAP (ScrollTrigger), smooth-scrollbar, Swiper
- **다국어**: i18next + react-i18next
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

> Node 버전은 `.node-version`(18.16.0)을 따릅니다.

## 스크립트

| 명령 | 설명 |
| --- | --- |
| `yarn start` | Parcel 개발 서버 실행 |
| `yarn build` | 프로덕션 빌드 (`dist/`) |
| `yarn lint` | Biome로 린트 + 포맷 검사 |
| `yarn lint:fix` | Biome 자동 수정 적용 |
| `yarn format` | Biome 포맷터로 코드 포맷 |

## 프로젝트 구조

```
.
├── index.html            # 진입 HTML
├── index.tsx             # React 진입점 (Redux Provider, Router)
├── i18n.tsx              # i18next 초기화
├── biome.json            # Biome 설정
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
