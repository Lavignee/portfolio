import React, { forwardRef } from 'react';
import { Link } from 'react-router-dom';
import './SkillComponent.scss';

const SkillComponent = (props, ref) => {
  return (
    <>
      <section ref={ref} className='container skill'>
        <h1>Skill</h1>
        <div className='row'>
          <div><Link to='skill'><button>언어</button></Link></div>
          <div><Link to='skill'><button>프레임워크&라이브러리</button></Link></div>
          <div><Link to='skill'><button>개발 도구</button></Link></div>
          <div><Link to='skill'><button>최근 관심 기술</button></Link></div>
        </div>
      </section>
    </>
  )
}

export default forwardRef(SkillComponent);
