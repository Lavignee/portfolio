import { gsap } from 'gsap';
import { type JSX, useEffect, useRef } from 'react';

import './textSlider.scss';

// Props로 받는 값에 대한 interface 정의.
interface TextSliderProps {
  text: string;
  type: string;
}

const TextSlider = ({ text, type }: TextSliderProps) => {
  const rootRef = useRef<HTMLDivElement>(null);
  const tweenRef = useRef<gsap.core.Tween | null>(null);

  const textSliderSetting = (text: string, align: string) => {
    let setting: JSX.Element[] = [];
    let settingFrame: JSX.Element[] = [];
    let l = 0;
    if (type === 'left') {
      l = 5;
    } else {
      l = 3;
    }
    for (let i = 0; i < l; i++) {
      setting = [
        ...setting,
        <div
          key={i}
          className={`text-content-frame${align === 'left' ? ' left-content' : ' right-content'}`}
        >
          <div className='content'>{text}</div>
        </div>,
      ];
    }
    for (let i = 0; i < 11; i++) {
      settingFrame = [
        ...settingFrame,
        <div key={i} className={`text-slider${i % 2 === 0 ? '' : ' second-line'}`}>
          {setting}
        </div>,
      ];
    }
    return settingFrame;
  };

  useEffect(() => {
    if (!rootRef.current) return;
    const isLeft = type === 'left';

    // 셀렉터를 이 인스턴스 서브트리로 한정한다.
    // 과거엔 전역 셀렉터(.left-content/.right-content)로 두 인스턴스가 서로의 노드에 중복 트윈을 생성했다.
    const ctx = gsap.context(() => {
      gsap.set('.text-content-frame', {
        x: (i) => `${i * 100}%`,
      });
      tweenRef.current = gsap.to('.text-content-frame', {
        duration: isLeft ? 70 : 130,
        ease: 'none',
        x: isLeft ? '+=500%' : '+=300%',
        modifiers: {
          x: gsap.utils.unitize((x) => parseFloat(x) % (isLeft ? 500 : 300)),
        },
        repeat: -1,
        paused: true,
      });
    }, rootRef.current);

    // 화면 밖이면 정지 — 보이지 않는 동안 무한 트윈 재계산/합성 비용 제거(ease:none이라 재개 시 점프 없음).
    const io = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          tweenRef.current?.play();
        } else {
          tweenRef.current?.pause();
        }
      },
      { rootMargin: '200px' }
    );
    io.observe(rootRef.current);

    return () => {
      io.disconnect();
      ctx.revert();
    };
  }, [type]);

  return (
    <div ref={rootRef} className={`text-slider-frame ${type}`}>
      <div className='rotate-frame'>{textSliderSetting(text, type)}</div>
    </div>
  );
};

export default TextSlider;
