import React, { useRef } from 'react';
import { gsap } from "gsap";
import CustomCursorComponent from '../Components/CustomCursorComponent';

const CustomCursorAreaContainer = ({ children }) => {
  const cursorRef = useRef(null);
  const cursorInfoRef = useRef(null);

  function moveCircle(e) {
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

  return (
    <CustomCursorComponent
      moveCircle={moveCircle}
      cursorRef={cursorRef}
      cursorInfoRef={cursorInfoRef}
    >
      {children}
    </CustomCursorComponent >
  )
}

export default CustomCursorAreaContainer;