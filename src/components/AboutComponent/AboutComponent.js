import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { gsap } from "gsap";
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useDispatch } from 'react-redux';
import { ScrollAbout } from '../../Modules/ScrollValueModule';
import aboutBanner from '../../Static/images/about1920.jpg';
import SplitTextComponent from '../SplitTextComponent';
import './AboutComponent.scss';

gsap.registerPlugin(ScrollTrigger);

const AboutComponent = () => {
  const dispatch = useDispatch();
  const onScrollAbout = () => dispatch(ScrollAbout('about'));

  useEffect(() => {
    // 어바웃 컨텐츠 애니메이션
    gsap.fromTo('.about-title-image', {
      maxWidth: 200 + '%',
      autoAlpha: 0,
    }, {
      maxWidth: 100 + '%',
      autoAlpha: 1,
      scrollTrigger: {
        id: 'about-title-image',
        trigger: '.intro-ment',
        start: 'bottom+=100 center',
        end: 'bottom+=50' + '%',
        scrub: 0.5,
      }
    });

    gsap.to('.about-title', {
      right: 0,
      autoAlpha: 1,
      scrollTrigger: {
        id: 'about-title',
        trigger: '.intro-ment',
        start: 'bottom+=100 center',
        end: 'bottom+=50' + '%',
        scrub: 0.5,
      }
    })

    gsap.to('.split-frame', {
      scrollTrigger: {
        id: 'split-frame',
        trigger: '.about-title',
        start: 'top center',
        onEnter: self => self.isActive ? onScrollAbout() : '',
        end: 'bottom center',
      }
    });
  }, [])
  return (
    <>
      <section className='container about-section fluid'>
        <div className='container about-frame'>
          <div className='title-frame'>
            <div className='size-wrap'>
              <img className='about-title-image-background' src={aboutBanner} alt="About Banner background" />
              <img className='about-title-image' src={aboutBanner} alt="About Banner" />
              <h1 className='title-text about-title'>About</h1>
            </div>
          </div>

          <div className='about-contents'>
            <div className='row'>
              <div className='col-12 col-xs-10 col-s-8 col-m-6 col-xl-4'>
                <h2 className='about-tag'><SplitTextComponent animation={'up'} scroll={'about'} setTime={300} depth noContainer># 애자일</SplitTextComponent></h2>
                <div className='type-p'><SplitTextComponent scroll={'about'}>'대부분 이렇게 하니까', '늘 그래왔으니까' 같은 이유로 매번 변함없이 개발하는 것을 정말 싫어합니다. 불편함은 빠르고 효율적으로 처리해야 하고, 정보와 깨달음은 모두와 공유합니다.</SplitTextComponent></div>
              </div>
            </div>
            <div className='row'>
              <div className='col-12 col-xs-10 off-xs-1 col-s-8 off-s-2 col-m-6 off-m-3 col-xl-4 off-xl-4'>
                <h2 className='about-tag'><SplitTextComponent animation={'up'} scroll={'about'} setTime={300} depth noContainer># 될때까지</SplitTextComponent></h2>
                <div className='type-p'><SplitTextComponent scroll={'about'}>목표가 생기고 필요하다고 생각되면, 많은 노력과 시간이 들더라도 꿋꿋이 해내어 성취감을 얻는 걸 좋아합니다.</SplitTextComponent></div>
              </div>
            </div>
            <div className='row'>
              <div className='col-12 col-xs-10 off-xs-2 col-s-8 off-s-4 col-m-6 off-m-6 col-xl-4 off-xl-8'>
                <h2 className='about-tag'><SplitTextComponent animation={'up'} scroll={'about'} setTime={300} depth noContainer># 솔직한</SplitTextComponent></h2>
                <div className='type-p'><SplitTextComponent scroll={'about'}>아닌것을 맞다고, 싫은 것 을 좋다고 하지 않습니다. 단점과 잘못을 포장하지 않습니다. 양보를 영원히 할 수는 없고, 부끄러움 없이는 나아지기 어렵다고 생각합니다.</SplitTextComponent></div>
              </div>
            </div>
            {/* <div className='col-m-12 col-xl-6 col-w-4'>
                <h2 className='about-tag'><SplitTextComponent animation={'up'} scroll={'about'} setTime={300} depth noContainer># 아이디어</SplitTextComponent></h2>
                <div className='type-p'><SplitTextComponent scroll={'about'}>뻔 한걸 뻔하게 하기 싫어합니다. 항상 새로움에 목말라 있습니다. 남과 같이 해서는 남보다 잘할 수 없다고 생각합니다.</SplitTextComponent></div>
              </div>
              <div className='col-m-12 col-xl-6 col-w-4'>
                <h2 className='about-tag'><SplitTextComponent animation={'up'} scroll={'about'} setTime={300} depth noContainer># 소신있는</SplitTextComponent></h2>
                <div className='type-p'><SplitTextComponent scroll={'about'}>다양한 생각을 존중하고 이해하고 인정하면서도, 아닌 건 아니라고 말할 수 있습니다.</SplitTextComponent></div>
              </div>
              <div className='col-m-12 col-xl-6 col-w-4'>
                <h2 className='about-tag'><SplitTextComponent animation={'up'} scroll={'about'} setTime={300} depth noContainer># 계획적인</SplitTextComponent></h2>
                <div className='type-p'><SplitTextComponent scroll={'about'}>일의 순서와 계획을 잘 세우는 편입니다. 갑작스러운 변수에도 유연하고 침착하게 대처할 수 있습니다.</SplitTextComponent></div>
              </div>
              <div className='col-m-12 col-xl-6 col-w-4'>
                <h2 className='about-tag'><SplitTextComponent animation={'up'} scroll={'about'} setTime={300} depth noContainer># 효율적인</SplitTextComponent></h2>
                <div className='type-p'><SplitTextComponent scroll={'about'}>일상생활부터 개발까지 항상 효율적인 생각과 행동을 하려고 노력합니다.</SplitTextComponent></div>
              </div> */}
            <Link to='about'><button>성장 배경</button></Link>
          </div>
        </div>
      </section>
    </>
  )
}

export default AboutComponent;
