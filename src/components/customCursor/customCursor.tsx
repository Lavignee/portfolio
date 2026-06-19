import { gsap } from 'gsap';
import React from 'react';
import { isDesktop } from 'react-device-detect';
import { shallow } from 'zustand/shallow';

import './customCursor.scss';
import useStore from '../../store/useStore';

const CustomCursor = ({ children }: { children: React.ReactNode }) => {
  // 전역 스토어 액션.
  const cursorSecondClass = useStore((s) => s.changeSecondClassName);

  // 전역 스토어 구독.
  const [firstClassName, secondClassName, text, language] = useStore(
    (s) => [s.firstClassName, s.secondClassName, s.text, s.language],
    shallow
  );

  const cursorRef = React.useRef<HTMLDivElement | null>(null);
  const cursorInfoRef = React.useRef<HTMLDivElement | null>(null);

  // gsap로 마우스 애니메이션 동작.
  const moveCircle = (e: React.MouseEvent) => {
    if (isDesktop) {
      gsap.to(cursorRef?.current, {
        duration: 0,
        css: {
          left: e.pageX,
          top: e.pageY,
        },
      });

      gsap.to(cursorInfoRef?.current, {
        duration: 0.3,
        css: {
          left: e.pageX,
          top: e.pageY,
        },
      });
    }
  };

  // 마우스 다운 시 커서 형태 변경.
  const onMouseDown = () => {
    cursorSecondClass(' down-cursor');
  };

  // 마우스 업 시 커서 형태 초기화.
  const onMouseUp = () => {
    cursorSecondClass('');
  };

  return (
    <div
      className={language}
      onMouseMove={(e) => moveCircle(e)}
      onMouseDown={onMouseDown}
      onMouseUp={onMouseUp}
    >
      {/* 내부 컨텐츠 영역 */}
      {children}

      {/* 마우스 DOM */}
      {isDesktop && (
        <div className='cursor-area'>
          <div
            className={`custom-cursor-back${firstClassName}${secondClassName}`}
            ref={cursorInfoRef}
          ></div>
          <div className={`custom-cursor-info${firstClassName}${secondClassName}`} ref={cursorRef}>
            <span>{text}</span>
          </div>
        </div>
      )}
    </div>
  );
};

export default CustomCursor;
