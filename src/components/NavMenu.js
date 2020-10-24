import React from 'react';
import LanguageSelectors from '../components/LanguageSelectors';

const menus = [
  {
    id: 1,
    text: 'About',
    select: true
  },
  {
    id: 2,
    text: 'Skill',
    select: false
  },
  {
    id: 3,
    text: 'Footprint',
    select: false
  },
]

const NavMenu = () => {
  return (
    <nav>
      아이콘
      <div>
        {menus.map(menus => (
          <div key={menus.id}>{menus.text}</div>
          // 분할후 메뉴등장?, 원형드래그로 등장?
        ))
        }
        <LanguageSelectors />
      </div>
    </nav>
  )
}

export default NavMenu;
