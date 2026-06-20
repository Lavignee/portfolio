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
const AppShell = ({ children }: { children: ReactNode }) => {
  const { onHover, onClick, onLeave, pageTimer } = useCursorHandlers();

  return (
    // 커서 돔.
    <CustomCursor>
      {/* 헤더 */}
      <Header _onHover={onHover} _onClick={onClick} _onLeave={onLeave} pageTimer={pageTimer} />
      {/* 스크롤 영역 + 라우트 컨텐츠 */}
      <SmoothScroll>{children}</SmoothScroll>
      {/* 스크롤 퍼센트 */}
      <ScrollValueAnimation />
      {/* 필름 그레인 효과 */}
      <FilmEffect />
      {/* 컨텍트 컨텐츠 */}
      <Contact _onHover={onHover} _onLeave={onLeave} />
      {/* 스크린 커버 */}
      <SwitchAnimation />
    </CustomCursor>
  );
};

export default AppShell;
