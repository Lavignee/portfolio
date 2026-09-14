# Portfolio

개인 포트폴리오 웹사이트. 커스텀 커서, 스무스 스크롤, 스크롤 기반 애니메이션, 영상→캔버스 변환 등 인터랙션 중심으로 구성되어 있습니다.

## 기술 스택

- **프레임워크**: Next.js 16 (App Router) + React 19
- **언어**: TypeScript 5
- **상태 관리**: Zustand
- **애니메이션**: GSAP (ScrollTrigger), smooth-scrollbar, Swiper 12
- **스타일**: Sass
- **린트/포맷**: Biome
- **배포**: Vercel (`main` 푸시 시 자동 배포)

## 시작하기

```bash
# 의존성 설치
pnpm install

# 개발 서버 실행 (http://localhost:3000)
pnpm dev

# 프로덕션 빌드
pnpm build
```

> Node 버전은 `.node-version`(20.19.0)을 따릅니다.

## 스크립트

| 명령 | 설명 |
| --- | --- |
| `pnpm dev` | Next.js 개발 서버 실행 |
| `pnpm build` | 프로덕션 빌드 |
| `pnpm start` | 빌드 결과 실행 |
| `pnpm lint` | Biome로 린트 + 포맷 검사 |
| `pnpm lint:fix` | Biome 자동 수정 적용 |
| `pnpm format` | Biome 포맷터로 코드 포맷 |

## 프로젝트 구조

```
.
├── app/                  # App Router 라우트 (/, /about, /footprint, /skill/[list])
│   ├── layout.tsx        # 루트 레이아웃 (앱 셸)
│   ├── sitemap.ts        # 사이트맵
│   └── robots.ts         # robots.txt
├── next.config.ts        # Next 설정 — Turbopack SVGR(svg를 컴포넌트로), Sass deprecation silence
├── biome.json            # Biome 설정
├── public/               # 정적 파일 (폰트·이미지·favicon)
└── src/
    ├── components/       # 재사용 컴포넌트 (header, customCursor, smoothScroll 등)
    ├── compositions/     # 입력 요소 등 조합 컴포넌트
    ├── views/            # 페이지 단위 뷰 (home, aboutDetail, footprintDetail, skillDetail)
    ├── data/             # 화면에 표시되는 콘텐츠 JSON
    ├── store/            # Zustand 전역 스토어
    ├── hooks/            # 커서·마운트 등 공용 훅
    ├── style/            # 전역 Sass (reset, typography 등)
    ├── assets/           # SVG 아이콘 (SVGR로 컴포넌트 임포트)
    ├── types/            # 타입 선언
    └── utils/            # 디바이스·윈도우 유틸
```

## 콘텐츠 수정

경력·프로젝트·스킬·소개 문구는 `src/data/` 아래 JSON만 고치면 됩니다.

| 파일 | 내용 |
| --- | --- |
| `dataFootprint/careerFootprint.json` | 경력 |
| `dataFootprint/projectFootprint.json` | 프로젝트 |
| `dataSkill/*.json` | 스킬 (언어·라이브러리·도구·관심) |
| `dataAbout/*.json` | 소개·해시태그 |

> 스킬 JSON의 `number`는 목록 스크롤 위치 계산에 쓰이므로 각 목록 안에서 1부터 연속이어야 합니다.

## 라이선스

[MIT](./LICENSE)
