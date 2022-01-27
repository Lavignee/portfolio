import React from 'react';
import { useSelector, shallowEqual } from 'react-redux';
import { isDesktop } from 'react-device-detect';
import { gsap } from 'gsap';

import footprintCircle from '../../static/images/footprint-circle.svg';
import footprintArrow from '../../static/images/footprint-arrow.svg';
import footprint from '../../static/images/footprint.jpg';

import './footprint.scss';

import Footer from '../footer';
import { RootState } from '../../Modules';

// Props로 받는 이벤트들에 대한 interface 정의.
interface FootprintProps {
  _onHover: (path: string, hoverText?: string | null) => void;
  _onClick: (path: string, hoverText?: string | null) => void;
  _onLeave: (hoverText?: string | null) => void;
}

const Footprint = ({ _onHover, _onClick, _onLeave }: FootprintProps) => {
  // redux useSelector 정의.
  const [currentButtonDelay, currentScrollLimit, currentScrollValue] = useSelector((state: RootState) => [state.CommonValue.currentButtonDelay, state.CommonValue.currentScrollLimit, state.CommonValue.currentScrollValue], shallowEqual);

  const footprintCursorRef = React.useRef(null);
  const [clipPathReady, setClipPathReady] = React.useState(false);

  // 클립패스 위치 계산.
  const footprintMoveCircle = (e: React.MouseEvent) => {
    gsap.to(footprintCursorRef.current, {
      duration: 0.3,
      css: { clipPath: `circle(20% at ${e.pageX}px ${e.pageY - (window.innerHeight / 2 + (+currentScrollLimit - +currentScrollValue))}px)` },
    });
  };

  return (
    <>
      <section
        id='footprint'
        className='container-fluid footprint-section'
        onMouseEnter={() => setClipPathReady(true)}
        onMouseMove={(e) => footprintMoveCircle(e)}
        onMouseLeave={() => setClipPathReady(false)}>
        <div
          className={`footprint-image-mask${clipPathReady ? ' will-change' : ''}`}
          ref={footprintCursorRef}>
          <img src={footprint} alt='footprint' />
        </div>

        <div className='container footprint-title-area'>
          <div className='footprint-content'>
            <div className='footprint-circle-area'>
              {isDesktop && (
                <img
                  width='100%'
                  height='auto'
                  src={footprintCircle}
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
                src={footprintArrow}
                alt='footprint design arrow'
              />
            </div>
          </div>

          <div
            className={`link-button${currentButtonDelay ? ' delay' : ''}`}
            onMouseEnter={() => _onHover(' go-cursor')}
            onMouseLeave={() => _onLeave()}
            onClick={() => _onClick('/footprint')}></div>
        </div>

        <div className='footprint-back-text'>FOOTPRINT</div>
      </section>
      <Footer />
    </>
  );
};

export default React.memo(Footprint);
