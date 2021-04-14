import React from 'react';
import './CustomTextareaComposition.scss';

const CustomTextareaComposition = ({ placeholder, design, label }) => {
  return (
    <div className={`textarea-frame${design ? ` ${design}` : ' default'}`}>
      <textarea placeholder={placeholder} label={label}></textarea>
    </div>
  )
}

export default CustomTextareaComposition;