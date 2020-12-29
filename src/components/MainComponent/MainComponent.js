import React, { useEffect } from 'react';
import { Trans, withTranslation } from 'react-i18next';
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import { ScrollIntro } from '../../Modules/ScrollValueModule';
import { gsap } from "gsap";
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import CanvasVideo from '../../lib/CanvasVideo';
import SplitTextComponent from '../SplitTextComponent';
import src from '../../Static/videos/video1280.mp4';
// import srcSmall from '../../Static/videos/video640.mp4';
import './MainComponent.scss';
// import VideoToCanvasComponent from '../VideoToCanvasComponent'
// import TypingAnimationComponent from '../TypingAnimationComponent';

gsap.registerPlugin(ScrollTrigger);

const CallTheVideo = (VideoSource, resolX, resolY) => {
  return (
    <>
      <CanvasVideo src={VideoSource} target={'targets target1 right'} maskX={-10} maskY={0} resolX={resolX} resolY={resolY} sizeX={500} sizeY={250} />
      <CanvasVideo src={VideoSource} target={'targets target2 right'} maskX={0} maskY={-200} resolX={resolX} resolY={resolY} sizeX={800} sizeY={400} />
      <CanvasVideo src={VideoSource} target={'targets target3 left'} maskX={-350} maskY={-100} resolX={resolX} resolY={resolY} sizeX={700} sizeY={350} />
      <CanvasVideo src={VideoSource} target={'targets target4 left'} maskX={-200} maskY={-150} resolX={resolX} resolY={resolY} sizeX={600} sizeY={300} />
      <CanvasVideo src={VideoSource} target={'targets target5 right'} maskX={0} maskY={-100} resolX={resolX} resolY={resolY} sizeX={600} sizeY={300} />
      <CanvasVideo src={VideoSource} target={'targets target6 right'} maskX={0} maskY={0} resolX={resolX} resolY={resolY} sizeX={300} sizeY={150} />
    </>
  )
}

const MainComponent = () => {
  const dispatch = useDispatch();
  const onScrollIntro = () => dispatch(ScrollIntro('intro'));
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
        scaleX: 0.8,
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
      y: 0 + '%',
      scrollTrigger: {
        scroller: '#root',
        id: 'intro-ment',
        trigger: '.intro-ment',
        start: 'top center',
        onEnter: () => onScrollIntro(),
        onEnterBack: () => onScrollIntro(),
        end: 'bottom center',
        scrub: true,
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
      <div className='main-background1'>
        <div className='background-frame'>
          <div className='background'></div>
        </div>
      </div>
      <div className='main-background2'>
        <div className='background-frame'>
          <div className='background'></div>
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
            <div className='type-p'><SplitTextComponent animation={'up'} scroll={'intro'} depth>I'm a front-end developer who lives like this.</SplitTextComponent></div>
          </div>
        </div>

        {/* TODO: Hooks로 코드 더 간결하게 작성해보자. */}
        {/* <VideoToCanvasComponent src={src} /> */}
        {CallTheVideo(src, 1280, 720)}
      </div>

      {/* TODO: 해상도별 영상 성능테스트 후 적용(용량, 버퍼) */}
      {/* { matchMedia("screen and (min-width: 985px)").matches ? (
        CallTheVideo(src, 1280, 720)
      ) : (
          CallTheVideo(srcSmall, 640, 480)
        )} */}
    </section>
  )
}

export default withTranslation("translations")(MainComponent);
