import React from 'react';
import 'regenerator-runtime/runtime';
import './style/index.scss';
import { useDispatch } from 'react-redux';
import {
  changeSwitchAnimation,
  changeButtonDelay,
  smoothTop,
  changeSmoothScrollState,
} from './modules/commonValue';
import {
  changeFirstClassName,
  changeSecondClassName,
  changeText,
} from './modules/cursor';
import { useNavigate } from 'react-router-dom';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import CustomCursor from './components/customCursor';
import Header from './components/header';
import SmoothScroll from './components/smoothScroll';
import ContentSwitcher from './components/contentSwitcher';
import Contact from './components/contact';
import SwitchAnimation from './components/switchAnimation';
// import ScrollValueAnimation from './components/scrollValueAnimation';
import FilmEffect from './components/filmEffect';
gsap.registerPlugin(ScrollTrigger);

const App = () => {
  const dispatch = useDispatch();
  const onSmoothTop = (value) => dispatch(smoothTop(value));
  const changecrollState = (value) => dispatch(changeSmoothScrollState(value));
  const cursorClass = (value) => dispatch(changeFirstClassName(value));
  const cursorSecondClass = (value) => dispatch(changeSecondClassName(value));
  const cursorText = (value) => dispatch(changeText(value));
  const screenCover = (value) => dispatch(changeSwitchAnimation(value));
  const onChangeButtonDelay = (value) => dispatch(changeButtonDelay(value));

  let navigate = useNavigate();

  const onHover = (hoverCursor, hoverText) => {
    cursorClass(hoverCursor);
    hoverText && cursorText(hoverText);
  };

  const onClick = (path, hoverText) => {
    onLeave(hoverText);
    onChangeButtonDelay(true);
    screenCover(true);
    changecrollState(true);
    screenCoverTimer();
    pageTimer(path, 1000);
  };

  const onLeave = (hoverText) => {
    cursorClass('');
    cursorSecondClass('');
    hoverText && cursorText(hoverText);
  };

  const screenCoverTimer = () => {
    const screenCoverAnimationTimer = setTimeout(() => {
      screenCover(false);
      onChangeButtonDelay(false);
    }, 2000);
    return () => clearTimeout(screenCoverAnimationTimer);
  };

  const pageTimer = (path, timer) => {
    const pageDetailTimer = setTimeout(() => {
      navigate(path);
    }, timer);
    return () => clearTimeout(pageDetailTimer);
  };

  return (
    <CustomCursor>
      <Header
        onHover={onHover}
        onClick={onClick}
        onLeave={onLeave}
        pageTimer={pageTimer}
        scrollTop={onSmoothTop}
      />
      <SmoothScroll>
        <ContentSwitcher
          onHover={onHover}
          onClick={onClick}
          onLeave={onLeave}
          pageTimer={pageTimer}
        />
      </SmoothScroll>
      {/* <ScrollValueAnimation /> */}
      <FilmEffect />
      <Contact onHover={onHover} onLeave={onLeave} />
      <SwitchAnimation />
    </CustomCursor>
  );
};

export default App;
