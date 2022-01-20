import React from 'react';
import './customInput.scss';

// Props로 받는 타입 및 문자열 interface 정의.
interface CustomInputProps {
  type: string;
  placeholder: string;
  label: string;
  design: string;
}

const CustomInput = ({ type, placeholder, label, design }: CustomInputProps) => {
  return (
    <div className={`input-frame${design ? ` ${design}` : ' default'}`}>
      {/* <label className='input-label'>test</label> */}
      <input type={type} placeholder={placeholder} defaultValue={label} />
      {/* <span className='info-text'>test</span> */}
    </div>
  )
}

export default CustomInput;