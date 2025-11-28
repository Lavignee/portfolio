import React from 'react';
import { isDesktop } from 'react-device-detect';
import { gsap } from 'gsap';

// import './footprint.scss';

import Footer from '../footer';
import { useCommonValueStore } from '@/stores/commonValue';

// Props로 받는 이벤트들에 대한 interface 정의.
interface FootprintProps {
  _onHover: (path: string, hoverText?: string | null) => void;
  _onClick: (path: string, hoverText?: string | null) => void;
  _onLeave: (hoverText?: string | null) => void;
}

const Footprint = ({ _onHover, _onClick, _onLeave }: FootprintProps) => {
  const currentButtonDelay = useCommonValueStore((s) => s.currentButtonDelay);
  const currentScrollLimit = useCommonValueStore((s) => s.currentScrollLimit);
  const currentScrollValue = useCommonValueStore((s) => s.currentScrollValue);

  const footprintCursorRef = React.useRef(null);
  const [clipPathReady, setClipPathReady] = React.useState(false);

  // 클립패스 위치 계산.
  const footprintMoveCircle = (e: React.MouseEvent) => {
    if (typeof window === 'undefined') return null;
    gsap.to(footprintCursorRef.current, {
      duration: 0.3,
      css: {
        clipPath: `circle(20% at ${e.pageX}px ${
          e.pageY -
          (window.innerHeight / 2 + (+currentScrollLimit - +currentScrollValue))
        }px)`,
      },
    });
  };

  return (
    <>
      <section
        id='footprint'
        className='container-fluid footprint-section'
        onMouseEnter={isDesktop ? () => setClipPathReady(true) : undefined}
        onMouseMove={isDesktop ? (e) => footprintMoveCircle(e) : undefined}
        onMouseLeave={isDesktop ? () => setClipPathReady(false) : undefined}
      >
        <div
          className={`footprint-image-mask${
            clipPathReady ? ' will-change' : ''
          }`}
          ref={footprintCursorRef}
        >
          {isDesktop && <img src={'/images/footprint.jpg'} alt='footprint' />}
        </div>

        <div className='container footprint-title-area'>
          <div className='footprint-content'>
            <div className='footprint-circle-area'>
              {isDesktop && (
                <img
                  width='100%'
                  height='auto'
                  src={'/images/footprint-circle.svg'}
                  alt='footprint design circle'
                />
              )}
            </div>

            <h2>Footprint</h2>
            <span>프로젝트 / 경력사항 / 외부수주</span>
            <div className='footprint-arrow-area'>
              <img
                width='100%'
                height='100%'
                src={'/images/footprint-arrow.svg'}
                alt='footprint design arrow'
              />
            </div>
          </div>

          <div
            className={`link-button${currentButtonDelay ? ' delay' : ''}`}
            onMouseEnter={() => _onHover(' go-cursor')}
            onMouseLeave={() => _onLeave()}
            onClick={() => _onClick('/footprint')}
          ></div>
        </div>

        <div className='footprint-back-text'>FOOTPRINT</div>
      </section>
      <Footer />
    </>
  );
};

export default React.memo(Footprint);
