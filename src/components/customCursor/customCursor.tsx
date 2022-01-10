import React, { useRef } from 'react';
import { useDispatch, useSelector, shallowEqual } from 'react-redux';
import { changeSecondClassName } from '../../Modules/cursor';
import { isDesktop } from 'react-device-detect';
import { gsap } from 'gsap';

import './customCursor.scss';
import { RootState } from '../../Modules';

const CustomCursor = ({ children }) => {
  const dispatch = useDispatch();
  const cursorSecondClass = (secondClassName) =>
    dispatch(changeSecondClassName(secondClassName));

  const [firstClassName, secondClassName, text] = useSelector(
    (state: RootState) => [
      state.Cursor.firstClassName,
      state.Cursor.secondClassName,
      state.Cursor.text,
    ],
    shallowEqual
  );
  const [language] = useSelector(
    (state: RootState) => [state.CommonValue.language],
    shallowEqual
  );

  const cursorRef = useRef();
  const cursorInfoRef = useRef();

  const moveCircle = (e) => {
    if (isDesktop) {
      gsap.to(cursorRef.current, 0, {
        css: {
          left: e.pageX,
          top: e.pageY,
        },
      });

      gsap.to(cursorInfoRef.current, 0.3, {
        css: {
          left: e.pageX,
          top: e.pageY,
        },
      });
    }
  };

  const onMouseDown = () => {
    cursorSecondClass(' down-cursor');
  };
  const onMouseUp = () => {
    cursorSecondClass('');
  };

  return (
    <div
      className={language}
      onMouseMove={(e) => moveCircle(e)}
      onMouseDown={onMouseDown}
      onMouseUp={onMouseUp}>
      {children}
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
