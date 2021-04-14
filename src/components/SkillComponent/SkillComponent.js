import React, { memo, useEffect, useState } from 'react';
import './SkillComponent.scss';
import { useSelector, shallowEqual } from 'react-redux';
import { gsap } from "gsap";
import { ScrollTrigger } from 'gsap/ScrollTrigger';
gsap.registerPlugin(ScrollTrigger);
import IconSliderComponent from '../IconSliderComponent';

const SkillComponent = ({ onHover, onClick, onLeave }) => {
  const [currentGsapState, currentButtonDelay] = useSelector(state => [state.CommonValueModule.currentGsapState, state.CommonValueModule.currentButtonDelay], shallowEqual);

  const [sliderTrigger, setliderTrigger] = useState(false);

  const skillComponentGSAP = () => {
    gsap.to('.skill-section', {
      scrollTrigger: {
        trigger: '.skill-section',
        start: 'top bottom',
        onEnter: () => setliderTrigger(true),
        onLeaveBack: () => setliderTrigger(false),
        end: 'bottom top'
      }
    });
  }

  const forFootprintPin = () => {
    gsap.fromTo('.skill-section', {
      // opacity: 1,
      // filter: 'blur(0px)'
    }, {
      // opacity: 0.1,
      // filter: 'blur(3px)',
      scrollTrigger: {
        trigger: '.skill-section',
        pin: true,
        start: 'bottom bottom',
        end: 'bottom+=100% bottom',
        scrub: true
      }
    });
  }

  useEffect(() => {
    currentGsapState && skillComponentGSAP(), forFootprintPin();
  }, [currentGsapState])


  return (
    <section id='skill'>
      <div className='container skill-section fluid'>
        <IconSliderComponent sliderTrigger={sliderTrigger} />
        <div className='container skill-frame'>
          <h1 className='title-text skill-title'>Skill</h1>
          <div className='row list-frame'>
            <div className='off-m-2 col-m-10 off-xl-4 col-xl-8 off-w-6 col-w-6 list'><button className={`link-button${currentButtonDelay ? ' delay' : ''}`} onMouseEnter={() => onHover(' go-cursor')} onMouseLeave={() => onLeave()} onClick={() => onClick('/skill/language')}>언어</button></div>
            <div className='off-m-2 col-m-10 off-xl-4 col-xl-8 off-w-6 col-w-6 list'><button className={`link-button${currentButtonDelay ? ' delay' : ''}`} onMouseEnter={() => onHover(' go-cursor')} onMouseLeave={() => onLeave()} onClick={() => onClick('/skill/lib')}>프레임워크&<br />라이브러리</button></div>
            <div className='off-m-2 col-m-10 off-xl-4 col-xl-8 off-w-6 col-w-6 list'><button className={`link-button${currentButtonDelay ? ' delay' : ''}`} onMouseEnter={() => onHover(' go-cursor')} onMouseLeave={() => onLeave()} onClick={() => onClick('/skill/tool')}>개발 도구</button></div>
            <div className='off-m-2 col-m-10 off-xl-4 col-xl-8 off-w-6 col-w-6 list'><button className={`link-button${currentButtonDelay ? ' delay' : ''}`} onMouseEnter={() => onHover(' go-cursor')} onMouseLeave={() => onLeave()} onClick={() => onClick('/skill/interest')}>최근 관심 기술</button></div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default memo(SkillComponent);
