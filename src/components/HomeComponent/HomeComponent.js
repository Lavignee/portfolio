import React, { useRef, useEffect } from 'react';
import { gsap } from "gsap";
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import MainComponent from '../MainComponent';
import AboutComponent from '../AboutComponent';
import SkillComponent from '../SkillComponent';
import FootprintComponent from '../FootprintComponent';
import './HomeComponent.scss';

gsap.registerPlugin(ScrollTrigger);

const HomeComponent = () => {
  const aboutRef = useRef();
  const skillRef = useRef();
  const footprintRef = useRef();

  useEffect(() => {
    gsap.to(aboutRef.current, {
      scrollTrigger: {
        trigger: '.about',
        // start: 'top center+=100',
        // end: 'top center+=50',
        start: 'top bottom',
        end: 'bottom bottom',
        toggleClass: { targets: '.home-background', className: 'now-about' },
        markers: true
      }
    });
  }, []);
  useEffect(() => {
    gsap.to(skillRef.current, {
      scrollTrigger: {
        trigger: '.skill',
        start: 'top bottom',
        end: 'bottom bottom',
        toggleClass: { targets: '.home-background', className: 'now-skill' },
        markers: true
      }
    });
  }, []);
  useEffect(() => {
    gsap.to(footprintRef.current, {
      scrollTrigger: {
        trigger: '.footprint',
        start: 'top bottom',
        toggleClass: { targets: '.home-background', className: 'now-footprint' },
        // markers: true
      }
    });
  }, []);

  return (
    <div className='home-background'>
      <MainComponent />
      <AboutComponent ref={aboutRef} />
      <SkillComponent ref={skillRef} />
      <FootprintComponent ref={footprintRef} />
    </div>
  )
}

export default HomeComponent;