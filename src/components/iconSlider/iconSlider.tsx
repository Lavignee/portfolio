import React from 'react';
import { gsap } from 'gsap';

import svg from '../../static/images/icon-svg.json';

import './iconSlider.scss';

import useWindowSize from '../../utils/useWindowSize';

const IconSlider = ({ sliderTrigger }: { sliderTrigger: boolean }) => {
  const { height } = useWindowSize();
  const [willChange, setWillChange] = React.useState(false);
  const [row, setRow] = React.useState('');
  const SliderRef = React.useRef<any | null>(null);

  let svgs = Object.values(svg)
  const randomNumber = () => {
    const min = Math.ceil(0);
    const max = Math.floor(svgs.length)
    return Math.floor(Math.random() * (max - min)) + min;
  }

  // TODO: 높이값과 상관 없이 현재 높이값 기준으로 꽉 차도록 개선 및 한 라인에 중복 이미지 개선 필요.
  const SiliderTemplate = ({ line }: { line: number }) => {
    let result: JSX.Element[] = [];
    for (let idx = 0; idx < 10; idx++) {
      result.push(<div key={line + idx} className={`icon-content-frame${willChange ? ' will-change' : ''}`}><div className='content' dangerouslySetInnerHTML={{ __html: svgs[randomNumber()] }}></div></div>)
    }
    let template = <div className={`icon-slider ${row}${line % 2 !== 0 ? ' reverse' : ''}`}>
      {result}
    </div>

    return template;
  }

  const autoHeightContent = React.useCallback(() => {
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

  React.useEffect(() => {
    autoHeightContent();
  }, [autoHeightContent, height]);

  React.useEffect(() => {
    if (sliderTrigger) {
      setWillChange(true);
    }

    return () => setWillChange(false);
  }, [sliderTrigger]);

  const startAnimation = React.useCallback((willChange: boolean) => {
    gsap.set('.icon-content-frame', {
      x: (i) => i * 100 + '%',
    });

    SliderRef.current = gsap.to('.icon-content-frame', {
      id: 'slider-animation',
      duration: 80,
      ease: 'none',
      x: '+=1000' + '%',
      modifiers: {
        x: gsap.utils.unitize((x) => parseFloat(x) % 1000),
      },
      repeat: -1,
    });
    SliderRef.current.pause();

    if (willChange) {
      SliderRef.current.play();
    }
  }, [])

  const stopAnimation = React.useCallback(() => {
    SliderRef.current.kill();
  }, [])

  React.useEffect(() => {
    startAnimation(willChange);

    return () => stopAnimation();
  }, [startAnimation, stopAnimation, willChange]);

  return (
    <>
      {<SiliderTemplate line={0} />}
      {<SiliderTemplate line={1} />}
      {<SiliderTemplate line={2} />}
      {<SiliderTemplate line={3} />}
      {height > 739.2 && <SiliderTemplate line={4} />}
      {height > 950.4 && <SiliderTemplate line={5} />}
      {height > 1161.16 && <SiliderTemplate line={6} />}
      {height > 1372.8 && <SiliderTemplate line={7} />}
      {height > 1584 && <SiliderTemplate line={8} />}
      {height > 1795.2 && <SiliderTemplate line={9} />}
      {height > 2006.4 && <SiliderTemplate line={10} />}
      {height > 2217.6 && <SiliderTemplate line={11} />}
    </>
  );
};

export default IconSlider;
