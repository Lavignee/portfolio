import React from 'react';
import { NavLink } from 'react-router-dom';

const menus = [
  {
    id: 1,
    text: 'About',
    path: '/about',
    select: true
  },
  {
    id: 2,
    text: 'Skill',
    path: '/skill',
    select: false
  },
  {
    id: 3,
    text: 'Footprint',
    path: '/footprint',
    select: false
  },
]

const NavMenu = () => {
  return (
    <nav>
      아이콘
      <div>
        {menus.map(menus => (
          <NavLink key={menus.id} to={menus.path} activeClassName="current">{menus.text}</NavLink>
          // 분할후 메뉴등장?, 원형드래그로 등장?
        ))
        }
      </div>
    </nav>
  )
}

export default NavMenu;
