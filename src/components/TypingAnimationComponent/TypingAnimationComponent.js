import React, { useState, useEffect } from 'react';
import './TypingAnimationComponent.scss';

const TypingAnimationComponent = ({ children, language }) => {
  // const [currentLanguage, setCurrentLanguage] = useState(language)
  const [sampleText, setSampleText] = useState(children[0])
  const [targetText, setTargetText] = useState()
  let sampleTextLength = 0;

  useEffect(() => {
    // console.log('language 값이 설정됨');
    // console.log("language = " + language)
    // console.log("currentLanguage = " + currentLanguage)
    setSampleText(children[0])
    // setCurrentLanguage(language)
    typingAnimation();
    // return () => {
    //   console.log('language 가 바뀌기 전..');
    //   console.log("language = " + language)
    //   console.log("currentLanguage = " + currentLanguage)
    //   setSampleText(children[0])
    //   setCurrentLanguage(language)
    //   typingAnimation();
    // };
  }, [language]);


  const typingAnimation = () => {
    setTargetText(sampleText.substring(0, sampleTextLength++));
    if (sampleTextLength < sampleText.length + 1) {
      setTimeout(() => {
        typingAnimation();
      }, 50)
    }
  }

  return (
    // <>{sampleText}</>
    <>{targetText}</>
  )
}

export default TypingAnimationComponent;