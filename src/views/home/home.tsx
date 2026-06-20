'use client';

import './home.scss';

import About from '../../components/about';
import Footprint from '../../components/footprint';
import Main from '../../components/main';
import Skill from '../../components/skill';
import useCursorHandlers from '@/hooks/useCursorHandlers';

const Home = () => {
  // App Router에서는 props 전달이 불가하므로 커서 핸들러를 훅에서 받는다.
  const { onHover: _onHover, onClick: _onClick, onLeave: _onLeave } = useCursorHandlers();

  return (
    <div className='home-area'>
      <Main _onHover={_onHover} _onLeave={_onLeave} />
      <About _onHover={_onHover} _onClick={_onClick} _onLeave={_onLeave} />
      <Skill _onHover={_onHover} _onClick={_onClick} _onLeave={_onLeave} />
      <Footprint _onHover={_onHover} _onClick={_onClick} _onLeave={_onLeave} />
    </div>
  );
};

export default Home;
