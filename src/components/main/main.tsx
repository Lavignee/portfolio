import React, { memo, useEffect, useState, useCallback } from 'react';
import { useDispatch, useSelector, shallowEqual } from 'react-redux';
import { splitTextStart } from '../../Modules/commonValue';
// import { Trans, withTranslation } from 'react-i18next';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

import './main.scss';

import VideoToCanvas from '../videoToCanvas';
import SplitText from '../splitText';
import { RootState } from '../../Modules';

gsap.registerPlugin(ScrollTrigger);

const Main = ({ onHover, onLeaves }) => {
  // const src1920 = new URL('../../static/videos/video1920.mp4', import.meta.url);
  // const src1280 = new URL('../../static/videos/video1280.mp4', import.meta.url);
  const src640 = new URL('../../static/videos/video640.mp4', import.meta.url);
  const dispatch = useDispatch();
  const onScrollIntro = useCallback((value) => dispatch(splitTextStart(value)), [dispatch]);
  // const [language] = useSelector(state => [state.CommonValue.language], shallowEqual);
  const [currentGsapState] = useSelector((state: RootState) => [state.CommonValue.currentGsapState], shallowEqual
  );

  const [canvasReady, setCanvasReady] = useState(true);

  // TODO: 추후 리덕스를 개선하여, 본 펑션은 삭제해야함.
  const delaySplit = React.useCallback((target: string) => {
    const timeOut = setTimeout(() => {
      target === 'intro' ? onScrollIntro('intro') : onScrollIntro('intro2');
      clearTimeout(timeOut);
    }, 0);
  }, [onScrollIntro]);

  const mainComponentGSAP = useCallback(() => {
    const canvasFrames = gsap.utils.toArray('.video-area .canvas-frame');
    const targetToLefts = gsap.utils.toArray('.video-area .left');
    const targetToRights = gsap.utils.toArray('.video-area .right');
    const canvasTrigger = {
      trigger: '.main-text-frame',
      start: 'top',
      end: 'bottom',
      scrub: 1,
    };

    canvasFrames.forEach((target: HTMLElement) => {
      gsap.to(target, {
        scale: 0.8,
        y: -300,
        modifiers: {
          y: (y) => {
            y = parseInt(y);
            var newY = y.toFixed(0);
            return newY + 'px';
          },
        },
        scrollTrigger: canvasTrigger,
      });
    });

    targetToLefts.forEach((target: HTMLElement) => {
      gsap.to(target, {
        x: -50,
        modifiers: {
          x: (x) => {
            x = parseInt(x);
            var newX = x.toFixed(0);
            return newX + 'px';
          },
        },
        scrollTrigger: canvasTrigger,
      });
    });

    targetToRights.forEach((target: HTMLElement) => {
      gsap.to(target, {
        x: 50,
        modifiers: {
          x: (x) => {
            x = parseInt(x);
            var newX = x.toFixed(0);
            return newX + 'px';
          },
        },
        scrollTrigger: canvasTrigger,
      });
    });

    gsap.to('.intro-ment', {
      scrollTrigger: {
        trigger: '.intro-ment',
        start: 'top center',
        onEnter: () => delaySplit('intro'),
        // onEnter: () => onScrollIntro('intro'),
        // onEnterBack: () => onScrollIntro('intro2'),
        end: 'bottom center',
      },
    });

    gsap.to('.intro-ment', {
      scrollTrigger: {
        trigger: '.intro-ment',
        start: 'top center-=400',
        onEnter: () => delaySplit('intro2'),
        // onEnter: () => onScrollIntro2('intro'),
        // onEnterBack: () => onScrollIntro2('intro2'),
        end: 'bottom center-=400',
      },
    });

    gsap.to('.main-section', {
      scrollTrigger: {
        trigger: '.main-section',
        start: 'top-=1 top',
        onEnter: () => setCanvasReady(true),
        onEnterBack: () => setCanvasReady(true),
        onLeave: () => setCanvasReady(false),
        onLeaveBack: () => setCanvasReady(false),
        end: 'bottom top',
      },
    });

    gsap.to('header', {
      scrollTrigger: {
        trigger: '.main-section',
        start: 'top-=1 top',
        toggleClass: { targets: 'header', className: 'invert' },
        end: 'bottom top',
      },
    });

    gsap.to('.gnb-button', {
      scrollTrigger: {
        trigger: '.main-section',
        start: 'top top+=72',
        toggleClass: { targets: '.menu-img', className: 'invert' },
        end: 'bottom top+=72',
      },
    });
  }, [delaySplit]);

  useEffect(() => {
    currentGsapState && mainComponentGSAP();

    return () => {
      onScrollIntro('');
      let triggers = ScrollTrigger.getAll();
      triggers.forEach((trigger) => {
        trigger.kill();
      });
    };
  }, [currentGsapState, mainComponentGSAP, onScrollIntro]);

  return (
    <section id='main' className='container main-section'>
      <div className='main-background'>
        <div className='background'></div>
        {/* TODO: 해상도별 영상 성능테스트 후 적용(용량, 버퍼) */}
        {/* {matchMedia('screen and (min-width: 985px)').matches ? (
          // <VideoToCanvasComponent VideoSource={src1920} resolX={1920} resolY={1080} />
          <VideoToCanvas src={src1280} resolX={1280} resolY={720} canvasReady={canvasReady} />
        ) : (
          <VideoToCanvas src={src640} resolX={640} resolY={360} canvasReady={canvasReady} />
          )} */}
        <VideoToCanvas
          src={src640}
          resolX={640}
          resolY={360}
          canvasReady={canvasReady}
        />
      </div>

      <div className='main-content-frame'>
        <div className='video-delay-cover'></div>
        <div className='main-text-frame'>
          <div
            className='main-text'
            onMouseEnter={() => onHover(' reverse-cursor')}
            onMouseLeave={() => onLeaves()}>
            <span>FRONT - END DEVELOPER</span>
            <p>Doyoung Lee</p>
          </div>
        </div>

        <div className='into-ment-frame'>
          <div className='intro-ment'>
            <div className='type-p'>
              <SplitText
                animation={'up'}
                setTime={5}
                scroll={'intro'}
                index={'int'}
              >
                I've been a front developer for 4 years.
              </SplitText>

              <SplitText
                animation={'up'}
                setTime={5}
                scroll={'intro2'}
                index={'intT'}
              >
                This is the portfolio that introduces me for the first time.
              </SplitText>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

// export default memo(withTranslation('translations')(Main));
export default memo(Main);
