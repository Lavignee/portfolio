import React from 'react';
import './FooterComponent.scss';
// import LanguageSelectorsComponent from 'components/languageSelectorsComponent';

const FooterComponent = () => {
  return (
    <footer>
      <div className='container between relative'>
        {/* <LanguageSelectorsComponent /> */}
        <span>Copyright 2020. doyoung Lee. All rights reserved.</span>
      </div>
    </footer>
  );
}

export default FooterComponent;
