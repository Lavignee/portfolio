import React from 'react';
import { Link } from 'react-router-dom';
import NavMenu from '../components/NavMenu';
import LanguageSelectors from '../components/LanguageSelectors';

function Header() {
  return (
    <header>
      <Link to="/">좌측 최상단 홈텍스트?</Link>
      <hr />
      <NavMenu />
      <hr />
      <LanguageSelectors />
    </header>
  );
}

export default Header;
