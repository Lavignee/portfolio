import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { gsap } from "gsap";
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useDispatch } from 'react-redux';
import { ScrollAbout } from '../../Modules/ScrollValueModule';
import aboutOne from '../../Static/images/about-one.jpg';
import aboutTwo from '../../Static/images/about-two.jpg';
import aboutThree from '../../Static/images/about-three.jpg';
import SplitTextComponent from '../SplitTextComponent';
import './AboutComponent.scss';

gsap.registerPlugin(ScrollTrigger);

const aboutContent = [
  {
    id: 1, title: '# 애자일', text: '\'대부분 이렇게 하니까\', \'늘 그래왔으니까\' 같은 이유로 매번 변함없이 개발하는 것을 정말 싫어합니다. 불편함은 빠르고 효율적으로 처리해야 하고, 정보와 깨달음은 모두와 공유합니다.', back: 'AGILE'
  },
  {
    id: 2, title: '# 될때까지', text: '목표가 생기고 필요하다고 생각되면, 많은 노력과 시간이 들더라도 꿋꿋이 해내어 성취감을 얻는 걸 좋아합니다.', back: 'Until it works'
  },
  {
    id: 3, title: '# 솔직한', text: '아닌것을 맞다고, 싫은 것 을 좋다고 하지 않습니다. 단점과 잘못을 포장하지 않습니다. 양보를 영원히 할 수는 없고, 부끄러움 없이는 나아지기 어렵다고 생각합니다.', back: 'Honest'
  }
]

const aboutSecondContent = [
  {
    id: 4, title: '# 아이디어', text: '뻔 한걸 뻔하게 하기 싫어합니다. 항상 새로움에 목말라 있습니다. 남과 같이 해서는 남보다 잘할 수 없다고 생각합니다.', back: ''
  },
  {
    id: 5, title: '# 계획적인', text: '일의 순서와 계획을 잘 세우는 편입니다. 갑작스러운 변수에도 유연하고 침착하게 대처할 수 있습니다.', back: ''
  },
  {
    id: 6, title: '# 효율적인', text: '일상생활부터 개발까지 항상 효율적인 생각과 행동을 하려고 노력합니다.', back: ''
  },
]

const AboutComponent = () => {
  const [secondContent, setsecondContent] = useState(false);
  const dispatch = useDispatch();
  const onScrollAbout = () => dispatch(ScrollAbout('about'));

  useEffect(() => {
    // 어바웃 컨텐츠 애니메이션
    gsap.fromTo('.about-title', {
      y: -100 + '%'
    }, {
      y: 50 + '%',
      scrollTrigger: {
        id: 'about-title',
        trigger: '.about-section',
        start: 'top+=200 bottom',
        end: 'top+=800 bottom',
        scrub: true
      }
    });

    gsap.to('.split-frame', {
      scrollTrigger: {
        id: 'split-frame',
        trigger: '.about-title',
        start: 'top center',
        onEnter: self => self.isActive ? onScrollAbout() : '',
        end: 'bottom center',
      }
    });

    gsap.fromTo('.back-keyword', {
      y: -50 + '%'
    }, {
      y: 50 + '%',
      scrollTrigger: {
        id: 'back-keyword',
        trigger: '.about-contents',
        start: 'top center',
        end: 'bottom center',
        scrub: 0.5,
      }
    });

    // gsap.to('.about-contents', {
    //   scrollTrigger: {
    //     id: 'about-contents',
    //     trigger: '.about-contents',
    //     pin: true,
    //     start: 'top top',
    //     end: 'bottom+=1000 top',
    //     markers: true
    //   }
    // });
  }, [])

  const leftCol = (title, text, back) => {
    return (
      <>
        <div className='col-12 col-xs-10 col-s-8 col-m-6 col-xl-4'>
          <h2 className='about-tag'><SplitTextComponent animation={'up'} scroll={'about'} setTime={300} depth noContainer>{title}</SplitTextComponent></h2>
          <div className='type-p'><SplitTextComponent scroll={'about'}>{text}</SplitTextComponent></div>
        </div>
        <div className='back-keyword left'><span>{back}</span></div>
      </>
    )
  }

  const centerCol = (title, text, back) => {
    return (
      <>
        <div className='col-12 col-xs-10 off-xs-1 col-s-8 off-s-2 col-m-6 off-m-3 col-xl-4 off-xl-4'>
          <h2 className='about-tag'><SplitTextComponent animation={'up'} scroll={'about'} setTime={300} depth noContainer>{title}</SplitTextComponent></h2>
          <div className='type-p'><SplitTextComponent scroll={'about'}>{text}</SplitTextComponent></div>
        </div>
        <div className='back-keyword'><span>{back}</span></div>
      </>
    )
  }

  const rightCol = (title, text, back) => {
    return (
      <>
        <div className='col-12 col-xs-10 off-xs-2 col-s-8 off-s-4 col-m-6 off-m-6 col-xl-4 off-xl-8'>
          <h2 className='about-tag'><SplitTextComponent animation={'up'} scroll={'about'} setTime={300} depth noContainer>{title}</SplitTextComponent></h2>
          <div className='type-p'><SplitTextComponent scroll={'about'}>{text}</SplitTextComponent></div>
        </div>
        <div className='back-keyword right'><span>{back}</span></div>
      </>
    )
  }

  return (
    <>
      <section className='container about-section fluid'>
        <div className='container about-frame'>
          <div className='title-frame'>
            <h1 className='title-text about-title'>About</h1>
            <div className='row'>
              <div className='col-3 pr-none picture-frame'>
                <div className='one'>
                  <img src={aboutOne} alt="creator picture" />
                </div>
              </div>
              <div className='col-4 off-xs-1 pl-pr-none picture-frame'>
                <div className='two'>
                  <img src={aboutTwo} alt="creator picture" />
                </div>
              </div>
              <div className='col-3 off-xs-1 pl-none picture-frame'>
                <div className='three'>
                  <img src={aboutThree} alt="creator picture" />
                </div>
              </div>
            </div>
          </div>

          <div className='about-contents'>
            {secondContent ? (
              aboutSecondContent.map((aboutSecondContent, idx) => (
                <div className='row keyword-frame' key={aboutSecondContent.id}>
                  {idx === 3 && leftCol(aboutSecondContent.title, aboutSecondContent.text, aboutSecondContent.back)}
                  {idx === 4 && centerCol(aboutSecondContent.title, aboutSecondContent.text, aboutSecondContent.back)}
                  {idx === 5 && rightCol(aboutSecondContent.title, aboutSecondContent.text, aboutSecondContent.back)}
                </div>
              ))
            ) : (
                aboutContent.map((aboutContent, idx) => (
                  <div className='row keyword-frame' key={aboutContent.id}>
                    {idx === 0 && leftCol(aboutContent.title, aboutContent.text, aboutContent.back)}
                    {idx === 1 && centerCol(aboutContent.title, aboutContent.text, aboutContent.back)}
                    {idx === 2 && rightCol(aboutContent.title, aboutContent.text, aboutContent.back)}
                  </div>
                ))
              )}
            <Link to='about'><button>성장 배경</button></Link>
          </div>
        </div>
      </section>
    </>
  )
}

export default AboutComponent;
