import React from 'react';
import './CustomInputComposition.scss';

const CustomInputComposition = ({ type, placeholder, design }) => {
  return (
    <div className={`input-frame${design ? ` ${design}` : ' default'}`}>
      {/* <label className='input-label'>test</label> */}
      <input type={type} placeholder={placeholder} />
      {/* <span className='info-text'>test</span> */}
    </div>
  )
}

export default CustomInputComposition;