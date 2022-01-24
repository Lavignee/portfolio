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
  const smoothScrollTarget = React.useRef<any>(null);
  const [currentScroller, setCurrentScroller] = React.useState<any>(null);

  // 스무스 스크롤 생성
  const makeSmoothScrollbar = React.useCallback(() => {
    let scrollDamping;
    if (isDesktop) {
      scrollDamping = 0.03;
    } else {
      scrollDamping = 0.1;
    }
    smoothScrollTarget.current = Scrollbar.init(smoothScroller.current, {
      damping: scrollDamping,
      alwaysShowTracks: true,
    });

    // 스크롤 퍼센트 출력을 위해 max 및 현재 scroll 저장.
    smoothScrollTarget.current.addListener(() => checkScroll(smoothScrollTarget.current.scrollTop));
    smoothScrollTarget.current.addListener(() => checkLimit(smoothScrollTarget.current.limit.y));

    //스크롤 트리거와 연계.
    ScrollTrigger.scrollerProxy(smoothScroller.current, {
      scrollTop(value) {
        if (arguments.length) {
          smoothScrollTarget.current.scrollTop = value;
        }
        return smoothScrollTarget.current.scrollTop;
      },
    });
    ScrollTrigger.defaults({ scroller: smoothScroller.current });
    smoothScrollTarget.current.addListener(ScrollTrigger.update);

    gsapReady(true);
    setCurrentScroller(smoothScrollTarget.current);
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
      smoothScrollTarget.current.removeListener(() => checkScroll(smoothScrollTarget.current.scrollTop));
      smoothScrollTarget.current.removeListener(() => checkLimit(smoothScrollTarget.current.limit.y));
      smoothScrollTarget.current.removeListener(ScrollTrigger.update);
    }
  }, [checkLimit, checkScroll, currentScroller, gsapReady, makeScroll, makeScrollState, makeSmoothScrollbar]);

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
    <div className={`smooth-scroll-frame${location.pathname === '/footprint' ? ' opacity-none' : ''}`} ref={smoothScroller}>
      <div>{children}</div>
    </div>
  );
};

export default SmoothScroll;
