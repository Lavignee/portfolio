import React from 'react';
import { Link } from 'react-router-dom';
import NavMenuComponent from '../NavMenuComponent';
import LanguageSelectorsComponent from '../languageSelectorsComponent';
import './HeaderComponent.scss';

const HeaderComponent = () => {
  return (
    <header>
      <section className='container between'>
        <Link to="/">HOME</Link>
        <div className='right-area'>
          <LanguageSelectorsComponent />
          <NavMenuComponent />
        </div>
      </section>
    </header>
  );
}

export default HeaderComponent;
