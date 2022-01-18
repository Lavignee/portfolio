import React, { useRef, useState, useEffect, useCallback } from 'react';
import { useLocation } from 'react-router-dom';
import { useDispatch, useSelector, shallowEqual } from 'react-redux';
import {
  changeGsapState,
  smoothTop,
  makeSmoothScroll,
  changeSmoothScrollState,
  changeSmoothScrollStateFast,
  changeContactStateFalse,
  changeGnbState,
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

const SmoothScroll = ({ children }) => {
  // react-router-dom으로 url 확인 및 화면 이동 명령어 정의.
  let location = useLocation();

  const dispatch = useDispatch();
  const gsapReady = useCallback(
    (value) => dispatch(changeGsapState(value)),
    [dispatch]
  );
  const makeScroll = useCallback(
    (value) => dispatch(makeSmoothScroll(value)),
    [dispatch]
  );
  const checkScroll = useCallback(
    (value) => dispatch(checkScrollValue(value)),
    [dispatch]
  );
  const checkLimit = useCallback(
    (value) => dispatch(checkScrollLimit(value)),
    [dispatch]
  );
  const onSmoothTop = useCallback(
    (value) => dispatch(smoothTop(value)),
    [dispatch]
  );
  const changecrollState = useCallback(
    (value) => dispatch(changeSmoothScrollState(value)),
    [dispatch]
  );
  const changecrollStateFast = useCallback(
    (value) => dispatch(changeSmoothScrollStateFast(value)),
    [dispatch]
  );
  const onChangeContactStateFalse = useCallback(
    (value) => dispatch(changeContactStateFalse(value)),
    [dispatch]
  );
  const onChangeGnbState = useCallback(
    () => dispatch(changeGnbState(false)),
    [dispatch]
  );
  const [
    currentSmoothTopState,
    currentScrollState,
    currentScrollStateFast,
    makeScrollState,
  ] = useSelector(
    (state: RootState) => [
      state.CommonValue.currentSmoothTopState,
      state.CommonValue.currentScrollState,
      state.CommonValue.currentScrollStateFast,
      state.CommonValue.makeScrollState,
    ],
    shallowEqual
  );

  const smoothScroller = useRef();
  const [currentScroller, setCurrentScroller] = useState(null);

  const makeSmoothScrollbar = useCallback(() => {
    const scroller = smoothScroller.current;
    let bodyScrollBar;

    if (isDesktop) {
      bodyScrollBar = Scrollbar.init(scroller, {
        damping: 0.03,
        alwaysShowTracks: true,
      });
    } else {
      bodyScrollBar = Scrollbar.init(scroller, {
        damping: 0.1,
        alwaysShowTracks: true,
      });
    }

    bodyScrollBar.addListener(() => checkScroll(bodyScrollBar.scrollTop));
    bodyScrollBar.addListener(() => checkLimit(bodyScrollBar.limit.y));
    ScrollTrigger.scrollerProxy(scroller, {
      scrollTop(value) {
        if (arguments.length) {
          bodyScrollBar.scrollTop = value;
        }
        return bodyScrollBar.scrollTop;
      },
    });
    ScrollTrigger.defaults({ scroller: scroller });

    bodyScrollBar.addListener(ScrollTrigger.update);
    checkScroll(bodyScrollBar.scrollTop);
    checkLimit(bodyScrollBar.limit.y);
    gsapReady(true);
    setCurrentScroller(bodyScrollBar);
  }, [checkLimit, checkScroll, gsapReady]);

  useEffect(() => {
    makeSmoothScrollbar();
  }, [makeSmoothScrollbar]);

  useEffect(() => {
    if (makeScrollState) {
      makeSmoothScrollbar();
      currentScroller.setPosition(0, 0);
      makeScroll(false);
    }

    onChangeContactStateFalse(false);
  }, [
    currentScroller,
    makeScroll,
    makeScrollState,
    makeSmoothScrollbar,
    onChangeContactStateFalse,
    onChangeGnbState,
  ]);

  useEffect(() => {
    if (currentScrollState) {
      const destroyScrollTimer = setTimeout(() => {
        Scrollbar.destroyAll();
        gsapReady(false);
        changecrollState(false);
      }, 600);
      return () => clearTimeout(destroyScrollTimer);
    }
  }, [changecrollState, currentScrollState, gsapReady]);

  useEffect(() => {
    if (currentScrollStateFast) {
      Scrollbar.destroyAll();
      gsapReady(false);
      changecrollStateFast(false);
    }
  }, [changecrollStateFast, currentScrollStateFast, gsapReady]);

  useEffect(() => {
    const scrollToTop = setTimeout(() => {
      if (currentScroller) {
        currentScroller.scrollTo(0, 0, 600);
      }
    }, 10);
    onSmoothTop(false);
    return () => clearTimeout(scrollToTop);
  }, [currentScroller, currentSmoothTopState, onSmoothTop]);

  return (
    <div className={`smooth-scroll-frame${location.pathname === '/footprint' ? ' opacity-none' : ''}`} ref={smoothScroller}>
      <div>{children}</div>
    </div>
  );
};

export default SmoothScroll;
