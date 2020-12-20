import React from 'react';
import { Link } from 'react-router-dom';
import footprintCircle from '../../Static/images/footprint-circle.svg';
import footprintArrow from '../../Static/images/footprint-arrow.svg';
import FooterContainer from '../../Containers/FooterContainer';

import './FootprintComponent.scss';


const FootprintComponent = () => {
  return (
    <>
      <section id='footprint' className='container-fluid footprint-section'>
        <div className='container footprint-title-area'>
          <div className='footprint-content'>
            <div className='footprint-circle-area'>
              <img src={footprintCircle} alt="footprint design circle" />
            </div>
            <h2>Footprint</h2>
            <span>프로젝트 / 경력사항 / 외부수주</span>
            <div className='footprint-arrow-area'>
              <img src={footprintArrow} alt="footprint design arrow" />
            </div>
          </div>
          <Link to='footprint'></Link>
        </div>
        <div className='footprint-back-text'>FOOTPRINT</div>
      </section>
      <FooterContainer />
    </>
  )
}

export default FootprintComponent;
