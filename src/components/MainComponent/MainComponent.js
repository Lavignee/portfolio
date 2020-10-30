import React, { useEffect } from 'react';
import { Trans, withTranslation } from 'react-i18next';
import { useSelector } from 'react-redux';
import { gsap } from "gsap";
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import CanvasVideo from '../../lib/CanvasVideo'
import src from '../../Static/videos/video.mp4'
import './MainComponent.scss';
// import VideoToCanvasComponent from '../VideoToCanvasComponent'
// import TypingAnimationComponent from '../TypingAnimationComponent';

gsap.registerPlugin(ScrollTrigger);

const MainComponent = () => {
  const { language } = useSelector(state => ({
    language: state.LanguageModule.language
  }));

  useEffect(() => {
    gsap.to('.target1', {
      // scale: 0.8,
      x: '100%',
      y: -400,
      scrollTrigger: {
        trigger: '.main-text-frame',
        start: 'top',
        end: 'bottom',
        scrub: true,
        markers: true
      }
    });

    ScrollTrigger.matchMedia({
      // "(min-width:1025px)": function() {
      //   sections.forEach(section => {
      //     const img = section.querySelector('img');
      //     ScrollTrigger.create({
      //       trigger: img,
      //       start: 'top top+=150',
      //       pin: true
      //     })
      //   })
      // }
      // "(min-width:1025px)": function () {
      //   gsap.to('.target1', {
      //     // scale: 0.8,
      //     x: 50,
      //     y: -400,
      //     scrollTrigger: {
      //       trigger: '.main-text-frame',
      //       start: 'top',
      //       end: 'bottom',
      //       scrub: true,
      //       markers: true
      //     }
      //   });
      // },

      // "all": function () {
      //   gsap.to('.target1', {
      //     // scale: 0.8,
      //     x: 50,
      //     y: -400,
      //     scrollTrigger: {
      //       trigger: '.main-text-frame',
      //       start: 'top',
      //       end: 'bottom',
      //       scrub: true,
      //       markers: true
      //     }
      //   });
      // }
    });
    gsap.to('.target2', {
      // scale: 0.8,
      x: 29,
      y: -400,
      scrollTrigger: {
        trigger: '.main-text-frame',
        start: 'top',
        end: 'bottom',
        scrub: true,
      }
    });
    gsap.to('.target3', {
      // scale: 0.8,
      x: -20,
      y: -400,
      scrollTrigger: {
        trigger: '.main-text-frame',
        start: 'top',
        end: 'bottom',
        scrub: true,
      }
    });
    gsap.to('.target4', {
      // scale: 0.8,
      x: -30,
      y: -400,
      scrollTrigger: {
        trigger: '.main-text-frame',
        start: 'top',
        end: 'bottom',
        scrub: true,
      }
    });
    gsap.to('.target5', {
      // scale: 0.8,
      x: 15,
      y: -400,
      scrollTrigger: {
        trigger: '.main-text-frame',
        start: 'top',
        end: 'bottom',
        scrub: true,
      }
    });
    gsap.to('.target6', {
      // scale: 0.8,
      y: -400,
      scrollTrigger: {
        trigger: '.main-text-frame',
        start: 'top',
        end: 'bottom',
        scrub: true,
      }
    });
  }, []);

  return (
    <section className='container main'>
      {/* TODO: Hooks로 코드 더 간결하게 작성해보자. */}
      {/* <VideoToCanvasComponent src={src} /> */}
      <CanvasVideo src={src} target={'target1'} maskX={-10} maskY={0} resolX={1280} resolY={720} sizeX={500} sizeY={250} />
      <CanvasVideo src={src} target={'target2'} maskX={0} maskY={-200} resolX={1280} resolY={720} sizeX={800} sizeY={400} />
      <CanvasVideo src={src} target={'target3'} maskX={-200} maskY={-150} resolX={1280} resolY={720} sizeX={600} sizeY={300} />
      <CanvasVideo src={src} target={'target4'} maskX={-350} maskY={-100} resolX={1280} resolY={720} sizeX={700} sizeY={350} />
      <CanvasVideo src={src} target={'target5'} maskX={0} maskY={-100} resolX={1280} resolY={720} sizeX={600} sizeY={300} />
      <CanvasVideo src={src} target={'target6'} maskX={0} maskY={0} resolX={1280} resolY={720} sizeX={300} sizeY={150} />
      <div className='main-text-frame'>
        <div className='main-text'>
          <span>FRONT - END</span><span>DEVELOPER</span>
          {/* TODO: 번역텍스트 받아서 동작하는 애니메이션 보완 필요. */}
          {/* <p><Trans i18nKey='greeting'><TypingAnimationComponent language={language}></TypingAnimationComponent></Trans></p> */}
          <p><Trans i18nKey='greeting2'></Trans></p>
        </div>
      </div>
    </section>
  )
}

export default withTranslation("translations")(MainComponent);
