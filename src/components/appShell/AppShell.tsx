'use client';

import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { usePathname, useRouter } from 'next/navigation';
import { type ReactNode, useEffect } from 'react';

import Contact from '@/components/contact';
import CustomCursor from '@/components/customCursor';
import FilmEffect from '@/components/filmEffect';
import Header from '@/components/header';
import ScrollValueAnimation from '@/components/scrollValueAnimation';
import SmoothScroll from '@/components/smoothScroll';
import SwitchAnimation from '@/components/switchAnimation';
import useCursorHandlers from '@/hooks/useCursorHandlers';
import useStore from '@/store/useStore';

// SSR(서버 렌더) 단계에서 window 접근을 피하기 위해 가드.
if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger);
}

// 모든 라우트에 걸쳐 유지되는 영속 셸. 기존 App.tsx를 대체한다.
const AppShell = ({ children }: { children: ReactNode }) => {
  const { onHover, onClick, onLeave, pageTimer } = useCursorHandlers();

  // 라우트 변경 시 열려 있던 GNB/Contact 오버레이를 닫는다.
  // 영속 셸이라 페이지만 교체되므로, 뒤로/앞으로·로고 이동 시 오버레이 상태가 다음 화면으로 새는 것을 방지.
  const pathname = usePathname();
  const closeGnb = useStore((s) => s.changeGnbStateFalse);
  const closeContact = useStore((s) => s.changeContactStateFalse);
  // biome-ignore lint/correctness/useExhaustiveDependencies: pathname은 effect 본문에서 참조하지 않지만 라우트 변경을 감지하는 트리거 의존성이다.
  useEffect(() => {
    closeGnb();
    closeContact();
  }, [pathname, closeGnb, closeContact]);

  // 주요 라우트를 마운트 후 프리페치해 첫 내비게이션 체감 속도를 높인다.
  const router = useRouter();
  useEffect(() => {
    for (const route of [
      '/about',
      '/footprint',
      '/skill/language',
      '/skill/lib',
      '/skill/tool',
      '/skill/interest',
    ]) {
      router.prefetch(route);
    }
  }, [router]);

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
