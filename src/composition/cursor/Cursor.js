import React, { forwardRef } from 'react';
import './Cursor.scss';

const Cursor = (props, ref) => (
  <div className={props.className} ref={ref}>
    {props.children}
  </div >
)

export default forwardRef(Cursor);
