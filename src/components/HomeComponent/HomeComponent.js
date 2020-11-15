import React from 'react';
import MainComponent from '../MainComponent';
import AboutComponent from '../AboutComponent';
import SkillComponent from '../SkillComponent';
import FootprintComponent from '../FootprintComponent';
import './HomeComponent.scss';

const HomeComponent = () => {
  return (
    <div className='home-background'>
      <MainComponent />
      <AboutComponent />
      <SkillComponent />
      <FootprintComponent />
    </div>
  )
}

export default HomeComponent;