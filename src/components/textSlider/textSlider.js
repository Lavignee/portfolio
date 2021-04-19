import React, { useEffect } from 'react';
import { gsap } from 'gsap';

import './textSlider.scss';

const TextSlider = ({ text, type }) => {
  const textSliderSetting = (text, align) => {
    let setting = [];
    let settingFrame = [];
    let l;
    if (type === 'left') {
      l = 5;
    } else {
      l = 3;
    }
    for (let i = 0; i < l; i++) {
      setting = [...setting, <div key={i} className={`text-content-frame${align === 'left' ? ' left-content' : ' right-content'}`}>
        <div className='content'>{text}</div>
      </div>];
    }
    for (let i = 0; i < 11; i++) {
      settingFrame = [...settingFrame, <div key={i} className={`text-slider${i % 2 == 0 ? '' : ' second-line'}`}>
        {setting}
      </div>];
    }
    return (
      settingFrame
    )
  }

  useEffect(() => {
    const set = gsap.set('.text-content-frame', {
      x: (i) => i * 100 + '%'
    });

    const leftAnimation = gsap.to('.left-content', {
      duration: 70,
      ease: 'none',
      x: '+=500' + '%',
      modifiers: {
        x: gsap.utils.unitize(x => parseFloat(x) % 500)
      },
      repeat: -1
    });

    const rightAnimation = gsap.to('.right-content', {
      duration: 130,
      ease: 'none',
      x: '+=300' + '%',
      modifiers: {
        x: gsap.utils.unitize(x => parseFloat(x) % 300)
      },
      repeat: -1
    });

    return () => {
      set.kill()
      leftAnimation.kill()
      rightAnimation.kill()
    }
  }, [])

  return (
    <div className={`text-slider-frame ${type}`} >
      <div className='rotate-frame'>
        {textSliderSetting(text, type)}
      </div>
    </div >
  )
}

export default TextSlider;