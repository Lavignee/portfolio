import React from 'react';
import './customButton.scss';

const CustomButton = ({ type, text, align, design }) => {
  return (
    <div className={`button-frame${design ? ` ${design}` : ' default'}${align ? ` ${align}` : 'left'}`}>
      <button type={type ? type : 'button'}>{text}</button>
    </div>
  )
}

export default CustomButton;