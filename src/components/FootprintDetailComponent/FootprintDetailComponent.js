import React, { useState, useEffect, useRef } from 'react';
import { gsap } from "gsap";
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import TextSliderComponent from '../TextSliderComponent';
import './FootprintDetailComponent.scss';

gsap.registerPlugin(ScrollTrigger);

const career = [
  {
    id: 1, title: '볼트러스트 (상주 프리랜서)', date: '2019.12 ~ 2020.04', summary: ['암호화폐 커스터디 서비스 기획 및 개발.'], text: ''
  },
  {
    id: 2, title: '크리에이티브코드 (설립 멤버)', date: '2016.07 ~ 2019.10', summary: ['암호화폐 웹 지갑/웹 거래소 기획 및 개발.', '암호화폐 웹 소개/웹 판매 사이트 기획 및 개발.', '암호화폐 웹 레그/전산관리 솔루션 기획 및 개발.', '회사 운영 및 인사 관리.'], text: ''
  }
]

const leftTable = [
  {
    id: 1, title: '개인 포트폴리오 개발', date: '2020.10 ~ 2020.12', summary: ['React 개발'], text: '포트폴리오 제작'
  },
  {
    id: 2, title: '커스터디 서비스 기획 및 개발', date: '2019.12 ~ 2020.04', summary: ['Next.js(SSR) 프로젝트', 'Material-UI기반의 React 개발', '자산 변동량 Chart 개발', '웹사이트 번역 작업', 'HTML 이메일폼 퍼블리싱 작업'], text: 'Online과 Offline의 분리가 명확하고 다양한 권한 관리와 보안정책이 도입된 암호화폐 관리 서비스입니다. 처음에는 디자이너 없이 Material-UI 프레임워크의 기능과 디자인을 그대로 사용하여 개발된 코드였으나, 제가 계약된 당시에는 새로운 디자인을 적용해야 했습니다. 기존에 작성된 코드는 이미 Backend 분야와 접목하여 대부분의 기능을 사용 중이었기 때문에 프레임워크에 뼈대와 스타일을 일일이 오버라이드 하여 작업하였습니다.'
  },
  {
    id: 3, title: '암호화폐 웹 레그/전산관리 솔루션 기획 및 개발', date: '2019.06 ~ 2019.10', summary: ['해당기간에 3개 서비스 동시 개발.', '.NET Framework 기반 Backend.', 'Bootstrap 기반 및 Jquery를 통해 개발.', '회원 조직도 출력 및 검색 기능 개발.', '기간 지정 달력 기능 도입.', '세밀하고 다양한 계산식 개발.'], text: '클라이언트의 요청으로 회원 및 보유 암호화폐를 관리하는 웹 사이트를 개발하였습니다. 회원 간의 조직도를 웹상에서 표현하기 위해 OrgChart 기능을 도입하였고 조직도가 상당한 분량의 데이터를 표현해야 하므로 Zoom In/Out 기능과 Drag 기능을 추가로 개발했습니다. 또한, 사용자들이 소수점 단위의 구입, 구축, 전송 등의 다양한 계산을 해야 하므로 front 단에서 입력값에 따른 계산식을 개발하여 입력 제한 또는 계산 결과, 가이드 멘트 등을 출력했습니다.'
  },
  {
    id: 4, title: '암호화폐 웹 소개/웹 판매 사이트 기획 및 개발', date: '2019.03 ~ 2019.06', summary: ['웹 소개 사이트 총 2개 / 웹 판매 사이트 총 2개.', '.NET Framework 기반 backend.', 'Bootstrap 기반 및 Jquery를 통해 개발.', 'GSAP를 통한 애니메이션 구현.', '타이머 및 프로그레스 바 기능 도입.'], text: '클라이언트의 요청으로 ICO(Initial Coin Offering),IEO(Initial Exchange Offering) 기능의 웹 사이트를 개발하였습니다. 매끄러운 Parallax 효과를 위해 GSAP를 사용하였고 작은 기기에서도 테이블 형태의 정보를 쉽게 편하게 확인하기 위해 이중 스크롤 레이아웃으로 개발한 특이점이 있습니다.'
  },
  {
    id: 5, title: '각종 기업의 소개/운영 사이트 개발', date: '2016.02 ~ 2017.12', summary: ['쇼핑몰 웹 사이트. (일반기업 솔루션 기반)', '이사센터 웹 사이트. (별도 Backend개발자에게 html 제공)', '소규모 소개 웹 사이트 2개. (Wordpress 기반)', '일식 요리학원 웹 사이트. (XEboard, Gnuboard 기반)', '쇼핑몰 웹 사이트. (Firstmall 기반)', '종이액자기업 웹 사이트. (Wordpress 기반)', '쇼핑몰 웹 사이트. (Gnuboard 기반)', '제약, 바이오 화학분야 기업 소개 웹 사이트. (Wordpress 기반)', '플라스마 기술 기업 소개 웹 사이트. (Wordpress 기반)', '흥신소 소개 웹 사이트. (Wordpress 기반)'], text: '독학으로 퍼블리싱을 공부하며 지인들과 함께 팀을 꾸려 다양한 외주작업을 했습니다. Backend 개발자가 없었으므로 WordPress, Gnuboard 등 다양한 프레임워크를 통해 업무를 진행하였습니다.'
  },
]
const rightTable = [
  {
    id: 1, title: '회사 소개 홈페이지 및 데모 웹 지갑 기획', date: '2019.06 ~ 2019.10', summary: ['사이트 구조 및 Flow 기획', '사이트 내부 컨텐츠 기획'], text: '설립되고 몇 년이나 흘렀지만 회사를 소개하는 웹사이트가 없었습니다. 대표이사와 상의하여 다양한 문구를 직접 작성하고 메인화면부터 페이지 구성, 자잘한 동적 효과 등을 기획하였습니다. 당시 솔루션 개발을 동시에 하고 있었으므로 개발 자체는 직접 하지 않았습니다.'
  },
  {
    id: 2, title: '암호화폐 웹 거래소/지갑 기획 및 개발', date: '2017 ~ 2019.03', summary: ['웹 거래소 총 9개 / 웹 지갑 총 6개', 'PHP CodeIgniter 기반 backend.', 'Bootstrap 기반 및 Jquery를 통해 개발.', 'Google reCaptcha 기능 도입.', '암호화폐의 시간/기간별 시세 표기를 위한 StockChart 기능 도입.', '다국어 번역 기능 도입.', 'QR Code Generator/QR Code Scanner 기능 도입.', '정규식을 통한 폼 밸리데이션 개발로 View 단에서 직관적이고 빠른 피드백 방식을 개발.'], text: '오픈소스 기반의 암호화폐 웹 지갑과 거래소 소스를 지속적으로 개선하여 다양한 기업에 판매하였습니다. 처음에는 프랑스어 주석만 가득하고 기본 거래 기능만 있던 소스를 CodeIgniter로 옮겨와서 Front 단과 Back 단으로 구분하여 개선했습니다. 이후 차트와 새로운 코인 연동, 성능 개선 등을 반복하고, 고객 요청에 따라 다양한 추가 기능을 개발하다 보니 해당 기능들을 옵션 형태로 넣고 빼며 최종적으로는 테마 형태로 디자인들을 추가하여 다양한 솔루션형태로 판매하였습니다. 당시 모든 타 거래소는 PC와 휴대기기 버전을 따로 개발했으나 완전 반응형으로 작업해온 특이점이 있습니다.'
  },
]

const LineContent = ({ title, date, summary, text }) => {
  const summarys = []
  summary.forEach((item, i) => summarys.push(<span key={item + i}>{item}</span>))
  return (
    <>
      <li>{title}</li>
      <li>{date}</li>
      {summarys}
      {text && (
        <p>{text}</p>
      )}
    </>
  )
}

const YearPoint = ({ year }) => {
  return (
    <div className={`year-point`}>
      <div><span className='year'>{year}</span><span className='dec'>12</span></div>
      <div><span className='nov'>11</span></div>
      <div><span className='oct'>10</span></div>
      <div><span className='sep'>09</span></div>
      <div><span className='aug'>08</span></div>
      <div><span className='jul'>07</span></div>
      <div><span className='jun'>06</span></div>
      <div><span className='may'>05</span></div>
      <div><span className='apr'>04</span></div>
      <div><span className='mar'>03</span></div>
      <div><span className='feb'>02</span></div>
      <div><span className='jan'>01</span></div>
    </div>
  )
}

const FootprintDetailComponent = () => {
  const [activeState, setActiveState] = useState('');
  const extend = (target, ref, secondRef, thirdRef, fourthRef) => {
    ref.current.classList.add(target)
    if (secondRef) {
      secondRef.current.classList.add(target)
    }
    if (thirdRef) {
      thirdRef.current.classList.add(target)
    }
    if (fourthRef) {
      fourthRef.current.classList.add(target)
    }
  }
  const removed = (target, ref, secondRef, thirdRef, fourthRef) => {
    ref.current.classList.remove(target)
    if (secondRef) {
      secondRef.current.classList.remove(target)
    }
    if (thirdRef) {
      thirdRef.current.classList.remove(target)
    }
    if (fourthRef) {
      fourthRef.current.classList.remove(target)
    }
  }

  useEffect(() => {
    gsap.to('.career-no1', {
      scrollTrigger: {
        id: 'career-no1',
        trigger: '.career-no1',
        start: 'top center+=200',
        end: 'top+=600 center+=200',
        onEnter: () => extend('career-no1', year2020, year2019),
        onEnterBack: () => extend('career-no1', year2020, year2019),
        onLeave: () => removed('career-no1', year2020, year2019),
        onLeaveBack: () => removed('career-no1', year2020, year2019),
        // markers: true
      }
    });
    gsap.to('.career-no2', {
      scrollTrigger: {
        id: 'career-no2',
        trigger: '.career-no2',
        start: 'top+=150 center+=200',
        end: 'top+=750 center+=200',
        onEnter: () => extend('career-no2', year2019, year2018, year2017, year2016),
        onEnterBack: () => extend('career-no2', year2019, year2018, year2017, year2016),
        onLeave: () => removed('career-no2', year2019, year2018, year2017, year2016),
        onLeaveBack: () => removed('career-no2', year2019, year2018, year2017, year2016),
        // markers: true
      }
    });
    gsap.to('.left-no1', {
      scrollTrigger: {
        id: 'left-no1',
        trigger: '.left-no1',
        start: 'top bottom',
        end: 'top+=500 center+=200',
        onEnter: () => extend('left-no1', year2020),
        onEnterBack: () => extend('left-no1', year2020),
        onLeave: () => removed('left-no1', year2020),
        onLeaveBack: () => removed('left-no1', year2020),
        // markers: true
      }
    });
    gsap.to('.left-no2', {
      scrollTrigger: {
        id: 'left-no2',
        trigger: '.left-no2',
        start: 'top center+=200',
        end: 'top+=500 center+=200',
        onEnter: () => extend('left-no2', year2020, year2019),
        onEnterBack: () => extend('left-no2', year2020, year2019),
        onLeave: () => removed('left-no2', year2020, year2019),
        onLeaveBack: () => removed('left-no2', year2020, year2019),
        // markers: true
      }
    });
    gsap.to('.right-no1', {
      scrollTrigger: {
        id: 'right-no1',
        trigger: '.right-no1',
        start: 'top+=150 center+=200',
        end: 'top+=750 center+=200',
        onEnter: () => extend('right-no1', year2019),
        onEnterBack: () => extend('right-no1', year2019),
        onLeave: () => removed('right-no1', year2019),
        onLeaveBack: () => removed('right-no1', year2019),
        // markers: true
      }
    });
    gsap.to('.left-no3', {
      scrollTrigger: {
        id: 'left-no3',
        trigger: '.left-no3',
        start: 'top+=150 center+=200',
        end: 'top+=750 center+=200',
        onEnter: () => extend('left-no3', year2019),
        onEnterBack: () => extend('left-no3', year2019),
        onLeave: () => removed('left-no3', year2019),
        onLeaveBack: () => removed('left-no3', year2019),
        // markers: true
      }
    });
    gsap.to('.left-no4', {
      scrollTrigger: {
        id: 'left-no4',
        trigger: '.left-no4',
        start: 'top+=300 center+=200',
        end: 'top+=800 center+=200',
        onEnter: () => extend('left-no4', year2019),
        onEnterBack: () => extend('left-no4', year2019),
        onLeave: () => removed('left-no4', year2019),
        onLeaveBack: () => removed('left-no4', year2019),
        // markers: true
      }
    });
    gsap.to('.right-no2', {
      scrollTrigger: {
        id: 'right-no2',
        trigger: '.right-no2',
        start: 'top+=300 center+=200',
        end: 'top+=750 center+=200',
        onEnter: () => extend('right-no2', year2019, year2018, year2017),
        onEnterBack: () => extend('right-no2', year2019, year2018, year2017),
        onLeave: () => removed('right-no2', year2019, year2018, year2017),
        onLeaveBack: () => removed('right-no2', year2019, year2018, year2017),
        // markers: true
      }
    });
    gsap.to('.left-no5', {
      scrollTrigger: {
        id: 'left-no5',
        trigger: '.left-no5',
        start: 'top center+=200',
        end: 'top+=500 top',
        onEnter: () => extend('left-no5', year2017, year2016),
        onEnterBack: () => extend('left-no5', year2017, year2016),
        onLeave: () => removed('left-no5', year2017, year2016),
        onLeaveBack: () => removed('left-no5', year2017, year2016),
        // markers: true
      }
    });
  }, []);

  const career2020 = career.find(careers => careers.id === 1)
  const career2019 = career.find(careers => careers.id === 2)
  const left2020 = leftTable.filter(work => work.id <= 2)
  const left2019 = leftTable.filter(work => work.id >= 3 && work.id <= 4)
  const left2017 = leftTable.find(work => work.id === 5)
  const right2019 = rightTable.filter(work => work.id <= 2)

  const YearRow = ({ careerData, leftData, rightData, yearData }) => {
    return (
      <>
        <div className='col-12 off-xs-1 off-l-none col-l-3'>
          <div className='line-frame career-line'>
            {careerData && (
              <ul key={careerData.idx} className={`content-frame career-no${careerData.id}`}>
                <LineContent title={careerData.title} date={careerData.date} summary={careerData.summary} text={careerData.text} />
              </ul>
            )}
          </div>
        </div>

        <div className='col-1 pl-none pr-none time-line'>
          <div className='line'></div>
          <div className='point-frame'>
            <YearPoint year={yearData} />
          </div>
        </div>

        <div className='col-12 col-l-4'>
          <div className='line-frame left-line'>
            {leftData && (
              Array.isArray(leftData) ? (
                leftData.map((leftData, idx) => (
                  <ul key={idx} className={`content-frame left-no${leftData.id}`}>
                    <LineContent title={leftData.title} date={leftData.date} summary={leftData.summary} text={leftData.text} />
                  </ul>
                ))
              ) : (
                  <ul key={leftData.idx} className={`content-frame left-no${leftData.id}`}>
                    <LineContent title={leftData.title} date={leftData.date} summary={leftData.summary} text={leftData.text} />
                  </ul>
                )
            )}
          </div>
        </div>

        <div className='col-12 col-l-4'>
          <div className='line-frame right-line'>
            {rightData && (
              Array.isArray(rightData) ? (
                rightData.map((rightData, idx) => (
                  <ul key={idx} className={`content-frame right-no${rightData.id}`}>
                    <LineContent title={rightData.title} date={rightData.date} summary={rightData.summary} text={rightData.text} />
                  </ul>
                ))
              ) : (
                  <ul key={rightData.idx} className={`content-frame right-no${rightData.id}`}>
                    <LineContent title={rightData.title} date={rightData.date} summary={rightData.summary} text={rightData.text} />
                  </ul>
                )
            )}
          </div>
        </div>
      </>
    )
  }

  const year2021 = useRef();
  const year2020 = useRef();
  const year2019 = useRef();
  const year2018 = useRef();
  const year2017 = useRef();
  const year2016 = useRef();

  return (
    <div className='footprint-detail'>
      <div className='container fluid'>
        <TextSliderComponent text={'career'} type={'left'} />
        <TextSliderComponent text={'project&subcontract'} type={'right'} />
        <div className='row year2021' ref={year2021}>
          <YearRow yearData={'2021'} />
        </div>
        <div className='row year2020' ref={year2020}>
          <YearRow careerData={career2020} leftData={left2020} yearData={'2020'} />
        </div>
        <div className='row year2019' ref={year2019}>
          <YearRow careerData={career2019} leftData={left2019} rightData={right2019} yearData={'2019'} />
        </div>
        <div className='row year2018' ref={year2018}>
          <YearRow yearData={'2018'} />
        </div>
        <div className='row year2017' ref={year2017}>
          <YearRow yearData={'2017'} leftData={left2017} />
        </div>
        <div className='row year2016' ref={year2016}>
          <YearRow yearData={'2016'} />
        </div>
      </div>
    </div >
  )
}

export default FootprintDetailComponent;
