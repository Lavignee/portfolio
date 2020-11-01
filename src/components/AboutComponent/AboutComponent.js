import React, { forwardRef } from 'react';
import { Link } from 'react-router-dom';
import './AboutComponent.scss';

const AboutComponent = (props, ref) => {
  return (
    <>
      <section ref={ref} className='container fluid about'>
        <div className='about-frame'>
          <div className='about-background'></div>
          <div className='container'>
            <div className='row'>
              <div className='title-image'></div>
              <h1>About</h1>
            </div>
            <div className='row about-contents'>
              <div className='col-m-12 col-xl-6 col-w-4'>
                <h2>애자일한 개발</h2>
                <p>'대부분 이렇게 하니까', '늘 그래왔으니까' 같은 이유로 매번 변함없이 개발하는 것을 정말 싫어합니다. 불편함은 빠르고 합리적으로 처리해야 하고, 정보는 효율적으로 공유해야 합니다.</p>
              </div>
              <div className='col-m-12 col-xl-6 col-w-4'>
                <h2>될때까지</h2>
                <p>목적이 정해지고 필요하다고 생각되면, 그게 불가능해 보여도, 큰 힘이 들더라도, 많은 시간이 들더라도 꿋꿋이 해내고 성취감을 얻는 걸 좋아합니다.</p>
              </div>
              <div className='col-m-12 col-xl-6 col-w-4'>
                <h2>아이디어 뱅크</h2>
                <p>뻔 한걸 뻔하게 하기 싫어합니다. 항상 새로움에 목말라 있습니다. 남과 같이 해서는 남보다 잘할 수 없다고 생각합니다.</p>
              </div>
              <div className='col-m-12 col-xl-6 col-w-4'>
                <h2>소신있는 스폰지밥</h2>
                <p>다양한 생각을 존중하고 이해하고 인정하면서도, 아닌 건 아니라고 말할 수 있습니다.</p>
              </div>
              <div className='col-m-12 col-xl-6 col-w-4'>
                <h2>솔직한 사람</h2>
                <p>나를 포장하고, 잘못을 숨기고, 앞과 뒤가 다른 행동을 하지 않습니다. 자신과 상대방 누구에게도 좋지 않다고 생각합니다.</p>
              </div>
              <div className='col-m-12 col-xl-6 col-w-4'>
                <div className='t-right'>
                  <Link to='about'><button>성장 배경</button></Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default forwardRef(AboutComponent);
