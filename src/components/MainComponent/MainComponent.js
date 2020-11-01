import React, { useState, useEffect } from 'react';
import { Trans, withTranslation } from 'react-i18next';
import { useSelector } from 'react-redux';
import { gsap } from "gsap";
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import CanvasVideo from '../../lib/CanvasVideo'
import src from '../../Static/videos/video1280.mp4'
// import srcSmall from '../../Static/videos/video640.mp4'
import './MainComponent.scss';
// import VideoToCanvasComponent from '../VideoToCanvasComponent'
// import TypingAnimationComponent from '../TypingAnimationComponent';

gsap.registerPlugin(ScrollTrigger);

const CallTheVideo = (VideoSource, resolX, resolY) => {
  return (
    <>
      <CanvasVideo src={VideoSource} target={'targets target1 right'} maskX={-10} maskY={0} resolX={resolX} resolY={resolY} sizeX={500} sizeY={250} />
      <CanvasVideo src={VideoSource} target={'targets target2 right'} maskX={0} maskY={-200} resolX={resolX} resolY={resolY} sizeX={800} sizeY={400} />
      <CanvasVideo src={VideoSource} target={'targets target3 left'} maskX={-200} maskY={-150} resolX={resolX} resolY={resolY} sizeX={600} sizeY={300} />
      <CanvasVideo src={VideoSource} target={'targets target4 left'} maskX={-350} maskY={-100} resolX={resolX} resolY={resolY} sizeX={700} sizeY={350} />
      <CanvasVideo src={VideoSource} target={'targets target5 right'} maskX={0} maskY={-100} resolX={resolX} resolY={resolY} sizeX={600} sizeY={300} />
      <CanvasVideo src={VideoSource} target={'targets target6 right'} maskX={0} maskY={0} resolX={resolX} resolY={resolY} sizeX={300} sizeY={150} />
    </>
  )
}
const MainComponent = () => {
  const { language } = useSelector(state => ({
    language: state.LanguageModule.language
  }));

  useEffect(() => {
    const canvasFrames = gsap.utils.toArray('.canvas-frame');
    const targetToLefts = gsap.utils.toArray('.left');
    const targetToRights = gsap.utils.toArray('.right');
    const scrollTriggers = {
      trigger: '.main-text-frame',
      start: 'top',
      end: 'bottom',
      scrub: true,
    }
    canvasFrames.forEach(target => {
      gsap.to(target, {
        scale: 0.8,
        y: -300,
        scrollTrigger: scrollTriggers
      })
    });
    targetToLefts.forEach(target => {
      gsap.to(target, {
        x: -50,
        scrollTrigger: scrollTriggers
      });
    });
    targetToRights.forEach(target => {
      gsap.to(target, {
        x: 50,
        scrollTrigger: scrollTriggers
      });
    });
  }, []);

  return (
    <section className='container main'>
      {/* TODO: Hooks로 코드 더 간결하게 작성해보자. */}
      {/* <VideoToCanvasComponent src={src} /> */}
      {CallTheVideo(src, 1280, 720)}
      {/* { matchMedia("screen and (min-width: 985px)").matches ? (
        CallTheVideo(src, 1280, 720)
      ) : (
          // CallTheVideo(srcSmall, 640, 480)
        )} */}
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
