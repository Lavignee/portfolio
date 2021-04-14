import React, { useRef, useState, useEffect } from 'react';
import './SmoothScrollComponent.scss';
import { useDispatch, useSelector, shallowEqual } from 'react-redux';
import { changeGsapState, smoothTop, makeSmoothScroll, changeSmoothScrollState, changeSmoothScrollStateFast, changeContactStateFalse, changeGnbState, checkScrollValue, checkScrollLimit } from '../../Modules/CommonValueModule';
import Scrollbar from 'smooth-scrollbar';
import { isDesktop } from 'react-device-detect';
import { gsap } from "gsap";
import { ScrollTrigger } from 'gsap/ScrollTrigger';
gsap.registerPlugin(ScrollTrigger);

const SmoothScrollComponent = ({ children }) => {
  const dispatch = useDispatch();
  const gsapReady = (value) => dispatch(changeGsapState(value));
  const makeScroll = (value) => dispatch(makeSmoothScroll(value));
  const checkScroll = (value) => dispatch(checkScrollValue(value));
  const checkLimit = (value) => dispatch(checkScrollLimit(value));
  const onSmoothTop = (value) => dispatch(smoothTop(value));
  const changecrollState = (value) => dispatch(changeSmoothScrollState(value));
  const changecrollStateFast = (value) => dispatch(changeSmoothScrollStateFast(value));
  const onChangeContactStateFalse = (value) => dispatch(changeContactStateFalse(value));
  const onChangeGnbState = () => dispatch(changeGnbState());
  const [currentSmoothTopState, currentScrollState, currentScrollStateFast, makeScrollState, currentGnbState] = useSelector(state => [state.CommonValueModule.currentSmoothTopState, state.CommonValueModule.currentScrollState, state.CommonValueModule.currentScrollStateFast, state.CommonValueModule.makeScrollState, state.CommonValueModule.currentGnbState], shallowEqual);

  const smoothScroller = useRef();
  const [currentScroller, setCurrentScroller] = useState();

  const makeSmoothScrollbar = () => {
    const scroller = smoothScroller.current;
    let bodyScrollBar;

    if (isDesktop) {
      bodyScrollBar = Scrollbar.init(scroller, { damping: 0.02, alwaysShowTracks: true });
    } else {
      bodyScrollBar = Scrollbar.init(scroller, { damping: 0.1, alwaysShowTracks: true });
    }

    // checkLimit(bodyScrollBar.limit.y);
    bodyScrollBar.addListener(() => checkScroll(bodyScrollBar.scrollTop))
    bodyScrollBar.addListener(() => checkLimit(bodyScrollBar.limit.y))
    ScrollTrigger.scrollerProxy(scroller, {
      scrollTop(value) {
        if (arguments.length) {
          bodyScrollBar.scrollTop = value;
        }
        return bodyScrollBar.scrollTop;
      }
    });
    ScrollTrigger.defaults({ scroller: scroller });

    bodyScrollBar.addListener(ScrollTrigger.update);
    gsapReady(true);
    setCurrentScroller(bodyScrollBar)
  }

  useEffect(() => {
    makeSmoothScrollbar();
  }, []);

  useEffect(() => {
    if (makeScrollState) {
      makeSmoothScrollbar();
      currentScroller.setPosition(0, 0)
      makeScroll(false);
    }

    onChangeContactStateFalse(false);
    if (currentGnbState) {
      onChangeGnbState();
    }
  }, [makeScrollState]);

  useEffect(() => {
    if (currentScrollState) {
      const destroyScrollTimer = setTimeout(() => {
        Scrollbar.destroyAll();
        gsapReady(false);
        changecrollState(false);
      }, 600);
      return () => clearTimeout(destroyScrollTimer);
    }
  }, [currentScrollState]);

  useEffect(() => {
    if (currentScrollStateFast) {
      Scrollbar.destroyAll();
      gsapReady(false);
      changecrollStateFast(false);
    }
  }, [currentScrollStateFast]);

  useEffect(() => {
    return () => {
      const scrollToTop = setTimeout(() => {
        if (currentScroller) {
          currentScroller.scrollTo(0, 0, 600)
        }
      }, 10);
      onSmoothTop(false);
      return () => clearTimeout(scrollToTop);
    }
  }, [currentSmoothTopState])

  return (
    < div className='smooth-scroll-frame' ref={smoothScroller} >
      <div>
        {children}
      </div>
    </div >
  );
}

export default SmoothScrollComponent;
