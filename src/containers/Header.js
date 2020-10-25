import React from 'react';
import { Link } from 'react-router-dom';
import NavMenu from '../components/NavMenu';
import LanguageSelectors from '../components/LanguageSelectors';

function Header() {
  return (
    <header>
      <Link to="/">HOME</Link>
      <hr />
      <NavMenu />
      <hr />
      <LanguageSelectors />
    </header>
  );
}

export default Header;
