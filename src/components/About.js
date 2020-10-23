import React, { useState } from 'react';
import AboutDetail from './AboutDetail';
import Layout from '../composition/layout';
import InnerLayout from '../composition/innerLayout';

const About = () => {
  const [detail, setDetail] = useState(false);
  const onToggle = () => setDetail(!detail);

  return (
    <>
      <Layout className='card'>
        {/* 컨텐츠1(간략소개, 키워드, 성장배경 ?) */}
        {/* 확장되는 키워드?, 탭형태의 성장배경? */}
        <div>About</div>
        {detail ? (
          <AboutDetail onToggle={onToggle} detail={detail} />
        ) : (
            <InnerLayout className='inner-card'>
              <div>사용자 중심의 개발</div>
              {/* <p>'대부분 이렇게 하니까', '늘 그래왔으니까' 같은 이유로 매번 변함없이 개발하는 것을 정말 싫어합니다. 불편함은 고치고 편리함을 더 개선하는 개발자입니다.</p> */}
              <div>될때까지</div>
              {/* <p>목적이 정해지고 필요하다고 생각되면, 그게 불가능해 보여도, 큰 힘이 들더라도, 많은 시간이 들더라도 꿋꿋이 해내고 성취감을 얻는 걸 좋아합니다.</p> */}
              <div>아이디어 뱅크</div>
              {/* <p>뻔 한걸 뻔하게 하기 싫어합니다. 항상 새로움에 목말라 있습니다. 남과 같이 해서는 남이상 될 수 없다고 생각합니다.</p> */}
              <div>소신있는 스폰지밥</div>
              {/* <p>다양한 신념, 생각, 취향을 존중하고 이해하고 인정하지만, 아닌 건 아니라고 말할 수 있습니다.</p> */}
              <div>솔직한 사람</div>
              {/* <p>나를 포장하고, 잘못을 숨기고, 앞과 뒤가 다른 행동을 하지 않습니다. 자신과 상대방 누구에게도 좋지 않다고 생각합니다.</p> */}
              <button onClick={onToggle}>더 보기</button>
            </InnerLayout>
          )}
      </Layout>
    </>
  )
}

export default About;
