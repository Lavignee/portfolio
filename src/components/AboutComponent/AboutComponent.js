import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { gsap } from "gsap";
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useDispatch } from 'react-redux';
import { ScrollAboutFirst, ScrollAboutSecond, ScrollAboutThird } from '../../Modules/ScrollValueModule';
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
    id: 4, title: '# 아이디어', text: '뻔 한걸 뻔하게 하기 싫어합니다. 항상 새로움에 목말라 있습니다. 남과 같이 해서는 남보다 잘할 수 없다고 생각합니다.', back: 'Idea'
  },
  {
    id: 5, title: '# 계획적인', text: '일의 순서와 계획을 잘 세우는 편입니다. 갑작스러운 변수에도 유연하고 침착하게 대처할 수 있습니다.', back: 'Premeditated'
  },
  {
    id: 6, title: '# 효율적인', text: '일상생활부터 개발까지 항상 효율적인 생각과 행동을 하려고 노력합니다.', back: 'Efficient'
  },
]

const AboutComponent = () => {
  const dispatch = useDispatch();
  const onScrollAboutFirst = () => dispatch(ScrollAboutFirst('aboutFirst'));
  const onScrollAboutSecond = () => dispatch(ScrollAboutSecond('aboutSecond'));
  const onScrollAboutThird = () => dispatch(ScrollAboutThird('aboutThird'));

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
        trigger: '.about-first',
        start: 'top bottom-=150',
        onEnter: () => onScrollAboutFirst(),
      }
    });
    gsap.to('.split-frame', {
      scrollTrigger: {
        id: 'split-frame',
        trigger: '.about-second',
        start: 'top bottom-=150',
        onEnter: () => onScrollAboutSecond(),
      }
    });
    gsap.to('.split-frame', {
      scrollTrigger: {
        id: 'split-frame',
        trigger: '.about-third',
        start: 'top bottom-=150',
        onEnter: () => onScrollAboutThird(),
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

    gsap.fromTo('.back-keyword-second', {
      y: -50 + '%'
    }, {
      y: 50 + '%',
      scrollTrigger: {
        id: 'back-keyword',
        trigger: '.about-contents',
        start: 'top+=1200 center',
        end: 'bottom+=1600 center',
        scrub: 0.5,
      }
    });

    gsap.fromTo('.first-content-area', {
      opacity: 1
    }, {
      opacity: 0,
      scrollTrigger: {
        id: 'first-content-area',
        trigger: '.about-contents',
        start: 'top+=800 center',
        end: 'top+=1200 center',
        scrub: true,
        markers: true
      }
    });

    gsap.fromTo('.second-content-area', {
      opacity: 0
    }, {
      opacity: 1,
      scrollTrigger: {
        id: 'second-content-area',
        trigger: '.about-contents',
        start: 'top+=1200 center',
        end: 'top+=1600 center',
        scrub: true,
        markers: true
      }
    });

    gsap.to('.about-contents', {
      scrollTrigger: {
        id: 'about-contents',
        trigger: '.about-contents',
        pin: true,
        start: 'top top',
        end: 'bottom+=800 top',
      }
    });
  }, [])

  const leftCol = (title, text, back) => {
    return (
      <>
        <div className='col-12 col-xs-10 col-s-8 col-m-6 col-xl-4 about-first'>
          <h2 className='about-tag'><SplitTextComponent animation={'up'} scroll={'aboutFirst'} setTime={100} depth>{title}</SplitTextComponent></h2>
          <div className='type-p'><SplitTextComponent scroll={'aboutFirst'}>{text}</SplitTextComponent></div>
        </div>
        <div className='back-keyword left'><span>{back}</span></div>
      </>
    )
  }

  const centerCol = (title, text, back) => {
    return (
      <>
        <div className='col-12 col-xs-10 off-xs-1 col-s-8 off-s-2 col-m-6 off-m-3 col-xl-4 off-xl-4 about-second'>
          <h2 className='about-tag'><SplitTextComponent animation={'up'} scroll={'aboutSecond'} setTime={100} depth>{title}</SplitTextComponent></h2>
          <div className='type-p'><SplitTextComponent scroll={'aboutSecond'}>{text}</SplitTextComponent></div>
        </div>
        <div className='back-keyword'><span>{back}</span></div>
      </>
    )
  }

  const rightCol = (title, text, back) => {
    return (
      <>
        <div className='col-12 col-xs-10 off-xs-2 col-s-8 off-s-4 col-m-6 off-m-6 col-xl-4 off-xl-8 about-third'>
          <h2 className='about-tag'><SplitTextComponent animation={'up'} scroll={'aboutThird'} setTime={100} depth>{title}</SplitTextComponent></h2>
          <div className='type-p'><SplitTextComponent scroll={'aboutThird'}>{text}</SplitTextComponent></div>
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
            <div className='first-content-area'>
              {aboutContent.map((aboutContent, idx) => (
                <div className='row keyword-frame' key={aboutContent.id}>
                  {idx === 0 && leftCol(aboutContent.title, aboutContent.text, aboutContent.back)}
                  {idx === 1 && centerCol(aboutContent.title, aboutContent.text, aboutContent.back)}
                  {idx === 2 && rightCol(aboutContent.title, aboutContent.text, aboutContent.back)}
                </div>
              ))}
            </div>

            <div className='second-content-area'>
              <div className='row keyword-frame'>
                <div className='col-12 col-xs-10 off-xs-2 col-s-8 off-s-4 col-m-6 off-m-6 col-xl-4 off-xl-8 about-third'>
                  <h2 className='about-tag'>{aboutSecondContent[0].title}</h2>
                  <div className='type-p'>{aboutSecondContent[0].text}</div>
                </div>
                <div className='back-keyword-second left'><span>{aboutSecondContent[0].back}</span></div>
              </div>

              <div className='row keyword-frame'>
                <div className='col-12 col-xs-10 off-xs-1 col-s-8 off-s-2 col-m-6 off-m-3 col-xl-4 off-xl-4 about-second'>
                  <h2 className='about-tag'>{aboutSecondContent[1].title}</h2>
                  <div className='type-p'>{aboutSecondContent[1].text}</div>
                </div>
                <div className='back-keyword-second'><span>{aboutSecondContent[1].back}</span></div>
              </div>

              <div className='row keyword-frame'>
                <div className='col-12 col-xs-10 col-s-8 col-m-6 col-xl-4 about-first'>
                  <h2 className='about-tag'>{aboutSecondContent[2].title}</h2>
                  <div className='type-p'>{aboutSecondContent[2].text}</div>
                </div>
                <div className='back-keyword-second right'><span>{aboutSecondContent[2].back}</span></div>
              </div>
            </div>

            <Link to='about'><button>성장 배경</button></Link>
          </div>
        </div>
      </section >
    </>
  )
}

export default AboutComponent;
