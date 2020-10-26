import React from 'react';
import CustomCursorComposition from '../../Compositions/CustomCursorComposition';
import { useSelector } from 'react-redux';
import './CustomCursorComponent.scss';

const CustomCursorComponent = ({ children, moveCircle, cursorInfoRef, cursorRef }) => {
  const { text } = useSelector(state => ({
    text: state.text
  }));

  return (
    <main onMouseMove={(e) => moveCircle(e)}>
      {children}
      <CustomCursorComposition className='custom-cursor-info' ref={cursorInfoRef} >{text}</CustomCursorComposition>
      <CustomCursorComposition className='custom-cursor-default' ref={cursorRef} />
    </main>
  )
}

export default CustomCursorComponent;