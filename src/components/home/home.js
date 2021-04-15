import React, { useEffect } from 'react';
import './home.scss';
import { useDispatch } from 'react-redux';
import { changeGsapState, makeSmoothScroll } from 'modules/commonValue';
import Scrollbar from 'smooth-scrollbar';
import Main from 'components/main';
import About from 'components/about';
import Skill from 'components/skill';
import Footprint from 'components/footprint';

const Home = ({ onHover, onClick, onLeave }) => {
  const dispatch = useDispatch();
  const gsapReady = (value) => dispatch(changeGsapState(value));
  const makeScroll = (value) => dispatch(makeSmoothScroll(value));

  useEffect(() => {
    Scrollbar.destroyAll();
    gsapReady(false);
    makeScroll(true);
  }, [])

  return (
    <div className='home-area'>
      <Main />
      <About onHover={onHover} onClick={onClick} onLeaves={onLeave} />
      <Skill onHover={onHover} onClick={onClick} onLeave={onLeave} />
      <Footprint onHover={onHover} onClick={onClick} onLeave={onLeave} />
    </div>
  )
}

export default Home;