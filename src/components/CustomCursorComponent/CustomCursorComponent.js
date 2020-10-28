import React from 'react';
import { useSelector } from 'react-redux';
import CustomCursorComposition from '../../Compositions/CustomCursorComposition';
import './CustomCursorComponent.scss';

const CustomCursorComponent = ({ children, moveCircle, cursorInfoRef, cursorRef, headerRef }) => {
  const { text } = useSelector(state => ({
    text: state.CursorModule.text
  }));

  return (
    <main ref={headerRef} onMouseMove={(e) => moveCircle(e)}>
      {children}
      <CustomCursorComposition className='custom-cursor-info' ref={cursorInfoRef} >{text}</CustomCursorComposition>
      <CustomCursorComposition className='custom-cursor-default' ref={cursorRef} />
    </main >
  )
}

export default CustomCursorComponent;