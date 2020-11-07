import React from 'react';
import { Link } from 'react-router-dom';
import aboutBanner from '../../Static/images/about1920.jpg';
import SplitTextComponent from '../SplitTextComponent';
import './AboutComponent.scss';

const AboutComponent = () => {
  return (
    <>
      <section className='container fluid about-section'>
        <div className='about-frame'>
          <div className='about-background'></div>
          <div className='container'>
            <div className='title-frame'>
              <div className='size-wrap'>
                <img className='title-image-background' src={aboutBanner} alt="About Banner background" />
                <img className='title-image' src={aboutBanner} alt="About Banner" />
                <h1 className='title-text about-title'>About</h1>
              </div>
            </div>
            <div className='row about-contents'>
              <div className='col-m-12 col-xl-6 col-w-4'>
                <h2 className='about-tag'><SplitTextComponent animation={'up'} scroll={'about'} index={'one'}># 애자일</SplitTextComponent></h2>
                <div className='type-p'><SplitTextComponent animation={'default'} scroll={'about'} index={'p-one'}>'대부분 이렇게 하니까', '늘 그래왔으니까' 같은 이유로 매번 변함없이 개발하는 것을 정말 싫어합니다. 불편함은 빠르고 합리적으로 처리해야 하고, 갱신된 정보는 함께 일하는 모두와 공유해야 합니다.</SplitTextComponent></div>
              </div>
              <div className='col-m-12 col-xl-6 col-w-4'>
                <h2 className='about-tag'><SplitTextComponent animation={'up'} scroll={'about'} index={'two'}># 될때까지</SplitTextComponent></h2>
                <div className='type-p'><SplitTextComponent animation={'default'} scroll={'about'} index={'p-two'}>목적이 정해지고 필요하다고 생각되면, 그게 불가능해 보여도, 큰 힘이 들더라도, 많은 시간이 들더라도 꿋꿋이 해내고 성취감을 얻는 걸 좋아합니다.</SplitTextComponent></div>
              </div>
              <div className='col-m-12 col-xl-6 col-w-4'>
                <h2 className='about-tag'><SplitTextComponent animation={'up'} scroll={'about'} index={'three'}># 아이디어</SplitTextComponent></h2>
                <div className='type-p'><SplitTextComponent animation={'default'} scroll={'about'} index={'p-three'}>뻔 한걸 뻔하게 하기 싫어합니다. 항상 새로움에 목말라 있습니다. 남과 같이 해서는 남보다 잘할 수 없다고 생각합니다.</SplitTextComponent></div>
              </div>
              <div className='col-m-12 col-xl-6 col-w-4'>
                <h2 className='about-tag'><SplitTextComponent animation={'up'} scroll={'about'} index={'four'}># 소신있는</SplitTextComponent></h2>
                <div className='type-p'><SplitTextComponent animation={'default'} scroll={'about'} index={'p-four'}>다양한 생각을 존중하고 이해하고 인정하면서도, 아닌 건 아니라고 말할 수 있습니다.</SplitTextComponent></div>
              </div>
              <div className='col-m-12 col-xl-6 col-w-4'>
                <h2 className='about-tag'><SplitTextComponent animation={'up'} scroll={'about'} index={'five'}># 솔직한</SplitTextComponent></h2>
                <div className='type-p'><SplitTextComponent animation={'default'} scroll={'about'} index={'p-five'}>나를 포장하고, 잘못은 감추는, 앞,뒤 다른 행동을 하지 않습니다. 자신과 상대방 누구에게도 좋지 않다고 생각합니다.</SplitTextComponent></div>
              </div>
              <div className='col-m-12 col-xl-6 col-w-4'>
                <h2 className='about-tag'><SplitTextComponent animation={'up'} scroll={'about'} index={'five'}># 계획적인</SplitTextComponent></h2>
                <div className='type-p'><SplitTextComponent animation={'default'} scroll={'about'} index={'p-five'}>일의 순서와 계획을 잘 세우는 편입니다. 갑작스러운 변수에도 유연하고 침착하게 대처할 수 있습니다.</SplitTextComponent></div>
              </div>
              <div className='col-m-12 col-xl-6 col-w-4'>
                <h2 className='about-tag'><SplitTextComponent animation={'up'} scroll={'about'} index={'five'}># 효율적인</SplitTextComponent></h2>
                <div className='type-p'><SplitTextComponent animation={'default'} scroll={'about'} index={'p-five'}>일상생활부터 개발까지 항상 효율적인 생각과 행동을 하려고 노력합니다.</SplitTextComponent></div>
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

export default AboutComponent;
