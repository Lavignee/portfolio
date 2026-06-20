'use client';

import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import React from 'react';
import { EffectFade, Navigation, Pagination } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import career from '../../data/dataFootprint/careerFootprint.json';
import project from '../../data/dataFootprint/projectFootprint.json';

import './footprintDetail.scss';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/effect-fade';

import TextSlider from '../../components/textSlider';
import useStore from '../../store/useStore';
import useCursorHandlers from '@/hooks/useCursorHandlers';

gsap.registerPlugin(ScrollTrigger);

// Props로 받는 값에 대한 interface 정의.
interface ContentTextProp {
  isActive: boolean;
  idx: number;
  keyword: string;
  title: string;
  date: string;
  summary: string[];
  text: string;
}

// 슬라이드로 출력할 컨텐츠 템플릿.
const ContentText = ({ isActive, idx, keyword, title, date, summary, text }: ContentTextProp) => {
  const summarys: React.JSX.Element[] = [];
  summary.forEach((item) => {
    summarys.push(<span key={item}>{item}</span>);
  });
  return (
    <div key={idx} className={`content-frame${isActive ? ' active' : ''}`}>
      <ul className='content'>
        <li className='keyword'>{keyword}</li>
        <li className='title'>{title}</li>
        <li className='date'>
          {date?.split('\n').map((item) => {
            return (
              <React.Fragment key={item}>
                {item}
                <br />
              </React.Fragment>
            );
          })}
        </li>
        <li className='summarys division'>
          <div className='line'></div>
          {summarys}
        </li>
        <li>
          {text?.split('\n').map((item) => {
            return (
              <p key={item}>
                {item}
                <br />
              </p>
            );
          })}
        </li>
      </ul>
    </div>
  );
};

const FootprintDetail = () => {
  // App Router에서는 props 전달이 불가하므로 커서 핸들러를 훅에서 받는다.
  const { onHover: _onHover, onLeave: _onLeave } = useCursorHandlers();
  // 전역 스토어 액션.
  const makeScroll = useStore((s) => s.makeSmoothScroll);

  // 전역 스토어 구독.
  const currentGsapState = useStore((s) => s.currentGsapState);

  // 슬라이더 템플릿.
  const sliderContent = (
    content: {
      id: number;
      keyword: string;
      title: string;
      date: string;
      summary: string[];
      text: string;
    }[],
    kind: string
  ) => {
    return (
      <Swiper
        modules={[Navigation, Pagination, EffectFade]}
        spaceBetween={50}
        slidesPerView={1}
        effect='fade'
        resizeObserver
        navigation={{
          nextEl: '.swiper-button-next',
          prevEl: '.swiper-button-prev',
        }}
        pagination={{ clickable: true, el: '.swiper-pagination' }}
      >
        {content.map((content) => (
          <SwiperSlide key={content.id}>
            {({ isActive }: { isActive: boolean }) => (
              <ContentText
                isActive={isActive}
                idx={content.id}
                keyword={content.keyword}
                title={content.title}
                date={content.date}
                summary={content.summary}
                text={content.text}
              />
            )}
          </SwiperSlide>
        ))}
        <div
          className={`swiper-pagination ${kind}-pagination`}
          onMouseEnter={() => _onHover(' pagination-cursor')}
          onMouseLeave={() => _onLeave()}
        ></div>
        <div
          className='swiper-button-next'
          onMouseEnter={() => _onHover(' bl-cursor', 'past')}
          onMouseLeave={() => _onLeave()}
        ></div>
        <div
          className='swiper-button-prev'
          onMouseEnter={() => _onHover(' bl-cursor', 'recent')}
          onMouseLeave={() => _onLeave()}
        ></div>
      </Swiper>
    );
  };

  // 폭이 좁은 화면에서 스크롤 트리거 동작.
  const FootprintDetailGsap = () => {
    ScrollTrigger.matchMedia({
      '(min-width: 985px)': () => {
        gsap.to('.mobile-division', {
          opacity: 0,
        });
      },
      '(max-width: 984px)': () => {
        gsap.fromTo(
          '.text-slider-left-area',
          {
            opacity: 1,
          },
          {
            opacity: 0,
            scrollTrigger: {
              id: 'text-slider-left',
              trigger: '.text-slider-left-area',
              start: 'top+=30% center',
              end: 'bottom-=30% center',
              scrub: true,
            },
          }
        );

        gsap.fromTo(
          '.text-slider-right-area',
          {
            opacity: 0,
          },
          {
            opacity: 1,
            scrollTrigger: {
              id: 'text-slider-right',
              trigger: '.text-slider-right-area',
              start: 'top+=50% center',
              end: 'bottom-=30% center',
              scrub: true,
            },
          }
        );

        gsap.fromTo(
          '.mobile-division',
          {
            opacity: 1,
          },
          {
            opacity: 0,
            scrollTrigger: {
              id: 'mobile-division',
              trigger: '.text-slider-left-area',
              start: 'top+=30% center',
              end: 'bottom-=30% center',
              scrub: true,
            },
          }
        );
      },
    });
  };

  // 스무스 스크롤 생성 이후 스크롤 트리거 연동.
  // biome-ignore lint/correctness/useExhaustiveDependencies: GSAP 셋업은 currentGsapState 변화 시 1회만 실행해야 하며, 셋업 함수를 의존성에 추가하면 매 렌더 재초기화됨.
  React.useEffect(() => {
    // 현재 컨텐츠를 기준으로 스크롤 재생성.
    makeScroll(true);
    currentGsapState && FootprintDetailGsap();

    return () => {
      ScrollTrigger.clearMatchMedia();
      const triggers = ScrollTrigger.getAll();
      triggers.forEach((trigger) => {
        trigger.kill(true);
      });

      _onLeave();
    };
  }, [_onLeave, currentGsapState, makeScroll]);

  return (
    <div className='footprint-detail'>
      <div className='container fluid pl-pr-none'>
        {/* 동적인 배경으로 사용되는 텍스트 슬라이더 영역. */}
        <div className='text-slider-left-area'>
          <TextSlider text={'career'} type={'left'} />
        </div>
        <div className='text-slider-right-area'>
          <TextSlider text={'project&subcontract'} type={'right'} />
        </div>

        <div className='row'>
          {/* 좌측 또는 상단에 출력할 슬라이더 영역. */}
          <div className='col-12 off-l-none col-l-5 career-frame'>
            {sliderContent(career.career, 'left')}
          </div>

          <div className='mobile-division'>
            Project
            <br />
            &Subcontract<span></span>
          </div>

          {/* 좌, 우측 컨텐츠의 구분 선 영역. */}
          <div className='col-1 pl-pr-none division-frame'>
            <div className='division-line'></div>
            <div className='point-frame'>
              <div className='left-area'>
                <div className='left-text'>Career</div>
              </div>
              <div className='right-area'>
                <div className='right-text'>Project&Subcontract</div>
              </div>
            </div>
          </div>

          {/* 우측 또는 하단에 출력할 슬라이더 영역. */}
          <div className='col-12 col-l-6 project-frame'>
            {sliderContent(project.project, 'right')}
          </div>
        </div>
      </div>
    </div>
  );
};

export default FootprintDetail;
