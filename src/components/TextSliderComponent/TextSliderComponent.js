import React, { useEffect } from 'react';
import { gsap } from 'gsap';
import './TextSliderComponent.scss';

const TextSliderComponent = ({ text, type }) => {
  const textSliderSetting = () => {
    gsap.set('.text-content-frame', {
      x: (i) => i * 100 + '%'
    });

    gsap.to('.left-content', {
      duration: 130,
      ease: 'none',
      x: '+=400' + '%',
      modifiers: {
        x: gsap.utils.unitize(x => parseFloat(x) % 400)
      },
      repeat: -1
    });

    gsap.to('.right-content', {
      duration: 130,
      ease: 'none',
      x: '+=400' + '%',
      modifiers: {
        x: gsap.utils.unitize(x => parseFloat(x) % 400)
      },
      repeat: -1
    });
  }

  useEffect(() => {
    textSliderSetting();
    return () => textSliderSetting();
  }, [])

  const typeLeft = <div className='text-slider'>
    <div className='text-content-frame left-content'>
      <div className='content'>{text}</div>
    </div>
    <div className='text-content-frame left-content'>
      <div className='content'>{text}</div>
    </div>
    <div className='text-content-frame left-content'>
      <div className='content'>{text}</div>
    </div>
    <div className='text-content-frame left-content'>
      <div className='content'>{text}</div>
    </div>
  </div>

  const typeLeft2 = <div className='text-slider second-line'>
    <div className='text-content-frame left-content'>
      <div className='content'>{text}</div>
    </div>
    <div className='text-content-frame left-content'>
      <div className='content'>{text}</div>
    </div>
    <div className='text-content-frame left-content'>
      <div className='content'>{text}</div>
    </div>
    <div className='text-content-frame left-content'>
      <div className='content'>{text}</div>
    </div>
  </div>

  const typeRight = <div className='text-slider'>
    <div className='text-content-frame right-content'>
      <div className='content'>{text}</div>
    </div>
    <div className='text-content-frame right-content'>
      <div className='content'>{text}</div>
    </div>
    <div className='text-content-frame right-content'>
      <div className='content'>{text}</div>
    </div>
    <div className='text-content-frame right-content'>
      <div className='content'>{text}</div>
    </div>
  </div>

  const typeRight2 = <div className='text-slider second-line'>
    <div className='text-content-frame right-content'>
      <div className='content'>{text}</div>
    </div>
    <div className='text-content-frame right-content'>
      <div className='content'>{text}</div>
    </div>
    <div className='text-content-frame right-content'>
      <div className='content'>{text}</div>
    </div>
    <div className='text-content-frame right-content'>
      <div className='content'>{text}</div>
    </div>
  </div>

  return (
    type === 'left' ? (
      <div className={`text-slider-frame ${type}`} >
        <div className='rotate-frame'>
          {typeLeft}
          {typeLeft2}
          {typeLeft}
          {typeLeft2}
          {typeLeft}
          {typeLeft2}
          {typeLeft}
          {typeLeft2}
          {typeLeft}
          {typeLeft2}
          {typeLeft}
          {typeLeft2}
          {typeLeft}
          {typeLeft2}
          {typeLeft}
          {typeLeft2}
          {typeLeft}
          {typeLeft2}
          {typeLeft}
          {typeLeft2}
        </div>
      </div >
    ) : (
        <div className={`text-slider-frame ${type}`}>
          <div className='rotate-frame'>
            {typeRight}
            {typeRight2}
            {typeRight}
            {typeRight2}
            {typeRight}
            {typeRight2}
            {typeRight}
            {typeRight2}
            {typeRight}
            {typeRight2}
            {typeRight}
            {typeRight2}
            {typeRight}
            {typeRight2}
            {typeRight}
            {typeRight2}
            {typeRight}
            {typeRight2}
            {typeRight}
            {typeRight2}
          </div>
        </div>
      )
  )
}

export default TextSliderComponent;