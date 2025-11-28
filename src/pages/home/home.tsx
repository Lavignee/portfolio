import React from 'react';

import Main from '../../components/main';
import About from '../../components/about';
import Skill from '../../components/skill';
import Footprint from '../../components/footprint';

interface HomeProps {
  _onHover: (hoverCursor: string, hoverText?: string | null) => void;
  _onClick: (path: string, hoverText?: string | null) => void;
  _onLeave: (hoverText?: string | null) => void;
}

const Home: React.FC<HomeProps> = ({ _onHover, _onClick, _onLeave }) => {
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
