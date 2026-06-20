import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import React from 'react';
import { isDesktop } from 'react-device-detect';
import { usePathname } from 'next/navigation';
import { useShallow } from 'zustand/react/shallow';

import './smoothScroll.scss';

import Scrollbar from 'smooth-scrollbar';
import useStore from '../../store/useStore';

gsap.registerPlugin(ScrollTrigger);

// Props로 받는 이벤트들에 대한 interface 정의.
interface SmoothScrollProps {
  children?: React.ReactNode;
}

const SmoothScroll = ({ children }: SmoothScrollProps) => {
  // next/navigation으로 현재 경로 확인.
  const pathname = usePathname();

  // 전역 스토어 액션 (zustand 액션은 참조가 안정적이라 의존성 배열에 안전하게 사용 가능).
  const gsapReady = useStore((s) => s.changeGsapState);
  const makeScroll = useStore((s) => s.makeSmoothScroll);
  const checkScroll = useStore((s) => s.checkScrollValue);
  const checkLimit = useStore((s) => s.checkScrollLimit);
  const onSmoothTop = useStore((s) => s.smoothTop);

  // 전역 스토어 구독.
  const [currentSmoothTopState, makeScrollState] = useStore(
    useShallow((s) => [s.currentSmoothTopState, s.makeScrollState])
  );

  const smoothScroller = React.useRef<HTMLDivElement>(null);
  const smoothScrollTarget = React.useRef<Scrollbar | null>(null);
  const [currentScroller, setCurrentScroller] = React.useState<Scrollbar | null>(null);

  // 마운트 시 스무스 스크롤을 1회만 생성하고, 언마운트 시 리스너 제거 및 인스턴스 파기.
  React.useEffect(() => {
    if (!smoothScroller.current) return;

    const scrollbar = Scrollbar.init(smoothScroller.current, {
      damping: 0.03,
      renderByPixels: isDesktop,
      continuousScrolling: isDesktop,
      alwaysShowTracks: true,
    });
    smoothScrollTarget.current = scrollbar;

    // 스크롤 퍼센트 출력을 위해 현재 scroll 및 max 값 저장.
    // add/remove에 동일한 함수 참조를 사용해야 정상적으로 제거된다.
    const onScrollUpdate = () => {
      checkScroll(scrollbar.scrollTop);
      checkLimit(scrollbar.limit.y);
    };
    scrollbar.addListener(onScrollUpdate);

    // 스크롤 트리거와 연계.
    ScrollTrigger.scrollerProxy(smoothScroller.current, {
      scrollTop(value) {
        if (arguments.length) {
          scrollbar.scrollTop = value as number;
        }
        return scrollbar.scrollTop;
      },
    });
    ScrollTrigger.defaults({ scroller: smoothScroller.current });
    scrollbar.addListener(ScrollTrigger.update);

    gsapReady(true);
    setCurrentScroller(scrollbar);

    return () => {
      scrollbar.removeListener(onScrollUpdate);
      scrollbar.removeListener(ScrollTrigger.update);
      scrollbar.destroy();
      smoothScrollTarget.current = null;
    };
  }, [checkLimit, checkScroll, gsapReady]);

  // 페이지 전환 등으로 스크롤 재설정 요청(makeScrollState) 시 위치만 초기화.
  React.useEffect(() => {
    if (currentScroller && makeScrollState) {
      currentScroller.setPosition(0, 0);
      makeScroll(false);
    }
  }, [currentScroller, makeScrollState, makeScroll]);

  // 스크롤러가 있고, currentSmoothTopState이 true로 들어오면 스크롤 위치 초기화.
  React.useEffect(() => {
    if (currentScroller && currentSmoothTopState) {
      currentScroller.scrollTo(0, 0, 600);
      const reset = setTimeout(() => onSmoothTop(false), 600);
      return () => clearTimeout(reset);
    }
  }, [currentScroller, currentSmoothTopState, onSmoothTop]);

  return (
    <div
      className={`smooth-scroll-frame${pathname === '/footprint' ? ' opacity-none' : ''}`}
      ref={smoothScroller}
    >
      <div>{children}</div>
    </div>
  );
};

export default SmoothScroll;
