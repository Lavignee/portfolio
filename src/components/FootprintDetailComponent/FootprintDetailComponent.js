import React, { useEffect } from 'react';
import { gsap } from "gsap";
import { useDispatch } from 'react-redux';
import { changeText, changeClassName } from '../../Modules/CursorModule';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import SwiperCore, { EffectFade, Navigation, Pagination } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import TextSliderComponent from '../TextSliderComponent';
import 'swiper/swiper.scss';
import 'swiper/components/navigation/navigation.scss';
import 'swiper/components/pagination/pagination.scss';
import 'swiper/components/effect-fade/effect-fade.scss';
import './FootprintDetailComponent.scss';

gsap.registerPlugin(ScrollTrigger);
SwiperCore.use([Navigation, Pagination, EffectFade]);

const career = [
  {
    id: 1, keyword: '# Career', title: '볼트러스트 (상주 프리랜서)', date: '2019.12 ~ 2020.04', summary: ['암호화폐 커스터디 서비스 기획 및 개발.'], text: ''
  },
  {
    id: 2, keyword: '# Career', title: '크리에이티브코드 (설립 멤버)', date: '2016.07 ~ 2019.10', summary: ['암호화폐 웹 지갑/웹 거래소 기획 및 개발.', '암호화폐 웹 소개/웹 판매 사이트 기획 및 개발.', '암호화폐 웹 레그/전산관리 솔루션 기획 및 개발.', '회사 운영 및 인사 관리.'], text: ''
  }
]

const project = [
  {
    id: 1, keyword: '# Project', title: '개인 포트폴리오 개발', date: '2020.10 ~ 2020.12', summary: ['React 개발'], text: '포트폴리오 제작'
  },
  {
    id: 2, keyword: '# Project', title: '커스터디 서비스 기획 및 개발', date: '2019.12 ~ 2020.04', summary: ['Next.js(SSR) 프로젝트', 'Material-UI기반의 React 개발', '자산 변동량 Chart 개발', '웹사이트 번역 작업', 'HTML 이메일폼 퍼블리싱 작업'], text: 'Online과 Offline의 분리가 명확하고 다양한 권한 관리와 보안정책이 도입된 암호화폐 관리 서비스입니다. 처음에는 디자이너 없이 Material-UI 프레임워크의 기능과 디자인을 그대로 사용하여 개발된 코드였으나, 제가 계약된 당시에는 새로운 디자인을 적용해야 했습니다. 기존에 작성된 코드는 이미 Backend 분야와 접목하여 대부분의 기능을 사용 중이었기 때문에 프레임워크에 뼈대와 스타일을 일일이 오버라이드 하여 작업하였습니다.'
  },
  {
    id: 3, keyword: '# Project', title: '암호화폐 웹 레그/전산관리 솔루션 기획 및 개발', date: '2019.06 ~ 2019.10', summary: ['해당기간에 3개 서비스 동시 개발.', '.NET Framework 기반 Backend.', 'Bootstrap 기반 및 Jquery를 통해 개발.', '회원 조직도 출력 및 검색 기능 개발.', '기간 지정 달력 기능 도입.', '세밀하고 다양한 계산식 개발.'], text: '클라이언트의 요청으로 회원 및 보유 암호화폐를 관리하는 웹 사이트를 개발하였습니다. 회원 간의 조직도를 웹상에서 표현하기 위해 OrgChart 기능을 도입하였고 조직도가 상당한 분량의 데이터를 표현해야 하므로 Zoom In/Out 기능과 Drag 기능을 추가로 개발했습니다. 또한, 사용자들이 소수점 단위의 구입, 구축, 전송 등의 다양한 계산을 해야 하므로 front 단에서 입력값에 따른 계산식을 개발하여 입력 제한 또는 계산 결과, 가이드 멘트 등을 출력했습니다.'
  },
  {
    id: 4, keyword: '# Project', title: '회사 소개 홈페이지 및 데모 웹 지갑 기획', date: '2019.06 ~ 2019.10', summary: ['사이트 구조 및 Flow 기획', '사이트 내부 컨텐츠 기획'], text: '설립되고 몇 년이나 흘렀지만 회사를 소개하는 웹사이트가 없었습니다. 대표이사와 상의하여 다양한 문구를 직접 작성하고 메인화면부터 페이지 구성, 자잘한 동적 효과 등을 기획하였습니다. 당시 솔루션 개발을 동시에 하고 있었으므로 개발 자체는 직접 하지 않았습니다.'
  },
  {
    id: 5, keyword: '# Project', title: '암호화폐 웹 소개/웹 판매 사이트 기획 및 개발', date: '2019.03 ~ 2019.06', summary: ['웹 소개 사이트 총 2개 / 웹 판매 사이트 총 2개.', '.NET Framework 기반 backend.', 'Bootstrap 기반 및 Jquery를 통해 개발.', 'GSAP를 통한 애니메이션 구현.', '타이머 및 프로그레스 바 기능 도입.'], text: '클라이언트의 요청으로 ICO(Initial Coin Offering),IEO(Initial Exchange Offering) 기능의 웹 사이트를 개발하였습니다. 매끄러운 Parallax 효과를 위해 GSAP를 사용하였고 작은 기기에서도 테이블 형태의 정보를 쉽게 편하게 확인하기 위해 이중 스크롤 레이아웃으로 개발한 특이점이 있습니다.'
  },
  {
    id: 6, keyword: '# Project', title: '암호화폐 웹 거래소/지갑 기획 및 개발', date: '2017 ~ 2019.03', summary: ['웹 거래소 총 9개 / 웹 지갑 총 6개', 'PHP CodeIgniter 기반 backend.', 'Bootstrap 기반 및 Jquery를 통해 개발.', 'Google reCaptcha 기능 도입.', '암호화폐의 시간/기간별 시세 표기를 위한 StockChart 기능 도입.', '다국어 번역 기능 도입.', 'QR Code Generator/QR Code Scanner 기능 도입.', '정규식을 통한 폼 밸리데이션 개발로 View 단에서 직관적이고 빠른 피드백 방식을 개발.'], text: '오픈소스 기반의 암호화폐 웹 지갑과 거래소 소스를 지속적으로 개선하여 다양한 기업에 판매하였습니다. 처음에는 프랑스어 주석만 가득하고 기본 거래 기능만 있던 소스를 CodeIgniter로 옮겨와서 Front 단과 Back 단으로 구분하여 개선했습니다. 이후 차트와 새로운 코인 연동, 성능 개선 등을 반복하고, 고객 요청에 따라 다양한 추가 기능을 개발하다 보니 해당 기능들을 옵션 형태로 넣고 빼며 최종적으로는 테마 형태로 디자인들을 추가하여 다양한 솔루션형태로 판매하였습니다. 당시 모든 타 거래소는 PC와 휴대기기 버전을 따로 개발했으나 완전 반응형으로 작업해온 특이점이 있습니다.'
  },
  {
    id: 7, keyword: '# Subcontract', title: '각종 기업의 소개/운영 사이트 개발', date: '2016.02 ~ 2017.12', summary: ['쇼핑몰 웹 사이트. (일반기업 솔루션 기반)', '이사센터 웹 사이트. (별도 Backend개발자에게 html 제공)', '소규모 소개 웹 사이트 2개. (Wordpress 기반)', '일식 요리학원 웹 사이트. (XEboard, Gnuboard 기반)', '쇼핑몰 웹 사이트. (Firstmall 기반)', '종이액자기업 웹 사이트. (Wordpress 기반)', '쇼핑몰 웹 사이트. (Gnuboard 기반)', '제약, 바이오 화학분야 기업 소개 웹 사이트. (Wordpress 기반)', '플라스마 기술 기업 소개 웹 사이트. (Wordpress 기반)', '흥신소 소개 웹 사이트. (Wordpress 기반)'], text: '독학으로 퍼블리싱을 공부하며 지인들과 함께 팀을 꾸려 다양한 외주작업을 했습니다. Backend 개발자가 없었으므로 WordPress, Gnuboard 등 다양한 프레임워크를 통해 업무를 진행하였습니다.'
  },
]

const CareerContent = ({ isActive, idx, id, keyword, title, date, summary, text }) => {
  const summarys = []
  summary.forEach((item, i) => summarys.push(<span key={item + i}>{item}</span>))
  return (
    <div key={idx} className={`content-frame${isActive ? ' active' : ''}`}>
      <ul className='content'>
        <li className='keyword'>{keyword}</li>
        <li className='title'>{title}</li>
        <li className='date'>{date}</li>
        <li className='summarys'>{summarys}</li>
        {text && (
          <p>{text}</p>
        )}
      </ul>
    </div>
  )
}

const ProjectContent = ({ isActive, idx, id, keyword, title, date, summary, text }) => {
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

const FootprintDetailComponent = () => {
  const dispatch = useDispatch();
  const cursorText = (text) => dispatch(changeText(text));
  const cursorClass = (className) => dispatch(changeClassName(className));

  useEffect(() => {
    let triggers = ScrollTrigger.getAll();
    triggers.forEach(trigger => {
      trigger.kill();
    });

    ScrollTrigger.matchMedia({
      "(min-width: 985px)": function () {
        gsap.fromTo('.mobile-division', {
          opacity: 0
        }, {
          opacity: 0,
        });
      },
      "(max-width: 984px)": function () {
        gsap.fromTo('.text-slider-left-area', {
          opacity: 1
        }, {
          opacity: 0,
          scrollTrigger: {
            scroller: '#root',
            id: 'text-slider-left',
            trigger: '.text-slider-left-area',
            start: 'top+=50% center',
            end: 'bottom-=5% center',
            scrub: true
          }
        });

        gsap.fromTo('.text-slider-right-area', {
          opacity: 0
        }, {
          opacity: 1,
          scrollTrigger: {
            scroller: '#root',
            id: 'text-slider-right',
            trigger: '.text-slider-right-area',
            start: 'top+=100% center',
            end: 'bottom+=50% center',
            scrub: true
          }
        });

        gsap.fromTo('.mobile-division', {
          opacity: 1
        }, {
          opacity: 0,
          scrollTrigger: {
            scroller: '#root',
            id: 'mobile-division',
            trigger: '.carrer-frame',
            start: 'bottom center',
            end: 'bottom+=50% center',
            scrub: true
          }
        });
      }
    });
  }, []);

  const prevCursor = () => {
    cursorText('more recent');
    cursorClass(' bl-cursor');
  }

  const nextCursor = () => {
    cursorText('more past');
    cursorClass(' bl-cursor');
  }

  const paginationCursor = () => {
    cursorClass(' pagination-cursor');
  }

  const leaveCursor = () => {
    cursorText('');
    cursorClass('');
  }

  return (
    <div className='footprint-detail'>
      <div className='container fluid pl-pr-none'>
        <div className='text-slider-left-area'>
          <TextSliderComponent text={'career'} type={'left'} />
        </div>
        <div className='text-slider-right-area'>
          <TextSliderComponent text={'project&subcontract'} type={'right'} />
        </div>

        <div className='row'>
          <div className='col-12 off-l-none col-l-5 carrer-frame'>
            <Swiper
              spaceBetween={50}
              slidesPerView={1}
              effect='fade'
              updateOnWindowResize
              navigation={{ nextEl: '.swiper-button-next', prevEl: '.swiper-button-prev' }}
              pagination={{ clickable: true, el: '.swiper-pagination' }}
            >
              {career.map((career, idx) => (
                <SwiperSlide key={idx}>
                  {({ isActive }) => (
                    <CareerContent isActive={isActive} idx={idx} id={career.id} keyword={career.keyword} title={career.title} date={career.date} summary={career.summary} text={career.text} />
                  )}
                </SwiperSlide>
              ))}
              <div className='swiper-pagination left-pagination' onMouseEnter={paginationCursor} onMouseLeave={leaveCursor}></div>
              <div className='swiper-button-next' onMouseEnter={nextCursor} onMouseLeave={leaveCursor}></div>
              <div className='swiper-button-prev' onMouseEnter={prevCursor} onMouseLeave={leaveCursor}></div>
            </Swiper>
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
            <Swiper
              spaceBetween={50}
              slidesPerView={1}
              effect='fade'
              updateOnWindowResize
              navigation={{ nextEl: '.swiper-button-next', prevEl: '.swiper-button-prev' }}
              pagination={{ clickable: true, el: '.swiper-pagination' }}
            >
              {project.map((project, idx) => (
                <SwiperSlide key={idx}>
                  {({ isActive }) => (
                    <ProjectContent isActive={isActive} idx={idx} id={project.id} keyword={project.keyword} title={project.title} date={project.date} summary={project.summary} text={project.text} />
                  )}
                </SwiperSlide>
              ))}
              <div className='swiper-pagination right-pagination' onMouseEnter={paginationCursor} onMouseLeave={leaveCursor}></div>
              <div className='swiper-button-next' onMouseEnter={nextCursor} onMouseLeave={leaveCursor}></div>
              <div className='swiper-button-prev' onMouseEnter={prevCursor} onMouseLeave={leaveCursor}></div>
            </Swiper>
          </div>
        </div>
      </div>
    </div >
  )
}

export default FootprintDetailComponent;
