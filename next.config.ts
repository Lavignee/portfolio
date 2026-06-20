import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
  reactStrictMode: true,
  reactCompiler: true,
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
