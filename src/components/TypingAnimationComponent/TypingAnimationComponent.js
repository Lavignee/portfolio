import React, { useState, useEffect } from 'react';
import './TypingAnimationComponent.scss';

const TypingAnimationComponent = ({ children, language }) => {
  const [sampleText, setSampleText] = useState(children[0])
  const [targetText, setTargetText] = useState()
  let sampleTextLength = 0;

  const typingAnimation = () => {
    setSampleText(children[0])
    setTargetText(sampleText.substring(0, sampleTextLength++));
    if (sampleTextLength < sampleText.length + 1) {
      setTimeout(() => {
        typingAnimation();
      }, 50)
    }
  }

  useEffect(() => {
    typingAnimation();
  }, [language]);

  return (
    // <>{sampleText}</>
    <>{targetText}</>
  )
}

export default TypingAnimationComponent;