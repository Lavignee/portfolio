import React from 'react';
import { Trans, withTranslation } from 'react-i18next';
import { useSelector } from 'react-redux';
import CanvasVideo from '../../lib/CanvasVideo'
import src from '../../Static/videos/video.mp4'
import './MainComponent.scss';
// import VideoToCanvasComponent from '../VideoToCanvasComponent'
// import TypingAnimationComponent from '../TypingAnimationComponent';

const MainComponent = () => {
  const { language } = useSelector(state => ({
    language: state.LanguageModule.language
  }));

  return (
    <section className='container main'>
      {/* TODO: Hooks로 코드 더 간결하게 작성해보자. */}
      {/* <VideoToCanvasComponent src={src} /> */}
      <CanvasVideo src={src} target={'target1'} maskX={-10} maskY={0} resolX={1280} resolY={720} sizeX={500} sizeY={250} />
      <CanvasVideo src={src} target={'target2'} maskX={0} maskY={-200} resolX={1280} resolY={720} sizeX={800} sizeY={400} />
      <CanvasVideo src={src} target={'target3'} maskX={-200} maskY={-150} resolX={1280} resolY={720} sizeX={600} sizeY={300} />
      <CanvasVideo src={src} target={'target4'} maskX={-350} maskY={-100} resolX={1280} resolY={720} sizeX={700} sizeY={350} />
      {/* <CanvasVideo src={src} target={'target5'} maskX={-280} maskY={-100} resolX={1280} resolY={720} sizeX={800} sizeY={400} /> */}
      <CanvasVideo src={src} target={'target6'} maskX={0} maskY={-100} resolX={1280} resolY={720} sizeX={600} sizeY={300} />
      <CanvasVideo src={src} target={'target7'} maskX={0} maskY={0} resolX={1280} resolY={720} sizeX={300} sizeY={150} />
      <div className='main-text-frame'>
        <span>FRONT - END</span><span>DEVELOPER</span>
        {/* TODO: 번역텍스트 받아서 동작하는 애니메이션 보완 필요. */}
        {/* <p><Trans i18nKey='greeting'><TypingAnimationComponent language={language}></TypingAnimationComponent></Trans></p> */}
        <p><Trans i18nKey='greeting2'></Trans></p>
      </div>
    </section>
  )
}

export default withTranslation("translations")(MainComponent);
