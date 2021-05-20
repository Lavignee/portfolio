import React, { memo, useEffect, useState, useCallback } from 'react';
import { useDispatch, useSelector, shallowEqual } from 'react-redux';
import { makeSmoothScroll, changeGsapState, splitTextStart, changeFilmState } from 'modules/commonValue';
import SwiperCore, { EffectFade, Navigation, Pagination } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

import child from 'static/images/child.jpg';
import shop1 from 'static/images/shop1.jpg';
import shop2 from 'static/images/shop2.jpg';
import shop3 from 'static/images/shop3.jpg';
import shop4 from 'static/images/shop4.jpg';
import current1 from 'static/images/current1.jpg';
import current2 from 'static/images/current2.jpg';
import current3 from 'static/images/current3.jpg';

import './aboutDetail.scss';
import 'swiper/swiper.scss';
import 'swiper/components/navigation/navigation.scss';
import 'swiper/components/pagination/pagination.scss';
import 'swiper/components/effect-fade/effect-fade.scss';

import Scrollbar from 'smooth-scrollbar';
import useWindowSize from 'utils/useWindowSize';
import SplitText from 'components/splitText';
import Tooltip from 'components/Tooltip';

SwiperCore.use([Navigation, Pagination, EffectFade]);
gsap.registerPlugin(ScrollTrigger);

const aboutContent = [
  {
    id: 1, title: '# 애자일', text: '\'정해진 대로\', \'늘 하던 대로\' 도 좋지만 작업 간에 알게 되는 다양한 방식과 변화를 유연하게 받아들이고 빠르게 검토하여 곧바로 적용하는 편입니다.', back: 'AGILE'
  },
  {
    id: 2, title: '# 될 때까지', text: '목표가 생기고 필요하다고 생각되면, 많은 노력과 시간이 들더라도 꿋꿋이 해내어 성취감을 얻는 걸 좋아합니다. 처음의 생각과 다르게 아주 많이 어렵고, 말도 안 되더라도 말입니다.', back: 'Until it works'
  },
  {
    id: 3, title: '# 솔직한', text: '당연한데 의외로 많은 사람이 못하고 있습니다. 잘못한 걸 잘했다고, 나쁜 것 을 좋다고 하지 않습니다. 단점과 잘못을 포장하지 않습니다. 양보를 영원히 할 수는 없고, 부끄러움 없이는 나아지기 어렵다고 생각합니다.', back: 'Honest'
  }
]

const aboutSecondContent = [
  {
    id: 4, title: '# 아이디어', text: '항상 자신 있는 부분입니다. 아주 사소하고 작은 것부터 당연하다고 여기는 것까지 뻔한 것을 뻔하게 하기 싫어합니다. 남과 같이 해서는 남보다 나아질 수 없다고 생각합니다.', back: 'Idea'
  },
  {
    id: 5, title: '# 계획적인', text: '일의 순서와 계획을 논리적으로 잘 세우고, 갑작스러운 변수에 대한 대비도 잘 하는 편입니다. 메사에 침착하고 효율적일 수 있습니다.', back: 'Premeditated'
  },
  {
    id: 6, title: '# 세심한', text: '정리 정돈을 잘하며, 나의 행동과 주변 환경을 잘 인지하는 편입니다. 15세 이후 제 물건을 잃어버린 적이 없습니다. 차분하고 침착하게 생활합니다.', back: 'Meticulous'
  },
]

const textCondition = [
  {
    colInfo: 'col-12 col-xs-10 col-s-8 col-m-6 col-xl-4 about-first', scroll: 'aboutFirst', index1: 'abl1', index2: 'abl2', align: 'left'
  },
  {
    colInfo: 'col-12 col-xs-10 off-xs-1 col-s-8 off-s-2 col-m-6 off-m-3 col-xl-4 off-xl-4 about-second', scroll: 'aboutSecond', index1: 'abc1', index2: 'abc2', align: 'center'
  },
  {
    colInfo: 'col-12 col-xs-10 off-xs-2 col-s-8 off-s-4 col-m-6 off-m-6 col-xl-4 off-xl-8 about-third', scroll: 'aboutThird', index1: 'abr1', index2: 'abr2', align: 'right'
  }
]

const textCondition2 = [
  {
    colInfo: 'col-12 col-xs-10 off-xs-2 col-s-8 off-s-4 col-m-6 off-m-6 col-xl-4 off-xl-8 about-third', align: 'left'
  },
  {
    colInfo: 'col-12 col-xs-10 off-xs-1 col-s-8 off-s-2 col-m-6 off-m-3 col-xl-4 off-xl-4 about-second', align: 'center'
  },
  {
    colInfo: 'col-12 col-xs-10 col-s-8 col-m-6 col-xl-4 about-first', align: 'right'
  }
]

const AboutDetail = ({ onHover, onLeave }) => {
  const dispatch = useDispatch();
  const onScrollAboutFirst = useCallback(() => dispatch(splitTextStart('aboutFirst')), [dispatch]);
  const onScrollAboutSecond = useCallback(() => dispatch(splitTextStart('aboutSecond')), [dispatch]);
  const onScrollAboutThird = useCallback(() => dispatch(splitTextStart('aboutThird')), [dispatch]);
  const makeScroll = useCallback((value) => dispatch(makeSmoothScroll(value)), [dispatch]);
  const filmReady = useCallback((value) => dispatch(changeFilmState(value)), [dispatch]);
  const gsapReady = useCallback((value) => dispatch(changeGsapState(value)), [dispatch]);
  const [currentGsapState] = useSelector(state => [state.CommonValue.currentGsapState], shallowEqual);

  const { width } = useWindowSize();
  const growBackgroundImage2 = [shop1, shop2, shop3, shop4];
  const growBackgroundImage3 = [current1, current2, current3];
  const [splitTextReady, setSplitTextReady] = useState(false);

  const growBackgroundImageSlider = (target, kind) => {
    return (
      <Swiper
        className={`${kind === 'shop' ? 'second-images' : 'third-images'}`}
        slidesPerView={1}
        effect='fade'
        resizeObserver
        navigation={{ nextEl: '.swiper-button-next', prevEl: '.swiper-button-prev' }}
        pagination={{ clickable: false }}
      >
        {target.map((target, idx) => (
          <SwiperSlide key={idx}>
            <img width='70%' height='auto' src={target} alt={`${kind} ${idx + 1}`} />
          </SwiperSlide>
        ))}
        <div className='swiper-button-next' onMouseEnter={() => onHover(' bl-cursor', 'next')} onMouseLeave={() => onLeave()}></div>
        <div className='swiper-button-prev' onMouseEnter={() => onHover(' bl-cursor', 'prev')} onMouseLeave={() => onLeave()}></div>
      </Swiper>
    )
  }

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
      opacity: 0.8,
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

        gsap.to('.third-images', {
          scrollTrigger: {
            trigger: '.third-image-trigger',
            start: 'top+=72 center',
            toggleClass: { targets: '.third-images', className: 'view' },
            end: 'bottom+=72 center',
            scrub: true
          }
        });
      },
    });
  }

  useEffect(() => {
    filmReady(true)
    Scrollbar.destroyAll();
    gsapReady(false);
    makeScroll(true);

    return () => {
      let triggers = ScrollTrigger.getAll();
      triggers.forEach(trigger => {
        trigger.kill();
      });

      onLeave();
      filmReady(false)
      setSplitTextReady(false)
    }
  }, [filmReady, gsapReady, makeScroll, onLeave]);

  useEffect(() => {
    if (currentGsapState) {
      aboutDetailGsap();
      setSplitTextReady(true);
    }
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
  }, [onScrollAboutFirst, onScrollAboutSecond, onScrollAboutThird, splitTextReady])

  return (
    <div className='about-detail'>
      <div className='container'>
        <div className='about-keywords'>
          <div className='first-content-area'>
            {textCondition.map((textCondition, idx) => (
              <div className='row keyword-frame' key={idx}>
                <div className={textCondition.colInfo}>
                  <div className='position-frame'>
                    <h2 className='about-tag'>
                      <SplitText animation={'up'} scroll={textCondition.scroll} setTime={100} index={textCondition.index1} ready={splitTextReady} depth>{aboutContent[idx].title}</SplitText>
                    </h2>
                    <div className='type-p'>
                      <SplitText animation={'up'} scroll={textCondition.scroll} setTime={15} index={textCondition.index2} ready={splitTextReady} depth>{aboutContent[idx].text}</SplitText>
                    </div>
                  </div>
                </div>
                <div className={`back-keyword ${textCondition.align}`}><span>{aboutContent[idx].back}</span></div>
              </div>
            ))}
          </div>

          <div className='second-content-area'>
            {textCondition2.map((textCondition2, idx) => (
              <div key={idx} className='row keyword-frame'>
                <div className={textCondition2.colInfo}>
                  <div className='position-frame'>
                    <h2 className='about-tag'>{aboutSecondContent[idx].title}</h2>
                    <div className='type-p'>{aboutSecondContent[idx].text}</div>
                  </div>
                </div>
                <div className={`back-keyword-second ${textCondition2.align}`}><span>{aboutSecondContent[idx].back}</span></div>
              </div>
            ))}
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
            <img width='70%' height='auto' className='first-image' src={child} alt='childhood' />
            {growBackgroundImageSlider(growBackgroundImage2, 'shop')}
            {growBackgroundImageSlider(growBackgroundImage3, 'current')}
          </div>

          <div className='col-12 col-m-7 off-m-5'>
            <div className='background-story-frame first-image-trigger'>
              {width < 768 && <img width='50%' height='auto' className='first-image' src={child} alt='childhood' />}
              <h3>학생시절</h3>
              <p>초등학교부터 사용한 컴퓨터는 제게는 너무 신기하고 배울 것이 참 많은 기기였습니다. 학교에서 배우는 공부보다 컴퓨터의 탐색기를 하나하나 열어보고 윈도우의 기능과 타자 연습, 다양한 게임들을 해보는 게 가장 큰 재미였습니다. 일찍 배운 컴퓨터 타자로 당시 대학교수셨던 아버지의 <Tooltip onHover={onHover} onLeave={onLeave} info={'도벽@환경도예'}>책</Tooltip>출간을 돕기도 했습니다. 이후 미술 전공을 준비했었지만, 보여주기식의 반복적이고 지루한 입시 미술이 적성에 맞지 않아 고등학교를 졸업하고 바로 입대하였습니다.</p>
            </div>

            <div className='background-story-frame second-image-trigger'>
              {width < 768 && (growBackgroundImageSlider(growBackgroundImage2, 'shop'))}
              <h3>전역 후</h3>
              <p>22세에 전역을 하고는 다양한 일을 경험했습니다. 2~30대로 이루어진 <Tooltip onHover={onHover} onLeave={onLeave} info={'시스템 동바리 (prefabricated shoring system)'}>건설팀</Tooltip>에 들어가 1년 정도 몸을 쓰는 일도 해보았고, 2년 정도 <Tooltip onHover={onHover} onLeave={onLeave} info={'LED, LCD, Clalen (콘택트 렌즈), PCI'}>다양한 공장</Tooltip>에서 OP(Operator) 일도 하였습니다. 이후 학생 시절에 PC방 아르바이트 일이 즐거웠던 기억이 있어 <Tooltip onHover={onHover} onLeave={onLeave} info={'시즌아이(seasoni)'}>프랜차이즈</Tooltip>PC방에 점장으로 취업하여 2년간 일했습니다. 하드웨어에 대한 공부도 많이 하였고, <Tooltip onHover={onHover} onLeave={onLeave} info={'피카라이브 전국 비교 보고서 기준'}>전국 매출 상위 1%</Tooltip>의 매장이 되어 또 다른 프랜차이즈 기업에서 스카우트 제의를 받아 <Tooltip onHover={onHover} onLeave={onLeave} info={'오산(2), 천안, 평택'}>여러 매장</Tooltip>을 오픈 및 관리 하였습니다. 하지만 해당 분야에서 좋은 여건에 있었음에도 앞으로 전망이 밝지 않다는 판단에 그만두게 되었습니다. 이후 <Tooltip onHover={onHover} onLeave={onLeave} info={'일반기업 솔루션 쇼핑몰'}>웹 사이트</Tooltip>를 운영하려는 지인을 돕게 되면서 웹 개발자의 영역을 알게 되었습니다. 대부분 구글과 간단한 서적으로 독학하여 퍼블리싱을 배우고 <Tooltip onHover={onHover} onLeave={onLeave} info={'본인, 디자이너, 계약담당의 3인'}>지인들과 팀</Tooltip>을 꾸려 외주 업무를 받아서 처리하기 시작했습니다.</p>
            </div>

            <div className='background-story-frame third-image-trigger'>
              {width < 768 && (growBackgroundImageSlider(growBackgroundImage3, 'current'))}
              <h3>웹 개발자 ~ 현재</h3>
              <p>함께 일하는 팀은 점점 전문화되어 <Tooltip onHover={onHover} onLeave={onLeave} info={'크리에이티브코드'}>회사</Tooltip>가 되었고, 저는 설립 멤버로서 개발과 회사 운영을 함께 해왔습니다. 주니어 개발자였지만 기획자가 따로 없었으므로 서비스의 개발과 개선 등을 기획부터 해왔고, 회사의 <Tooltip onHover={onHover} onLeave={onLeave} info={'채용, 면접, 휴가, 해고, 정부 혜택 처리 등'}>인사</Tooltip>, <Tooltip onHover={onHover} onLeave={onLeave} info={'계약, 기획, 기능명세, 업무 조율, 수금 등'}>고객 응대</Tooltip>, <Tooltip onHover={onHover} onLeave={onLeave} info={'급여 계산, 부가가치세, 연말 정산'}>세무</Tooltip>, <Tooltip onHover={onHover} onLeave={onLeave} info={'시설 및 비품 구입, PC 관리 등'}>관리</Tooltip>를 전부 맡아 처리하였습니다. <Tooltip onHover={onHover} onLeave={onLeave} info={'프론트 2명, 백엔드 1명, 디자이너 1명, 대표'}>적은 인원</Tooltip>과 자본이지만 성장하는 실력과 회사를 보고 즐겁게 일할 수 있었습니다. 다양한 업무 경험으로 넓은 시각이 생겼지만, 이렇게 일을 해서는 전문가가 되기는 어렵겠다는 생각에 퇴사하게 되었습니다. 이후 프리랜서로 짧은 기간 일을 하였고, 얼마 뒤 결혼을 하였습니다. 그리고 아내의 임신부터 아들의 100일까지 육아와 가사를 보조하며 공부와 포트폴리오 작업을 병행했고, 현재 취업을 준비하고 있습니다.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default memo(AboutDetail);
