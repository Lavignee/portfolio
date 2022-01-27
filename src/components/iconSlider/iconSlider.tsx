import React from 'react';
import { gsap } from 'gsap';

import svg from '../../static/images/icon-svg.json';

import './iconSlider.scss';

const IconSlider = ({ sliderTrigger }: { sliderTrigger: boolean }) => {
  const [willChange, setWillChange] = React.useState(sliderTrigger);
  const [row, setRow] = React.useState('');
  const SliderRef = React.useRef<any | null>(null);

  let svgs = Object.values(svg);

  // 아이콘 슬라이더 생성.
  const SiliderTemplate = ({ line }: { line: number }) => {
    // 중복된 아이콘은 제외한 랜덤 배열 생성.
    const randomNumber = () => {
      let result: number[] = [];
      while (result.length < 10) {
        const min = Math.ceil(0);
        const max = Math.floor(svgs.length);
        let number = Math.floor(Math.random() * (max - min)) + min;
        if (!result.includes(number)) {
          result.push(number);
        }
      }
      return result;
    }

    let template = <div className={`icon-slider ${row}${line % 2 !== 0 ? ' reverse' : ''}`}>
      {randomNumber().map((item, idx) => {
        return (
          <div key={line + idx} className={`icon-content-frame${willChange ? ' will-change' : ''}`}><div className='content' dangerouslySetInnerHTML={{ __html: svgs[item] }}></div></div>
        )
      })}
    </div>

    return template;
  }

  // 애니메이션 생성
  const startAnimation = React.useCallback((willChange: boolean) => {
    gsap.set('.icon-content-frame', {
      x: (i) => i * 100 + '%',
    });

    SliderRef.current = gsap.to('.icon-content-frame', {
      id: 'slider-animation',
      duration: 80,
      ease: 'none',
      x: '+=1000%',
      modifiers: {
        x: gsap.utils.unitize((x) => parseFloat(x) % 1000),
      },
      repeat: -1,
    });

    // state에 따라 동작 또는 정지.
    if (willChange) {
      SliderRef.current.play();
    } else {
      SliderRef.current.pause();
    }
  }, [])

  // 높이값이 특정 구간에 들어올 시 슬라이더의 크기 및 간격을 조정.
  const autoHeightContent = React.useCallback(() => {
    if (window.innerHeight < 739.2) {
      setRow('four');
    } else if (window.innerHeight < 950.4) {
      setRow('five');
    } else if (window.innerHeight < 1161.16) {
      setRow('six');
    } else if (window.innerHeight < 1372.8) {
      setRow('seven');
    } else if (window.innerHeight < 1584) {
      setRow('eight');
    } else if (window.innerHeight < 1795.2) {
      setRow('nine');
    } else if (window.innerHeight < 2006.4) {
      setRow('ten');
    }
  }, []);

  // 높이값이 특정 구간에 들어올 시 기존 슬라이더들 제거 및 높이값에 맞는 슬라이드를 생성하여 동작.
  React.useEffect(() => {
    SliderRef.current?.kill();
    startAnimation(willChange);
  }, [row, startAnimation, willChange]);


  // 아이콘 슬라이더가 화면에 보이는지 여부에 따라 애니메이션 동작 변경.
  React.useEffect(() => {
    if (sliderTrigger) {
      setWillChange(true);
    }

    return () => setWillChange(false);
  }, [sliderTrigger]);

  // 최초 랜더시
  React.useEffect(() => {
    // 높이값 측정하여 슬라이더의 크기 및 간격 조정.
    autoHeightContent();

    // 화면의 크기가 변경되면 설정구간을 체크.
    window.addEventListener('resize', autoHeightContent);

    // 화면 벗어날 시, 슬라이더들 삭제 및 이벤트리스터 삭제.
    return () => {
      SliderRef.current?.kill();
      window.removeEventListener('resize', autoHeightContent);
    }
  }, [autoHeightContent, startAnimation, startAnimation, willChange]);

  return (
    <>
      {<SiliderTemplate line={0} />}
      {<SiliderTemplate line={1} />}
      {<SiliderTemplate line={2} />}
      {<SiliderTemplate line={3} />}
      {window.innerHeight > 739.2 && <SiliderTemplate line={4} />}
      {window.innerHeight > 950.4 && <SiliderTemplate line={5} />}
      {window.innerHeight > 1161.16 && <SiliderTemplate line={6} />}
      {window.innerHeight > 1372.8 && <SiliderTemplate line={7} />}
      {window.innerHeight > 1584 && <SiliderTemplate line={8} />}
      {window.innerHeight > 1795.2 && <SiliderTemplate line={9} />}
      {window.innerHeight > 2006.4 && <SiliderTemplate line={10} />}
      {window.innerHeight > 2217.6 && <SiliderTemplate line={11} />}
    </>
  );
};

export default IconSlider;
