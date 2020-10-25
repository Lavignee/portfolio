import React from 'react';
import './InnerLayout.scss';

const InnerLayout = ({ children, className, ...rest }) => {
  return (
    <>
      <div className={className}>
        {children}
      </div >
    </>
  )
}

export default InnerLayout;
