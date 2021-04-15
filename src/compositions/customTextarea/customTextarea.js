import React from 'react';
import './customTextarea.scss';

const CustomTextarea = ({ placeholder, design, label }) => {
  return (
    <div className={`textarea-frame${design ? ` ${design}` : ' default'}`}>
      <textarea placeholder={placeholder} label={label}></textarea>
    </div>
  )
}

export default CustomTextarea;