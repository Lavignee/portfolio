import React from 'react';

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
    <div>
      아이콘
      <div>
        {menus.map(menus => (
          <div key={menus.id}>{menus.text}</div>
          // 분할후 메뉴등장?, 원형드래그로 등장?
        ))
        }
      </div>
    </div>
  )
}

export default NavMenu;