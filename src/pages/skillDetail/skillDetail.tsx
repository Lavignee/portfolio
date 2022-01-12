import React, { useState, useEffect, useRef, useCallback } from 'react';
import { useDispatch, useSelector, shallowEqual } from 'react-redux';
import { useLocation } from 'react-router-dom';
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

const empty = [
  { number: 0, id: '', name: '', workmanship: 0, summary: '', svg: '' },
];

// Props로 받는 이벤트들에 대한 type 정의
type SkillDetailProps = {
  onHover: (hoverCursor: string, hoverText?: string | null) => void;
  onLeave: (hoverText?: string | null) => void;
  pageTimer: (path: string, timer: number) => void;
}

const SkillDetail = ({ onHover, onLeave, pageTimer }: SkillDetailProps) => {
  // redux dispatch 정의.
  const dispatch = useDispatch();
  const gsapReady = useCallback(
    (value) => dispatch(changeGsapState(value)),
    [dispatch]
  );
  // redux useSelector 정의.
  const [currentGsapState] = useSelector(
    (state: RootState) => [state.CommonValue.currentGsapState],
    shallowEqual
  );

  // react-router-dom으로 url 확인.
  let location = useLocation();

  const list = location.pathname;
  const lists = useRef([]);
  const scrollPosition = useRef<any>(null);
  const [currentSkillScroller, setCurrentSkillScroller] = useState<any>(null);
  const [currentList, setCurrentList] = useState(list);
  const [listHoverMotion, setListHoverMotion] = useState('');
  const [currentTarget, setCurrentTarget] = useState(0);
  const [opacity, setOpacity] = useState('');

  // 
  const makeSmoothScrollbarforSkill = useCallback(() => {
    const scroller = scrollPosition.current;
    let skillScrollBar: any;
    if (isDesktop) {
      skillScrollBar = Scrollbar.init(scroller, {
        damping: 0.02,
        alwaysShowTracks: true,
      });
    } else {
      skillScrollBar = Scrollbar.init(scroller, {
        damping: 0.1,
        alwaysShowTracks: true,
      });
    }
    setCurrentSkillScroller(skillScrollBar);

    ScrollTrigger.scrollerProxy(scroller, {
      scrollTop(value) {
        if (arguments.length) {
          skillScrollBar.scrollTop = value;
        }
        return skillScrollBar.scrollTop;
      },
    });
    ScrollTrigger.defaults({ scroller: scroller });

    skillScrollBar.addListener(ScrollTrigger.update);
    gsapReady(true);
  }, [gsapReady]);

  const listHover = (number: number) => {
    onHover(' focus-cursor');
    if (currentTarget + 1 > number) {
      setListHoverMotion('top');
    } else if (currentTarget + 1 < number) {
      setListHoverMotion('bottom');
    }
  };

  const onListLeave = useCallback(() => {
    onLeave();
    setListHoverMotion('');
  }, [onLeave]);

  const changeList = async (e: any) => {
    if (e.target.dataset.list !== currentList) {
      const skillLocation = '/skill/' + e.target.dataset.list;
      lists.current = [];
      currentSkillScroller.setPosition(0, 0);
      Scrollbar.destroyAll();
      await gsapReady(false);
      setCurrentTarget(0);
      if (isDesktop) {
        await pageTimer(skillLocation, 0);
        makeSmoothScrollbarforSkill();
      } else {
        await pageTimer(skillLocation, 0);
        makeSmoothScrollbarforSkill();
      }
    } else {
      currentSkillScroller.scrollTo(0, 0, 600);
    }
  };

  const changeHistoryList = useCallback(async () => {
    lists.current = [];
    currentSkillScroller?.setPosition(0, 0);
    Scrollbar.destroyAll();
    await gsapReady(false);
    setCurrentTarget(0);
    setCurrentList(location.pathname.split('/skill/')[1]);
    makeSmoothScrollbarforSkill();
  }, [currentSkillScroller, gsapReady, location, makeSmoothScrollbarforSkill]);

  const changeTarget = useCallback(
    (id) => {
      setCurrentTarget(id);
      setOpacity('');
      onListLeave();

      const opacityTimer = setTimeout(() => {
        setOpacity('opacity');
      }, 100);
      return () => clearTimeout(opacityTimer);
    },
    [onListLeave]
  );

  const addToRefs = (el: any) => {
    if (el && !lists.current.includes(el) && currentGsapState) {
      lists.current.push(el);
    }
  };

  const listScroller = useCallback(() => {
    lists.current.forEach((el, index) => {
      gsap.to(el, {
        scrollTrigger: {
          id: `list-prev-${index + 1}`,
          trigger: el,
          scroller: '.skill-list',
          start: 'top+=100% center',
          toggleClass: { targets: el, className: 'prev' },
          end: 'bottom+=100% center',
        },
      });

      gsap.to(el, {
        scrollTrigger: {
          id: `list-${index + 1}`,
          trigger: el,
          scroller: '.skill-list',
          start: 'top center',
          toggleClass: { targets: el, className: 'active' },
          onEnter: () => changeTarget(index),
          onEnterBack: () => changeTarget(index),
          end: 'bottom center',
        },
      });

      gsap.to(el, {
        scrollTrigger: {
          id: `list-next-${index + 1}`,
          trigger: el,
          scroller: '.skill-list',
          start: 'top-=100% center',
          toggleClass: { targets: el, className: 'next' },
          end: 'bottom-=100% center',
        },
      });
    });
  }, [changeTarget]);

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

  const clickList = (target: { number: number; id: string; name: string; workmanship: number; summary: string; }) => {
    const listHeight = scrollPosition.current.clientHeight / 3;
    currentSkillScroller.scrollTo(0, listHeight * (+target.number - 1), 600);
  };

  const workmanships = (level: string | number) => {
    return (
      <div className={`levels level-${level} ${opacity}`}>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
      </div>
    );
  };

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
            {workmanships(content[currentTarget].workmanship)}
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
      triggers.forEach((trigger) => {
        trigger.kill();
      });

      onLeave();
    };
  }, [gsapReady, makeSmoothScrollbarforSkill, onLeave]);

  useEffect(() => {
    if (currentGsapState) {
      listScroller();
      scrollSkew();
    }
  }, [currentGsapState, currentList, listScroller]);

  useEffect(() => {
    setOpacity('');
    if (location.pathname.split('/skill/')[1] !== currentList) {
      changeHistoryList();
    }
  }, [changeHistoryList, currentList, location]);

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
