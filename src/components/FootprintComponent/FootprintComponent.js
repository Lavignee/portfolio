import React, { forwardRef } from 'react';
import { Link } from 'react-router-dom';
import './FootprintComponent.scss';

const FootprintComponent = (props, ref) => {
  return (
    <>
      <section ref={ref} className='container footprint'>
        <h1>Footprint</h1>
        <Link to='footprint'><button>경력사항</button></Link>
        <Link to='footprint'><button>프로젝트</button></Link>
        <Link to='footprint'><button>외부 수주</button></Link>
      </section>
    </>

  )
}

export default forwardRef(FootprintComponent);
