import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { changeText } from '../../Modules/CursorModule';
import { changeContactState, changeContactStateFalse, changeGnbState, changeGnbDelay } from '../../Modules/CommonValueModule';
import { gsap } from "gsap";
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import NavMenuComponent from '../NavMenuComponent';
import menuCloseIcon from '../../Static/images/menu-close.svg';
import './HeaderComponent.scss';

gsap.registerPlugin(ScrollTrigger);

const HeaderComponent = () => {
  const dispatch = useDispatch();
  const onChangeText = () => dispatch(changeText('Menu Click!'));
  const onChangeNull = () => dispatch(changeText(null));
  const onChangeContactState = () => dispatch(changeContactState());
  const onChangeGnbDelay = (value) => dispatch(changeGnbDelay(value));
  const onChangeContactStateFalse = () => dispatch(changeContactStateFalse(false));
  const onChangeGnbState = () => dispatch(changeGnbState());
  const { currentGnbState } = useSelector(state => ({
    currentGnbState: state.CommonValueModule.currentGnbState
  }));
  const { currentGnbDelay } = useSelector(state => ({
    currentGnbDelay: state.CommonValueModule.currentGnbDelay
  }));

  const onHover = () => {
    onChangeText();
  };

  const onLeave = () => {
    onChangeNull();
  };

  const gnbToggle = () => {
    onChangeContactStateFalse();
    onChangeGnbState();
  };

  const gnbContact = () => {
    onChangeContactState();
    onChangeGnbState();
  }

  const gnbButtonDelay = () => {
    onChangeGnbDelay(true);
    setTimeout(() => {
      onChangeGnbDelay(false);
    }, 600)
  }

  useEffect(() => {
    gnbButtonDelay();
  }, [currentGnbState]);

  return (
    <>
      <header>
        <section className='container between'>
          <NavMenuComponent gnbToggle={gnbToggle} onHover={onHover} onLeave={onLeave} currentGnbState={currentGnbState} />
        </section>
      </header>

      <div className={`gnb-background${currentGnbState ? ' active' : ''}`}></div>

      <div className={`fixed-frame${currentGnbState ? ' view' : ''}`}>
        <div className='container gnb-container'>
          <div className={`gnb-close-button${currentGnbDelay ? ' delay' : ''}`} onClick={gnbToggle} onMouseEnter={onHover} onMouseLeave={onLeave}>
            <img src={menuCloseIcon} alt='menu close icon' />
          </div>
        </div>
      </div>

      <div className={`menu-frame${currentGnbState ? ' view' : ''}`}>
        <div className='menu-content'>
          <div className='first-content'>
            <li onClick={gnbToggle}><Link to="/">HOME</Link></li>
          </div>

          <div className='center-content'>
            <li onClick={gnbToggle}><Link to='/about'>ABOUT</Link></li>
            <li onClick={gnbToggle}><Link to="/skill/language">SKILL</Link></li>
            <li onClick={gnbToggle}><Link to="/footprint">FOOTPRINT</Link></li>
          </div>

          <div className='last-content'>
            <li onClick={gnbContact}>CONTACT</li>
          </div>
        </div>
      </div>
    </>
  );
}

export default HeaderComponent;
