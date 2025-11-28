import React from 'react';
import { useCommonValueStore } from '@/stores/commonValue';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, EffectFade } from 'swiper/modules';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

import career from '../../data/dataFootprint/careerFootprint.json';
import project from '../../data/dataFootprint/projectFootprint.json';

import TextSlider from '../../components/textSlider';

if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger);
}

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
const ContentText = ({
  isActive,
  idx,
  keyword,
  title,
  date,
  summary,
  text,
}: ContentTextProp) => {
  const summarys: JSX.Element[] = [];
  summary.forEach((item, i) =>
    summarys.push(<span key={item + i}>{item}</span>)
  );
  return (
    <div key={idx} className={`content-frame${isActive ? ' active' : ''}`}>
      <ul className='content'>
        <li className='keyword'>{keyword}</li>
        <li className='title'>{title}</li>
        <li className='date'>
          {date &&
            date.split('\n').map((item, idx) => {
              return (
                <React.Fragment key={idx}>
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
          {text &&
            text.split('\n').map((item, idx) => {
              return (
                <p key={idx}>
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

// Props로 받는 이벤트들에 대한 interface 정의.
interface FootprintDetailProps {
  _onHover: (hoverCursor: string, hoverText?: string | null) => void;
  _onLeave: (hoverText?: string | null) => void;
}

const FootprintDetail = ({ _onHover, _onLeave }: FootprintDetailProps) => {
  const setMakeScrollState = useCommonValueStore((s) => s.setMakeScrollState);
  const currentGsapState = useCommonValueStore((s) => s.currentGsapState);

  const makeScroll = React.useCallback(
    (value: boolean) => {
      setMakeScrollState(value);
    },
    [setMakeScrollState]
  );
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
    kind: 'left' | 'right'
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
        pagination={{
          clickable: true,
          el: '.swiper-pagination', // 아래 div.swiper-pagination에 붙일 것
        }}
      >
        {content.map((item) => (
          <SwiperSlide key={item.id}>
            {({ isActive }) => (
              <ContentText
                isActive={isActive}
                idx={item.id}
                keyword={item.keyword}
                title={item.title}
                date={item.date}
                summary={item.summary}
                text={item.text}
              />
            )}
          </SwiperSlide>
        ))}

        {/* 커스텀 페이지네이션 영역 (SCSS에서 .left-pagination / .right-pagination 스타일링) */}
        <div
          className={`swiper-pagination ${kind}-pagination`}
          onMouseEnter={() => _onHover(' pagination-cursor')}
          onMouseLeave={() => _onLeave()}
        ></div>

        {/* 좌우 네비게이션 영역 (커스텀 커서 past/recent 텍스트 표시) */}
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
  React.useEffect(() => {
    // 현재 컨텐츠를 기준으로 스크롤 재생성.
    makeScroll(true);
    currentGsapState && FootprintDetailGsap();

    return () => {
      ScrollTrigger.clearMatchMedia();
      let triggers = ScrollTrigger.getAll();
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
