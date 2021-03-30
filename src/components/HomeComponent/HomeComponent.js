import React from 'react';
import MainComponent from '../MainComponent';
import AboutComponent from '../AboutComponent';
import SkillComponent from '../SkillComponent';
import FootprintComponent from '../FootprintComponent';
import { useDispatch } from 'react-redux';
import { changeSwitchAnimation } from '../../Modules/CommonValueModule';
import './HomeComponent.scss';

const HomeComponent = () => {
  const dispatch = useDispatch();
  const screenCover = () => dispatch(changeSwitchAnimation());

  return (
    <div className='home-area'>
      <MainComponent />
      <AboutComponent screenCover={screenCover} />
      <SkillComponent screenCover={screenCover} />
      <FootprintComponent screenCover={screenCover} />
    </div>
  )
}

export default HomeComponent;