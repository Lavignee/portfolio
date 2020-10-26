import React from 'react';
import { Trans, withTranslation } from 'react-i18next';
import './MainComponent.scss';

const MainComponent = () => {
  return (
    <section className='container main'>
      <div className='main-text-frame'>
        <span>FRONT - END</span><span>DEVELOPER</span>
        <p><Trans i18nKey='greeting'>2016 년부터 프론트 엔드 개발과 <br />기획 업무를 병행해온 4년 차 개발자 <br />"이도영" 입니다.</Trans></p>
      </div>
    </section>
  )
}

export default withTranslation("translations")(MainComponent);
