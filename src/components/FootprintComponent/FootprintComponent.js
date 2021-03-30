import React, { useRef } from 'react';
import { Link } from 'react-router-dom';
import { gsap } from "gsap";
import { useDispatch } from 'react-redux';
import { changeClassName, changeSecondClassName } from '../../Modules/CursorModule';
import footprintCircle from '../../Static/images/footprint-circle.svg';
import footprintArrow from '../../Static/images/footprint-arrow.svg';
import FooterContainer from '../../Containers/FooterContainer';
import footprint from '../../Static/images/footprint.jpg';

import './FootprintComponent.scss';

const FootprintComponent = () => {
  const footprintCursorRef = useRef(null);
  const dispatch = useDispatch();
  const cursorClass = (className) => dispatch(changeClassName(className));
  const cursorSecondClass = (secondClassName) => dispatch(changeSecondClassName(secondClassName));

  const footprintMoveCircle = (e) => {
    gsap.to(footprintCursorRef.current, 0.3, {
      css: {
        clipPath: `circle(15% at ${e.pageX}px ${e.pageY - (window.innerHeight / 2)}px)`
      }
    });
  }

  const footprintDetailHover = () => {
    cursorClass(' go-cursor')
  }

  const onLeave = () => {
    cursorClass('')
    cursorSecondClass('')
  };

  return (
    <>
      <section id='footprint' className='container-fluid footprint-section' onMouseMove={(e) => footprintMoveCircle(e)}>
        <div className='footprint-image-mask' ref={footprintCursorRef} >
          <img src={footprint} alt="footprint" />
        </div>

        <div className='container footprint-title-area'>
          <div className='footprint-content'>
            <div className='footprint-circle-area'>
              <img src={footprintCircle} alt='footprint design circle' />
            </div>
            <h2>Footprint</h2>
            <span>프로젝트 / 경력사항 / 외부수주</span>
            <div className='footprint-arrow-area'>
              <img src={footprintArrow} alt='footprint design arrow' />
            </div>
          </div>
          <Link to='footprint' onMouseEnter={footprintDetailHover} onMouseLeave={onLeave} onClick={onLeave}></Link>
        </div>

        <div className='footprint-back-text'>FOOTPRINT</div>
      </section>
      <FooterContainer />
    </>
  )
}

export default FootprintComponent;
