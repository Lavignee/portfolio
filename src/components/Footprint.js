import React, { useState } from 'react';
import FootprintDetail from './FootprintDetail';
import Layout from '../composition/layout';
import InnerLayout from '../composition/innerLayout';

const Footprint = () => {
  const [detail, setDetail] = useState(false);
  const onToggle = () => setDetail(!detail);

  return (
    <>
      <Layout className='card'>
        {/* 노이즈 추가해보자 */}
        {/* 페럴렉스로(스샷, 밑줄기능샘플) 일반적인 컨텐츠 배치로 확장가능하게, 확장하면 소개말*/}
        <div>Footprint</div>
        {detail ? (
          <FootprintDetail onToggle={onToggle} detail={detail} />
        ) : (
            <InnerLayout className='inner-card'>
              <button onClick={onToggle}>경력사항</button>
              <button onClick={onToggle}>암호화폐 관련 웹 서비스</button>
              <button onClick={onToggle}>외부 수주</button>
            </InnerLayout>
          )}
      </Layout>
    </>

  )
}

export default Footprint;
