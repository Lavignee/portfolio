import React from 'react';
import { useRouter } from 'next/router';
import { useCommonValueStore } from '@/stores/commonValue';
import { isDesktop } from 'react-device-detect';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

// import './smoothScroll.scss';

import Scrollbar from 'smooth-scrollbar';

if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger);
}

// Props로 받는 이벤트들에 대한 interface 정의.
interface SmoothScrollProps {
  children?: React.ReactChild | React.ReactChild[];
}

const SmoothScroll = ({ children }: SmoothScrollProps) => {
  const router = useRouter();

  const setGsapState = useCommonValueStore((s) => s.setGsapState);
  const setScrollValue = useCommonValueStore((s) => s.setScrollValue);
  const setScrollLimit = useCommonValueStore((s) => s.setScrollLimit);
  const setMakeScrollState = useCommonValueStore((s) => s.setMakeScrollState);
  const setSmoothTop = useCommonValueStore((s) => s.setSmoothTop);

  const gsapReady = React.useCallback(
    (value: boolean) => setGsapState(value),
    [setGsapState]
  );
  const makeScroll = React.useCallback(
    (value: boolean) => setMakeScrollState(value),
    [setMakeScrollState]
  );

  const onSmoothTop = React.useCallback(
    (value: boolean) => setSmoothTop(value),
    [setSmoothTop]
  );

  const currentSmoothTopState = useCommonValueStore(
    (s) => s.currentSmoothTopState
  );
  const makeScrollState = useCommonValueStore((s) => s.makeScrollState);

  const smoothScroller = React.useRef<any>(null);
  const smoothScrollTarget = React.useRef<any>(null);
  const [currentScroller, setCurrentScroller] = React.useState<any>(null);

  // 스무스 스크롤 생성
  // 스무스 스크롤 생성
  const makeSmoothScrollbar = React.useCallback(() => {
    smoothScrollTarget.current = Scrollbar.init(smoothScroller.current, {
      damping: isDesktop ? 0.03 : 0.03,
      renderByPixels: isDesktop ? true : false,
      continuousScrolling: isDesktop ? true : false,
      alwaysShowTracks: true,
    });

    const target = smoothScrollTarget.current;

    // 스크롤 퍼센트 출력을 위해 max 및 현재 scroll 저장.
    target.addListener(() => {
      const scrollTop = target.scrollTop;
      setScrollValue(scrollTop);
    });

    target.addListener(() => {
      const limitY = target.limit.y;
      setScrollLimit(limitY);
    });

    //스크롤 트리거와 연계.
    ScrollTrigger.scrollerProxy(smoothScroller.current, {
      scrollTop(value) {
        if (arguments.length) {
          target.scrollTop = value;
        }
        return target.scrollTop;
      },
    });
    ScrollTrigger.defaults({ scroller: smoothScroller.current });
    target.addListener(ScrollTrigger.update);

    gsapReady(true);
    setCurrentScroller(target);
  }, [gsapReady, setScrollValue, setScrollLimit]);

  // 컨텐츠 DOM이 모두 렌더 된 후 스크롤 생성 동작.
  React.useEffect(() => {
    makeSmoothScrollbar();
    if (makeScrollState) {
      currentScroller.setPosition(0, 0);
      makeScroll(false);
    }

    // 초기화 시, 퍼센트 및 스크롤 트리거 리스너 삭제.
    return () => {
      if (smoothScrollTarget.current) {
        smoothScrollTarget.current.removeListener(ScrollTrigger.update);
        Scrollbar.destroy(smoothScrollTarget.current);
      }
    };
  }, [
    currentScroller,
    gsapReady,
    makeScroll,
    makeScrollState,
    makeSmoothScrollbar,
  ]);

  // 스크롤러가 있고, currentSmoothTopState이 true로 들어오면 스크롤 위치 초기화.
  React.useEffect(() => {
    if (currentScroller && currentSmoothTopState) {
      currentScroller.scrollTo(0, 0, 600);
      const reset = setTimeout(() => {
        onSmoothTop(false);
        clearTimeout(reset);
      }, 600);
    }
  }, [currentScroller, currentSmoothTopState, onSmoothTop]);

  return (
    <div
      className={`smooth-scroll-frame${
        router.pathname === '/footprint' ? ' opacity-none' : ''
      }`}
      ref={smoothScroller}
    >
      <div>{children}</div>
    </div>
  );
};

export default SmoothScroll;
