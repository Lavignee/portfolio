import React from 'react';
import { useDispatch } from 'react-redux';
import { makeSmoothScroll, changeGsapState } from '../../Modules/commonValue';

import './home.scss';

import Main from '../../components/main';
import About from '../../components/about';
import Skill from '../../components/skill';
import Footprint from '../../components/footprint';

// Props로 받는 이벤트들에 대한 interface 정의.
interface HomeProps {
  _onHover: (hoverCursor: string, hoverText?: string | null) => void;
  _onClick: (path: string, hoverText?: string | null) => void;
  _onLeave: (hoverText?: string | null) => void;
}

const Home = ({ _onHover, _onClick, _onLeave }: HomeProps) => {
  // redux dispatch 정의.
  const dispatch = useDispatch();
  const makeScroll = React.useCallback((value: boolean) => dispatch(makeSmoothScroll(value)), [dispatch]);
  const gsapReady = React.useCallback((value: boolean) => dispatch(changeGsapState(value)), [dispatch]);

  // 화면 진입 시 gsap 정지 후 현재 컨텐츠를 기준으로 스크롤 재생성.
  React.useEffect(() => {
    gsapReady(false);
    makeScroll(true);
  }, [gsapReady, makeScroll]);

  return (
    <div className='home-area'>
      <Main _onHover={_onHover} _onLeave={_onLeave} />
      <About _onHover={_onHover} _onClick={_onClick} _onLeaves={_onLeave} />
      <Skill _onHover={_onHover} _onClick={_onClick} _onLeave={_onLeave} />
      <Footprint _onHover={_onHover} _onClick={_onClick} _onLeave={_onLeave} />
    </div>
  );
};

export default Home;
