import React, { useState } from 'react';
import SkillDetail from './SkillDetail';
import Layout from '../composition/layout';
import InnerLayout from '../composition/innerLayout';

const Skill = () => {
  const [detail, setDetail] = useState(false);
  const onToggle = () => setDetail(!detail);

  return (
    <>
      <Layout className='card'>
        {/* 컨텐츠2(다루는 언어, 프레임워크, 라이브러리, 공부 및 관심분야)<br /> */}
        {/* 스크롤슬라이드?, 코인리스트..? */}
        <div>Skill</div>
        {detail ? (
          <SkillDetail onToggle={onToggle} detail={detail} />
        ) : (
            <InnerLayout className='inner-card'>
              <button onClick={onToggle}>언어</button>
              <button onClick={onToggle}>프레임워크&라이브러리</button>
              <button onClick={onToggle}>개발 도구</button>
              <button onClick={onToggle}>최근 관심 기술</button>
            </InnerLayout>
          )}
      </Layout>
    </>
  )
}

export default Skill;
