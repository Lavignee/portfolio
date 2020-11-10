import React from 'react';
import { Link } from 'react-router-dom';
import SplitTextComponent from '../SplitTextComponent';
import './FootprintComponent.scss';

const FootprintComponent = () => {
  return (
    <>
      <section className='container footprint-section'>
        <h1 className='title-text footprint-title'>Footprint</h1>
        <SplitTextComponent animation={'right'} scroll={'footprint'} setTime={200} depth noContainer>경력사항</SplitTextComponent>
        <SplitTextComponent animation={'right'} scroll={'footprint'} setTime={200} delay={5} depth noContainer>프로젝트</SplitTextComponent>
        <SplitTextComponent animation={'right'} scroll={'footprint'} setTime={200} delay={10} depth noContainer>외부수주</SplitTextComponent>
        {/* <Link to='footprint'>경력사항</Link>
        <Link to='footprint'>프로젝트</Link>
        <Link to='footprint'>외부 수주</Link> */}
      </section>
    </>

  )
}

export default FootprintComponent;
