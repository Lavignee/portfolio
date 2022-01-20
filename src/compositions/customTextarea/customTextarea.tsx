import React from 'react';
import './customTextarea.scss';

// Props로 받는 타입 및 문자열 interface 정의.
interface CustomTextareaProps {
  placeholder: string;
  label: string;
  design: string;
}

const CustomTextarea = ({ placeholder, label, design }: CustomTextareaProps) => {
  return (
    <div className={`textarea-frame${design ? ` ${design}` : ' default'}`}>
      <textarea placeholder={placeholder} defaultValue={label}></textarea>
    </div>
  )
}

export default CustomTextarea;