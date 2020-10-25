import React from 'react';
import './Layout.scss';

const Layout = ({ children, className, ...rest }) => {
  return (
    <>
      <section className={className}>
        {children}
      </section >
    </>
  )
}

export default Layout;
