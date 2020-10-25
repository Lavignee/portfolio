import React from 'react';
import { Link } from 'react-router-dom';
import Layout from '../compositions/layout';
import InnerLayout from '../compositions/innerLayout';

const Skill = () => {

  return (
    <>
      <Layout className='card'>
        <div>Skill</div>
        <InnerLayout className='inner-card'>
          <Link to='skill'><button>언어</button></Link>
          <Link to='skill'><button>프레임워크&라이브러리</button></Link>
          <Link to='skill'><button>개발 도구</button></Link>
          <Link to='skill'><button>최근 관심 기술</button></Link>
        </InnerLayout>
      </Layout>
    </>
  )
}

export default Skill;
