import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
  reactStrictMode: true,
  reactCompiler: true,
  // Vercel(CI) Turbopack는 sass @import deprecation 경고를 빌드 에러로 취급해 배포가 실패한다.
  // @use 전면 전환 대신 해당 deprecation을 silence (스타일 동작 변화 없음).
  sassOptions: {
    silenceDeprecations: ['import'],
    quietDeps: true,
  },
  // vite-plugin-svgr의 `*.svg?react` 대체: Turbopack에서 svg를 React 컴포넌트로 임포트.
  // (URL로 쓰는 이미지는 모두 public 경로 문자열로 전환했으므로 모든 svg import는 컴포넌트)
  turbopack: {
    rules: {
      '*.svg': {
        loaders: ['@svgr/webpack'],
        as: '*.js',
      },
    },
  },
};

export default nextConfig;
