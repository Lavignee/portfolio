import React, { useState, useEffect } from 'react';
import svgColor from '../../static/images/icon-svg-color.json';
import './SkillDetailComponent.scss';
const analytics = svgColor.analytics
const bitbucket = svgColor.bitbucket
const bootstrap = svgColor.bootstrap
const css = svgColor.css
const figma = svgColor.figma
const graphql = svgColor.graphql
const gsap = svgColor.gsap
const html = svgColor.html
const i18next = svgColor.i18next
const javascript = svgColor.javascript
const jira = svgColor.jira
const jquery = svgColor.jquery
const materialui = svgColor.materialui
const mobx = svgColor.mobx
const mojs = svgColor.mojs
const netlify = svgColor.netlify
const nextjs = svgColor.nextjs
const parcel = svgColor.parcel
const react = svgColor.react
const sass = svgColor.sass
const sourcetree = svgColor.sourcetree
const typescript = svgColor.typescript
const webgl = svgColor.webgl
const webpack = svgColor.webpack
const zeplin = svgColor.zeplin

const language = [
  { number: '01', id: 'html', name: 'HTML', summary: '숙련별 4개 처음 개발에는 태그들의 기본 속성에 의존하여 사용했지만 이제는 그 경계가 사실상 무의미합니다. 스크린리더의 적용 여부에 따라 태그에 더 신경 써 볼 수 있겠지만 현재는 웹 표준에서 크게 어긋나지 않는 한 자유롭게 사용하고 있습니다.' },
  { number: '02', id: 'css', name: 'CSS', summary: '숙련별 4개 CSS 속성은 눈을 감았다 뜨면 새로운 게 보이고, 또 다양하게 사용되고 있습니다. 브라우저마다 해석의 기준의 순위도 다릅니다. 많은 속성을 자유롭게 응용할 수 있지만, 아직도 공부는 끝이 없습니다.' },
  { number: '03', id: 'js', name: 'JavaScript', summary: '숙련별 3개 오랜 시간 실무 환경(ie 8 지원)으로 인해 es5나 더 낮은 Javascript를 많이 사용해왔습니다. 현재에는 Babel이라는 듬직한 컴파일러도 있고 React를 주로 사용하다 보니 완전한 es8 유저가 되기 위해 노력 중입니다. 해석은 되지만 자유로운 응용은 아직도 갈 길이 멀다고 생각합니다.' }
];
const lib = [
  { number: '01', id: 'react', name: 'React.js', summary: '숙련별3개 React를 배우는 시간은 꽤 많은 시간이 필요했습니다. 초기부터 계속 관심 있게 살펴보고 간단한 학습용 코드는 작성해 보았지만, 제가 참여한 프로젝트에서는 사용되지 않다 보니 시간이 한참 흘러 Hooks 기능이 도입된 이후에 제대로 접해보았습니다. 그래서 익혀둔 것도 결국 다시 보고 변경되거나 새로운 사항도 추가로 배워야 했습니다.' },
  { number: '02', id: 'redux', name: 'Redux', summary: '숙련별 2개 이번 포트폴리오 사이트에서 처음 사용해 보았습니다.' },
  { number: '03', id: 'webpack', name: 'Webpack', summary: '숙련별3개 React를 처음 배우면서 Webpack의 존재를 알게 되었습니다. 정말 수많은 플러그인과 모듈이 존재하고, 사용자나 프로젝트마다 사용법이 달라지기 때문에 아직도 Webpack으로 초기 개발 세팅을 하는 일은 정말 힘든 일 중에 하나입니다.' },
  { number: '04', id: 'parcel', name: 'Parcel', summary: '숙련별3개 이번 포트폴리오 사이트를 개발하려고 계획을 구상하던 중에 접하게 된 굉장히 편하고 가벼운 번들러입니다.' },
  { number: '05', id: 'sass', name: 'SASS(SCSS)', summary: '숙련별4개 프런트 개발자로써 SASS를 다루기 전과 후는 작업 속도나 피로도의 차이가 엄청나다고 생각합니다. SASS 없는 프런트 개발은 생각하기가 힘듭니다.' },
  { number: '06', id: 'gsap', name: 'GSAP', summary: '숙련별3개 순수 CSS로 작성해서 만들어지는 애니메이션보다 시각적으로나 성능적으로 월등히 훌륭한 동적 효과를 표현할 수 있습니다. 가볍게 개발되어야 하는 사이트가 아니라면 대부분 사용할 것 같습니다.' },
  { number: '07', id: 'i18n', name: 'I18n(Internationalization)', summary: '숙련별4개 이미 일찍부터 국제화된 웹 시장에서 번역 없는 웹 사이트는 생각하기 힘듭니다. 최근에는 크롬의 구글 번역도 성능이 좋은 편이지만, 작업해온 환경 탓인지 항상 다국어 개발을 염두에 두고 프런트 개발을 하는 것에 익숙해져 있습니다.' },
  { number: '08', id: 'jquery', name: 'Jquery', summary: '숙련별4개 처음 HTML과 CSS만 다루던 퍼블리셔 단계에서 JavaScript는 놀라우면서도 어려운 기술이었습니다. 그 진입장벽을 쉽게 만들어주고 제 코드에서 오랜 시간 함께 해온 훌륭한 라이브러리입니다.' },
  { number: '09', id: 'bootstrap', name: 'Bootstrap', summary: '숙련별4개 처음 style의 덩어리로 테마라는 개념을 익히고 반응형 웹의 걸음마를 배운 프레임워크입니다. 꽤 오랜 시간 프런트 개발에 서비스의 기호에 맞게 커스텀 한 부트스트랩을 사용했습니다.' },
  { number: '10', id: 'materialui', name: 'Material-UI', summary: '숙련별 3개 프리랜서로 일하는 중 접하게 되었습니다. 부트스트랩처럼 React에서 사용되는 프레임워크로 사용이나 커스텀의 방식도 꽤 익숙했다고 생각합니다.' }
];
const tool = [
  { number: '01', id: 'git', name: 'Git', summary: '숙련별 3개 다른 개발자와 프로젝트 협력을 위해 처음 Git을 배웠습니다. 현재는 버전 관리와 기능 분리로도 사용합니다. 개발 경력이 많아질수록 없어서는 안되는 도구 같습니다.' },
  { number: '02', id: 'github', name: 'Github', summary: '숙련별 3개 Git 하면 GIthub라고 생각할 정도로 대표적인 웹서비스지만, 다른 개발자와 함께 사용하려면 기본이 Public 환경이라는 점에서 사용빈도가 낮았습니다. 언제나 다시 보면 손볼 것투성이인 코드를 공개하기도 물론 용기가 나지 않았습니다.' },
  { number: '03', id: 'bitbucket', name: 'Bitbucket', summary: '숙련별 3개 대부분의 Git 관련 프로젝트들이 직장과 관계되어 있고 소규모 팀에서 Private 프로젝트를 만들 수 있었으므로 가장 많이 사용했습니다.' },
  { number: '04', id: 'sourcetree', name: 'Sourcetree', summary: '숙련별 3개 한눈에 들어오는 Git 관리 GUI 툴로써 현재까지 가장 오래 사용하고 있습니다.' },
  { number: '05', id: 'jira', name: 'Jira', summary: '숙련별 3개 많은 사람과 함께하거나 QA가 존재하는 프로젝트에서는 이만큼 정리가 잘 되는 프로젝트 관리 도구가 없는 것 같습니다. 개인적으로 사용할 때는 MS To Do(이전 Wonderlist)를 사용합니다.' },
  { number: '06', id: 'figma', name: 'Figma', summary: '숙련별 3개 알게 된 이후 줄곧 사용하고 있는 개발 협업 도구입니다. 개발 초기에는 PSD나 AI 확장자를 직접 열어 작업하던 때도 있지만 Figma를 사용하고 안 하고는 의사소통이나 작업 속도에서 너무 큰 차이가 납니다.' },
  { number: '07', id: 'zeplin', name: 'Zeplin', summary: '숙련별2개 PSD나 AI 파일을 받아서 작업할 때는 꼭 필요한 도구입니다. 다만 해당 파일들을 직접 받아서 작업한 경우가 손에 꼽을 정도라 최신의 기능까지 숙지하고 있지는 않습니다.' }
];
const interest = [
  { number: '01', id: 'typescript', name: 'TypeScript', summary: '숙련별 1개 어느 정도 학습을 진행하였지만, 아직 직접적으로 프로젝트에 적용해본 적은 없습니다.' },
  { number: '02', id: 'contextapi', name: 'context API', summary: '숙련별 1개 어느 정도 학습을 진행하였지만, 아직 직접적으로 프로젝트에 적용해본 적은 없습니다.' },
  { number: '03', id: 'mobx', name: 'MobX', summary: '' },
  { number: '04', id: 'gatsby', name: 'Gatsby', summary: '' },
  { number: '05', id: 'netlify', name: 'Netlify', summary: '' },
  { number: '06', id: 'graphql', name: 'GraphQL', summary: '' },
  { number: '07', id: 'express', name: 'Express.js', summary: '' },
  { number: '08', id: 'next', name: 'Next.js', summary: '' },
  { number: '09', id: 'webgl', name: 'WebGL', summary: '' },
  { number: '10', id: 'mo', name: 'Mo.js', summary: '' },
  { number: '11', id: 'analytics', name: 'Google Analytics', summary: '' }
];

const SkillDetailComponent = ({ match }) => {
  const { list } = match.params;
  const [currentList, setCurrentList] = useState(list);
  const [currentTarget, setCurrentTarget] = useState('');
  const [defaultTarget, setDefaultTarget] = useState(true);
  const [svg, setSvg] = useState('');

  const changeList = (e) => {
    setDefaultTarget(true);
    setCurrentList(e.target.dataset.list);
    setCurrentTarget('');
  }

  const changeTarget = (e) => {
    setDefaultTarget(false);
    setCurrentTarget(e.target.dataset.target);
  }

  const changeSvg = () => {
    if (currentTarget === 'analytics') {
      setSvg(analytics)
    } else if (currentTarget === 'bitbucket') {
      setSvg(bitbucket)
    } else if (currentTarget === 'bootstrap') {
      setSvg(bootstrap)
    } else if (currentTarget === 'css') {
      setSvg(css)
    } else if (currentTarget === 'figma') {
      setSvg(figma)
    } else if (currentTarget === 'graphql') {
      setSvg(graphql)
    } else if (currentTarget === 'gsap') {
      setSvg(gsap)
    } else if (currentTarget === 'html') {
      setSvg(html)
    } else if (currentTarget === 'i18next') {
      setSvg(i18next)
    } else if (currentTarget === 'javascript') {
      setSvg(javascript)
    } else if (currentTarget === 'jira') {
      setSvg(jira)
    } else if (currentTarget === 'jquery') {
      setSvg(jquery)
    } else if (currentTarget === 'materialui') {
      setSvg(materialui)
    } else if (currentTarget === 'mobx') {
      setSvg(mobx)
    } else if (currentTarget === 'mojs') {
      setSvg(mojs)
    } else if (currentTarget === 'netlify') {
      setSvg(netlify)
    } else if (currentTarget === 'nextjs') {
      setSvg(nextjs)
    } else if (currentTarget === 'parcel') {
      setSvg(parcel)
    } else if (currentTarget === 'react') {
      setSvg(react)
    } else if (currentTarget === 'sass') {
      setSvg(sass)
    } else if (currentTarget === 'sourcetree') {
      setSvg(sourcetree)
    } else if (currentTarget === 'typescript') {
      setSvg(typescript)
    } else if (currentTarget === 'webgl') {
      setSvg(webgl)
    } else if (currentTarget === 'webpack') {
      setSvg(webpack)
    } else if (currentTarget === 'zeplin') {
      setSvg(zeplin)
    }
  }

  useEffect(() => {
    changeSvg();
  }, [currentTarget])

  return (
    <div className='skill-detail'>
      <div className='container fluid'>
        <div className='color-icon-background' dangerouslySetInnerHTML={{ __html: svg }}></div>
        <div className='row'>
          <div className='col-5 col-m-4 pl-none'>
            <ul className='skill-common'>
              <li onClick={changeList} data-list='language'>언어</li>
              <li onClick={changeList} data-list='lib'>프레임워크&라이브러리</li>
              <li onClick={changeList} data-list='tool'>개발 도구</li>
              <li onClick={changeList} data-list='interest'>최근 관심 기술</li>
            </ul>

            <ul className='skill-list'>
              {
                {
                  language: (
                    <>
                      {language.map(language => (
                        <li key={language.number} className={`${defaultTarget && language.number === '01' ? 'active' : ''}${language.id === currentTarget ? 'active' : ''}`} data-target={language.id} onMouseOver={changeTarget}><span>{language.number}</span>{language.name}</li>
                      ))
                      }
                    </>
                  ),
                  lib: (
                    <>
                      {lib.map(lib => (
                        <li key={lib.number} className={`${defaultTarget && lib.number === '01' ? 'active' : ''}${lib.id === currentTarget ? 'active' : ''}`} data-target={lib.id} onMouseOver={changeTarget}><span>{lib.number}</span>{lib.name}</li>
                      ))
                      }
                    </>
                  ),
                  tool: (
                    <>
                      {tool.map(tool => (
                        <li key={tool.number} className={`${defaultTarget && tool.number === '01' ? 'active' : ''}${tool.id === currentTarget ? 'active' : ''}`} data-target={tool.id} onMouseOver={changeTarget}><span>{tool.number}</span>{tool.name}</li>
                      ))
                      }
                    </>
                  ),
                  interest: (
                    <>
                      {interest.map(interest => (
                        <li key={interest.number} className={`${defaultTarget && interest.number === '01' ? 'active' : ''}${interest.id === currentTarget ? 'active' : ''}`} data-target={interest.id} onMouseOver={changeTarget}><span>{interest.number}</span>{interest.name}</li>
                      ))
                      }
                    </>
                  )
                }[currentList]
              }
            </ul>
          </div>

          <div className='d-none d-m-block col-m-4'>
            <div className='null-area'></div>
          </div>

          <div className='col-7 col-m-4 pr-none'>
            <div className='skill-detail-content'>
              {
                {
                  language: (
                    <>
                      {language.map(language => (
                        <p key={language.number} className={`${defaultTarget && language.number === '01' ? 'active' : ''}${language.id === currentTarget ? 'active' : ''}`}>{language.summary}</p>
                      ))
                      }
                    </>
                  ),
                  lib: (
                    <>
                      {lib.map(lib => (
                        <p key={lib.number} className={`${defaultTarget && lib.number === '01' ? 'active' : ''}${lib.id === currentTarget ? 'active' : ''}`}>{lib.summary}</p>
                      ))
                      }
                    </>
                  ),
                  tool: (
                    <>
                      {tool.map(tool => (
                        <p key={tool.number} className={`${defaultTarget && tool.number === '01' ? 'active' : ''}${tool.id === currentTarget ? 'active' : ''}`}>{tool.summary}</p>
                      ))
                      }
                    </>
                  ),
                  interest: (
                    <>
                      {interest.map(interest => (
                        <p key={interest.number} className={`${defaultTarget && interest.number === '01' ? 'active' : ''}${interest.id === currentTarget ? 'active' : ''}`}>{interest.summary}</p>
                      ))
                      }
                    </>
                  )
                }[currentList]
              }
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default SkillDetailComponent;
