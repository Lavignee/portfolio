import React, { memo, useState, useRef } from 'react';
import footprintCircle from 'static/images/footprint-circle.svg';
import footprintArrow from 'static/images/footprint-arrow.svg';
import footprint from 'static/images/footprint.jpg';
import './footprint.scss';
import { useSelector, shallowEqual } from 'react-redux';
import { isDesktop } from 'react-device-detect';
import { gsap } from 'gsap';
import Footer from 'components/footer';

const Footprint = ({ onHover, onClick, onLeave }) => {
  const [currentButtonDelay] = useSelector(state => [state.CommonValue.currentButtonDelay], shallowEqual);

  const footprintCursorRef = useRef(null);
  const [clipPathReady, setClipPathReady] = useState(false);

  const footprintMoveCircle = (e) => {
    gsap.to(footprintCursorRef.current, 0.3, {
      css: {
        clipPath: `circle(15% at ${e.pageX}px ${e.pageY - (window.innerHeight / 2)}px)`
      }
    });
  }

  return (
    <>
      <section id='footprint' className='container-fluid footprint-section' onMouseEnter={() => setClipPathReady(true)} onMouseMove={(e) => footprintMoveCircle(e)} onMouseLeave={() => setClipPathReady(false)}>
        <div className={`footprint-image-mask${clipPathReady ? ' will-change' : ''}`} ref={footprintCursorRef} >
          <img src={footprint} alt='footprint' />
        </div>

        <div className='container footprint-title-area'>
          <div className='footprint-content'>
            <div className='footprint-circle-area'>
              {isDesktop && <img width='100%' height='auto' src={footprintCircle} alt='footprint design circle' />}
            </div>
            <h2>Footprint</h2>
            <span>프로젝트 / 경력사항 / 외부수주</span>
            <div className='footprint-arrow-area'>
              <img width='100%' height='100%' src={footprintArrow} alt='footprint design arrow' />
            </div>
          </div>
          <div className={`link-button${currentButtonDelay ? ' delay' : ''}`} onMouseEnter={() => onHover(' go-cursor')} onMouseLeave={() => onLeave()} onClick={() => onClick('/footprint')}></div>
        </div>

        <div className='footprint-back-text'>FOOTPRINT</div>
      </section>
      <Footer />
    </>
  )
}

export default memo(Footprint);
