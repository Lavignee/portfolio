import React from 'react';
import MainComponent from '../Components/MainComponent';
import AboutComponent from '../Components/AboutComponent';
import SkillComponent from '../Components/SkillComponent';
import FootprintComponent from '../Components/FootprintComponent';
// import TestGSAP from '../Components/TestGSAP';

const HomeContainer = () => {
  return (
    <>
      <MainComponent />
      <AboutComponent />
      <SkillComponent />
      <FootprintComponent />
      {/* <TestGSAP /> */}
    </>
  )
}

export default HomeContainer;