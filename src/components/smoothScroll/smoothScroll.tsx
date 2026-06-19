import React from 'react';
import { useLocation } from 'react-router-dom';
import { useDispatch, useSelector, shallowEqual } from 'react-redux';
import {
  changeGsapState,
  smoothTop,
  makeSmoothScroll,
  checkScrollValue,
  checkScrollLimit,
} from '../../Modules/commonValue';
import { isDesktop } from 'react-device-detect';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

import './smoothScroll.scss';

import Scrollbar from 'smooth-scrollbar';
import { RootState } from '../../Modules';

gsap.registerPlugin(ScrollTrigger);

// Props로 받는 이벤트들에 대한 interface 정의.
interface SmoothScrollProps {
  children?: | React.ReactChild | React.ReactChild[];
}

const SmoothScroll = ({ children }: SmoothScrollProps) => {
  // react-router-dom으로 url 확인 및 화면 이동 명령어 정의.
  let location = useLocation();

  // redux dispatch 정의.
  const dispatch = useDispatch();
  const gsapReady = React.useCallback((value: boolean) => dispatch(changeGsapState(value)), [dispatch]);
  const makeScroll = React.useCallback((value: boolean) => dispatch(makeSmoothScroll(value)), [dispatch]);
  const checkScroll = React.useCallback((value: number) => dispatch(checkScrollValue(value)), [dispatch]);
  const checkLimit = React.useCallback((value: number) => dispatch(checkScrollLimit(value)), [dispatch]);
  const onSmoothTop = React.useCallback((value: boolean) => dispatch(smoothTop(value)), [dispatch]);

  // redux useSelector 정의.
  const [currentSmoothTopState, makeScrollState] = useSelector((state: RootState) => [state.CommonValue.currentSmoothTopState, state.CommonValue.makeScrollState], shallowEqual);

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
    <div className={`smooth-scroll-frame${location.pathname === '/footprint' ? ' opacity-none' : ''}`} ref={smoothScroller}>
      <div>{children}</div>
    </div>
  );
};

export default SmoothScroll;
