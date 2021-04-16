import React, { useState, useEffect, useRef } from 'react';
import svg from 'static/images/icon-svg.json';
import './skillDetail.scss';
import { useDispatch, useSelector, shallowEqual } from 'react-redux';
import { changeGsapState } from 'modules/commonValue';
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
  { number: '1', id: 'html', name: 'HTML', workmanship: 5, summary: '대부분 목적에 맞는 올바른 태그를 사용하고 있습니다. 스크린리더의 적용 여부에 따라 더 까다롭게 신경 써 볼 수 있겠지만 현재는 웹 표준과 가이드가 너무 잘 나와 있기 때문에 완전히 자유롭고 다양하게 사용할 수 있습니다', svg: htmlSvg },
  { number: '2', id: 'css', name: 'CSS', workmanship: 4, summary: '대부분의 style 종류와 우선순위, 상관관계를 파악하고 있습니다. 이전에는 \'Internet Explorer 8~9\' 까지 Cross Browsing 하는 개발 조건을 많이 겪어 보기도 했습니다. 하지만 아직 생각대로 완벽하게 Animation을 컨트롤하는 수준까지는 경험이 더 필요할 것 같습니다.', svg: cssSvg },
  { number: '3', id: 'javascript', name: 'JavaScript', workmanship: 4, summary: '오랜 시간 \'Internet Explorer 8~9\' 등을 지원하는 개발환경으로 인해 ES6나 이하, JQuery등으로 Javascript를 사용해왔습니다. 현재는 컴파일러와 React를 주로 사용하다 보니 완전한 es8 유저가 되기 위해 노력 중입니다. 더 효율적인 사고와 운용에는 경험이 더 필요할 것 같습니다.', svg: javascriptSvg }
];

const lib = [
  { number: '1', id: 'react', name: 'React', workmanship: 4, summary: 'Class 기반일 때부터 React를 익히고 있었지만, 실무에서 사용해볼 기회가 없었습니다. 프리랜서로 일할 때 Hook를 섞어가며 실무를 겪어보았고, 이번 포트폴리오는 Hook 기반으로 제작하였습니다. 초기부터 지금까지 React에 변화가 많았기에 혼란이 많았지만 개발 방식은 꽤 익숙해진 단계고 최적화와 효율 등에 더 매진할 예정입니다.', svg: reactSvg },
  { number: '2', id: 'redux', name: 'Redux', workmanship: 3, summary: '간단한 상태값과 트리거등의 역할로 이번 포트폴리오에서 처음 사용하였습니다. 다양한 플러그인들과 효율적인 사용은 경험이 더 필요할 것 같습니다.', svg: reduxSvg },
  { number: '3', id: 'webpack', name: 'Webpack', workmanship: 3, summary: 'React를 처음 익히면서 Webpack을 배우게 되었습니다. 당시에 한번 처음부터 끝까지 커스텀 해본 경험이 있지만, 시간이 꽤 지났고 최근에는 다뤄볼 기회가 없었습니다. 직접 다시 세팅할 일이 있다면 그동안의 변화를 습득할 시간이 필요할 것 같습니다.', svg: webpackSvg },
  { number: '4', id: 'parcel', name: 'Parcel', workmanship: 4, summary: '이번 포트폴리오 제작에 사용한 번들러입니다. Webpack과 비교하여 Learning Curve가 적고 바로 사용이 쉬우나 아직 관련 정보나 사례가 좀 적다는 단점을 겪었습니다.', svg: parcelSvg },
  { number: '5', id: 'sass', name: 'SASS(SCSS)', workmanship: 5, summary: 'CSS보다 작성에서 오는 피로도가 적고 약간의 함수나 변수 사용이 꽤 편리합니다. 다루는데 큰 이해가 필요하진 않습니다.', svg: sassSvg },
  { number: '6', id: 'gsap', name: 'GSAP', workmanship: 4, summary: '순수 CSS로 작성해서 만들어지는 애니메이션보다 시각적, 성능적으로 월등한 동적 효과를 표현할 수 있습니다. 유료 버전은 다뤄보지 않았지만 대부분의 기능이 무료이며, 응용에 무리가 없다고 생각합니다.', svg: gsapSvg },
  { number: '7', id: 'i18next', name: 'I18next', workmanship: 5, summary: 'html이나 Javascript 환경, 서버단에서 오는 텍스트 등 다양한 번역 동작을 경험해보았습니다.', svg: i18nextSvg },
  { number: '8', id: 'jquery', name: 'Jquery', workmanship: 4, summary: 'Javascript를 처음 익힐 때 JQuery는 Learning Curve를 줄여주는 좋은 도구였습니다. 사용하지 않은지 오래되긴 했지만 여전히 다루는 데는 문제가 없을 것 같습니다.', svg: jquerySvg },
  { number: '9', id: 'bootstrap', name: 'Bootstrap', workmanship: 5, summary: '반응형 사이트를 처음 접하고 개발할 당시 자주 사용하였던 프레임워크입니다, 현재도 BreakPoint 등을 참고하고, Grid 커스텀에도 응용하여 사용합니다.', svg: bootstrapSvg },
  { number: '10', id: 'materialui', name: 'Material-UI', workmanship: 4, summary: '프리랜서로 일하는 중 접하게 되었습니다. Bootstrap처럼 React에서 사용되는 프레임워크로 사용이나 커스텀의 방식도 꽤 익숙했다고 생각합니다.', svg: materialuiSvg }
];

const tool = [
  { number: '1', id: 'git', name: 'Git', workmanship: '3', summary: '개발자에게는 필수이고 당연히, 또 오랜 시간 사용하고 있지만 터미널에서 cli로 써본 적은 별로 없는 것 같습니다.', svg: gitSvg },
  { number: '2', id: 'github', name: 'Github', workmanship: 4, summary: '대표적인 서비스지만 공개적인 형태라는 점에서 사용빈도가 낮았습니다. 이번 포트폴리오부터는 사용해보려고 합니다.', svg: githubSvg },
  { number: '3', id: 'bitbucket', name: 'Bitbucket', workmanship: 4, summary: '대부분의 Git 관련 프로젝트들이 직장과 관계되어 있고 소규모 팀에서 무료 Private 프로젝트를 만들 수 있었으므로 가장 많이 사용했습니다.', svg: bitbucketSvg },
  { number: '4', id: 'sourcetree', name: 'Sourcetree', workmanship: 3, summary: 'GUI가 한눈에 들어오기도하고 Bitbucket을 오래하였기에 지금까지 사용하고 있는 Git 형상관리 툴입니다. 기능이 많지만 느리고 버그가 좀 잦다는 단점이 있습니다. ', svg: sourcetreeSvg },
  { number: '5', id: 'jira', name: 'Jira', workmanship: 4, summary: '처음부터 끝까지 세팅해본적은 없지만, 멤버로서 사용에는 아주 익숙합니다.', svg: jiraSvg },
  { number: '6', id: 'figma', name: 'Figma', workmanship: 4, summary: '초기에 PSD나 AI로 작업할때를 제외하고 대부분은 Figma로 디자인을 전달받아 작업하였습니다. ', svg: figmaSvg },
  { number: '7', id: 'zeplin', name: 'Zeplin', workmanship: 2, summary: '초기에 PSD나 AI로 작업할 때 사용했었습니다. 다시 사용하게 된다면 그동안의 변화를 익힐 시간이 필요할 것 같습니다.', svg: zeplinSvg },
  { number: '8', id: 'netlify', name: 'Netlify', workmanship: 1, summary: '이번 포트폴리오를 올리면서 사용하였는데, Netlify 사이트의 자체 빌드에서 영문모를 에러가 많아, 로컬에서 빌드 하여 올렸습니다. 그래도 간편하고 성능도 좋은 것 같습니다.', svg: netlifySvg },
  { number: '9', id: 'lighthouse', name: 'Lighthouse', workmanship: 1, summary: '이번 포트폴리오를 제작하며 성능 개선을 위해 사용하였습니다. 이해하기 쉽고 가이드가 자세하게 나와서 사용은 편했습니다.', svg: '' }
];

const interest = [
  { number: '1', id: 'typescript', name: 'TypeScript', workmanship: 1, summary: '어느 정도 학습을 진행하였지만, 아직 직접적으로 프로젝트에 적용해본 적은 없습니다. 실무에서 사용하게 된다면 금방 익숙해질 것 같습니다.', svg: typescriptSvg },
  { number: '2', id: 'contextapi', name: 'context API', workmanship: 1, summary: '아직 직접적으로 프로젝트에 적용해본 적은 없습니다. 실무에서 사용하게 된다면 금방 익숙해질 것 같습니다.', svg: '' },
  { number: '3', id: 'mobx', name: 'MobX', workmanship: 0, summary: 'Redux보다는 편리하다고 들었는데, 시간이 나면 다뤄볼 생각입니다.', svg: mobxSvg },
  { number: '4', id: 'gatsby', name: 'Gatsby', workmanship: 0, summary: '요즘 꽤 많이 보이는 서비스입니다. 시간이 나면 다뤄볼 생각입니다.', svg: gatsbySvg },
  { number: '5', id: 'webgl', name: 'WebGL', workmanship: 0, summary: '진입장벽이 만만치 않지만 언젠가 자유롭게 다뤄보고 싶습니다.', svg: webglSvg },
  { number: '6', id: 'graphql', name: 'GraphQL', workmanship: '', summary: '', svg: graphqlSvg },
  { number: '7', id: 'express', name: 'Express.js', workmanship: '', summary: '', svg: '' },
  { number: '8', id: 'nextjs', name: 'Next.js', workmanship: '', summary: '', svg: nextjsSvg },
  { number: '9', id: 'analytics', name: 'Google Analytics', workmanship: '', summary: '', svg: '' },
  { number: '10', id: 'axios', name: 'Axios', workmanship: '', summary: '', svg: '' }
];

const SkillDetail = ({ match, onHover, onLeave, pageTimer }) => {
  const dispatch = useDispatch();
  const gsapReady = (value) => dispatch(changeGsapState(value));
  const [currentGsapState] = useSelector(state => [state.CommonValue.currentGsapState], shallowEqual);

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

export default SkillDetail;