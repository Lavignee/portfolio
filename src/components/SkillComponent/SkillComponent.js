import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { changeClassName, changeSecondClassName } from '../../Modules/CursorModule';
import { gsap } from "gsap";
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import IconSliderComponent from '../IconSliderComponent';
import './SkillComponent.scss';

gsap.registerPlugin(ScrollTrigger);

const SkillComponent = () => {
  const dispatch = useDispatch();
  const cursorClass = (className) => dispatch(changeClassName(className));
  const cursorSecondClass = (secondClassName) => dispatch(changeSecondClassName(secondClassName));

  const skillDetailHover = () => {
    cursorClass(' go-cursor')
  }

  const onLeave = () => {
    cursorClass('')
    cursorSecondClass('')
  };

  const forFootprintPin = () => {
    gsap.fromTo('.skill-section', {
      opacity: 1,
    }, {
      opacity: 0.3,
      scrollTrigger: {
        scroller: '#root',
        id: 'skill-section',
        trigger: '.skill-section',
        pin: true,
        start: 'bottom bottom',
        end: 'bottom+=1080 bottom',
        scrub: true
      }
    });
  }

  useEffect(() => {
    forFootprintPin();
    return () => forFootprintPin();
  }, []);

  return (
    <section id='skill'>
      <div className='container skill-section fluid'>
        <IconSliderComponent />
        <div className='container skill-frame'>
          <h1 className='title-text skill-title'>Skill</h1>
          <div className='row list-frame'>
            <div className='off-m-2 col-m-10 off-xl-4 col-xl-8 off-w-6 col-w-6 list'><Link to='/skill/language' onMouseEnter={skillDetailHover} onMouseLeave={onLeave} onClick={onLeave}>언어</Link></div>
            <div className='off-m-2 col-m-10 off-xl-4 col-xl-8 off-w-6 col-w-6 list'><Link to='/skill/lib' onMouseEnter={skillDetailHover} onMouseLeave={onLeave} onClick={onLeave}>프레임워크&<br />라이브러리</Link></div>
            <div className='off-m-2 col-m-10 off-xl-4 col-xl-8 off-w-6 col-w-6 list'><Link to='/skill/tool' onMouseEnter={skillDetailHover} onMouseLeave={onLeave} onClick={onLeave}>개발 도구</Link></div>
            <div className='off-m-2 col-m-10 off-xl-4 col-xl-8 off-w-6 col-w-6 list'><Link to='/skill/interest' onMouseEnter={skillDetailHover} onMouseLeave={onLeave} onClick={onLeave}>최근 관심 기술</Link></div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default SkillComponent;
