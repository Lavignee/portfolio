import React, { useEffect } from 'react';
import { useDispatch, useSelector, shallowEqual } from 'react-redux';
import { changeGsapState, makeSmoothScroll } from 'modules/commonValue';
import SwiperCore, { EffectFade, Navigation, Pagination } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

import './footprintDetail.scss';
import 'swiper/swiper.scss';
import 'swiper/components/navigation/navigation.scss';
import 'swiper/components/pagination/pagination.scss';
import 'swiper/components/effect-fade/effect-fade.scss';

import TextSlider from 'components/textSlider';

SwiperCore.use([Navigation, Pagination, EffectFade]);
gsap.registerPlugin(ScrollTrigger);

const career = [
  {
    id: 1, keyword: '# Career', title: '볼트러스트 (상주 프리랜서)', date: '2019.12 ~ 2020.04', summary: ['퍼블리싱', '프론트 개발'], text: ''
  },
  {
    id: 2, keyword: '# Career', title: '크리에이티브코드 (설립 멤버)', date: '2016.07 ~ 2019.10', summary: ['웹 서비스 기획', 'UX기획', '디자인 검수', '퍼블리싱', '프론트 개발', '회사 운영 및 인사 관리.'], text: ''
  }
]

const project = [
  {
    id: 1, keyword: '# Project', title: '개인 포트폴리오 개발', date: '2020.10 ~ 2021.04 (476시간)', summary: ['React 개발', '반응형 사이트', 'Parcel 사용', 'GSAP로 동적효과 구현', 'Video to canvas 구현', '다양한 애니메이션 구현'], text: 'React 개발 경험이 많지 않아 좀 더 익숙해질 겸 지루하지 않고, 다양한 표현방식을 가진 포트폴리오를 만들고 싶었습니다. 일부 이미지 파일과 SVG 아이콘 등을 제외하고 구성 및 UX 기획부터 디자인, 개발까지 모두 직접 하였습니다. 최초 기획에는 다국어 번역, 메일 발송 기능과 FHD 이상의 화면에서 추가 애니메이션 등도 포함되었지만, 이미 육아와 가사를 병행하다 보니 애초 완성보다 많이 지체되어 우선 마무리(추후 계속 개발 예정)하게 되었습니다. 개발 기간 자체는 꽤 길지만 매번 작업 시 작성한 개발 시간은 476시간으로 주 40시간 근로제 기준으로 59.5일 (약 두달 보름)입니다.'
  },
  {
    id: 2, keyword: '# Project', title: '커스터디 서비스 기획 및 개발', date: '2019.12 ~ 2020.04', summary: ['React 개발', '반응형 사이트', 'Material-UI 사용', '기간별 자산 변동량 Chart 개발', '보유 자산 비율 Chart 개발', '사이트 번역 및 개발', '이메일 폼 퍼블리싱 작업'], text: 'Online과 Offline의 분리가 명확하고 다양한 권한 관리와 보안정책이 도입된 암호화폐 관리 서비스입니다. 프로젝트 초기에는 디자이너 없이 Material-UI 기능과 디자인을 그대로 사용하여 개발되었으나, 제가 계약된 당시에는 디자이너가 와서 디자인을 적용해야 했습니다. 기존에 작성된 코드는 이미 대부분 Material-UI에서 제공되는 컴포넌트들로 구성되어 있었기 때문에 해당 컴포넌트들에서 디자인 요소를 제거한 뒤 새로 스타일을 입히거나 오버라이드 하여 작업하였습니다.'
  },
  {
    id: 3, keyword: '# Project', title: '암호화폐 웹 레그/전산관리 솔루션 기획 및 개발', date: '2019.06 ~ 2019.10', summary: ['해당 기간에 동일 서비스 3개 개발', 'Bootstrap 기반 반응형 레이아웃', 'JQuery로 개발', '회원 조직도 출력 및 검색 기능 개발', '기간 지정 달력 기능 도입', '세밀하고 다양한 계산식 개발'], text: '클라이언트의 요청으로 회원 및 보유 암호화폐를 관리하는 웹 사이트를 개발하였습니다. 회원 간의 조직도를 웹상에서 표현하기 위해 OrgChart 기능을 도입하였고 조직도가 상당한 분량의 데이터를 표현해야 하므로 Zoom In/Out 기능과 Drag 기능을 추가로 개발했습니다.'
  },
  {
    id: 4, keyword: '# Project', title: '회사 소개 홈페이지 및 데모 웹 지갑 기획', date: '2019.06 ~ 2019.10', summary: ['사이트 구조 및 UX 기획', '사이트 내부 컨텐츠 기획'], text: '설립되고 몇 년이나 흘렀지만 회사를 소개하는 웹 사이트가 없었습니다. 대표와 상의하여 다양한 문구를 직접 작성하고 메인화면부터 페이지 구성, 자잘한 동적 효과 등을 기획하였습니다. 당시 솔루션 개발을 동시에 하고 있었으므로 개발 자체는 직접 하지 않았습니다.'
  },
  {
    id: 5, keyword: '# Project', title: '암호화폐 웹 소개/웹 판매 사이트 기획 및 개발', date: '2019.03 ~ 2019.06', summary: ['웹 소개 사이트 2개 / 웹 판매 사이트 2개', 'Bootstrap 기반 반응형 레이아웃', 'JQuery로 개발', 'GSAP로 동적효과 구현', '타이머 및 프로그레스 바 기능 도입'], text: '클라이언트의 요청으로 ICO(Initial Coin Offering), IEO(Initial Exchange Offering) 기능의 웹 사이트를 개발하였습니다. 매끄러운 Parallax 효과를 위해 GSAP를 사용하였고 작은 기기에서도 테이블 형태의 정보를 쉽게 편하게 확인하기 위해 이중 스크롤 레이아웃으로 개발한 특이점이 있습니다.'
  },
  {
    id: 6, keyword: '# Project', title: '암호화폐 웹 거래소/지갑 기획 및 개발', date: '2017 ~ 2019.03', summary: ['웹 거래소 9개 / 웹 지갑 6개', 'Bootstrap 기반 반응형 레이아웃', 'JQuery로 개발', 'Google reCaptcha 기능 도입', '암호화폐 시간/기간별 시세 Chart 개발', '사이트 번역 및 개발', '웹 QR Code Generator 개발', '웹 QR Code Scanner 개발', '세밀하고 다양한 계산식 개발'], text: '오픈소스 기반의 암호화폐 웹 지갑과 거래소 소스를 지속적으로 개선하여 다양한 기업에 판매하였습니다. 처음에는 프랑스어 주석만 가득하고 기본 거래 기능만 있던 소스를 CodeIgniter로 옮겨와서 Front 단과 Back 단으로 구분하여 개선했습니다. 이후 차트와 새로운 코인 연동, 성능 개선 등을 반복하고, 고객 요청에 따라 다양한 추가 기능을 개발하다 보니 해당 기능들을 옵션 형태로 넣고 빼며 최종적으로는 테마 형태로 디자인들을 추가하여 다양한 솔루션형태로 판매하였습니다. 또한, 사용자들이 소수점 단위의 구입, 구축, 전송 등의 다양한 계산을 해야 하므로 프론트에서 입력값에 따른 계산식을 개발하여 입력값에 즉시 출력되는 입력 제한 또는 계산 결과, 가이드 멘트 등을 개발했습니다. 당시 모든 타 거래소는 PC와 휴대기기 버전을 따로 개발했으나 완전 반응형으로 작업해온 특이점이 있습니다.'
  },
  {
    id: 7, keyword: '# Subcontract', title: '각종 기업의 소개/운영 사이트 개발', date: '2016.02 ~ 2017.12', summary: ['쇼핑몰 웹 사이트 (일반기업 솔루션 기반)', '이사센터 웹 사이트 (Back개발자에게 퍼블리싱 파일 제공)', '소규모 소개 웹 사이트 2개 (Wordpress 기반)', '일식 요리학원 웹 사이트 (XEboard, Gnuboard 기반)', '쇼핑몰 웹 사이트 (Firstmall 기반)', '종이액자기업 웹 사이트 (Wordpress 기반)', '쇼핑몰 웹 사이트. (Gnuboard 기반)', '제약, 바이오 화학분야 기업 소개 웹 사이트 (Wordpress 기반)', '플라스마 기술 기업 소개 웹 사이트. (Wordpress 기반)', '흥신소 소개 웹 사이트 (Wordpress 기반)'], text: '독학으로 퍼블리싱을 공부하며 지인들과 함께 팀을 꾸려 다양한 외주작업을 했습니다. Back 개발자가 따로 없었으므로 WordPress, Gnuboard 등 다양한 프레임워크를 통해 업무를 진행하였습니다.'
  },
]

const ContentText = ({ isActive, idx, keyword, title, date, summary, text }) => {
  const summarys = []
  summary.forEach((item, i) => summarys.push(<span key={item + i}>{item}</span>))
  return (
    <div key={idx} className={`content-frame${isActive ? ' active' : ''}`}>
      <ul className='content'>
        <li className='keyword'>{keyword}</li>
        <li className='title'>{title}</li>
        <li className='date'>{date}</li>
        <li className='summarys division'><div className='line'></div>{summarys}</li>
        {text && (
          <p>{text}</p>
        )}
      </ul>
    </div>
  )
}

const FootprintDetail = ({ onHover, onLeave }) => {
  const dispatch = useDispatch();
  const gsapReady = (value) => dispatch(changeGsapState(value));
  const makeScroll = (value) => dispatch(makeSmoothScroll(value));
  const [currentGsapState] = useSelector(state => [state.CommonValue.currentGsapState], shallowEqual);

  const sliderContent = (content) => {
    return (
      <Swiper
        spaceBetween={50}
        slidesPerView={1}
        effect='fade'
        resizeObserver
        navigation={{ nextEl: '.swiper-button-next', prevEl: '.swiper-button-prev' }}
        pagination={{ clickable: true, el: '.swiper-pagination' }}
      >
        {content.map((content, idx) => (
          <SwiperSlide key={idx}>
            {({ isActive }) => (
              <ContentText isActive={isActive} idx={idx} keyword={content.keyword} title={content.title} date={content.date} summary={content.summary} text={content.text} />
            )}
          </SwiperSlide>
        ))}
        <div className='swiper-pagination left-pagination' onMouseEnter={() => onHover(' pagination-cursor')} onMouseLeave={() => onLeave()}></div>
        <div className='swiper-button-next' onMouseEnter={() => onHover(' bl-cursor', 'past')} onMouseLeave={() => onLeave()}></div>
        <div className='swiper-button-prev' onMouseEnter={() => onHover(' bl-cursor', 'recent')} onMouseLeave={() => onLeave()}></div>
      </Swiper>
    )
  }

  const FootprintDetailGsap = () => {
    ScrollTrigger.matchMedia({
      '(min-width: 985px)': () => {
        gsap.to('.mobile-division', {
          opacity: 0
        })
      },
      '(max-width: 984px)': () => {
        gsap.fromTo('.text-slider-left-area', {
          opacity: 1
        }, {
          opacity: 0,
          scrollTrigger: {
            id: 'text-slider-left',
            trigger: '.text-slider-left-area',
            start: 'top+=30% center',
            end: 'bottom-=30% center',
            scrub: true
          }
        });

        gsap.fromTo('.text-slider-right-area', {
          opacity: 0
        }, {
          opacity: 1,
          scrollTrigger: {
            id: 'text-slider-right',
            trigger: '.text-slider-right-area',
            start: 'top+=50% center',
            end: 'bottom-=30% center',
            scrub: true
          }
        });

        gsap.fromTo('.mobile-division', {
          opacity: 1
        }, {
          opacity: 0,
          scrollTrigger: {
            id: 'mobile-division',
            trigger: '.text-slider-left-area',
            start: 'top+=30% center',
            end: 'bottom-=30% center',
            scrub: true
          }
        });
      }
    });
  }

  useEffect(() => {
    gsapReady(false);
    makeScroll(true);

    return () => {
      let triggers = ScrollTrigger.getAll();
      triggers.forEach(trigger => {
        trigger.kill();
      });

      onLeave();
    }
  }, [])

  useEffect(() => {
    currentGsapState && FootprintDetailGsap();
  }, [currentGsapState])

  return (
    <div className='footprint-detail'>
      <div className='container fluid pl-pr-none'>
        <div className='text-slider-left-area'>
          <TextSlider text={'career'} type={'left'} />
        </div>
        <div className='text-slider-right-area'>
          <TextSlider text={'project&subcontract'} type={'right'} />
        </div>

        <div className='row'>
          <div className='col-12 off-l-none col-l-5 carrer-frame'>
            {sliderContent(career)}
          </div>

          <div className='mobile-division'>Project<br />&Subcontract<span></span></div>

          <div className='col-1 pl-pr-none division-frame'>
            <div className='division-line'></div>
            <div className='point-frame'>
              <div className='left-area'><div className='left-text'>Carrer</div></div>
              <div className='right-area'><div className='right-text'>Project&Subcontract</div></div>
            </div>
          </div>

          <div className='col-12 col-l-6 project-frame'>
            {sliderContent(project)}
          </div>
        </div>
      </div>
    </div >
  )
}

export default FootprintDetail;
