import React from 'react';
import { Link } from 'react-router-dom';
import Layout from '../compositions/layout';
import InnerLayout from '../compositions/innerLayout';

const Footprint = () => {
  return (
    <>
      <Layout className='card'>
        <div>Footprint</div>
        <InnerLayout className='inner-card'>
          <Link to='footprint'><button>경력사항</button></Link>
          <Link to='footprint'><button>암호화폐 관련 웹 서비스</button></Link>
          <Link to='footprint'><button>외부 수주</button></Link>
        </InnerLayout>
      </Layout>
    </>

  )
}

export default Footprint;
