import React from 'react';
import { useDispatch, useSelector, shallowEqual } from 'react-redux';
import { makeSmoothScroll, changeGsapState, splitTextStart, changeFilmState } from '../../Modules/commonValue';
import { EffectFade, Navigation, Pagination } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react/swiper-react.js';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

import hashtag from '../../data/dataAbout/hashtagAbout.json';
import introduce from '../../data/dataAbout/introduceAbout.json';

import child from '../../static/images/child.jpg';
import shop1 from '../../static/images/shop1.jpg';
import shop2 from '../../static/images/shop2.jpg';
import shop3 from '../../static/images/shop3.jpg';
import shop4 from '../../static/images/shop4.jpg';
import current1 from '../../static/images/current1.jpg';
import current2 from '../../static/images/current2.jpg';
import current3 from '../../static/images/current3.jpg';

import './aboutDetail.scss';
import 'swiper/swiper.scss';
import 'swiper/modules/navigation/navigation.scss';
import 'swiper/modules/pagination/pagination.scss';
import 'swiper/modules/effect-fade/effect-fade.scss';

import useWindowSize from '../../utils/useWindowSize';
import SplitText from '../../components/splitText';
import Tooltip from '../../components/tooltip';
import { RootState } from '../../Modules';

gsap.registerPlugin(ScrollTrigger);

// 반복적인 dom구조에서 다른 부분만 배열로 정의.
const textCondition = [
  {
    colInfo: 'col-12 col-xs-10 col-s-8 col-m-6 about-first',
    scroll: 'aboutFirst',
    index1: 'abl1',
    index2: 'abl2',
    align: 'left',
  },
  {
    colInfo:
      'col-12 col-xs-10 off-xs-1 col-s-8 off-s-2 col-m-6 off-m-3 about-second',
    scroll: 'aboutSecond',
    index1: 'abc1',
    index2: 'abc2',
    align: 'center',
  },
  {
    colInfo:
      'col-12 col-xs-10 off-xs-2 col-s-8 off-s-4 col-m-6 off-m-6 about-third',
    scroll: 'aboutThird',
    index1: 'abr1',
    index2: 'abr2',
    align: 'right',
  },
];

// 반복적인 dom구조에서 다른 부분만 배열로 정의.
const textCondition2 = [
  {
    colInfo:
      'col-12 col-xs-10 off-xs-2 col-s-8 off-s-4 col-m-6 off-m-6 about-third',
    align: 'left',
  },
  {
    colInfo:
      'col-12 col-xs-10 off-xs-1 col-s-8 off-s-2 col-m-6 off-m-3 about-second',
    align: 'center',
  },
  {
    colInfo: 'col-12 col-xs-10 col-s-8 col-m-6 about-first',
    align: 'right',
  },
];

// 너무 길어진 데이터 선택자 별도 정의.
const firstIntroContent = introduce.introduce.first;
const firstTooltipContent = introduce.tooltipInfo.first;
const secondIntroContent = introduce.introduce.second;
const secondTooltipContent = introduce.tooltipInfo.second;
const thirdIntroContent = introduce.introduce.third;
const thirdTooltipContent = introduce.tooltipInfo.third;

// 사용 될 이미지 배열로 정의.
const growBackgroundImage2: any[] = [shop1, shop2, shop3, shop4];
const growBackgroundImage3: any[] = [current1, current2, current3];

// Props로 받는 이벤트들에 대한 interface 정의.
interface AboutDetailProps {
  _onHover: (hoverCursor: string, hoverText?: string | null) => void;
  _onLeave: (hoverText?: string | null) => void;
}

const AboutDetail = ({ _onHover, _onLeave }: AboutDetailProps) => {
  // redux dispatch 정의.
  const dispatch = useDispatch();
  const onScrollAbout = React.useCallback((value) => dispatch(splitTextStart(value)), [dispatch]);
  const makeScroll = React.useCallback((value) => dispatch(makeSmoothScroll(value)), [dispatch]);
  const filmReady = React.useCallback((value) => dispatch(changeFilmState(value)), [dispatch]);
  const gsapReady = React.useCallback((value) => dispatch(changeGsapState(value)), [dispatch]);
  // redux useSelector 정의.
  const [currentGsapState, currentFilmState] = useSelector((state: RootState) => [state.CommonValue.currentGsapState, state.CommonValue.currentFilmState], shallowEqual);

  // 윈도우 리사이즈 감지 및 해당 사이즈 반환 훅.
  const { width } = useWindowSize();

  // 스크롤 트리거 설정.
  const aboutDetailGsap = () => {
    gsap.fromTo(
      '.back-keyword',
      {
        yPercent: -100,
      },
      {
        yPercent: 0,
        scrollTrigger: {
          trigger: '.first-content-area',
          start: 'center center',
          end: 'bottom center',
          scrub: 0.5,
        },
      }
    );

    gsap.fromTo(
      '.back-keyword-second',
      {
        yPercent: -100,
      },
      {
        yPercent: 0,
        scrollTrigger: {
          trigger: '.first-content-area',
          start: 'top+=1480 center',
          end: 'bottom+=1880 center',
          scrub: 0.5,
        },
      }
    );

    gsap.fromTo(
      '.first-content-area',
      {
        opacity: 1,
      },
      {
        opacity: 0,
        scrollTrigger: {
          trigger: '.first-content-area',
          start: 'top+=1080 center',
          end: 'top+=1480 center',
          scrub: true,
        },
      }
    );

    gsap.fromTo(
      '.second-content-area',
      {
        opacity: 0,
      },
      {
        opacity: 1,
        scrollTrigger: {
          trigger: '.first-content-area',
          start: 'top+=1480 center',
          end: 'top+=1880 center',
          scrub: true,
        },
      }
    );

    gsap.to('.about-keywords', {
      scrollTrigger: {
        trigger: '.about-keywords',
        pin: true,
        start: 'top top',
        end: 'bottom+=800 top',
      },
    });

    gsap.fromTo(
      '.fill-black',
      {
        maxWidth: 0 + '%',
      },
      {
        maxWidth: 100 + '%',
        scrollTrigger: {
          trigger: '.background-title-frame',
          start: 'top center',
          end: 'bottom center',
          scrub: true,
        },
      }
    );

    gsap.fromTo(
      '.film-frame',
      {
        opacity: 0,
      },
      {
        opacity: 0.8,
        scrollTrigger: {
          trigger: '.background-title-frame',
          start: 'top center',
          end: 'bottom center',
          scrub: true,
        },
      }
    );

    ScrollTrigger.matchMedia({
      '(min-width: 769px)': () => {
        gsap.to('.photo-area', {
          scrollTrigger: {
            trigger: '.photo-area',
            pin: true,
            start: 'top top+=72',
            end: 'bottom+=100% top',
          },
        });

        gsap.to('.first-image', {
          opacity: 0,
          scrollTrigger: {
            trigger: '.first-image-trigger',
            start: 'bottom+=72 center',
            end: 'bottom+=72 center',
            scrub: true,
          },
        });

        gsap.to('.second-images', {
          scrollTrigger: {
            trigger: '.second-image-trigger',
            start: 'top+=72 center',
            toggleClass: { targets: '.second-images', className: 'view' },
            end: 'bottom+=72 center',
            scrub: true,
          },
        });

        gsap.to('.third-images', {
          scrollTrigger: {
            trigger: '.third-image-trigger',
            start: 'top+=72 center',
            toggleClass: { targets: '.third-images', className: 'view' },
            end: 'bottom+=72 center',
            scrub: true,
          },
        });
      },
    });
  };

  // 이미지 슬라이드 템플릿.
  const growBackgroundImageSlider = (target: any[], kind: string) => {
    return (
      <Swiper
        modules={[Navigation, Pagination, EffectFade]}
        className={`${kind === 'shop' ? 'second-images' : 'third-images'}`}
        slidesPerView={1}
        effect='fade'
        resizeObserver
        navigation={{
          nextEl: '.swiper-button-next',
          prevEl: '.swiper-button-prev',
        }}
        pagination={{ clickable: false }}>
        {target.map((target, idx) => (
          <SwiperSlide key={idx}>
            <img
              width='70%'
              height='auto'
              src={target}
              alt={`${kind} ${idx + 1}`}
            />
          </SwiperSlide>
        ))}
        <div
          className='swiper-button-next'
          onMouseEnter={() => _onHover(' bl-cursor', 'next')}
          onMouseLeave={() => _onLeave()}></div>
        <div
          className='swiper-button-prev'
          onMouseEnter={() => _onHover(' bl-cursor', 'prev')}
          onMouseLeave={() => _onLeave()}></div>
      </Swiper>
    );
  };

  // 툴팁 템플릿.
  const TooltipContent = (targetInfo: { info: string, text: string }[]) => {
    let result = targetInfo.map((item: { info: string, text: string }, idx) => {
      return (
        <Tooltip
          key={item.text + idx}
          _onHover={_onHover}
          _onLeave={_onLeave}
          info={item.info}>
          {item.text}
        </Tooltip>
      )
    })
    return result;
  }

  // json string 데이터와 툴팁 템플릿 결합하여 컨텐츠 생성.
  const introduceContent = (target: string, element: JSX.Element[]) => {
    let combineContent: any[] = target.split('$$');
    let i = 0;
    combineContent.forEach((item, idx) => {
      if (idx % 2 !== 0) {
        combineContent.splice(idx, 1, element[i]);
        i++;
      }
    });

    return combineContent
  }

  // 화면 진입 후 DOM 랜더 시,
  React.useEffect(() => {
    // 스크롤 트리거 연결 해제.
    gsapReady(false);
    // 해당 페이지에서만 사용될 별도 필름 추가 랜더.
    filmReady(true);
    // 현재 컨텐츠를 기준으로 스크롤 재생성.
    makeScroll(true);

    // 화면 벗어날 시 스크롤 트리거, 커서, 추가 필름, splitText 초기화.
    return () => {
      ScrollTrigger.clearMatchMedia();
      let triggers = ScrollTrigger.getAll();
      triggers.forEach((trigger) => {
        trigger.kill();
      });

      _onLeave();
      filmReady(false);
    };
  }, [filmReady, gsapReady, makeScroll, _onLeave]);

  // gsap 및 추가 Film이 준비되면 스크롤트리거 생성 및 splitText 동작.
  React.useEffect(() => {
    let firstTimer: ReturnType<typeof setTimeout>;
    let secondTimer: ReturnType<typeof setTimeout>;
    let thirdTimer: ReturnType<typeof setTimeout>;
    if (currentGsapState && currentFilmState) {
      aboutDetailGsap();

      firstTimer = setTimeout(() => {
        onScrollAbout('aboutFirst');
        clearTimeout(firstTimer);
      }, 100);
      secondTimer = setTimeout(() => {
        onScrollAbout('aboutSecond');
        clearTimeout(secondTimer);
      }, 700);
      thirdTimer = setTimeout(() => {
        onScrollAbout('aboutThird');
        clearTimeout(thirdTimer);
      }, 1400);
    }
    return () => {
      clearTimeout(firstTimer);
      clearTimeout(secondTimer);
      clearTimeout(thirdTimer);
      onScrollAbout('');
    };
  }, [currentFilmState, currentGsapState, onScrollAbout]);

  // 반복되는 Text 정의.
  const subTitleText = 'GROWTH\r\rBACKGROUND';

  return (
    <div className='about-detail'>
      <div className='container'>
        <div className='about-keywords'>
          <div className='first-content-area'>
            {/* 상단 화면에 출력 될 keyword 컨텐츠. */}
            {textCondition.map((textCondition, idx) => (
              <div className='row keyword-frame' key={idx}>
                <div className={textCondition.colInfo}>
                  <div className='position-frame'>
                    {/* 타이틀 SplitText. */}
                    <h2 className='about-tag'>
                      <SplitText
                        animation={'up'}
                        scroll={textCondition.scroll}
                        setTime={100}
                        index={textCondition.index1}
                      >
                        {hashtag.hashtagFirst[idx].title}
                      </SplitText>
                    </h2>
                    {/* 본문 SplitText. */}
                    <div className='type-p'>
                      {hashtag.hashtagFirst[idx].text.split('\n').map((item, idx) => {
                        return (
                          <SplitText
                            key={idx}
                            animation={'up'}
                            scroll={textCondition.scroll}
                            setTime={15}
                            index={textCondition.index2}
                            delay={idx !== 0 ? 500 * idx : null}
                          >
                            {item}
                          </SplitText>
                        )
                      })}
                    </div>
                  </div>
                </div>
                <div className={`back-keyword ${textCondition.align}`}>
                  <span>{hashtag.hashtagFirst[idx].back}</span>
                </div>
              </div>
            ))}
          </div>

          {/* 중단 화면에 출력 될 keyword 컨텐츠. */}
          <div className='second-content-area'>
            {textCondition2.map((textCondition2, idx) => (
              <div key={idx} className='row keyword-frame'>
                <div className={textCondition2.colInfo}>
                  <div className='position-frame'>
                    <h2 className='about-tag'>
                      {hashtag.hashtagSecond[idx].title}
                    </h2>
                    <div className='type-p'>
                      {hashtag.hashtagSecond[idx].text.split('\n').map((item, idx) => {
                        return <span key={idx}>{item}<br /></span>
                      })}
                    </div>
                  </div>
                </div>
                <div className={`back-keyword-second ${textCondition2.align}`}>
                  <span>{hashtag.hashtagSecond[idx].back}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* 하단 성장배경 컨텐츠. */}
      <div className='container fluid about-background'>
        <div className='container relative pl-pr-none'>
          <div className='background-title-frame'>
            <div className='col-12 col-m-7 off-m-5'>
              <h2>
                {subTitleText}
              </h2>
              <h2 className='fill-black'>
                {subTitleText}
              </h2>
            </div>
          </div>

          {/* 좌측 하단에 배치 될 이미지 영역. */}
          <div className='photo-area d-m-block d-xs-none'>
            <img
              width='70%'
              height='auto'
              className='first-image'
              src={child}
              alt='childhood'
            />
            <div>
              {growBackgroundImageSlider(growBackgroundImage2, 'shop')}
              {growBackgroundImageSlider(growBackgroundImage3, 'current')}
            </div>
          </div>

          {/* 성장배경 본문 및 작은 화면에서 각 위치에 이미지 출력 설정. */}
          <div className='col-12 col-m-7 off-m-5'>
            <div className='background-story-frame first-image-trigger'>
              {width < 768 && (
                <img
                  width='50%'
                  height='auto'
                  className='first-image'
                  src={child}
                  alt='childhood'
                />
              )}
              <h3>~ 2010</h3>
              <p>
                {introduceContent(firstIntroContent, TooltipContent(firstTooltipContent))}
              </p>
            </div>

            <div className='background-story-frame second-image-trigger'>
              {width < 768 &&
                growBackgroundImageSlider(growBackgroundImage2, 'shop')}
              <h3>2012 ~ 2016</h3>
              <p>
                {introduceContent(secondIntroContent, TooltipContent(secondTooltipContent))}
              </p>
            </div>

            <div className='background-story-frame third-image-trigger'>
              {width < 768 &&
                growBackgroundImageSlider(growBackgroundImage3, 'current')}
              <h3>2016 ~</h3>
              <p>
                {introduceContent(thirdIntroContent, TooltipContent(thirdTooltipContent))}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default React.memo(AboutDetail);
