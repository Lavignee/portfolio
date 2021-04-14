import React from 'react';
import 'style/index.scss';
import { useDispatch } from 'react-redux';
import { changeSwitchAnimation, changeButtonDelay, smoothTop, changeSmoothScrollState } from './modules/CommonValueModule';
import { changeClassName, changeSecondClassName, changeText } from './modules/CursorModule';
import { useHistory } from 'react-router-dom';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
gsap.registerPlugin(ScrollTrigger);
import CustomCursorComponent from 'components/CustomCursorComponent'
import HeaderComponent from 'components/HeaderComponent';
import SmoothScrollComponent from 'components/SmoothScrollComponent';
import ContentSwitcherComponent from 'components/ContentSwitcherComponent';
import ContactComponent from 'components/ContactComponent';
import SwitchAnimationComponent from 'components/SwitchAnimationComponent';
// import ScrollValueAnimationComponent from 'components/ScrollValueAnimationComponent';
import FilmEffectComponent from 'components/FilmEffectComponent';

const App = () => {
  const dispatch = useDispatch();
  const onSmoothTop = (value) => dispatch(smoothTop(value));
  const changecrollState = (value) => dispatch(changeSmoothScrollState(value));
  const cursorClass = (className) => dispatch(changeClassName(className));
  const cursorSecondClass = (secondClassName) => dispatch(changeSecondClassName(secondClassName));
  const cursorText = (text) => dispatch(changeText(text));
  const screenCover = (value) => dispatch(changeSwitchAnimation(value));
  const onChangeButtonDelay = (value) => dispatch(changeButtonDelay(value));

  let history = useHistory();

  const onHover = (hoverCursor, hoverText) => {
    cursorClass(hoverCursor);
    hoverText && cursorText(hoverText);
  }

  const onClick = (path, hoverText) => {
    onLeave(hoverText);
    onChangeButtonDelay(true)
    screenCover(true);
    changecrollState(true);
    screenCoverTimer();
    pageTimer(path, 1000);
  }

  const onLeave = (hoverText) => {
    cursorClass('');
    cursorSecondClass('')
    hoverText && cursorText(hoverText);
  };

  const screenCoverTimer = () => {
    const screenCoverAnimationTimer = setTimeout(() => {
      screenCover(false);
      onChangeButtonDelay(false);
    }, 2000);
    return () => clearTimeout(screenCoverAnimationTimer);
  }

  const pageTimer = (path, timer) => {
    const pageDetailTimer = setTimeout(() => {
      history.push(path);
    }, timer);
    return () => clearTimeout(pageDetailTimer);
  }

  return (
    <>
      <CustomCursorComponent>
        <HeaderComponent onHover={onHover} onClick={onClick} onLeave={onLeave} pageTimer={pageTimer} scrollTop={onSmoothTop} />
        <SmoothScrollComponent>
          <ContentSwitcherComponent onHover={onHover} onClick={onClick} onLeave={onLeave} pageTimer={pageTimer} />
        </SmoothScrollComponent>
        {/* <ScrollValueAnimationComponent /> */}
        <FilmEffectComponent />
        <ContactComponent />
        <SwitchAnimationComponent />
      </CustomCursorComponent >
    </>
  );
}

export default App;
