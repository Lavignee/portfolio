// vite-plugin-svgr/client 참조 대체: svg를 React 컴포넌트로 선언.
declare module '*.svg' {
  import type { FC, SVGProps } from 'react';

  const content: FC<SVGProps<SVGSVGElement>>;
  export default content;
}
