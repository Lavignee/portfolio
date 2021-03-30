import React, { useEffect } from 'react';
import { Trans, withTranslation } from 'react-i18next';
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import { ScrollIntro, ScrollIntro2 } from '../../Modules/ScrollValueModule';
import { gsap } from "gsap";
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import CanvasVideo from '../../lib/CanvasVideo';
import SplitTextComponent from '../SplitTextComponent';
// import src1920 from '../../Static/videos/video1920.mp4';
import src1280 from '../../Static/videos/video1280.mp4';
import src640 from '../../Static/videos/video640.mp4';
import './MainComponent.scss';
// import VideoToCanvasComponent from '../VideoToCanvasComponent'
// import TypingAnimationComponent from '../TypingAnimationComponent';

gsap.registerPlugin(ScrollTrigger);

const CallTheVideo = (VideoSource, resolX, resolY) => {
  return (
    <>
      <CanvasVideo src={VideoSource} target={'targets target1 right'} maskX={-(resolX / 2)} maskY={0} resolX={resolX} resolY={resolY} sizeX={resolX * 3} sizeY={resolY * 3} />

      <CanvasVideo src={VideoSource} target={'targets target2 right'} maskX={0} maskY={-(resolY / 3)} resolX={resolX} resolY={resolY} sizeX={resolX * 3} sizeY={resolY * 3} />

      <CanvasVideo src={VideoSource} target={'targets target3 left'} maskX={-(resolX * 1.7)} maskY={-(resolY * 0.4)} resolX={resolX} resolY={resolY} sizeX={resolX * 3.2} sizeY={resolY * 3.2} />

      <CanvasVideo src={VideoSource} target={'targets target4 left'} maskX={-(resolX * 1.2)} maskY={-(resolY / 0.8)} resolX={resolX} resolY={resolY} sizeX={resolX * 3} sizeY={resolY * 3} />

      <CanvasVideo src={VideoSource} target={'targets target5 right'} maskX={-(resolX / 4)} maskY={-(resolY / 1.5)} resolX={resolX} resolY={resolY} sizeX={resolX * 2} sizeY={resolY * 2} />

      {matchMedia("screen and (min-width: 985px)").matches ? (
        <>
          <CanvasVideo src={VideoSource} target={'targets target6 right'} maskX={-(resolX / 6)} maskY={-(resolY)} resolX={resolX} resolY={resolY} sizeX={resolX * 2} sizeY={resolY * 2} />

          <CanvasVideo src={VideoSource} target={'targets target8 left'} maskX={-(resolX * 0.25)} maskY={-(resolY)} resolX={resolX} resolY={resolY} sizeX={resolX * 2} sizeY={resolY * 2} />
        </>
      ) : (
        ''
      )}


      <CanvasVideo src={VideoSource} target={'targets target7 left'} maskX={-(resolX * 0.5)} maskY={-(resolY)} resolX={resolX} resolY={resolY} sizeX={resolX * 2} sizeY={resolY * 2} />


    </>
  )
}

const MainComponent = () => {
  const dispatch = useDispatch();
  const onScrollIntro = () => dispatch(ScrollIntro('intro'));
  const onScrollIntro2 = () => dispatch(ScrollIntro2('intro2'));
  const { language } = useSelector(state => ({
    language: state.LanguageModule.language
  }));

  const mainVideoGsap = () => {
    const canvasFrames = gsap.utils.toArray('.canvas-frame');
    const targetToLefts = gsap.utils.toArray('.main-section .left');
    const targetToRights = gsap.utils.toArray('.main-section .right');
    const scrollTriggers = {
      scroller: '#root',
      trigger: '.main-text-frame',
      start: 'top',
      end: 'bottom',
      scrub: 1
    }

    canvasFrames.forEach(target => {
      gsap.to(target, {
        scale: 0.8,
        y: -300,
        // TODO: 상하좌우 애니메이션 소수점 제거, 성능테스트 후 적용
        modifiers: {
          y: function (y) {
            y = parseInt(y);
            var newY = y.toFixed(0);
            return newY + 'px';
          }
        },
        scrollTrigger: scrollTriggers
      })
    });

    targetToLefts.forEach(target => {
      gsap.to(target, {
        x: -50,
        // TODO: 상하좌우 애니메이션 소수점 제거, 성능테스트 후 적용
        modifiers: {
          x: function (x) {
            x = parseInt(x);
            var newX = x.toFixed(0);
            return newX + 'px';
          }
        },
        scrollTrigger: scrollTriggers
      });
    });

    targetToRights.forEach(target => {
      gsap.to(target, {
        x: 50,
        // TODO: 상하좌우 애니메이션 소수점 제거, 성능테스트 후 적용
        modifiers: {
          x: function (x) {
            x = parseInt(x);
            var newX = x.toFixed(0);
            return newX + 'px';
          }
        },
        scrollTrigger: scrollTriggers
      });
    });

    gsap.to('.intro-ment', {
      scrollTrigger: {
        scroller: '#root',
        id: 'intro-ment',
        trigger: '.intro-ment',
        start: 'top center',
        onEnter: () => onScrollIntro(),
        onEnterBack: () => onScrollIntro(),
        end: 'bottom center',
        scrub: true
      }
    });

    gsap.to('.intro-ment', {
      scrollTrigger: {
        scroller: '#root',
        id: 'intro-ment2',
        trigger: '.intro-ment',
        start: 'top center-=400',
        onEnter: () => onScrollIntro2(),
        onEnterBack: () => onScrollIntro2(),
        end: 'bottom center-=400',
        scrub: true
      }
    });
  }

  const headerInvert = () => {
    gsap.to('header', {
      scrollTrigger: {
        id: 'header',
        trigger: '.main-section',
        scroller: '#root',
        start: 'top-=1 top',
        toggleClass: { targets: 'header', className: 'invert' },
        end: 'bottom top',
      }
    });
  }

  const gnbMenu = () => {
    gsap.to('.gnb-button', {
      scrollTrigger: {
        id: 'gnb-button',
        trigger: '.main-section',
        scroller: '#root',
        start: 'top top+=72',
        toggleClass: { targets: '.menu-img', className: 'invert' },
        end: 'bottom top+=72',
      }
    });
  }

  useEffect(() => {
    let triggers = ScrollTrigger.getAll();
    triggers.forEach(trigger => {
      trigger.kill();
    });
  }, []);

  useEffect(() => {
    mainVideoGsap();
    return () => mainVideoGsap();
  }, [])

  useEffect(() => {
    headerInvert();
    return () => headerInvert();
  }, []);

  useEffect(() => {
    gnbMenu();
    return () => gnbMenu();
  }, []);

  return (
    <section id='main' className='container main-section'>
      <div className='main-background'>
        <div className='background'></div>
        <div className='video-area'>
          {/* TODO: Hooks로 코드 더 간결하게 작성해보자. */}
          {/* <VideoToCanvasComponent src={src} /> */}

          {/* TODO: 해상도별 영상 성능테스트 후 적용(용량, 버퍼) */}
          {matchMedia("screen and (min-width: 985px)").matches ? (
            // CallTheVideo(src1920, 1920, 1080)
            CallTheVideo(src1280, 1280, 720)
          ) : (
            CallTheVideo(src640, 640, 480)
          )}
        </div>
      </div>

      <div className='main-content-frame'>
        <div className='main-text-frame'>
          <div className='main-text'>
            <span>FRONT - END DEVELOPER</span>
            {/* TODO: 번역텍스트 받아서 동작하는 애니메이션 보완 필요. */}
            {/* <p><Trans i18nKey='greeting'><TypingAnimationComponent language={language}></TypingAnimationComponent></Trans></p> */}
            <p>Doyoung Lee</p>
            {/* <p><Trans i18nKey='greeting2'></Trans></p> */}
          </div>
        </div>

        <div className='into-ment-frame'>
          <div className='intro-ment'>
            <div className='type-p'>
              <SplitTextComponent animation={'up'} setTime={5} scroll={'intro'} index={'int'} depth>This  is  the  portfolio  that  introduces  me  for  the  first  time.</SplitTextComponent>

              <SplitTextComponent animation={'up'} setTime={5} scroll={'intro2'} index={'int2'} depth>It  was  produced  focusing  on  simple  but  delicate  details  without  any  additional  design.</SplitTextComponent>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default withTranslation("translations")(MainComponent);
