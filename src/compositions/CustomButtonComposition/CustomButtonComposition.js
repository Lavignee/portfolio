import React from 'react';
import './CustomButtonComposition.scss';

const CustomButtonComposition = ({ type, text, align, design }) => {
  return (
    <div className={`button-frame${design ? ` ${design}` : ' default'}${align ? ` ${align}` : 'left'}`}>
      <button type={type ? type : 'button'}>{text}</button>
    </div>
  )
}

export default CustomButtonComposition;