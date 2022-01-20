import React from 'react';
import './customButton.scss';

// Props로 받는 타입 및 문자열 interface 정의.
interface CustomButtonProps {
  type: "button" | "submit" | "reset" | undefined;
  text: string;
  align: string;
  design: string;
}

const CustomButton = ({ type, text, align, design }: CustomButtonProps) => {
  return (
    <div className={`button-frame${design ? ` ${design}` : ' default'}${align ? ` ${align}` : 'left'}`}>
      <button type={type ? type : 'button'}>{text}</button>
    </div>
  )
}

export default CustomButton;