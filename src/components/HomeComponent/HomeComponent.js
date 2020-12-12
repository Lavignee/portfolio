import React from 'react';
import MainComponent from '../MainComponent';
import AboutComponent from '../AboutComponent';
import SkillComponent from '../SkillComponent';
import FootprintComponent from '../FootprintComponent';
import FooterContainer from '../../Containers/FooterContainer';
import './HomeComponent.scss';

const HomeComponent = () => {
  return (
    <div className='home'>
      <MainComponent />
      <AboutComponent />
      <SkillComponent />
      <FootprintComponent />
      <FooterContainer />
    </div>
  )
}

export default HomeComponent;