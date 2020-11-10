import React from 'react';
import { Link } from 'react-router-dom';
import IconSliderComponent from '../IconSliderComponent';
import './SkillComponent.scss';

const SkillComponent = () => {
  return (
    <>
      <section className='container fluid skill-section'>
        <IconSliderComponent />
        <IconSliderComponent reverse={'reverse'} />
        <IconSliderComponent />
        <IconSliderComponent reverse={'reverse'} />
        <div className='container'>
          <div className='skill-frame'>
            <h1 className='title-text skill-title'>Skill</h1>
            <div className='row list-frame'>
              <div className='off-m-2 col-m-10 off-xl-4 col-xl-8 off-w-6 col-w-6 list'><Link to='/skill'>언어</Link></div>
              <div className='off-m-2 col-m-10 off-xl-4 col-xl-8 off-w-6 col-w-6 list'><Link to='/skill'>프레임워크&<br />라이브러리</Link></div>
              <div className='off-m-2 col-m-10 off-xl-4 col-xl-8 off-w-6 col-w-6 list'><Link to='/skill'>개발 도구</Link></div>
              <div className='off-m-2 col-m-10 off-xl-4 col-xl-8 off-w-6 col-w-6 list'><Link to='/skill'>최근 관심 기술</Link></div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default SkillComponent;
