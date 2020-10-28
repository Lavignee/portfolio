import React from 'react';
// import { NavLink } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { changeText } from '../../Modules/CursorModule';
import './NavmenuComponent.scss';

const menus = [
  {
    id: 1,
    text: 'About',
    path: '/about',
  },
  {
    id: 2,
    text: 'Skill',
    path: '/skill',
  },
  {
    id: 3,
    text: 'Footprint',
    path: '/footprint',
  },
]

const NavmenuComponent = () => {
  const dispatch = useDispatch();
  const onChangeText = () => dispatch(changeText('Menu Click!'));
  const onChangeNull = () => dispatch(changeText(null));

  const onHover = e => {
    onChangeText();
  };

  const onLeave = e => {
    onChangeNull();
  };

  return (
    <nav>
      <span onMouseEnter={onHover} onMouseLeave={onLeave}>아이콘</span>
      {/* <div>
        {menus.map(menus => (
          <NavLink key={menus.id} to={menus.path} activeClassName="current">{menus.text}</NavLink>
          // 분할후 메뉴등장?, 원형드래그로 등장?
        ))
        }
      </div> */}
    </nav>
  )
}

export default NavmenuComponent;
