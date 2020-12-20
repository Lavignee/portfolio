import React, { useEffect } from 'react';
import LanguageSelectorsComponent from '../languageSelectorsComponent';
import { HashLink } from 'react-router-hash-link';
import { gsap } from "gsap";
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import logo from '../../Static/images/logo.svg';
import menuIcon from '../../Static/images/menu.svg';
import './NavmenuComponent.scss';

gsap.registerPlugin(ScrollTrigger);

const menus = [
  {
    id: 1,
    text: 'ABOUT',
    path: '/#about',
  },
  {
    id: 2,
    text: 'SKILL',
    path: '/#skill',
  },
  {
    id: 3,
    text: 'FOOTPRINT',
    path: '/#footprint',
  },
]

const NavmenuComponent = ({ gnbToggle, onHover, onLeave, currentGnbState }) => {
  const reactRoot = document.getElementById('root')
  const scrollWidthOffset = (el) => {
    if (el.getAttributeNode('id').value === 'skill' && el.getBoundingClientRect().top < 0) {
      const yCoordinate = reactRoot.scrollTop - el.getBoundingClientRect().height;
      // 간격 조정 필요한 경우 값 추가
      const yOffset = 0;
      reactRoot.scrollTo({ top: yCoordinate + yOffset, behavior: 'smooth' });
    } else {
      const yCoordinate = el.getBoundingClientRect().top + reactRoot.scrollTop;
      // 간격 조정 필요한 경우 값 추가
      const yOffset = 0;
      reactRoot.scrollTo({ top: yCoordinate + yOffset, behavior: 'smooth' });
    }
  }

  useEffect(() => {
    gsap.fromTo('.gnb-button', {
      rotate: 0
    }, {
      rotate: 360,
      scrollTrigger: {
        scroller: '#root',
        id: 'gnb-button',
        trigger: '.main-content',
        start: 'top center',
        end: 'bottom center',
        scrub: true,
      }
    });
  }, []);

  return (
    <>
      <HashLink to='/#main' scroll={el => scrollWidthOffset(el)}><img src={logo} alt="logo" /></HashLink>
      <div className='right-area'>
        <nav className='nav-button-frame'>
          {menus.map(menus => (
            <HashLink key={menus.id} to={menus.path} scroll={el => scrollWidthOffset(el)}>{menus.text}</HashLink>
          ))
          }
        </nav>
        <LanguageSelectorsComponent />
        <div className='gnb-button' onClick={gnbToggle} onMouseEnter={onHover} onMouseLeave={onLeave}><img src={menuIcon} alt="menu icon" /></div>
      </div>
    </>
  )
}

export default NavmenuComponent;
