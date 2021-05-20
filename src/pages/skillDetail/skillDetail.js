import React, { useState, useEffect, useRef, useCallback } from 'react';
import { useDispatch, useSelector, shallowEqual } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { changeGsapState } from 'modules/commonValue';
import { isDesktop } from 'react-device-detect';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

import svg from 'static/images/icon-svg.json';

import './skillDetail.scss';

import Scrollbar from 'smooth-scrollbar';

gsap.registerPlugin(ScrollTrigger);

const language = [
  { number: '1', id: 'html', name: 'HTML', workmanship: 5, summary: '대부분 목적에 맞는 올바른 태그를 사용하고 있습니다. 스크린리더의 적용 여부에 따라 더 까다롭게 신경 써 볼 수 있겠지만 현재는 웹 표준과 가이드가 너무 잘 나와 있기 때문에 완전히 자유롭고 다양하게 사용할 수 있습니다', svg: svg.html },
  { number: '2', id: 'css', name: 'CSS', workmanship: 4, summary: '대부분의 style 종류와 우선순위, 상관관계를 파악하고 있습니다. 이전에는 \'Internet Explorer 8~9\' 까지 Cross Browsing 하는 개발 조건을 많이 겪어 보기도 했습니다. 하지만 아직 생각대로 완벽하게 Animation을 컨트롤하는 수준까지는 경험이 더 필요할 것 같습니다.', svg: svg.css },
  { number: '3', id: 'javascript', name: 'JavaScript', workmanship: 4, summary: '오랜 시간 \'Internet Explorer 8~9\' 등을 지원하는 개발환경으로 인해 ES6나 이하, JQuery등으로 Javascript를 사용해왔습니다. 현재는 컴파일러와 React를 주로 사용하다 보니 완전한 es8 유저가 되기 위해 노력 중입니다. 더 효율적인 사고와 운용에는 경험이 더 필요할 것 같습니다.', svg: svg.javascript }
];

const lib = [
  { number: '1', id: 'react', name: 'React', workmanship: 4, summary: 'Class 기반일 때부터 React를 익히고 있었지만, 실무에서 사용해볼 기회가 없었습니다. 프리랜서로 일할 때 Hook를 섞어가며 실무를 겪어보았고, 이번 포트폴리오는 Hook 기반으로 제작하였습니다. 초기부터 지금까지 React에 변화가 많았기에 혼란이 많았지만 개발 방식은 꽤 익숙해진 단계고 최적화와 효율 등에 더 매진할 예정입니다.', svg: svg.react },
  { number: '2', id: 'redux', name: 'Redux', workmanship: 3, summary: '간단한 상태값과 트리거등의 역할로 이번 포트폴리오에서 처음 사용하였습니다. 다양한 플러그인들과 효율적인 사용은 경험이 더 필요할 것 같습니다.', svg: svg.redux },
  { number: '3', id: 'webpack', name: 'Webpack', workmanship: 3, summary: 'React를 처음 익히면서 Webpack을 배우게 되었습니다. 최근에는 작은 과제를 진행하기 위해 webpack 5를 직접 세팅하여 사용해 보았습니다.', svg: svg.webpack },
  { number: '4', id: 'parcel', name: 'Parcel', workmanship: 4, summary: '이번 포트폴리오 제작에 사용한 번들러입니다. Webpack과 비교하여 Learning Curve가 적고 바로 사용이 쉬우나 아직 관련 정보나 사례가 좀 적다는 단점을 겪었습니다.', svg: svg.parcel },
  { number: '5', id: 'sass', name: 'SASS(SCSS)', workmanship: 5, summary: 'CSS보다 작성에서 오는 피로도가 적고 약간의 함수나 변수 사용이 꽤 편리합니다. 다루는데 큰 이해가 필요하진 않습니다.', svg: svg.sass },
  { number: '6', id: 'gsap', name: 'GSAP', workmanship: 4, summary: '순수 CSS로 작성해서 만들어지는 애니메이션보다 시각적, 성능적으로 월등한 동적 효과를 표현할 수 있습니다. 유료 버전은 다뤄보지 않았지만 대부분의 기능이 무료이며, 응용에 무리가 없다고 생각합니다.', svg: svg.gsap },
  { number: '7', id: 'i18next', name: 'I18next', workmanship: 5, summary: 'html이나 Javascript 환경, 서버단에서 오는 텍스트 등 다양한 번역 동작을 경험해보았습니다.', svg: svg.i18next },
  { number: '8', id: 'jquery', name: 'Jquery', workmanship: 4, summary: 'Javascript를 처음 익힐 때 JQuery는 Learning Curve를 줄여주는 좋은 도구였습니다. 사용하지 않은지 오래되긴 했지만 여전히 다루는 데는 문제가 없을 것 같습니다.', svg: svg.jquery },
  { number: '9', id: 'bootstrap', name: 'Bootstrap', workmanship: 5, summary: '반응형 사이트를 처음 접하고 개발할 당시 자주 사용하였던 프레임워크입니다, 현재도 BreakPoint 등을 참고하고, Grid 커스텀에도 응용하여 사용합니다.', svg: svg.bootstrap },
  { number: '10', id: 'materialui', name: 'Material-UI', workmanship: 4, summary: '프리랜서로 일하는 중 접하게 되었습니다. Bootstrap처럼 React에서 사용되는 프레임워크로 사용이나 커스텀의 방식도 꽤 익숙했다고 생각합니다.', svg: svg.materialui },
  { number: '11', id: 'axios', name: 'Axios', workmanship: 3, summary: '실무에서는 사용해보지 못했지만, 과제 등으로 다루어보았습니다. 익히기 쉬웠고 사용도 간편했습니다.', svg: '' },
];

const tool = [
  { number: '1', id: 'git', name: 'Git', workmanship: '3', summary: '개발자에게는 필수이고 당연히, 또 오랜 시간 사용하고 있지만 터미널에서 cli로 써본 적은 별로 없는 것 같습니다.', svg: svg.git },
  { number: '2', id: 'github', name: 'Github', workmanship: 4, summary: '대표적인 서비스지만 공개적인 형태라는 점에서 사용빈도가 낮았습니다. 이번 포트폴리오 프로젝트부터는 Github를 사용하려고 합니다.', svg: svg.github },
  { number: '3', id: 'bitbucket', name: 'Bitbucket', workmanship: 4, summary: '대부분의 Git 관련 프로젝트들이 직장과 관계되어 있고 소규모 팀에서 무료 Private 프로젝트를 만들 수 있었으므로 가장 많이 사용했습니다.', svg: svg.bitbucket },
  { number: '4', id: 'sourcetree', name: 'Sourcetree', workmanship: 3, summary: 'GUI가 한눈에 들어오기도 하고 Bitbucket을 오래 사용하였기에 지금까지 사용하고 있는 Git 형상관리 툴입니다. 기능이 많지만 느리고 버그가 좀 잦다는 단점이 있습니다.', svg: svg.sourcetree },
  { number: '5', id: 'jira', name: 'Jira', workmanship: 4, summary: '처음부터 끝까지 세팅해본적은 없지만, 멤버로서 사용에는 아주 익숙합니다.', svg: svg.jira },
  { number: '6', id: 'figma', name: 'Figma', workmanship: 4, summary: '초기에 PSD나 AI로 작업할때를 제외하고 대부분은 Figma로 디자인을 전달받아 작업하였습니다. ', svg: svg.figma },
  { number: '7', id: 'zeplin', name: 'Zeplin', workmanship: 2, summary: '초기에 PSD나 AI로 작업할 때 사용했었습니다. 다시 사용하게 된다면 그동안의 변화를 익힐 시간이 필요할 것 같습니다.', svg: svg.zeplin },
  { number: '8', id: 'netlify', name: 'Netlify', workmanship: 3, summary: '이번 포트폴리오를 올리면서 사용하였는데, Netlify 사이트의 자체 빌드에서 영문모를 에러가 많아, 로컬에서 빌드 하여 올렸습니다. 그래도 간편하고 성능도 좋은 것 같습니다.', svg: svg.netlify },
  { number: '9', id: 'lighthouse', name: 'Lighthouse', workmanship: 3, summary: '이번 포트폴리오를 제작하며 성능 개선을 위해 사용하였습니다. 이해하기 쉽고 가이드가 자세하게 나와서 사용은 편했습니다.', svg: svg.lighthouse }
];

const interest = [
  { number: '1', id: 'typescript', name: 'TypeScript', workmanship: 2, summary: '어느 정도 학습을 진행하였지만, 아직 직접적으로 프로젝트에 적용해본 적은 없습니다. 현재 가장 많이 쓰이고 있는듯하여 최우선으로 숙달할 예정입니다.', svg: svg.typescript },
  { number: '2', id: 'contextapi', name: 'context API', workmanship: 2, summary: '아직 직접적으로 프로젝트에 적용해본 적은 없습니다. 실무에서 사용하게 된다면 금방 익숙해질 것 같습니다.', svg: '' },
  { number: '3', id: 'mobx', name: 'MobX', workmanship: 1, summary: '이미 적용된 프로젝트에서 잠시 사용해 보았지만, 직접 세팅해보지는 않았습니다. Redux보다는 편리하다고 들었는데, 시간이 나면 다뤄볼 생각입니다.', svg: svg.mobx },
  { number: '4', id: 'nextjs', name: 'Next.js', workmanship: 1, summary: '이미 적용된 프로젝트는 종종 있었으나, 직접적으로 다뤄보진 않았습니다.', svg: svg.nextjs },
  { number: '5', id: 'express', name: 'Express.js', workmanship: 1, summary: '아직 직접 다룰 기회가 없었지만 쓰이는 곳이 많아, 시간 나는 대로 익혀둘 생각입니다.', svg: '' },
  { number: '6', id: 'graphql', name: 'GraphQL', workmanship: 1, summary: '아직 직접 다룰 기회가 없었지만 쓰이는 곳이 많아, 시간 나는 대로 익혀둘 생각입니다.', svg: svg.graphql },
  { number: '7', id: 'gatsby', name: 'Gatsby', workmanship: 1, summary: '요즘 꽤 많이 보이는 서비스입니다. 시간이 나면 다뤄볼 생각입니다.', svg: svg.gatsby },
  { number: '8', id: 'webgl', name: 'WebGL', workmanship: 1, summary: '다뤄보고 싶은 생각이 있습니다.', svg: svg.webgl },
  { number: '9', id: 'analytics', name: 'Google Analytics', workmanship: '', summary: '', svg: '' }
];

const empty = [
  { number: '', id: '', name: '', workmanship: 0, summary: '', svg: '' },
]

const SkillDetail = ({ match, onHover, onLeave, pageTimer }) => {
  const dispatch = useDispatch();
  const gsapReady = useCallback((value) => dispatch(changeGsapState(value)), [dispatch]);
  const [currentGsapState] = useSelector(state => [state.CommonValue.currentGsapState], shallowEqual);

  let history = useHistory();

  const { list } = match.params;
  const lists = useRef([]);
  const scrollPosition = useRef();
  const [currentSkillScroller, setCurrentSkillScroller] = useState();
  const [currentList, setCurrentList] = useState(list);
  const [listHoverMotion, setListHoverMotion] = useState('');
  const [currentTarget, setCurrentTarget] = useState(0);
  const [opacity, setOpacity] = useState('');

  const makeSmoothScrollbarforSkill = useCallback(() => {
    const scroller = scrollPosition.current;
    let skillScrollBar;
    if (isDesktop) {
      skillScrollBar = Scrollbar.init(scroller, { damping: 0.02, alwaysShowTracks: true });
    } else {
      skillScrollBar = Scrollbar.init(scroller, { damping: 0.1, alwaysShowTracks: true });
    }
    setCurrentSkillScroller(skillScrollBar);

    ScrollTrigger.scrollerProxy(scroller, {
      scrollTop(value) {
        if (arguments.length) {
          skillScrollBar.scrollTop = value;
        }
        return skillScrollBar.scrollTop;
      }
    });
    ScrollTrigger.defaults({ scroller: scroller });

    skillScrollBar.addListener(ScrollTrigger.update);
    gsapReady(true);
  }, [gsapReady])

  const listHover = (number) => {
    onHover(' focus-cursor')
    if (currentTarget + 1 > number) {
      setListHoverMotion('top')
    } else if (currentTarget + 1 < number) {
      setListHoverMotion('bottom')
    }
  }

  const onListLeave = useCallback(() => {
    onLeave();
    setListHoverMotion('');
  }, [onLeave])

  const changeList = async (e) => {
    if (e.target.dataset.list !== currentList) {
      lists.current = [];
      currentSkillScroller.setPosition(0, 0)
      Scrollbar.destroyAll();
      await gsapReady(false);
      setCurrentTarget(0);
      if (isDesktop) {
        await pageTimer(e.target.dataset.list, 0);
        makeSmoothScrollbarforSkill();
      } else {
        await pageTimer(e.target.dataset.list, 0);
        makeSmoothScrollbarforSkill();
      }
    } else {
      currentSkillScroller.scrollTo(0, 0, 600)
    }
  }

  const changeHistoryList = useCallback(async () => {
    lists.current = [];
    currentSkillScroller.setPosition(0, 0)
    Scrollbar.destroyAll();
    await gsapReady(false);
    setCurrentTarget(0);
    setCurrentList(history.location.pathname.split('/skill/')[1]);
    makeSmoothScrollbarforSkill();
  }, [currentSkillScroller, gsapReady, history.location.pathname, makeSmoothScrollbarforSkill])

  const changeTarget = useCallback((id) => {
    setCurrentTarget(id);
    setOpacity('');
    onListLeave();

    const opacityTimer = setTimeout(() => {
      setOpacity('opacity')
    }, 100);
    return () => clearTimeout(opacityTimer);
  }, [onListLeave])

  const addToRefs = el => {
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
          end: 'bottom+=100% center'
        }
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
          end: 'bottom center'
        }
      });

      gsap.to(el, {
        scrollTrigger: {
          id: `list-next-${index + 1}`,
          trigger: el,
          scroller: '.skill-list',
          start: 'top-=100% center',
          toggleClass: { targets: el, className: 'next' },
          end: 'bottom-=100% center'
        }
      });
    });
  }, [changeTarget])

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
          gsap.to(proxy, { skew: 0, duration: 0.3, ease: 'power3', overwrite: true, onUpdate: () => skewSetter(proxy.skew) });
        }
      }
    });
  }

  const clickList = (target) => {
    const listHeight = scrollPosition.current.clientHeight / 3
    currentSkillScroller.scrollTo(0, listHeight * (target.number - 1), 600)
  }

  const workmanships = (level) => {
    return (
      <div className={`levels level-${level} ${opacity}`}>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
      </div>
    )
  }

  const contents = (target, contentKind) => {
    let content;
    if (target === 'language') {
      content = language
    } else if (target === 'lib') {
      content = lib
    } else if (target === 'tool') {
      content = tool
    } else if (target === 'interest') {
      content = interest
    } else {
      content = empty
    }
    return (
      contentKind === 'list' ? (
        content.map(content => (
          <li key={content.number} className='list col-4 col-l-3 pl-pr-none' ref={addToRefs} onClick={() => clickList(content)} onMouseEnter={() => listHover(content.number)} onMouseLeave={onListLeave}>
            <div className={`inner ${listHoverMotion}`}>{content.svg === '' ? <div>{content.name}</div> : <div dangerouslySetInnerHTML={{ __html: content.svg }}></div>}</div>
          </li >
        ))
      ) : (
        <><div className='pagenation'><span>{currentTarget + 1}</span>/<span>{content.length}</span></div><div className='content'><div>{workmanships(content[currentTarget].workmanship)}<h2 className={opacity}>{content[currentTarget].name}</h2></div><p className={`${opacity}${content[currentTarget].workmanship}`}>{content[currentTarget].summary}</p></div><span className={`back-text ${opacity}`}>{content[currentTarget].name}</span></>
      )
    )
  }

  useEffect(() => {
    Scrollbar.destroyAll();
    gsapReady(false);
    makeSmoothScrollbarforSkill();

    return () => {
      let triggers = ScrollTrigger.getAll();
      triggers.forEach(trigger => {
        trigger.kill();
      });

      onLeave();
    }
  }, [])

  useEffect(() => {
    if (currentGsapState) {
      listScroller();
      scrollSkew();
    }
  }, [currentGsapState, currentList, listScroller])

  useEffect(() => {
    setOpacity('');
    if (history.location.pathname.split('/skill/')[1] !== currentList) {
      changeHistoryList();
    }
  }, [changeHistoryList, currentList, history.location.pathname])

  return (
    <div className='skill-detail'>
      <div className='container fluid pl-pr-none'>
        <ul className='skill-tab'>
          <li><button className={currentList === 'language' ? 'active' : ''} onClick={changeList} onMouseEnter={() => onHover(' focus-cursor')} onMouseLeave={onListLeave} data-list='language'>언 어</button></li>
          <li><button className={currentList === 'lib' ? 'active' : ''} onClick={changeList} onMouseEnter={() => onHover(' focus-cursor')} onMouseLeave={onListLeave} data-list='lib'>프레임워크&라이브러리</button></li>
          <li><button className={currentList === 'tool' ? 'active' : ''} onClick={changeList} onMouseEnter={() => onHover(' focus-cursor')} onMouseLeave={onListLeave} data-list='tool'>개발 도구</button></li>
          <li><button className={currentList === 'interest' ? 'active' : ''} onClick={changeList} onMouseEnter={() => onHover(' focus-cursor')} onMouseLeave={onListLeave} data-list='interest'>최근 관심 기술</button></li>
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
  )
}

export default SkillDetail;
