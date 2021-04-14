import React, { useEffect } from 'react';
import './HomeComponent.scss';
import { useDispatch } from 'react-redux';
import { changeGsapState, makeSmoothScroll } from '../../Modules/CommonValueModule';
import Scrollbar from 'smooth-scrollbar';
import MainComponent from '../MainComponent';
import AboutComponent from '../AboutComponent';
import SkillComponent from '../SkillComponent';
import FootprintComponent from '../FootprintComponent';

const HomeComponent = ({ onHover, onClick, onLeave }) => {
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
      <MainComponent />
      <AboutComponent onHover={onHover} onClick={onClick} onLeaves={onLeave} />
      <SkillComponent onHover={onHover} onClick={onClick} onLeave={onLeave} />
      <FootprintComponent onHover={onHover} onClick={onClick} onLeave={onLeave} />
    </div>
  )
}

export default HomeComponent;