import React, { memo, useEffect, useState } from 'react';
// import src1920 from 'static/videos/video1920.mp4';
import src1280 from 'static/videos/video1280.mp4';
import src640 from 'static/videos/video640.mp4';
import './MainComponent.scss';
import { useDispatch, useSelector, shallowEqual } from 'react-redux';
import { splitTextStart } from '../../modules/CommonValueModule';
import { Trans, withTranslation } from 'react-i18next';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
gsap.registerPlugin(ScrollTrigger);
import VideoToCanvasComponent from 'components/VideoToCanvasComponent';
import SplitTextComponent from 'components/SplitTextComponent';

const MainComponent = () => {
  const dispatch = useDispatch();
  const onScrollIntro = () => dispatch(splitTextStart('intro'));
  const onScrollIntro2 = () => dispatch(splitTextStart('intro2'));
  const [language, currentGsapState] = useSelector(state => [state.CommonValueModule.language, state.CommonValueModule.currentGsapState], shallowEqual);

  const [canvasReady, setCanvasReady] = useState(true);

  const mainComponentGSAP = () => {
    const canvasFrames = gsap.utils.toArray('.video-area .canvas-frame');
    const targetToLefts = gsap.utils.toArray('.video-area .left');
    const targetToRights = gsap.utils.toArray('.video-area .right');
    const canvasTrigger = {
      trigger: '.main-text-frame',
      start: 'top',
      end: 'bottom',
      scrub: 1
    }

    canvasFrames.forEach(target => {
      gsap.to(target, {
        scale: 0.8,
        y: -300,
        modifiers: {
          y: (y) => {
            y = parseInt(y);
            var newY = y.toFixed(0);
            return newY + 'px';
          }
        },
        scrollTrigger: canvasTrigger
      })
    });

    targetToLefts.forEach(target => {
      gsap.to(target, {
        x: -50,
        modifiers: {
          x: (x) => {
            x = parseInt(x);
            var newX = x.toFixed(0);
            return newX + 'px';
          }
        },
        scrollTrigger: canvasTrigger
      });
    });

    targetToRights.forEach(target => {
      gsap.to(target, {
        x: 50,
        modifiers: {
          x: (x) => {
            x = parseInt(x);
            var newX = x.toFixed(0);
            return newX + 'px';
          }
        },
        scrollTrigger: canvasTrigger
      });
    });

    gsap.to('.intro-ment', {
      scrollTrigger: {
        trigger: '.intro-ment',
        start: 'top center',
        onEnter: () => onScrollIntro(),
        // onEnterBack: () => onScrollIntro(),
        end: 'bottom center'
      }
    });

    gsap.to('.intro-ment', {
      scrollTrigger: {
        trigger: '.intro-ment',
        start: 'top center-=400',
        onEnter: () => onScrollIntro2(),
        // onEnterBack: () => onScrollIntro2(),
        end: 'bottom center-=400'
      }
    });

    gsap.to('.main-section', {
      scrollTrigger: {
        trigger: '.main-section',
        start: 'top-=1 top',
        onEnter: () => setCanvasReady(true),
        onEnterBack: () => setCanvasReady(true),
        onLeave: () => setCanvasReady(false),
        onLeaveBack: () => setCanvasReady(false),
        end: 'bottom top'
      }
    });

    gsap.to('header', {
      scrollTrigger: {
        trigger: '.main-section',
        start: 'top-=1 top',
        toggleClass: { targets: 'header', className: 'invert' },
        end: 'bottom top'
      }
    });

    gsap.to('.gnb-button', {
      scrollTrigger: {
        trigger: '.main-section',
        start: 'top top+=72',
        toggleClass: { targets: '.menu-img', className: 'invert' },
        end: 'bottom top+=72'
      }
    });
  }

  useEffect(() => {
    currentGsapState && mainComponentGSAP();

    return () => {
      let triggers = ScrollTrigger.getAll();
      triggers.forEach(trigger => {
        trigger.kill();
      });
    }
  }, [currentGsapState])

  return (
    <section id='main' className='container main-section'>
      <div className='main-background'>
        <div className='background'></div>
        {/* TODO: 해상도별 영상 성능테스트 후 적용(용량, 버퍼) */}
        {matchMedia('screen and (min-width: 985px)').matches ? (
          // <VideoToCanvasComponent VideoSource={src1920} resolX={1920} resolY={1080} />
          <VideoToCanvasComponent src={src1280} resolX={1280} resolY={720} canvasReady={canvasReady} />
        ) : (
          <VideoToCanvasComponent src={src640} resolX={640} resolY={360} canvasReady={canvasReady} />
        )}
      </div>

      <div className='main-content-frame'>
        <div className='main-text-frame'>
          <div className='main-text'>
            <span>FRONT - END DEVELOPER</span>
            <p>Doyoung Lee</p>
          </div>
        </div>

        <div className='into-ment-frame'>
          <div className='intro-ment'>
            <div className='type-p'>
              <SplitTextComponent animation={'up'} setTime={5} scroll={'intro'} index={'int'} ready={canvasReady} depth>This  is  the  portfolio  that  introduces  me  for  the  first  time.</SplitTextComponent>

              <SplitTextComponent animation={'up'} setTime={5} scroll={'intro2'} index={'int2'} ready={canvasReady} depth>It  was  produced  focusing  on  simple  but  delicate  details  without  any  additional  design.</SplitTextComponent>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default memo(withTranslation('translations')(MainComponent));
