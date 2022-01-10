import React, { useState, useEffect, useCallback } from 'react';
import { gsap } from 'gsap';

import svg from '../../static/images/icon-svg.json';

import './iconSlider.scss';

import useWindowSize from '../../utils/useWindowSize';

const Iconslider = ({ sliderTrigger }) => {
  const { height } = useWindowSize();
  const [willChange, setWillChange] = useState(false);
  const [row, setRow] = useState('');

  // const allIcons = [svg.bitbucket, svg.bootstrap, svg.css, svg.figma, svg.gatsby, svg.git, svg.github, svg.graphql, svg.gsap, svg.html, svg.i18next, svg.javascript, svg.jira, svg.jquery, svg.materialui, svg.mobx, svg.netlify, svg.nextjs, svg.parcel, svg.react, svg.redux, svg.sass, svg.sourcetree, svg.typescript, svg.webgl, svg.webpack, svg.zeplin, svg.lighthouse]
  const wellIcons = [
    svg.bitbucket,
    svg.bootstrap,
    svg.css,
    svg.figma,
    svg.lighthouse,
    svg.github,
    svg.gsap,
    svg.html,
    svg.i18next,
    svg.javascript,
  ];
  const wellIcons2 = [
    svg.jira,
    svg.jquery,
    svg.materialui,
    svg.parcel,
    svg.react,
    svg.redux,
    svg.sass,
    svg.sourcetree,
    svg.webpack,
    svg.zeplin,
  ];
  const wellIcons3 = [
    svg.javascript,
    svg.i18next,
    svg.html,
    svg.gsap,
    svg.github,
    svg.lighthouse,
    svg.figma,
    svg.css,
    svg.bootstrap,
    svg.bitbucket,
  ];
  const wellIcons4 = [
    svg.zeplin,
    svg.webpack,
    svg.sourcetree,
    svg.sass,
    svg.redux,
    svg.react,
    svg.parcel,
    svg.materialui,
    svg.jquery,
    svg.jira,
  ];
  // const bedIcons = [svg.gatsby, svg.graphql, svg.mobx, svg.netlify, svg.nextjs, svg.typescript, svg.webgl]

  const defaultSlider = (
    <div className={`icon-slider ${row}`}>
      {wellIcons.map((wellIcons) => (
        <div
          key={wellIcons}
          className={`icon-content-frame${willChange ? ' will-change' : ''}`}>
          <div
            className='content'
            dangerouslySetInnerHTML={{ __html: wellIcons }}></div>
        </div>
      ))}
    </div>
  );
  const reverseSlider = (
    <div className={`icon-slider ${row} reverse`}>
      {wellIcons2.map((wellIcons2) => (
        <div
          key={wellIcons2}
          className={`icon-content-frame${willChange ? ' will-change' : ''}`}>
          <div
            className='content'
            dangerouslySetInnerHTML={{ __html: wellIcons2 }}></div>
        </div>
      ))}
    </div>
  );
  const defaultSlider2 = (
    <div className={`icon-slider ${row}`}>
      {wellIcons3.map((wellIcons) => (
        <div
          key={wellIcons}
          className={`icon-content-frame${willChange ? ' will-change' : ''}`}>
          <div
            className='content'
            dangerouslySetInnerHTML={{ __html: wellIcons }}></div>
        </div>
      ))}
    </div>
  );
  const reverseSlider2 = (
    <div className={`icon-slider ${row} reverse`}>
      {wellIcons4.map((wellIcons2) => (
        <div
          key={wellIcons2}
          className={`icon-content-frame${willChange ? ' will-change' : ''}`}>
          <div
            className='content'
            dangerouslySetInnerHTML={{ __html: wellIcons2 }}></div>
        </div>
      ))}
    </div>
  );

  const autoHeightContent = useCallback(() => {
    if (height < 739.2) {
      setRow('four');
    } else if (height < 950.4) {
      setRow('five');
    } else if (height < 1161.16) {
      setRow('six');
    } else if (height < 1372.8) {
      setRow('seven');
    } else if (height < 1584) {
      setRow('eight');
    } else if (height < 1795.2) {
      setRow('nine');
    } else if (height < 2006.4) {
      setRow('ten');
    }
  }, [height]);

  useEffect(() => {
    autoHeightContent();
  }, [autoHeightContent, height]);

  useEffect(() => {
    if (sliderTrigger) {
      setWillChange(true);
    }

    return () => setWillChange(false);
  }, [sliderTrigger]);

  let sliderAnimation;
  const startAnimation = (willChange: boolean) => {
    gsap.set('.icon-content-frame', {
      x: (i) => i * 100 + '%',
    });

    sliderAnimation = gsap.to('.icon-content-frame', {
      id: 'slider-animation',
      duration: 80,
      ease: 'none',
      x: '+=1000' + '%',
      modifiers: {
        x: gsap.utils.unitize((x) => parseFloat(x) % 1000),
      },
      repeat: -1,
    });
    sliderAnimation.pause();

    if (willChange) {
      sliderAnimation.play();
    }
  }

  const stopAnimation = () => {
    sliderAnimation.kill();
  }

  useEffect(() => {
    startAnimation(willChange);

    return () => stopAnimation();
  }, [willChange]);

  return (
    <>
      {defaultSlider}
      {reverseSlider}
      {defaultSlider2}
      {reverseSlider2}
      {defaultSlider}
      {height > 739.2 && reverseSlider}
      {height > 950.4 && defaultSlider2}
      {height > 1161.16 && reverseSlider2}
      {height > 1372.8 && defaultSlider}
      {height > 1584 && reverseSlider}
      {height > 1795.2 && defaultSlider2}
      {height > 2006.4 && reverseSlider2}
      {height > 2217.6 && defaultSlider}
    </>
  );
};

export default Iconslider;
