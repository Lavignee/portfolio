// import { Trans, withTranslation } from 'react-i18next';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import React from 'react';

import './main.scss';

import useStore from '../../store/useStore';
import SplitText from '../splitText';
import VideoToCanvas from '../videoToCanvas';

gsap.registerPlugin(ScrollTrigger);

// Props로 받는 이벤트들에 대한 interface 정의.
interface MainProps {
  _onHover: (hoverCursor: string, hoverText?: string | null) => void;
  _onLeave: (hoverText?: string | null) => void;
}

const Main = ({ _onHover, _onLeave }: MainProps) => {
  // 배경에 사용 될 영상 파일.
  const src640 = new URL('../../static/videos/video640.mp4', import.meta.url);

  // 전역 스토어 액션.
  const onScrollIntro = useStore((s) => s.splitTextStart);
  const makeScroll = useStore((s) => s.makeSmoothScroll);

  const [videoReady, setVideoReady] = React.useState(false);
  const [canvasReady, setCanvasReady] = React.useState(true);

  // 스크롤 트리거 설정.
  const mainComponentGSAP = React.useCallback(() => {
    const canvasFrames = gsap.utils.toArray<HTMLElement>('.video-area .canvas-frame');
    const targetToLefts = gsap.utils.toArray<HTMLElement>('.video-area .left');
    const targetToRights = gsap.utils.toArray<HTMLElement>('.video-area .right');
    const canvasTrigger = {
      trigger: '.main-text-frame',
      start: 'top',
      end: 'bottom',
      scrub: 1,
    };

    canvasFrames.forEach((target) => {
      gsap.to(target, {
        scale: 0.8,
        y: -300,
        modifiers: {
          y: (y) => {
            y = parseInt(y, 10);
            var newY = y.toFixed(0);
            return `${newY}px`;
          },
        },
        scrollTrigger: canvasTrigger,
      });
    });

    targetToLefts.forEach((target) => {
      gsap.to(target, {
        x: -50,
        modifiers: {
          x: (x) => {
            x = parseInt(x, 10);
            var newX = x.toFixed(0);
            return `${newX}px`;
          },
        },
        scrollTrigger: canvasTrigger,
      });
    });

    targetToRights.forEach((target) => {
      gsap.to(target, {
        x: 50,
        modifiers: {
          x: (x) => {
            x = parseInt(x, 10);
            var newX = x.toFixed(0);
            return `${newX}px`;
          },
        },
        scrollTrigger: canvasTrigger,
      });
    });

    gsap.to('.intro-ment', {
      scrollTrigger: {
        trigger: '.intro-ment',
        start: 'top center',
        onEnter: () => onScrollIntro('intro'),
        end: 'bottom center',
      },
    });

    gsap.to('.intro-ment', {
      scrollTrigger: {
        trigger: '.intro-ment',
        start: 'top center-=400',
        onEnter: () => onScrollIntro('intro2'),
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
  }, [onScrollIntro]);

  // gsap가 준비된 후 애니메이션 동작.
  React.useEffect(() => {
    makeScroll(true);
    setVideoReady(true);
    videoReady && mainComponentGSAP();

    return () => {
      onScrollIntro('');
      const triggers = ScrollTrigger.getAll();
      triggers.forEach((trigger) => {
        trigger.kill();
      });
    };
  }, [videoReady, mainComponentGSAP, onScrollIntro, makeScroll]);

  return (
    <section id='main' className='container main-section'>
      <div className='main-background'>
        <div className='background'></div>
        {/* Canvas 영역. */}
        <VideoToCanvas src={src640} resolX={640} resolY={360} canvasReady={canvasReady} />
      </div>

      <div className='main-content-frame'>
        {/* video 로드 시간을 벌기 위한 커버. */}
        <div className='video-delay-cover'></div>
        {/* 센터 텍스트 영역 */}
        <div className='main-text-frame'>
          <div
            className='main-text'
            onMouseEnter={() => _onHover(' reverse-cursor')}
            onMouseLeave={() => _onLeave()}
          >
            <span>FRONT - END DEVELOPER</span>
            <p>Doyoung Lee</p>
          </div>
        </div>

        {/* 하단 intro splitText. */}
        <div className='into-ment-frame'>
          <div className='intro-ment'>
            <div className='type-p'>
              <SplitText animation={'up'} setTime={5} scroll={'intro'} index={'int'}>
                I've been a front developer for 4 years.
              </SplitText>

              <SplitText animation={'up'} setTime={5} scroll={'intro2'} index={'intT'}>
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
export default React.memo(Main);
