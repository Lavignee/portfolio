import React from 'react';
import Main from '../components/Main';
import About from '../components/About';
import Skill from '../components/Skill';
import Footprint from '../components/Footprint';

const Home = () => {
  return (
    <>
      {/* 스크롤에따라 배경색 변경? */}
      {/* 배경에 그리드 넣을까? */}
      <Main />
      <About />
      <Skill />
      <Footprint />
    </>
  )
}

export default Home;
