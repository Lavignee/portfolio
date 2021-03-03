import React from 'react';
import { useSelector } from 'react-redux';
import CustomCursorComposition from '../../Compositions/CustomCursorComposition';
import './CustomCursorComponent.scss';

const CustomCursorComponent = ({ children, moveCircle, cursorInfoRef, cursorRef }) => {
  const { text } = useSelector(state => ({
    text: state.CursorModule.text
  }));
  const { language } = useSelector(state => ({
    language: state.LanguageModule.language
  }));

  return (
    <div className={`${language}`} onMouseMove={(e) => moveCircle(e)}>
      {children}
      <div className='cursor-area'>
        <CustomCursorComposition className='custom-cursor-info' ref={cursorInfoRef} >{text}</CustomCursorComposition>
        <CustomCursorComposition className='custom-cursor-default' ref={cursorRef} />
      </div>
    </div >
  )
}

export default CustomCursorComponent;