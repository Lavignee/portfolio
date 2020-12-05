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
        id: 'split-frame',
        trigger: '.skill-title',
        start: 'top center',
        onEnter: () => onScrollSkill(),
        end: 'bottom center',
      }
    });
  }, [])

  return (
    <>
      <section className='container skill-section fluid'>
        <IconSliderComponent />
        <div className='container skill-frame'>
          <h1 className='title-text skill-title'>Skill</h1>
          <div className='row list-frame'>
            <div className='off-m-2 col-m-10 off-xl-4 col-xl-8 off-w-6 col-w-6 list'><Link to='/skill/language/HTML'>언어</Link></div>
            <div className='off-m-2 col-m-10 off-xl-4 col-xl-8 off-w-6 col-w-6 list'><Link to='/skill/lib/React.js'>프레임워크&<br />라이브러리</Link></div>
            <div className='off-m-2 col-m-10 off-xl-4 col-xl-8 off-w-6 col-w-6 list'><Link to='/skill/tool/Git'>개발 도구</Link></div>
            <div className='off-m-2 col-m-10 off-xl-4 col-xl-8 off-w-6 col-w-6 list'><Link to='/skill/interest/Typescript'>최근 관심 기술</Link></div>
          </div>
        </div>
      </section>
    </>
  )
}

export default SkillComponent;
