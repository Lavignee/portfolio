import React from 'react';
import { Link } from 'react-router-dom';
import './FootprintComponent.scss';

const FootprintComponent = () => {
  return (
    <>
      <section className='container footprint'>
        <h1>Footprint</h1>
        <Link to='footprint'><button>경력사항</button></Link>
        <Link to='footprint'><button>암호화폐 관련 웹 서비스</button></Link>
        <Link to='footprint'><button>외부 수주</button></Link>
      </section>
    </>

  )
}

export default FootprintComponent;
