import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { gsap } from "gsap";
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useDispatch } from 'react-redux';
import { ScrollSkill } from '../../Modules/ScrollValueModule';
import IconSliderComponent from '../IconSliderComponent';
import './SkillComponent.scss';

gsap.registerPlugin(ScrollTrigger);

const SkillComponent = () => {
  const dispatch = useDispatch();
  const onScrollSkill = () => dispatch(ScrollSkill('skill'));

  useEffect(() => {
    // 스킬 컨텐츠 애니메이션
    gsap.to('.split-frame', {
      scrollTrigger: {
        scroller: '#root',
        id: 'split-frame',
        trigger: '.skill-title',
        start: 'top center',
        onEnter: () => onScrollSkill(),
        end: 'bottom center',
      }
    });
  }, [])

  useEffect(() => {
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
  }, []);

  return (
    <>
      <section id='skill' className='container skill-section fluid'>
        <IconSliderComponent />
        <div className='container skill-frame'>
          <h1 className='title-text skill-title'>Skill</h1>
          <div className='row list-frame'>
            <div className='off-m-2 col-m-10 off-xl-4 col-xl-8 off-w-6 col-w-6 list'><Link to='/skill/language'>언어</Link></div>
            <div className='off-m-2 col-m-10 off-xl-4 col-xl-8 off-w-6 col-w-6 list'><Link to='/skill/lib'>프레임워크&<br />라이브러리</Link></div>
            <div className='off-m-2 col-m-10 off-xl-4 col-xl-8 off-w-6 col-w-6 list'><Link to='/skill/tool'>개발 도구</Link></div>
            <div className='off-m-2 col-m-10 off-xl-4 col-xl-8 off-w-6 col-w-6 list'><Link to='/skill/interest'>최근 관심 기술</Link></div>
          </div>
        </div>
      </section>
    </>
  )
}

export default SkillComponent;
