import React, { memo, useEffect, useState, useRef } from 'react';
import child from 'static/images/child.jpg';
import shop1 from 'static/images/shop1.jpg';
import shop2 from 'static/images/shop2.jpg';
import shop3 from 'static/images/shop3.jpg';
import shop4 from 'static/images/shop4.jpg';
import current from 'static/images/about-one.jpg';
import './AboutDetailComponent.scss';
import { useDispatch, useSelector, shallowEqual } from 'react-redux';
import { makeSmoothScroll, changeGsapState, splitTextStart } from 'modules/CommonValueModule';
import Scrollbar from 'smooth-scrollbar';
import useWindowSize from 'utils/useWindowSize';
import SwiperCore, { EffectFade, Navigation, Pagination } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
SwiperCore.use([Navigation, Pagination, EffectFade]);
import 'swiper/swiper.scss';
import 'swiper/components/navigation/navigation.scss';
import 'swiper/components/pagination/pagination.scss';
import 'swiper/components/effect-fade/effect-fade.scss';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
gsap.registerPlugin(ScrollTrigger);
import SplitTextComponent from 'components/SplitTextComponent';

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

const AboutDetailComponent = ({ onHover, onLeave }) => {
  const dispatch = useDispatch();
  const onScrollAboutFirst = () => dispatch(splitTextStart('aboutFirst'));
  const onScrollAboutSecond = () => dispatch(splitTextStart('aboutSecond'));
  const onScrollAboutThird = () => dispatch(splitTextStart('aboutThird'));
  const makeScroll = (value) => dispatch(makeSmoothScroll(value));
  const gsapReady = (value) => dispatch(changeGsapState(value));
  const [currentGsapState] = useSelector(state => [state.CommonValueModule.currentGsapState], shallowEqual);

  const { width } = useWindowSize();
  const [splitTextReady, setSplitTextReady] = useState(false)

  const aboutDetailGsap = () => {
    gsap.fromTo('.back-keyword', {
      yPercent: -100
    }, {
      yPercent: 0,
      scrollTrigger: {
        trigger: '.about-contents',
        start: 'center center',
        end: 'bottom center',
        scrub: 0.5
      }
    });

    gsap.fromTo('.back-keyword-second', {
      yPercent: -100
    }, {
      yPercent: 0,
      scrollTrigger: {
        trigger: '.about-contents',
        start: 'top+=1480 center',
        end: 'bottom+=1880 center',
        scrub: 0.5
      }
    });

    gsap.fromTo('.first-content-area', {
      opacity: 1
    }, {
      opacity: 0,
      scrollTrigger: {
        trigger: '.about-contents',
        start: 'top+=1080 center',
        end: 'top+=1480 center',
        scrub: true
      }
    });

    gsap.fromTo('.second-content-area', {
      opacity: 0
    }, {
      opacity: 1,
      scrollTrigger: {
        trigger: '.about-contents',
        start: 'top+=1480 center',
        end: 'top+=1880 center',
        scrub: true
      }
    });

    gsap.to('.about-keywords', {
      scrollTrigger: {
        trigger: '.about-keywords',
        pin: true,
        start: 'top top',
        end: 'bottom+=800 top'
      }
    });

    gsap.fromTo('.fill-black', {
      maxWidth: 0 + '%',
    }, {
      maxWidth: 100 + '%',
      scrollTrigger: {
        trigger: '.background-title-frame',
        start: 'top center',
        end: 'bottom center',
        scrub: true
      }
    });

    gsap.fromTo('.film-frame', {
      opacity: 0
    }, {
      opacity: 0.5,
      scrollTrigger: {
        trigger: '.background-title-frame',
        start: 'top center',
        end: 'bottom center',
        scrub: true
      }
    });

    ScrollTrigger.matchMedia({
      '(min-width: 769px)': () => {
        gsap.to('.photo-area', {
          scrollTrigger: {
            trigger: '.photo-area',
            pin: true,
            start: 'top top+=72',
            end: 'bottom+=100% top'
          }
        });

        gsap.to('.first-image', {
          opacity: 0,
          scrollTrigger: {
            trigger: '.first-image-trigger',
            start: 'bottom+=72 center',
            end: 'bottom+=72 center',
            scrub: true
          }
        });

        gsap.to('.second-images', {
          scrollTrigger: {
            trigger: '.second-image-trigger',
            start: 'top+=72 center',
            toggleClass: { targets: '.second-images', className: 'view' },
            end: 'bottom+=72 center',
            scrub: true
          }
        });

        gsap.to('.third-image', {
          scrollTrigger: {
            trigger: '.third-image-trigger',
            start: 'top+=72 center',
            toggleClass: { targets: '.third-image', className: 'view' },
            end: 'bottom+=72 center',
            scrub: true
          }
        });
      },
    });
  }

  useEffect(() => {
    Scrollbar.destroyAll();
    gsapReady(false);
    makeScroll(true);

    return () => {
      let triggers = ScrollTrigger.getAll();
      triggers.forEach(trigger => {
        trigger.kill();
      });

      onLeave();
      setSplitTextReady(false)
    }
  }, []);

  useEffect(() => {
    currentGsapState && aboutDetailGsap(), setSplitTextReady(true)
  }, [currentGsapState])

  useEffect(() => {
    let firstTimer;
    let secondTimer;
    let thirdTimer;
    const firstText = () => {
      firstTimer = setTimeout(() => {
        onScrollAboutFirst()
      }, 100)
      return () => clearTimeout(firstTimer)
    }
    const secondText = () => {
      secondTimer = setTimeout(() => {
        onScrollAboutSecond()
      }, 700)
      return () => clearTimeout(secondTimer)
    }
    const thirdText = () => {
      thirdTimer = setTimeout(() => {
        onScrollAboutThird()
      }, 1400)
      return () => clearTimeout(thirdTimer)
    }

    if (splitTextReady) {
      firstText();
      secondText();
      thirdText();
    }

    return () => {
      clearTimeout(firstTimer)
      clearTimeout(secondTimer)
      clearTimeout(thirdTimer)
      firstTimer = null
      secondTimer = null
      thirdTimer = null
    }
  }, [splitTextReady])

  const leftCol = (title, text, back) => {
    return (
      <>
        <div className='col-12 col-xs-10 col-s-8 col-m-6 col-xl-4 about-first'>
          <div className='position-frame'>
            <h2 className='about-tag'>
              <SplitTextComponent animation={'up'} scroll={'aboutFirst'} setTime={100} index={'abl1'} ready={splitTextReady} depth>{title}</SplitTextComponent>
            </h2>
            <div className='type-p'>
              <SplitTextComponent animation={'up'} scroll={'aboutFirst'} setTime={15} index={'abl2'} ready={splitTextReady} depth>{text}</SplitTextComponent>
            </div>
          </div>
        </div>
        <div className='back-keyword left'><span>{back}</span></div>
      </>
    )
  }

  const centerCol = (title, text, back) => {
    return (
      <>
        <div className='col-12 col-xs-10 off-xs-1 col-s-8 off-s-2 col-m-6 off-m-3 col-xl-4 off-xl-4 about-second'>
          <div className='position-frame'>
            <h2 className='about-tag'>
              <SplitTextComponent animation={'up'} scroll={'aboutSecond'} setTime={100} index={'abc1'} depth>{title}</SplitTextComponent>
            </h2>
            <div className='type-p'>
              <SplitTextComponent animation={'up'} scroll={'aboutSecond'} setTime={15} index={'abc2'} depth>{text}</SplitTextComponent>
            </div>
          </div>
        </div>
        <div className='back-keyword center'><span>{back}</span></div>
      </>
    )
  }

  const rightCol = (title, text, back) => {
    return (
      <>
        <div className='col-12 col-xs-10 off-xs-2 col-s-8 off-s-4 col-m-6 off-m-6 col-xl-4 off-xl-8 about-third'>
          <div className='position-frame'>
            <h2 className='about-tag'>
              <SplitTextComponent animation={'up'} scroll={'aboutThird'} setTime={100} index={'abr1'} depth>{title}</SplitTextComponent>
            </h2>
            <div className='type-p'>
              <SplitTextComponent animation={'up'} scroll={'aboutThird'} setTime={15} index={'abr2'} depth>{text}</SplitTextComponent>
            </div>
          </div>
        </div>
        <div className='back-keyword right'><span>{back}</span></div>
      </>
    )
  }

  return (
    <div className='about-detail'>
      <div className='container'>
        <div className='about-keywords'>
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
                <div className='position-frame'>
                  <h2 className='about-tag'>{aboutSecondContent[0].title}</h2>
                  <div className='type-p'>{aboutSecondContent[0].text}</div>
                </div>
              </div>
              <div className='back-keyword-second left'><span>{aboutSecondContent[0].back}</span></div>
            </div>

            <div className='row keyword-frame'>
              <div className='col-12 col-xs-10 off-xs-1 col-s-8 off-s-2 col-m-6 off-m-3 col-xl-4 off-xl-4 about-second'>
                <div className='position-frame'>
                  <h2 className='about-tag'>{aboutSecondContent[1].title}</h2>
                  <div className='type-p'>{aboutSecondContent[1].text}</div>
                </div>
              </div>
              <div className='back-keyword-second center'><span>{aboutSecondContent[1].back}</span></div>
            </div>

            <div className='row keyword-frame'>
              <div className='col-12 col-xs-10 col-s-8 col-m-6 col-xl-4 about-first'>
                <div className='position-frame'>
                  <h2 className='about-tag'>{aboutSecondContent[2].title}</h2>
                  <div className='type-p'>{aboutSecondContent[2].text}</div>
                </div>
              </div>
              <div className='back-keyword-second right'><span>{aboutSecondContent[2].back}</span></div>
            </div>
          </div>
        </div>
      </div>

      <div className='container fluid about-background'>
        <div className='container relative pl-pr-none'>
          <div className='background-title-frame'>
            <div className='col-12 col-m-7 off-m-5'>
              <h2>GROWTH<br />BACKGROUND</h2>
              <h2 className='fill-black'>GROWTH<br />BACKGROUND</h2>
            </div>
          </div>


          <div className='photo-area d-m-block d-xs-none'>
            <img className='first-image' src={child} alt='childhood image' />
            <Swiper
              className='second-images'
              slidesPerView={1}
              effect='fade'
              resizeObserver
              navigation={{ nextEl: '.swiper-button-next', prevEl: '.swiper-button-prev' }}
              pagination={{ clickable: false }}
            >
              <SwiperSlide>
                <img src={shop1} alt='shop image1' />
              </SwiperSlide>
              <SwiperSlide>
                <img src={shop2} alt='shop image2' />
              </SwiperSlide>
              <SwiperSlide>
                <img src={shop3} alt='shop image3' />
              </SwiperSlide>
              <SwiperSlide>
                <img src={shop4} alt='shop image4' />
              </SwiperSlide>
              <div className='swiper-button-next' onMouseEnter={() => onHover(' bl-cursor', 'next')} onMouseLeave={() => onLeave()}></div>
              <div className='swiper-button-prev' onMouseEnter={() => onHover(' bl-cursor', 'prev')} onMouseLeave={() => onLeave()}></div>
            </Swiper>
            <img className='third-image' src={current} alt='current image' />
          </div>

          <div className='col-12 col-m-7 off-m-5'>
            <div className='background-story-frame first-image-trigger'>
              {width < 768 && <img className='first-image' src={child} alt='childhood image' />}
              <h3>학생시절</h3>
              <p>8살부터 사용해온 컴퓨터는 제게는 너무 신기하고 배울 것이 참 많은 기기였습니다. 학교에서 배우는 국어, 영어, 수학보다 컴퓨터의 탐색기를 하나하나 열어보고 각종 윈도우의 기능과 타자 연습, 다양한 게임들을 해보는 게 가장 큰 재미였습니다. 일찍 배운 컴퓨터 타자로 <b>아버지의 책 출간을 돕기도 했습니다.</b> 이후 미대 교수였던 아버지의 영향을 받아 미술 전공을 준비했었지만, 입시 미술이 적성에 맞지 않아 고등학교를 졸업한 20살에 곧바로 입대하였습니다.</p>
            </div>

            <div className='background-story-frame second-image-trigger'>
              {width < 768 && (
                <Swiper
                  className='second-images'
                  slidesPerView={1}
                  effect='fade'
                  resizeObserver
                  navigation={{ nextEl: '.swiper-button-next', prevEl: '.swiper-button-prev' }}
                  pagination={{ clickable: false }}
                >
                  <SwiperSlide>
                    <img src={shop1} alt='shop image1' />
                  </SwiperSlide>
                  <SwiperSlide>
                    <img src={shop2} alt='shop image2' />
                  </SwiperSlide>
                  <SwiperSlide>
                    <img src={shop3} alt='shop image3' />
                  </SwiperSlide>
                  <SwiperSlide>
                    <img src={shop4} alt='shop image4' />
                  </SwiperSlide>
                  <div className='swiper-button-next' onMouseEnter={() => onHover(' bl-cursor', 'next')} onMouseLeave={() => onLeave()}></div>
                  <div className='swiper-button-prev' onMouseEnter={() => onHover(' bl-cursor', 'prev')} onMouseLeave={() => onLeave()}></div>
                </Swiper>
              )}
              <h3>전역 후</h3>
              <p>22살에 사회에 막 나와서는 다양한 일을 해보고자 <b>20~30대로 이루어진 젊은 건설팀</b>에 들어가 1년 정도 몸을 쓰는 일도 해보았고, <b>다양한 공장에서 OP(Operator) 일</b>도 2년간 해보았습니다. 이후 학생 시절에 PC방 아르바이트 일이 즐거웠던 기억이 있어 <b>프랜차이즈 PC방</b>에 점장으로 취업하여 2년간 일했습니다. 하드웨어에 대한 공부도 많이 하였고, <b>전국 매출 상위 1%의 매장</b>이 되어 프랜차이즈 기업에서 스카우트 제의를 받아 여러 매장을 오픈 및 관리하였습니다. 하지만 해당 분야에서 좋은 여건에 있었음에도 앞으로 전망이 밝지 않다는 판단에 그만두게 되었고, <b>웹 사이트</b>를 운영하려는 지인을 돕게 되면서 웹 개발자의 영역을 알게 되었습니다. 이후 인터넷으로 독학하여 퍼블리싱을 배우고 <b>지인들과 팀</b>을 꾸려 외주 업무를 시작했습니다.</p>
            </div>

            <div className='background-story-frame third-image-trigger'>
              {width < 768 && <img className='third-image' src={current} alt='current image' />}
              <h3>웹 개발자 ~ 현재</h3>
              <p>지인들과 팀을 꾸려 일을 하다 <b>작은 회사를 설립</b>하였고, 회사 운영을 함께 하며 개발 일을 해왔습니다. 초보 개발자였지만 기획자가 따로 없었으므로 서비스의 개발과 개선 등을 기획부터 해왔고, 회사의 <b>인사관리</b>, <b>고객 응대</b>, <b>세무</b>, <b>수금</b>까지 맡았습니다. <b>적은 인원</b>과 자본으로 힘들게 시작하였지만 성장하는 회사를 보고 즐겁게 일할 수 있었습니다. 다양한 업무 경험으로 넓은 시각이 생겼지만 이렇게 일을 해서는 전문가가 되기는 어렵겠다는 생각에 퇴사하게 되었습니다. 이후 프리랜서로 일을 하며 React 프로젝트에 참여해보았고, 현재까지 나온 다양한 기능을 익히는데 많은 시간을 투자하고 있습니다.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default memo(AboutDetailComponent);
