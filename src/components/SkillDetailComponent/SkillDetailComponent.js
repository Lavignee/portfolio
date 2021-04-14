import React, { useState, useEffect, useRef } from 'react';
import svg from 'static/images/icon-svg.json';
import './SkillDetailComponent.scss';
import { useDispatch, useSelector, shallowEqual } from 'react-redux';
import { changeGsapState } from '../../modules/CommonValueModule';
import Scrollbar from 'smooth-scrollbar';
import { isDesktop } from 'react-device-detect';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
gsap.registerPlugin(ScrollTrigger);

const bitbucketSvg = svg.bitbucket
const bootstrapSvg = svg.bootstrap
const cssSvg = svg.css
const figmaSvg = svg.figma
const gatsbySvg = svg.gatsby
const gitSvg = svg.git
const githubSvg = svg.github
const graphqlSvg = svg.graphql
const gsapSvg = svg.gsap
const htmlSvg = svg.html
const i18nextSvg = svg.i18next
const javascriptSvg = svg.javascript
const jiraSvg = svg.jira
const jquerySvg = svg.jquery
const materialuiSvg = svg.materialui
const mobxSvg = svg.mobx
const netlifySvg = svg.netlify
const nextjsSvg = svg.nextjs
const parcelSvg = svg.parcel
const reactSvg = svg.react
const reduxSvg = svg.redux
const sassSvg = svg.sass
const sourcetreeSvg = svg.sourcetree
const typescriptSvg = svg.typescript
const webglSvg = svg.webgl
const webpackSvg = svg.webpack
const zeplinSvg = svg.zeplin

const language = [
  { number: '1', id: 'html', name: 'HTML', workmanship: 4, summary: '처음 개발에는 태그들의 기본 속성에 의존하여 사용했지만 이제는 그 경계가 사실상 무의미합니다. 스크린리더의 적용 여부에 따라 태그에 더 신경 써 볼 수 있겠지만 현재는 웹 표준에서 크게 어긋나지 않는 한 자유롭게 사용하고 있습니다.', svg: htmlSvg },
  { number: '2', id: 'css', name: 'CSS', workmanship: 4, summary: 'CSS 속성은 눈을 감았다 뜨면 새로운 게 보이고, 또 다양하게 사용되고 있습니다. 브라우저마다 해석의 기준의 순위도 다릅니다. 많은 속성을 자유롭게 응용할 수 있지만, 아직도 공부는 끝이 없습니다.', svg: cssSvg },
  { number: '3', id: 'javascript', name: 'JavaScript', workmanship: 3, summary: '오랜 시간 실무 환경(ie 8 지원)으로 인해 es5나 더 낮은 Javascript를 많이 사용해왔습니다. 현재에는 Babel이라는 듬직한 컴파일러도 있고 React를 주로 사용하다 보니 완전한 es8 유저가 되기 위해 노력 중입니다. 해석은 되지만 자유로운 응용은 아직도 갈 길이 멀다고 생각합니다.', svg: javascriptSvg }
];

const lib = [
  { number: '1', id: 'react', name: 'React', workmanship: 3, summary: 'React를 배우는 시간은 꽤 많은 시간이 필요했습니다. 초기부터 계속 관심 있게 살펴보고 간단한 학습용 코드는 작성해 보았지만, 제가 참여한 프로젝트에서는 사용되지 않다 보니 시간이 한참 흘러 Hooks 기능이 도입된 이후에 제대로 접해보았습니다. 그래서 익혀둔 것도 결국 다시 보고 변경되거나 새로운 사항도 추가로 배워야 했습니다.', svg: reactSvg },
  { number: '2', id: 'redux', name: 'Redux', workmanship: 2, summary: '이번 포트폴리오 사이트에서 처음 사용해 보았습니다.', svg: reduxSvg },
  { number: '3', id: 'webpack', name: 'Webpack', workmanship: 3, summary: 'React를 처음 배우면서 Webpack의 존재를 알게 되었습니다. 정말 수많은 플러그인과 모듈이 존재하고, 사용자나 프로젝트마다 사용법이 달라지기 때문에 아직도 Webpack으로 초기 개발 세팅을 하는 일은 정말 힘든 일 중에 하나입니다.', svg: webpackSvg },
  { number: '4', id: 'parcel', name: 'Parcel', workmanship: 3, summary: '이번 포트폴리오 사이트를 개발하려고 계획을 구상하던 중에 접하게 된 굉장히 편하고 가벼운 번들러입니다.', svg: parcelSvg },
  { number: '5', id: 'sass', name: 'SASS(SCSS)', workmanship: 4, summary: '프런트 개발자로써 SASS를 다루기 전과 후는 작업 속도나 피로도의 차이가 엄청나다고 생각합니다. SASS 없는 프런트 개발은 생각하기가 힘듭니다.', svg: sassSvg },
  { number: '6', id: 'gsap', name: 'GSAP', workmanship: 3, summary: '순수 CSS로 작성해서 만들어지는 애니메이션보다 시각적으로나 성능적으로 월등히 훌륭한 동적 효과를 표현할 수 있습니다. 가볍게 개발되어야 하는 사이트가 아니라면 대부분 사용할 것 같습니다.', svg: gsapSvg },
  { number: '7', id: 'i18next', name: 'I18next', workmanship: 4, summary: '이미 일찍부터 국제화된 웹 시장에서 번역 없는 웹 사이트는 생각하기 힘듭니다. 최근에는 크롬의 구글 번역도 성능이 좋은 편이지만, 작업해온 환경 탓인지 항상 다국어 개발을 염두에 두고 프런트 개발을 하는 것에 익숙해져 있습니다.', svg: i18nextSvg },
  { number: '8', id: 'jquery', name: 'Jquery', workmanship: 4, summary: '처음 HTML과 CSS만 다루던 퍼블리셔 단계에서 JavaScript는 놀라우면서도 어려운 기술이었습니다. 그 진입장벽을 쉽게 만들어주고 제 코드에서 오랜 시간 함께 해온 훌륭한 라이브러리입니다.', svg: jquerySvg },
  { number: '9', id: 'bootstrap', name: 'Bootstrap', workmanship: 4, summary: '처음 style의 덩어리로 테마라는 개념을 익히고 반응형 웹의 걸음마를 배운 프레임워크입니다. 꽤 오랜 시간 프런트 개발에 서비스의 기호에 맞게 커스텀 한 부트스트랩을 사용했습니다.', svg: bootstrapSvg },
  { number: '10', id: 'materialui', name: 'Material-UI', workmanship: 3, summary: '프리랜서로 일하는 중 접하게 되었습니다. 부트스트랩처럼 React에서 사용되는 프레임워크로 사용이나 커스텀의 방식도 꽤 익숙했다고 생각합니다.', svg: materialuiSvg }
];

const tool = [
  { number: '1', id: 'git', name: 'Git', workmanship: '3', summary: '다른 개발자와 프로젝트 협력을 위해 처음 Git을 배웠습니다. 현재는 버전 관리와 기능 분리로도 사용합니다. 개발 경력이 많아질수록 없어서는 안되는 도구 같습니다.', svg: gitSvg },
  { number: '2', id: 'github', name: 'Github', workmanship: 3, summary: 'Git 하면 GIthub라고 생각할 정도로 대표적인 웹서비스지만, 다른 개발자와 함께 사용하려면 기본이 Public 환경이라는 점에서 사용빈도가 낮았습니다. 언제나 다시 보면 손볼 것투성이인 코드를 공개하기도 물론 용기가 나지 않았습니다.', svg: githubSvg },
  { number: '3', id: 'bitbucket', name: 'Bitbucket', workmanship: 3, summary: '대부분의 Git 관련 프로젝트들이 직장과 관계되어 있고 소규모 팀에서 Private 프로젝트를 만들 수 있었으므로 가장 많이 사용했습니다.', svg: bitbucketSvg },
  { number: '4', id: 'sourcetree', name: 'Sourcetree', workmanship: 3, summary: '한눈에 들어오는 Git 관리 GUI 툴로써 현재까지 가장 오래 사용하고 있습니다.', svg: sourcetreeSvg },
  { number: '5', id: 'jira', name: 'Jira', workmanship: 3, summary: '많은 사람과 함께하거나 QA가 존재하는 프로젝트에서는 이만큼 정리가 잘 되는 프로젝트 관리 도구가 없는 것 같습니다. 개인적으로 사용할 때는 MS To Do(이전 Wonderlist)를 사용합니다.', svg: jiraSvg },
  { number: '6', id: 'figma', name: 'Figma', workmanship: 3, summary: '알게 된 이후 줄곧 사용하고 있는 개발 협업 도구입니다. 개발 초기에는 PSD나 AI 확장자를 직접 열어 작업하던 때도 있지만 Figma를 사용하고 안 하고는 의사소통이나 작업 속도에서 너무 큰 차이가 납니다.', svg: figmaSvg },
  { number: '7', id: 'zeplin', name: 'Zeplin', workmanship: 2, summary: 'PSD나 AI 파일을 받아서 작업할 때는 꼭 필요한 도구입니다. 다만 해당 파일들을 직접 받아서 작업한 경우가 손에 꼽을 정도라 최신의 기능까지 숙지하고 있지는 않습니다.', svg: zeplinSvg }
];

const interest = [
  { number: '1', id: 'typescript', name: 'TypeScript', workmanship: 1, summary: '어느 정도 학습을 진행하였지만, 아직 직접적으로 프로젝트에 적용해본 적은 없습니다.', svg: typescriptSvg },
  { number: '2', id: 'contextapi', name: 'context API', workmanship: 1, summary: '어느 정도 학습을 진행하였지만, 아직 직접적으로 프로젝트에 적용해본 적은 없습니다.', svg: '' },
  { number: '3', id: 'mobx', name: 'MobX', workmanship: '', summary: '', svg: mobxSvg },
  { number: '4', id: 'gatsby', name: 'Gatsby', workmanship: '', summary: '', svg: gatsbySvg },
  { number: '5', id: 'netlify', name: 'Netlify', workmanship: '', summary: '', svg: netlifySvg },
  { number: '6', id: 'graphql', name: 'GraphQL', workmanship: '', summary: '', svg: graphqlSvg },
  { number: '7', id: 'express', name: 'Express.js', workmanship: '', summary: '', svg: '' },
  { number: '8', id: 'nextjs', name: 'Next.js', workmanship: '', summary: '', svg: nextjsSvg },
  { number: '9', id: 'webgl', name: 'WebGL', workmanship: '', summary: '', svg: webglSvg },
  { number: '10', id: 'mo', name: 'Mo.js', workmanship: '', summary: '', svg: '' },
  { number: '11', id: 'analytics', name: 'Google Analytics', workmanship: '', summary: '', svg: '' }
];

const SkillDetailComponent = ({ match, onHover, onLeave, pageTimer }) => {
  const dispatch = useDispatch();
  const gsapReady = (value) => dispatch(changeGsapState(value));
  const [currentGsapState] = useSelector(state => [state.CommonValueModule.currentGsapState], shallowEqual);

  const { list } = match.params;
  const lists = useRef([]);
  const scrollPosition = useRef();
  const [currentSkillScroller, setCurrentSkillScroller] = useState();
  const [currentList, setCurrentList] = useState(list);
  const [listHoverMotion, setListHoverMotion] = useState('');
  const [currentTarget, setCurrentTarget] = useState(0);
  const [opacity, setOpacity] = useState('opacity');

  const makeSmoothScrollbarforSkill = () => {
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
  }

  const skillScrollRemaker = (timer) => {
    const skillScrollRemake = setTimeout(() => {
      makeSmoothScrollbarforSkill();
    }, timer);
    return () => clearTimeout(skillScrollRemake);
  }

  const listHover = (number) => {
    onHover(' focus-cursor')
    if (currentTarget + 1 > number) {
      setListHoverMotion('top')
    } else if (currentTarget + 1 < number) {
      setListHoverMotion('bottom')
    }
  }

  const onListLeave = () => {
    onLeave();
    setListHoverMotion('');
  };

  const changeList = (e) => {
    if (e.target.dataset.list !== currentList) {
      currentSkillScroller.setPosition(0, 0)
      Scrollbar.destroyAll();
      gsapReady(false);
      lists.current = [];
      setCurrentList('');
      setCurrentTarget(0);
      pageTimer(e.target.dataset.list, 10);
      skillScrollRemaker(50);
    } else {
      currentSkillScroller.scrollTo(0, 0, 600)
    }
  }

  const changeHistoryList = () => {
    Scrollbar.destroyAll();
    gsapReady(false);
    lists.current = [];
    setCurrentList('');
    setCurrentTarget(0);
    const changeHistoryTimer = setTimeout(() => {
      setCurrentList(location.pathname.split('/skill/')[1]);
    }, 10);
    skillScrollRemaker(50);
  }

  const changeTarget = (id) => {
    setCurrentTarget(id);
    setOpacity('')
    onListLeave();

    const opacityTimer = setTimeout(() => {
      setOpacity('opacity')
    }, 100);
    return () => clearTimeout(opacityTimer);
  }

  const addToRefs = el => {
    if (el && !lists.current.includes(el)) {
      lists.current.push(el);
    }
  };

  const listScroller = () => {
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

    setOpacity('')

    const opacityTimer = setTimeout(() => {
      setOpacity('opacity')
    }, 100);
    return () => clearTimeout(opacityTimer);
  }

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

  const listDetail = (target) => {
    switch (target) {
      case 'language':
        return language.map(language => (
          <ul key={language.number} className='list col-4 col-l-3 pl-pr-none' ref={addToRefs} onClick={() => clickList(language)} onMouseEnter={() => listHover(language.number)} onMouseLeave={onListLeave}>
            <li className={listHoverMotion}>{language.svg === '' ? <div>{language.name}</div> : <div dangerouslySetInnerHTML={{ __html: language.svg }}></div>}</li>
          </ul >
        ))
      case 'lib':
        return lib.map(lib => (
          <ul key={lib.number} className='list col-4 col-l-3 pl-pr-none' ref={addToRefs} onClick={() => clickList(lib)} onMouseEnter={() => listHover(lib.number)} onMouseLeave={onListLeave}>
            <li className={listHoverMotion}>{lib.svg === '' ? <div>{lib.name}</div> : <div dangerouslySetInnerHTML={{ __html: lib.svg }}></div>}</li>
          </ul>
        ))
      case 'tool':
        return tool.map(tool => (
          <ul key={tool.number} className='list col-4 col-l-3 pl-pr-none' ref={addToRefs} onClick={() => clickList(tool)} onMouseEnter={() => listHover(tool.number)} onMouseLeave={onListLeave}>
            <li className={listHoverMotion}>{tool.svg === '' ? <div>{tool.name}</div> : <div dangerouslySetInnerHTML={{ __html: tool.svg }}></div>}</li>
          </ul>
        ))
      case 'interest':
        return interest.map(interest => (
          <ul key={interest.number} className='list col-4 col-l-3 pl-pr-none' ref={addToRefs} onClick={() => clickList(interest)} onMouseEnter={() => listHover(interest.number)} onMouseLeave={onListLeave}>
            <li className={listHoverMotion}>{interest.svg === '' ? <div>{interest.name}</div> : <div dangerouslySetInnerHTML={{ __html: interest.svg }}></div>}</li>
          </ul>
        ))
      default: ''
    }
  }

  const targetDetail = (target) => {
    switch (target) {
      case 'language':
        return <><div className='pagenation'><span>{currentTarget + 1}</span>/<span>{language.length}</span></div><div className='content'><div>{workmanships(language[currentTarget].workmanship)}<h2 className={opacity}>{language[currentTarget].name}</h2></div><p className={`${opacity}${language[currentTarget].workmanship}`}>{language[currentTarget].summary}</p></div><span className={`back-text ${opacity}`}>{language[currentTarget].name}</span></>
      case 'lib':
        return <><div className='pagenation'><span>{currentTarget + 1}</span>/<span>{lib.length}</span></div><div className='content'><div>{workmanships(lib[currentTarget].workmanship)}<h2 className={opacity}>{lib[currentTarget].name}</h2></div><p className={`${opacity}${lib[currentTarget].workmanship}`}>{lib[currentTarget].summary}</p></div><span className={`back-text ${opacity}`}>{lib[currentTarget].name}</span></>
      case 'tool':
        return <><div className='pagenation'><span>{currentTarget + 1}</span>/<span>{tool.length}</span></div><div className='content'><div>{workmanships(tool[currentTarget].workmanship)}<h2 className={opacity}>{tool[currentTarget].name}</h2></div><p className={`${opacity}${tool[currentTarget].workmanship}`}>{tool[currentTarget].summary}</p></div><span className={`back-text ${opacity}`}>{tool[currentTarget].name}</span></>
      case 'interest':
        return <><div className='pagenation'><span>{currentTarget + 1}</span>/<span>{interest.length}</span></div><div className='content'><div>{workmanships(interest[currentTarget].workmanship)}<h2 className={opacity}>{interest[currentTarget].name}</h2></div><p className={`${opacity}${interest[currentTarget].workmanship}`}>{interest[currentTarget].summary}</p></div><span className={`back-text ${opacity}`}>{interest[currentTarget].name}</span></>
      default: ''
    }
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
    currentGsapState && listScroller(), scrollSkew();
  }, [currentGsapState, currentList])

  useEffect(() => {
    scrollPosition.current.scrollTo(0, 0);
    if (location.pathname.split('/skill/')[1] !== currentList) {
      changeHistoryList();
    }
  }, [location.pathname])

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
              <div className='default-list col-4 col-l-3'></div>
              {listDetail(currentList)}
              <div className='default-list col-4 col-l-3'></div>
            </ul>
          </div>

          <div className='col-8 off-4 col-l-9 off-l-3 pl-pr-none skill-detail-content-frame'>
            <div className='skill-detail-content'>
              {targetDetail(currentList)}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default SkillDetailComponent;
