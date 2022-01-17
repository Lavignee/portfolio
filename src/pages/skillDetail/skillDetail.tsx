import React, { useState, useEffect, useRef, useCallback } from 'react';
import { useDispatch, useSelector, shallowEqual } from 'react-redux';
import { useLocation, useNavigate } from 'react-router-dom';
import { changeGsapState } from '../../Modules/commonValue';
import { isDesktop } from 'react-device-detect';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

import language from '../../data/dataSkill/languageSkill.json'
import lib from '../../data/dataSkill/libSkill.json'
import tool from '../../data/dataSkill/toolSkill.json'
import interest from '../../data/dataSkill/interestSkill.json'
import svg from '../../static/images/icon-svg.json';

import './skillDetail.scss';

import Scrollbar from 'smooth-scrollbar';
import { RootState } from '../../Modules';

gsap.registerPlugin(ScrollTrigger);

// react-router-dom으로 화면 호출.

const empty = [
  { number: 0, id: '', name: '', workmanship: 0, summary: '', svg: '' },
];

// Props로 받는 이벤트들에 대한 type 정의
type SkillDetailProps = {
  onHover: (hoverCursor: string, hoverText?: string | null) => void;
  onLeave: (hoverText?: string | null) => void;
}

const SkillDetail = ({ onHover, onLeave }: SkillDetailProps) => {
  // redux dispatch 정의.
  const dispatch = useDispatch();
  const gsapReady = useCallback((value) => dispatch(changeGsapState(value)), [dispatch]);

  // redux useSelector 정의.
  const [currentGsapState] = useSelector((state: RootState) => [state.CommonValue.currentGsapState], shallowEqual);

  // react-router-dom으로 url 확인.
  let location = useLocation();
  let navigate = useNavigate();

  const lists = useRef([]);
  const scrollPosition = useRef<any>(null);

  const [currentSkillScroller, setCurrentSkillScroller] = useState<any>(null);
  const [currentList, setCurrentList] = useState(location.pathname);
  const [listHoverMotion, setListHoverMotion] = useState('');
  const [currentTarget, setCurrentTarget] = useState(0);
  const [opacity, setOpacity] = useState('');

  // 스무스 스크롤 재생성.
  const makeSmoothScrollbarforSkill = useCallback(() => {
    let skillScrollBar: any;
    // 기기에 따라 다른 스크롤 딜레이 적용.
    if (isDesktop) {
      skillScrollBar = Scrollbar.init(scrollPosition.current, {
        damping: 0.02,
        alwaysShowTracks: true,
      });
    } else {
      skillScrollBar = Scrollbar.init(scrollPosition.current, {
        damping: 0.1,
        alwaysShowTracks: true,
      });
    }

    // 새로운 스크롤 생성 시 위치 초기화.(재랜더가 아니므로 이전 위치로 인한 오류 방지.)
    skillScrollBar.setPosition(0, 0);

    //GSAP 스크롤 트리거에 스무스 스크롤의 스크롤 값 동기화.
    ScrollTrigger.scrollerProxy(scrollPosition.current, {
      scrollTop(value) {
        if (arguments.length) {
          skillScrollBar.scrollTop = value;
        }
        return skillScrollBar.scrollTop;
      },
    });
    ScrollTrigger.defaults({ scroller: scrollPosition.current });
    skillScrollBar.addListener(ScrollTrigger.update);

    // 다른 함수에서도 스크롤 컨트롤을 위해 state에 지정.
    setCurrentSkillScroller(skillScrollBar);

    // GSAP의 사용 준비 완료.
    gsapReady(true);
  }, []);

  // skill 세부 목록에 마우스 오버 시,
  const listHover = (number: number) => {
    // 커서 형태 변경.
    onHover(' focus-cursor');
    // 마우스 오버 된 컨텐츠의 위치(위, 아래)에 따라 애니메이션 동작.
    if (currentTarget + 1 > number) {
      setListHoverMotion('top');
    } else if (currentTarget + 1 < number) {
      setListHoverMotion('bottom');
    }
  };

  // skill 세부 목록에서 마우스 벗어날 시,
  const onListLeave = useCallback(() => {
    // 커서 형태 초기화.
    onLeave();
    // 마우스 오버 애니메이션 제거.
    setListHoverMotion('');
  }, []);

  // skill 목록에 클릭 시
  const changeList = (e: any) => {
    // 클릭 된 목록이 현재 목록인지 체크하여,
    if (e.target.dataset.list !== currentList) {
      // 다른 경우 해당 url로 화면 다시 호출.
      navigate('/skill/' + e.target.dataset.list);
    } else {
      // 같은 경우 해당 목록의 최상단으로 이동.
      currentSkillScroller.scrollTo(0, 0, 600);
    }
  };

  // 클릭이 아닌 히스토리를 통한 목록 변경 시.
  const changeHistoryList = useCallback(async () => {
    // 기존의 skill 세부 목록을 초기화.
    lists.current = [];
    // 기존의 스크롤 데이터 삭제.
    Scrollbar.destroyAll();
    // 스크롤과 동기화 된 gsap 관련 로직 비활성화.
    await gsapReady(false);
    // 활성화 된 skill content 초기화.
    setCurrentTarget(0);
    // 현재 url 정보를 활성화 목록에 재정의.
    setCurrentList(location.pathname.split('/skill/')[1]);
    // 재정의된 내용으로 스크롤 다시 생성.
    makeSmoothScrollbarforSkill();
  }, [location]);

  //스크롤 트리거가 변경 된 경우.
  const changeTarget = useCallback(
    (id) => {
      // 스크롤 트리거가 감지한 영역 ID로 content를 변경.
      setCurrentTarget(id);
      // content의 text를 숨김.
      setOpacity('');

      // 시간차를 두고 텍스트 출력.
      const opacityTimer = setTimeout(() => {
        setOpacity('opacity');
      }, 100);
      return () => clearTimeout(opacityTimer);
    },
    []
  );

  const addToRefs = (el: any) => {
    if (el && !lists.current.includes(el) && currentGsapState) {
      lists.current.push(el);
    }
  };

  // 중앙에 위치한 skill 세부 목록 영역에 스크롤 트리거 적용.
  const listScroller = useCallback(() => {
    lists.current.forEach((el, index) => {
      gsap.to(el, {
        scrollTrigger: {
          id: `list-${index + 1}`,
          trigger: el,
          scroller: '.skill-list',
          start: 'top center',
          // 활성화 클래스를 토글.
          toggleClass: { targets: el, className: 'active' },
          // 아래에서 부터 영역 들어올 시 활성화 대상을 전달.
          onEnter: () => changeTarget(index),
          // 위에서 부터 영역 들어올 시 활성화 대상을 전달.
          onEnterBack: () => changeTarget(index),
          end: 'bottom center',
        },
      });
    });
  }, []);

  // 스크롤 트리거와 연동된 skew 애니메이션 적용.
  const scrollSkew = () => {
    let proxy = { skew: 0 },
      skewSetter = gsap.quickSetter('.list', 'skewY', 'deg'),
      clamp = gsap.utils.clamp(-20, 20);

    ScrollTrigger.create({
      scroller: '.skill-list',

      onUpdate: (self) => {
        let skew = clamp(self.getVelocity() / -200);
        if (Math.abs(skew) > Math.abs(proxy.skew)) {
          proxy.skew = skew;
          gsap.to(proxy, {
            skew: 0,
            duration: 0.3,
            ease: 'power3',
            overwrite: true,
            onUpdate: () => skewSetter(proxy.skew),
          });
        }
      },
    });
  };

  // skill 세부 목록을 클릭 시,
  const clickList = (target: { number: number; id: string; name: string; workmanship: number; summary: string; }) => {
    // skill 세부 목록의 중앙 영역을 계산.
    const listHeight = scrollPosition.current.clientHeight / 3;
    // skill 세부 목록의 중앙 영역으로 스크롤 이동.
    currentSkillScroller.scrollTo(0, listHeight * (+target.number - 1), 600);
  };

  const SkillList = (targetUrl: string, text: string) => {
    return (
      <li>
        <button
          className={currentList === targetUrl ? 'active' : ''}
          onClick={(e) => changeList(e)}
          onMouseEnter={() => onHover(' focus-cursor')}
          onMouseLeave={onListLeave}
          data-list={targetUrl}>
          {text}
        </button>
      </li>
    )
  }

  const contents = (target: string, contentKind: string) => {
    let content;
    let svgs = Object.entries(svg)
    let svgContent = new Map();
    svgs.forEach(item => {
      svgContent.set(item[0], item[1])
    });

    if (target === 'language') {
      content = language.language;
    } else if (target === 'lib') {
      content = lib.lib;
    } else if (target === 'tool') {
      content = tool.tool;
    } else if (target === 'interest') {
      content = interest.interest;
    } else {
      content = empty;
    }
    return contentKind === 'list' ? (
      content.map((content) => (
        <li
          key={content.number}
          className='list col-4 col-l-3 pl-pr-none'
          ref={addToRefs}
          onClick={() => clickList(content)}
          onMouseEnter={() => listHover(content.number)}
          onMouseLeave={onListLeave}>
          <div className={`inner ${listHoverMotion}`}>
            {svgContent.has(content.id) === false ? (
              <div>{content.name}</div>
            ) : (
              <div dangerouslySetInnerHTML={{ __html: svgContent.get(content.id) }}></div>
            )}
          </div>
        </li>
      ))
    ) : (
      <>
        <div className='pagenation'>
          <span>{currentTarget + 1}</span>/<span>{content.length}</span>
        </div>
        <div className='content'>
          <div>
            <div className={`levels level-${content[currentTarget].workmanship} ${opacity}`}>
              <span></span>
              <span></span>
              <span></span>
              <span></span>
              <span></span>
            </div>
            <h2 className={opacity}>{content[currentTarget].name}</h2>
          </div>
          <p className={`${opacity}${content[currentTarget].workmanship}`}>
            {content[currentTarget].summary}
          </p>
        </div>
        <span className={`back-text ${opacity}`}>
          {content[currentTarget].name}
        </span>
      </>
    );
  };

  useEffect(() => {
    Scrollbar.destroyAll();
    gsapReady(false);
    makeSmoothScrollbarforSkill();

    return () => {
      let triggers = ScrollTrigger.getAll();
      triggers.forEach((item) => {
        item.kill();
      });

      onLeave();
    };
  }, [gsapReady, makeSmoothScrollbarforSkill, onLeave]);

  useEffect(() => {
    if (currentGsapState) {
      listScroller();
      scrollSkew();
    }
  }, [currentGsapState, currentList]);

  useEffect(() => {
    if (location.pathname.split('/skill/')[1] !== currentList) {
      changeHistoryList();
    }
  }, [currentList, location]);

  return (
    <div className='skill-detail'>
      <div className='container fluid pl-pr-none'>
        <ul className='skill-tab'>
          <li>
            <button
              className={currentList === 'language' ? 'active' : ''}
              onClick={(e) => changeList(e)}
              onMouseEnter={() => onHover(' focus-cursor')}
              onMouseLeave={onListLeave}
              data-list='language'>
              언 어
            </button>
          </li>
          {/* <SkillList targetUrl='language' text='언어' /> */}
          <li>
            <button
              className={currentList === 'lib' ? 'active' : ''}
              onClick={(e) => changeList(e)}
              onMouseEnter={() => onHover(' focus-cursor')}
              onMouseLeave={onListLeave}
              data-list='lib'>
              프레임워크&라이브러리
            </button>
          </li>
          <li>
            <button
              className={currentList === 'tool' ? 'active' : ''}
              onClick={(e) => changeList(e)}
              onMouseEnter={() => onHover(' focus-cursor')}
              onMouseLeave={onListLeave}
              data-list='tool'>
              개발 도구
            </button>
          </li>
          <li>
            <button
              className={currentList === 'interest' ? 'active' : ''}
              onClick={(e) => changeList(e)}
              onMouseEnter={() => onHover(' focus-cursor')}
              onMouseLeave={onListLeave}
              data-list='interest'>
              최근 관심 기술
            </button>
          </li>
        </ul>

        <div className='row content-frame'>
          <div className='col-12 pl-pr-none skill-list-frame'>
            <ul className='skill-list' ref={scrollPosition}>
              <li className='default-list col-4 col-l-3'></li>
              {contents(currentList, 'list')}
              <li className='default-list col-4 col-l-3'></li>
            </ul>
          </div>

          <div className='col-8 off-4 col-l-9 off-l-3 pl-pr-none skill-detail-content-frame'>
            <div className='skill-detail-content'>
              {contents(currentList, 'detail')}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SkillDetail;
