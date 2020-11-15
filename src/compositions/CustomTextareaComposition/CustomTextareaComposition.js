import React from 'react';
import './CustomTextareaComposition.scss';

const CustomTextareaComposition = ({ placeholder, design }) => {
  return (
    <div className={`textarea-frame${design ? ` ${design}` : ' default'}`}>
      <textarea placeholder={placeholder}></textarea>
    </div>
  )
}

export default CustomTextareaComposition;