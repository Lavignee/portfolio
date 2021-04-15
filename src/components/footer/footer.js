import React from 'react';
import './footer.scss';
// import LanguageSelectors from 'components/languageSelectors';

const Footer = () => {
  return (
    <footer>
      <div className='container between relative'>
        {/* <LanguageSelectors /> */}
        <span>Copyright 2020. doyoung Lee. All rights reserved.</span>
      </div>
    </footer>
  );
}

export default Footer;
