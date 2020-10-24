import React from 'react';
import { Link } from 'react-router-dom';
import NavMenu from '../components/NavMenu';

function Header() {
  return (
    <header>
      <Link to="/">Home</Link>
      <NavMenu />
    </header>
  );
}

export default Header;
