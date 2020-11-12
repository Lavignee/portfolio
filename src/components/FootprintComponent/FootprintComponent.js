import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { gsap } from "gsap";
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useDispatch } from 'react-redux';
import { ScrollFootprint } from '../../Modules/ScrollValueModule';
import SplitTextComponent from '../SplitTextComponent';
import './FootprintComponent.scss';

gsap.registerPlugin(ScrollTrigger);

const FootprintComponent = () => {
  const dispatch = useDispatch();
  const onScrollFootprint = () => dispatch(ScrollFootprint('footprint'));

  useEffect(() => {
    gsap.to('.split-frame', {
      scrollTrigger: {
        id: 'split-frame',
        trigger: '.footprint-title',
        start: 'top center',
        onEnter: self => self.isActive ? onScrollFootprint() : '',
        end: 'bottom center',
      }
    });
  }, [])
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
