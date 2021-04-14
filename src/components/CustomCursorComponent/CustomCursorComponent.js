import React, { useRef } from 'react';
import './CustomCursorComponent.scss';
import { useDispatch, useSelector, shallowEqual } from 'react-redux';
import { changeSecondClassName } from '../../Modules/CursorModule';
import { isDesktop } from 'react-device-detect';
import { gsap } from "gsap";

const CustomCursorComponent = ({ children }) => {
  const dispatch = useDispatch();
  const cursorSecondClass = (secondClassName) => dispatch(changeSecondClassName(secondClassName));

  const [className, secondClassName, text] = useSelector(state => [state.CursorModule.className, state.CursorModule.secondClassName, state.CursorModule.text], shallowEqual);
  const [language] = useSelector(state => [state.CommonValueModule.language], shallowEqual);

  const cursorRef = useRef();
  const cursorInfoRef = useRef();

  const moveCircle = (e) => {
    gsap.to(cursorRef.current, 0, {
      css: {
        left: e.pageX,
        top: e.pageY
      }
    });

    gsap.to(cursorInfoRef.current, 0.3, {
      css: {
        left: e.pageX,
        top: e.pageY
      }
    });
  }

  const onMouseDown = () => {
    cursorSecondClass(' down-cursor')
  }
  const onMouseUp = () => {
    cursorSecondClass('')
  }

  return (
    <div className={language} onMouseMove={(e) => moveCircle(e)} onMouseDown={onMouseDown} onMouseUp={onMouseUp}>
      {children}
      <div className='cursor-area'>
        <div className={`custom-cursor-back${className}${secondClassName}${isDesktop ? '' : ' hide'}`} ref={cursorInfoRef}></div>
        <div className={`custom-cursor-info${className}${secondClassName}${isDesktop ? '' : ' hide'}`} ref={cursorRef}><span>{text}</span></div>
      </div>
    </div >
  )
}

export default CustomCursorComponent;