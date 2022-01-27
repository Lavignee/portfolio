import React from 'react';
import { useDispatch, useSelector, shallowEqual } from 'react-redux';
import { changeSecondClassName } from '../../Modules/cursor';
import { isDesktop } from 'react-device-detect';
import { gsap } from 'gsap';

import './customCursor.scss';
import { RootState } from '../../Modules';

const CustomCursor = ({ children }: { children: any }) => {
  // redux dispatch 정의.
  const dispatch = useDispatch();
  const cursorSecondClass = React.useCallback((secondClassName) => dispatch(changeSecondClassName(secondClassName)), [dispatch]);

  // redux useSelector 정의.
  const [firstClassName, secondClassName, text, language] = useSelector((state: RootState) => [state.Cursor.firstClassName, state.Cursor.secondClassName, state.Cursor.text, state.CommonValue.language], shallowEqual);

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
            ref={cursorInfoRef}></div>
          <div
            className={`custom-cursor-info${firstClassName}${secondClassName}`}
            ref={cursorRef}>
            <span>{text}</span>
          </div>
        </div>
      )}
    </div>
  );
};

export default CustomCursor;
