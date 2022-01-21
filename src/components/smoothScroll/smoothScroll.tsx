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
  const gsapReady = React.useCallback((value) => dispatch(changeGsapState(value)), [dispatch]);
  const makeScroll = React.useCallback((value) => dispatch(makeSmoothScroll(value)), [dispatch]);
  const checkScroll = React.useCallback((value) => dispatch(checkScrollValue(value)), [dispatch]);
  const checkLimit = React.useCallback((value) => dispatch(checkScrollLimit(value)), [dispatch]);
  const onSmoothTop = React.useCallback((value) => dispatch(smoothTop(value)), [dispatch]);

  // redux useSelector 정의.
  const [currentSmoothTopState, makeScrollState] = useSelector((state: RootState) => [state.CommonValue.currentSmoothTopState, state.CommonValue.makeScrollState], shallowEqual);

  const smoothScroller = React.useRef<any>(null);
  const smoothScrollerTarget = React.useRef<any>(null);
  const [currentScroller, setCurrentScroller] = React.useState<any>(null);

  // 스무스 스크롤 생성
  const makeSmoothScrollbar = React.useCallback(() => {
    let scrollDamping;
    if (isDesktop) {
      scrollDamping = 0.03;
    } else {
      scrollDamping = 0.1;
    }
    smoothScrollerTarget.current = Scrollbar.init(smoothScroller.current, {
      damping: scrollDamping,
      alwaysShowTracks: true,
    });

    // 스크롤 퍼센트 출력을 위해 max 및 현재 scroll 저장.
    smoothScrollerTarget.current.addListener(() => checkScroll(smoothScrollerTarget.current.scrollTop));
    smoothScrollerTarget.current.addListener(() => checkLimit(smoothScrollerTarget.current.limit.y));

    //스크롤 트리거와 연계.
    ScrollTrigger.scrollerProxy(smoothScroller.current, {
      scrollTop(value) {
        if (arguments.length) {
          smoothScrollerTarget.current.scrollTop = value;
        }
        return smoothScrollerTarget.current.scrollTop;
      },
    });
    ScrollTrigger.defaults({ scroller: smoothScroller.current });
    smoothScrollerTarget.current.addListener(ScrollTrigger.update);

    gsapReady(true);
    setCurrentScroller(smoothScrollerTarget.current);
  }, [checkLimit, checkScroll, gsapReady]);

  // 컨텐츠 DOM이 모두 렌더 된 후 스크롤 생성 동작.
  React.useEffect(() => {
    makeSmoothScrollbar();
    if (makeScrollState) {
      currentScroller.setPosition(0, 0);
      makeScroll(false);
    }

    // 초기화 시, 퍼센트 및 스크롤 트리거 리스너 삭제.
    return () => {
      smoothScrollerTarget.current.removeListener(() => checkScroll(smoothScrollerTarget.current.scrollTop));
      smoothScrollerTarget.current.removeListener(() => checkLimit(smoothScrollerTarget.current.limit.y));
      smoothScrollerTarget.current.removeListener(ScrollTrigger.update);
    }
  }, [checkLimit, checkScroll, currentScroller, makeScroll, makeScrollState, makeSmoothScrollbar]);

  React.useEffect(() => {
    if (currentScroller && smoothScrollerTarget.current.scrollTop !== 0) {
      currentScroller.scrollTo(0, 0, 600);
    }
    onSmoothTop(false);
  }, [currentScroller, currentSmoothTopState, onSmoothTop]);

  return (
    <div className={`smooth-scroll-frame${location.pathname === '/footprint' ? ' opacity-none' : ''}`} ref={smoothScroller}>
      <div>{children}</div>
    </div>
  );
};

export default SmoothScroll;
