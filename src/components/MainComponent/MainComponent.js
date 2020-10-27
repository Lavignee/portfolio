import React from 'react';
import { Trans, withTranslation } from 'react-i18next';
import { useSelector } from 'react-redux';
import './MainComponent.scss';
import TypingAnimationComponent from '../TypingAnimationComponent';

const MainComponent = () => {
  const { language } = useSelector(state => ({
    language: state.LanguageModule.language
  }));

  return (
    <section className='container main'>
      <div className='main-text-frame'>
        <span>FRONT - END</span><span>DEVELOPER</span>
        {/* TODO: 번역텍스트 받아서 동작하는 애니메이션 완성 */}
        {/* <p><Trans i18nKey='greeting'><TypingAnimationComponent language={language}></TypingAnimationComponent></Trans></p> */}
        <p><Trans i18nKey='greeting2'></Trans></p>
      </div>
    </section>
  )
}

export default withTranslation("translations")(MainComponent);
