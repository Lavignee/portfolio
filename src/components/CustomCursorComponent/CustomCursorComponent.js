import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { changeSecondClassName } from '../../Modules/CursorModule';
import CustomCursorComposition from '../../Compositions/CustomCursorComposition';
import './CustomCursorComponent.scss';

const CustomCursorComponent = ({ children, moveCircle, cursorInfoRef, cursorRef }) => {
  const dispatch = useDispatch();
  const cursorSecondClass = (secondClassName) => dispatch(changeSecondClassName(secondClassName));

  const { className } = useSelector(state => ({
    className: state.CursorModule.className
  }));
  const { secondClassName } = useSelector(state => ({
    secondClassName: state.CursorModule.secondClassName
  }));
  const { text } = useSelector(state => ({
    text: state.CursorModule.text
  }));
  const { language } = useSelector(state => ({
    language: state.LanguageModule.language
  }));

  const onMouseDown = () => {
    cursorSecondClass(' down-cursor')
  }
  const onMouseUp = () => {
    cursorSecondClass('')
  }

  return (
    <div className={`${language}`} onMouseMove={(e) => moveCircle(e)} onMouseDown={onMouseDown} onMouseUp={onMouseUp}>
      {children}
      <div className='cursor-area'>
        <CustomCursorComposition className={`custom-cursor-back${className}${secondClassName}`} ref={cursorInfoRef} >
        </CustomCursorComposition>
        <CustomCursorComposition className={`custom-cursor-info${className}${secondClassName}`} ref={cursorRef} >
          <span>{text}</span>
        </CustomCursorComposition>
      </div>
    </div >
  )
}

export default CustomCursorComponent;