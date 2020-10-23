import React from 'react';
import InnerLayout from '../composition/innerlayout';

const SkillDetail = ({ onToggle }) => {
  return (
    <InnerLayout className='inner-card'>
      <button onClick={onToggle}>뒤로가기</button>
      <div>언어</div>
      <ul>
        <li>HTML</li>
        <li>CSS</li>
        <li>Javascript</li>
      </ul>

      <div>프레임워크&라이브러리</div>
      <ul>
        <li>React</li>
        <li>Webpack</li>
        <li>Parcel</li>
        <li>Sass</li>
        <li>Node.js</li>
        <li>GSAP</li>
        <li>i18n</li>
        <li>Jquery</li>
        <li>Bootstrap</li>
        <li>Material-UI</li>
      </ul>

      <div>개발 도구</div>
      <ul>
        <li>git</li>
        <li>github</li>
        <li>bitbucket</li>
        <li>sourcetree</li>
        <li>jira</li>
        <li>figma</li>
        <li>zeplin</li>
      </ul>

      <div>최근 관심 기술</div>
      <ul>
        <li>redux</li>
        <li>mobx</li>
        <li>gatsby</li>
        <li>netlify</li>
        <li>graphql</li>
        <li>express</li>
        <li>webGL</li>
      </ul>
    </InnerLayout>
  )
}

export default SkillDetail;
