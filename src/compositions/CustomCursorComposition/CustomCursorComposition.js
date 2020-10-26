import React, { forwardRef } from 'react';
import './CustomCursorComposition.scss';

const CustomCursorComposition = (props, ref) => (
  <div className={props.className} ref={ref}>
    {props.children}
  </div >
)

export default forwardRef(CustomCursorComposition);
