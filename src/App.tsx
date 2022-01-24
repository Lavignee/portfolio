import React from 'react';
import 'regenerator-runtime/runtime';
import './style/index.scss';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import {
  changeSwitchAnimation,
  changeButtonDelay,
} from './Modules/commonValue';
import {
  changeFirstClassName,
  changeSecondClassName,
  changeText,
} from './Modules/cursor';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import CustomCursor from './components/customCursor';
import Header from './components/header';
import SmoothScroll from './components/smoothScroll';
import ContentSwitcher from './components/contentSwitcher';
import Contact from './components/contact';
import SwitchAnimation from './components/switchAnimation';
import ScrollValueAnimation from './components/scrollValueAnimation';
import FilmEffect from './components/filmEffect';
gsap.registerPlugin(ScrollTrigger);

const App = () => {
  // redux dispatch 정의.
  const dispatch = useDispatch();
  const cursorClass = (value: string) => dispatch(changeFirstClassName(value));
  const cursorSecondClass = (value: string) => dispatch(changeSecondClassName(value));
  const cursorText = (value: string) => dispatch(changeText(value));
  const screenCover = (value: boolean) => dispatch(changeSwitchAnimation(value));
  const onChangeButtonDelay = (value: boolean) => dispatch(changeButtonDelay(value));

  // react-router-dom으로 화면 호출.
  let navigate = useNavigate();

  // 마우스 오버 시 
  const _onHover = (hoverCursor: string, hoverText?: string | null) => {
    // 커서 형태 변경.
    cursorClass(hoverCursor);
    // 텍스트 파람 존재 시 커서 텍스트 변경.
    hoverText && cursorText(hoverText);
  };

  // 마우스 좌 클릭 시f
  const _onClick = (path: string, hoverText?: string | null) => {
    hoverText && _onLeave(hoverText);
    // 버튼 연속 클릭 방지 딜레이 활성.
    onChangeButtonDelay(true);
    // 스크린 커버 애니메이션 동작.
    screenCover(true);
    // 스크린 커버 시간에 맞는 스무스 스크롤 제거 활성.
    screenCoverTimer();
    pageTimer(path, 1000);
  };

  // 커서 형태 초기화, 텍스트 파람 존재 시 텍스트 변경.
  const _onLeave = (hoverText?: string | null) => {
    cursorClass('');
    cursorSecondClass('');
    hoverText && cursorText(hoverText);
  };

  // 스크린 커버 애니메이션 종료 시점에 스크린 커버, 버튼 딜레이 비활성.
  const screenCoverTimer = () => {
    const screenCoverAnimationTimer = setTimeout(() => {
      screenCover(false);
      onChangeButtonDelay(false);
    }, 2000);
    return () => clearTimeout(screenCoverAnimationTimer);
  };

  // 일정시간(즉시 ~ 스크린 커버가 화면을 다 덮은 뒤) 후 화면 전환.
  const pageTimer = (path: string, timer: number) => {
    const pageDetailTimer = setTimeout(() => {
      navigate(path);
    }, timer);
    return () => clearTimeout(pageDetailTimer);
  };

  return (
    // 커서 돔.
    <CustomCursor>
      {/* 헤더 */}
      <Header
        _onHover={_onHover}
        _onClick={_onClick}
        _onLeave={_onLeave}
        pageTimer={pageTimer}
      />
      {/* 스크롤 영역 */}
      <SmoothScroll>
        {/* 컨텐츠 */}
        <ContentSwitcher
          _onHover={_onHover}
          _onClick={_onClick}
          _onLeave={_onLeave}
          pageTimer={pageTimer}
        />
      </SmoothScroll>
      {/* 스크롤 퍼센트 */}
      <ScrollValueAnimation />
      {/* 필름 그레인 효과*/}
      <FilmEffect />
      {/* 컨텍트 컨텐츠 */}
      <Contact _onHover={_onHover} _onLeave={_onLeave} />
      {/* 스크린 커버 */}
      <SwitchAnimation />
    </CustomCursor>
  );
};

export default App;
