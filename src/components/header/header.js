import React, { useState } from 'react';
import { useDispatch, useSelector, shallowEqual } from 'react-redux';
import {
  changeContactState,
  changeContactStateFalse,
  changeGnbState,
  changeSmoothScrollStateFast,
} from '../../Modules/commonValue';
import { useLocation } from 'react-router-dom';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

import './header.scss';

import NavMenu from '../navMenu';

gsap.registerPlugin(ScrollTrigger);

const Header = ({ onHover, onClick, onLeave, pageTimer, scrollTop }) => {
  const dispatch = useDispatch();
  const onChangeContactState = () => dispatch(changeContactState());
  const onChangeContactStateFalse = () =>
    dispatch(changeContactStateFalse(false));
  const onChangeGnbState = () => dispatch(changeGnbState());
  const changecrollStateFast = (value) =>
    dispatch(changeSmoothScrollStateFast(value));
  const [currentContactState, currentGnbState] = useSelector(
    (state) => [
      state.CommonValue.currentContactState,
      state.CommonValue.currentGnbState,
    ],
    shallowEqual
  );

  let location = useLocation();
  const [blur, setBlur] = useState('');

  const onlogoHover = () => {
    location.pathname === '/'
      ? onHover(' bl-cursor', 'top?')
      : onHover(' bl-cursor', 'Home?');
  };

  const listClick = (path) => {
    onGnbListClick();

    if (location.pathname !== path) {
      changecrollStateFast(true);
      pageTimer(path, 100);
    }
  };

  const gnbButtonHover = () => {
    currentGnbState
      ? onHover(' wh-cursor', 'Close?')
      : onHover(' bl-cursor', 'Open?');
  };

  const gnbListHover = () => {
    onHover(' go-cursor');
    setBlur('blur');
  };

  const onHeaderLeave = () => {
    onLeave('');
    setBlur('');
  };

  const onGnbButtonClick = () => {
    onChangeContactStateFalse();
    onChangeGnbState();
    onHover(' wh-cursor', 'Close?');
  };

  const onGnbCloseButtonClick = () => {
    onChangeContactStateFalse();
    onChangeGnbState();
    onHover(' bl-cursor', 'Open?');
  };

  const onGnbListClick = () => {
    onChangeContactStateFalse();
    onChangeGnbState();
    onLeave('');
  };

  const gnbContact = () => {
    onChangeContactState();
    onLeave('');
  };

  return (
    <>
      <header>
        <section className='container relative between'>
          <NavMenu
            onlogoHover={onlogoHover}
            onClick={onClick}
            onGnbButtonClick={onGnbButtonClick}
            onGnbButtonHover={gnbButtonHover}
            onHeaderLeave={onHeaderLeave}
            scrollTop={scrollTop}
          />
        </section>
      </header>

      <div className='gnb-area'>
        <div
          className={`gnb-background${currentGnbState ? ' active' : ''}`}></div>

        <div className={`fixed-frame${currentGnbState ? ' view' : ''}`}>
          <div className='container relative gnb-container'>
            <div className='right-area'>
              <div
                className='gnb-close-button'
                onClick={onGnbCloseButtonClick}
                onMouseEnter={gnbButtonHover}
                onMouseLeave={onHeaderLeave}>
                <svg
                  className={`close-img${currentContactState ? ' invert' : ''}`}
                  width='133'
                  height='132'
                  viewBox='0 0 133 132'
                  fill='none'
                  xmlns='http://www.w3.org/2000/svg'>
                  <path
                    d='M58.5001 17.4C58.2001 17.6 57.9001 17.8 57.6001 17.9C57.3001 18.1 56.9001 18.2 56.6001 18.4C56.2001 18.5 55.8001 18.7 55.4001 18.8C54.5001 19 53.6001 19.2 52.8001 19.2C52.0001 19.2 51.2001 19.1 50.6001 18.8C49.9001 18.6 49.4001 18.2 48.9001 17.7C48.4001 17.2 48.1001 16.5 47.9001 15.7C47.7001 14.9 47.7001 14.2 47.8001 13.5C47.9001 12.8 48.3001 12.2 48.7001 11.7C49.2001 11.2 49.7001 10.7 50.5001 10.3C51.2001 9.89996 52.0001 9.59996 53.0001 9.29996C53.2001 9.19996 53.6001 9.09996 54.0001 8.99996C54.4001 8.89996 54.8001 8.89996 55.1001 8.89996C55.5001 8.89996 55.8001 8.89996 56.2001 8.89996C56.5001 8.89996 56.9001 8.99996 57.3001 8.99996L57.9001 11.2C57.6001 11.2 57.3001 11.1 57.0001 11C56.7001 10.9 56.3001 10.9 56.0001 10.9C55.7001 10.9 55.2001 10.9 54.8001 10.9C54.4001 10.9 53.9001 11 53.4001 11.2C52.6001 11.4 52.0001 11.7 51.5001 12C51.0001 12.3 50.7001 12.6 50.5001 13C50.3001 13.3 50.1001 13.7 50.1001 14.1C50.1001 14.5 50.1001 14.8 50.2001 15.2C50.3001 15.4 50.4001 15.7 50.5001 15.9C50.6001 16.1 50.8001 16.3 50.9001 16.5C51.1001 16.7 51.3001 16.8 51.5001 16.9C51.7001 17 52.0001 17.1 52.4001 17.2C52.7001 17.2 53.1001 17.3 53.5001 17.2C53.9001 17.2 54.4001 17.1 54.9001 16.9C55.4001 16.8 55.8001 16.6 56.2001 16.4C56.6001 16.2 56.9001 16 57.2001 15.8C57.5001 15.6 57.8001 15.4 58.0001 15.2C58.2001 15 58.5001 14.8 58.7001 14.6L59.3001 16.8C59.1001 17 58.8001 17.3 58.5001 17.4Z'
                    fill='#efefef'
                  />
                  <path
                    d='M61.3996 17.3L61.0996 7.89999L63.5996 7.79999L63.7996 15.1L70.6996 15L70.7996 17.1L61.3996 17.3Z'
                    fill='#efefef'
                  />
                  <path
                    d='M85.1998 15.3C84.9998 16.1 84.6998 16.7 84.2998 17.3C83.8998 17.8 83.2998 18.2 82.6998 18.5C82.0998 18.8 81.2998 18.9 80.4998 19C79.6998 19 78.7998 18.9 77.7998 18.7C76.7998 18.5 75.9998 18.2 75.2998 17.8C74.5998 17.4 73.9998 17 73.4998 16.4C73.0998 15.9 72.6998 15.3 72.5998 14.6C72.3998 13.9 72.4998 13.2 72.5998 12.4C72.7998 11.6 73.0998 11 73.4998 10.4C73.8998 9.90001 74.4998 9.50001 75.0998 9.20001C75.6998 8.90001 76.4998 8.80001 77.2998 8.70001C78.0998 8.70001 78.9998 8.80001 79.9998 9.00001C80.9998 9.20001 81.7998 9.50001 82.4998 9.90001C83.1998 10.3 83.7998 10.7 84.1998 11.3C84.5998 11.9 84.8998 12.4 85.0998 13.1C85.2998 13.8 85.3998 14.5 85.1998 15.3ZM82.6998 14.7C82.7998 14.4 82.7998 14 82.7998 13.6C82.7998 13.2 82.5998 12.9 82.3998 12.6C82.1998 12.3 81.8998 12 81.3998 11.7C80.9998 11.4 80.3998 11.2 79.5998 11C79.0998 10.9 78.6998 10.8 78.2998 10.8C77.8998 10.8 77.5998 10.8 77.1998 10.9C76.8998 11 76.5998 11.1 76.3998 11.2C76.1998 11.3 75.9998 11.5 75.7998 11.7C75.5998 11.9 75.4998 12.1 75.3998 12.3C75.2998 12.5 75.2998 12.8 75.1998 13C75.0998 13.2 75.0998 13.5 75.0998 13.7C75.0998 13.9 75.0998 14.2 75.1998 14.4C75.2998 14.6 75.3998 14.9 75.4998 15.1C75.5998 15.3 75.7998 15.5 76.0998 15.7C76.2998 15.9 76.5998 16.1 76.9998 16.2C77.3998 16.4 77.7998 16.5 78.2998 16.6C78.9998 16.8 79.6998 16.8 80.1998 16.8C80.6998 16.7 81.0998 16.6 81.4998 16.4C81.7998 16.2 82.0998 15.9 82.2998 15.6C82.4998 15.4 82.5998 15 82.6998 14.7Z'
                    fill='#efefef'
                  />
                  <path
                    d='M96.4996 18.7C96.3996 18.5 96.1996 18.3 95.9996 18.1C95.7996 17.9 95.4996 17.6 95.2996 17.4C94.9996 17.1 94.6996 16.9 94.2996 16.6C93.8996 16.3 93.5996 16.1 93.1996 15.9C92.8996 15.7 92.5996 15.6 92.3996 15.5C92.1996 15.4 91.9996 15.3 91.7996 15.3C91.5996 15.3 91.4996 15.2 91.3996 15.2C91.2996 15.2 91.1996 15.2 91.0996 15.2C90.9996 15.2 90.9996 15.2 90.8996 15.3L90.7996 15.4C90.6996 15.5 90.6996 15.7 90.7996 15.8C90.8996 16 90.9996 16.1 91.1996 16.3C91.3996 16.5 91.5996 16.7 91.7996 16.9C91.9996 17.1 92.2996 17.3 92.5996 17.6C92.8996 17.8 93.1996 18.1 93.4996 18.3C93.7996 18.6 94.0996 18.8 94.2996 19.1C94.5996 19.4 94.7996 19.6 94.9996 19.9C95.1996 20.2 95.3996 20.5 95.4996 20.8C95.5996 21.1 95.6996 21.4 95.6996 21.7C95.6996 22 95.5996 22.3 95.3996 22.6C95.1996 23 94.8996 23.3 94.5996 23.5C94.2996 23.7 93.9996 23.9 93.6996 23.9C93.3996 24 92.9996 24 92.5996 23.9C92.1996 23.8 91.8996 23.8 91.4996 23.7C91.0996 23.6 90.7996 23.4 90.3996 23.3C89.9996 23.1 89.6996 23 89.3996 22.8C88.5996 22.4 87.7996 21.9 87.1996 21.4C86.5996 20.9 85.9996 20.4 85.5996 19.9L86.5996 17.9C86.9996 18.5 87.4996 19.1 88.0996 19.6C88.6996 20.1 89.3996 20.6 90.1996 21.1C90.6996 21.3 91.0996 21.5 91.3996 21.6C91.6996 21.7 91.9996 21.8 92.1996 21.8C92.3996 21.8 92.5996 21.8 92.6996 21.7C92.7996 21.6 92.8996 21.6 92.8996 21.5C92.9996 21.4 92.9996 21.2 92.8996 21.1C92.7996 20.9 92.6996 20.8 92.4996 20.6C92.2996 20.4 92.1996 20.2 91.9996 20C91.7996 19.8 91.4996 19.6 91.1996 19.3C90.8996 19 90.5996 18.8 90.2996 18.6C89.9996 18.4 89.6996 18.1 89.4996 17.8C89.1996 17.5 88.9996 17.3 88.7996 17C88.5996 16.7 88.3996 16.4 88.2996 16.2C88.1996 15.9 88.0996 15.6 88.0996 15.3C88.0996 15 88.1996 14.7 88.2996 14.4C88.4996 14 88.6996 13.7 88.9996 13.6C89.2996 13.4 89.5996 13.3 89.8996 13.2C90.1996 13.1 90.5996 13.1 90.8996 13.1C91.1996 13.1 91.5996 13.2 91.9996 13.3C92.3996 13.4 92.6996 13.5 92.9996 13.7C93.2996 13.8 93.6996 14 93.9996 14.2C94.2996 14.4 94.5996 14.6 94.9996 14.8C95.3996 15 95.5996 15.2 95.8996 15.5C96.1996 15.7 96.4996 16 96.7996 16.2C97.0996 16.4 97.2996 16.7 97.4996 16.9L96.4996 18.7Z'
                    fill='#efefef'
                  />
                  <path
                    d='M95.5996 26.2L101.8 19.1L109 25.3L107.7 26.8L102.5 22.3L101.5 23.5L106.4 27.8L105 29.3L100.1 25L98.8996 26.4L104.2 31L102.9 32.5L95.5996 26.2Z'
                    fill='#efefef'
                  />
                  <path
                    d='M109.6 35.6L111.6 34.2L113.1 36.3L111.1 37.7L109.6 35.6Z'
                    fill='#efefef'
                  />
                  <path
                    d='M114.899 54.4C114.699 54.1 114.499 53.8 114.299 53.5C114.099 53.2 113.899 52.9 113.799 52.5C113.699 52.1 113.499 51.7 113.299 51.3C112.999 50.4 112.799 49.5 112.699 48.7C112.599 47.9 112.699 47.1 112.899 46.4C113.099 45.7 113.399 45.1 113.899 44.6C114.399 44.1 114.999 43.7 115.799 43.4C116.599 43.1 117.299 43.1 117.999 43.2C118.699 43.3 119.299 43.6 119.899 44C120.499 44.4 120.999 45 121.399 45.7C121.899 46.4 122.199 47.2 122.499 48.1C122.599 48.5 122.799 48.9 122.899 49.3C122.999 49.7 123.099 50.1 123.099 50.4C123.099 50.8 123.199 51.1 123.199 51.5C123.199 51.9 123.199 52.2 123.199 52.6L120.999 53.3C121.099 53 121.099 52.7 121.099 52.4C121.099 52.1 121.199 51.7 121.099 51.4C121.099 51 121.099 50.6 120.999 50.2C120.899 49.8 120.799 49.3 120.699 48.8C120.399 48 120.199 47.4 119.799 47C119.499 46.6 119.099 46.2 118.799 46C118.399 45.8 118.099 45.7 117.699 45.7C117.299 45.7 116.999 45.7 116.599 45.9C116.399 46 116.099 46.1 115.899 46.2C115.699 46.3 115.499 46.5 115.299 46.7C115.099 46.9 114.999 47.1 114.899 47.4C114.799 47.7 114.699 47.9 114.699 48.3C114.699 48.7 114.699 49 114.799 49.4C114.899 49.8 114.999 50.3 115.099 50.8C115.299 51.3 115.399 51.7 115.599 52.1C115.799 52.5 115.999 52.8 116.199 53.1C116.399 53.4 116.599 53.7 116.899 53.9C117.199 54.1 117.299 54.3 117.599 54.5L115.399 55.2C115.299 54.9 115.099 54.7 114.899 54.4Z'
                    fill='#efefef'
                  />
                  <path
                    d='M115.199 57.2L124.599 56.3L124.799 58.8L117.499 59.5L118.099 66.3L116.099 66.5L115.199 57.2Z'
                    fill='#efefef'
                  />
                  <path
                    d='M118.799 80.8C117.999 80.7 117.299 80.4 116.799 80C116.199 79.6 115.799 79.1 115.499 78.5C115.199 77.9 114.999 77.2 114.899 76.4C114.799 75.6 114.899 74.7 114.999 73.7C115.199 72.7 115.399 71.9 115.699 71.1C115.999 70.4 116.499 69.7 116.899 69.3C117.399 68.8 117.999 68.5 118.599 68.3C119.299 68.1 119.999 68.1 120.799 68.2C121.599 68.3 122.299 68.6 122.799 69C123.399 69.4 123.799 69.9 124.099 70.5C124.399 71.1 124.599 71.8 124.699 72.6C124.799 73.4 124.699 74.3 124.599 75.3C124.399 76.3 124.199 77.1 123.899 77.9C123.599 78.6 123.099 79.3 122.699 79.7C122.199 80.2 121.599 80.5 120.999 80.7C120.299 80.9 119.599 81 118.799 80.8ZM119.199 78.3C119.499 78.4 119.899 78.4 120.299 78.3C120.699 78.2 120.999 78.1 121.299 77.9C121.599 77.7 121.899 77.3 122.199 76.9C122.499 76.4 122.599 75.8 122.799 75.1C122.899 74.6 122.899 74.1 122.899 73.8C122.899 73.5 122.799 73.1 122.699 72.8C122.599 72.5 122.499 72.2 122.299 72C122.099 71.8 121.999 71.6 121.799 71.5C121.599 71.4 121.399 71.2 121.199 71.2C120.999 71.1 120.799 71.1 120.499 71C120.299 71 119.999 71 119.799 71C119.599 71 119.299 71.1 119.099 71.1C118.899 71.2 118.599 71.3 118.399 71.5C118.199 71.7 117.999 71.9 117.799 72.1C117.599 72.4 117.499 72.7 117.299 73C117.199 73.4 116.999 73.8 116.999 74.3C116.899 75.1 116.899 75.7 116.999 76.2C117.099 76.7 117.299 77.1 117.499 77.5C117.699 77.8 117.999 78.1 118.299 78.2C118.499 78.1 118.899 78.3 119.199 78.3Z'
                    fill='#efefef'
                  />
                  <path
                    d='M116.099 92.3C116.299 92.2 116.399 92 116.699 91.8C116.999 91.6 117.099 91.3 117.399 91C117.599 90.7 117.899 90.4 118.099 90C118.299 89.6 118.499 89.2 118.699 88.8C118.799 88.5 118.999 88.2 118.999 87.9C119.099 87.7 119.099 87.4 119.199 87.3C119.199 87.1 119.299 87 119.299 86.9C119.299 86.8 119.299 86.7 119.299 86.6C119.299 86.5 119.199 86.5 119.199 86.4L119.099 86.3C118.999 86.2 118.799 86.3 118.699 86.3C118.599 86.4 118.399 86.5 118.199 86.7C117.999 86.9 117.899 87.1 117.699 87.4C117.499 87.7 117.299 87.9 117.099 88.2C116.899 88.5 116.699 88.8 116.399 89.1C116.199 89.4 115.899 89.7 115.699 90C115.399 90.3 115.199 90.5 114.899 90.7C114.599 90.9 114.399 91.1 114.099 91.2C113.799 91.3 113.499 91.4 113.199 91.4C112.899 91.4 112.599 91.4 112.299 91.2C111.899 91 111.599 90.8 111.299 90.5C110.999 90.2 110.899 89.9 110.799 89.6C110.699 89.3 110.699 88.9 110.699 88.5C110.699 88.1 110.799 87.7 110.899 87.4C110.999 87 111.099 86.6 111.199 86.3C111.299 86 111.499 85.6 111.599 85.3C111.999 84.4 112.399 83.7 112.899 83C113.399 82.3 113.799 81.8 114.299 81.3L116.299 82.2C115.699 82.6 115.199 83.2 114.699 83.8C114.199 84.5 113.799 85.2 113.399 86C113.199 86.5 112.999 86.9 112.899 87.2C112.799 87.5 112.799 87.8 112.799 88C112.799 88.2 112.799 88.4 112.899 88.5C112.999 88.6 112.999 88.7 113.099 88.7C113.199 88.8 113.399 88.8 113.499 88.7C113.699 88.6 113.799 88.5 113.999 88.3C114.199 88.1 114.399 87.9 114.499 87.6C114.699 87.3 114.899 87.1 115.099 86.8C115.299 86.5 115.499 86.2 115.799 85.9C116.099 85.6 116.299 85.3 116.499 85C116.699 84.7 116.999 84.5 117.299 84.2C117.599 83.9 117.799 83.8 118.099 83.7C118.399 83.6 118.699 83.5 118.999 83.5C119.299 83.5 119.599 83.5 119.899 83.7C120.299 83.9 120.599 84.1 120.799 84.3C120.999 84.6 121.199 84.8 121.299 85.2C121.399 85.5 121.399 85.8 121.399 86.2C121.399 86.6 121.299 86.9 121.299 87.3C121.199 87.7 121.099 88 120.999 88.4C120.899 88.7 120.699 89.1 120.599 89.4C120.499 89.7 120.299 90.1 120.099 90.4C119.899 90.7 119.699 91.1 119.499 91.4C119.299 91.7 119.099 92 118.899 92.3C118.699 92.6 118.499 92.8 118.299 93.1L116.099 92.3Z'
                    fill='#efefef'
                  />
                  <path
                    d='M108.599 91.9L116.099 97.6L110.299 105.2L108.699 104L112.899 98.5L111.699 97.6L107.699 102.8L106.099 101.6L110.099 96.4L108.599 95.3L104.399 100.9L102.799 99.7L108.599 91.9Z'
                    fill='#efefef'
                  />
                  <path
                    d='M100.1 106.5L101.6 108.4L99.5996 110L98.0996 108.1L100.1 106.5Z'
                    fill='#efefef'
                  />
                  <path
                    d='M81.6992 113C81.9992 112.8 82.1992 112.6 82.4992 112.3C82.7992 112.1 83.0992 111.9 83.4992 111.7C83.8992 111.5 84.1992 111.3 84.5992 111.2C85.4992 110.8 86.2992 110.6 87.1992 110.5C87.9992 110.4 88.7992 110.4 89.4992 110.6C90.1992 110.8 90.7992 111.1 91.2992 111.5C91.7992 111.9 92.2992 112.6 92.5992 113.3C92.8992 114 92.9992 114.8 92.9992 115.5C92.8992 116.2 92.6992 116.8 92.2992 117.4C91.8992 118 91.3992 118.6 90.6992 119.1C89.9992 119.6 89.2992 120 88.3992 120.4C87.9992 120.6 87.5992 120.7 87.1992 120.8C86.7992 120.9 86.4992 121 86.0992 121.1C85.6992 121.2 85.3992 121.2 84.9992 121.2C84.5992 121.2 84.2992 121.2 83.8992 121.2L82.9992 119.1C83.2992 119.1 83.5992 119.2 83.8992 119.2C84.1992 119.2 84.5992 119.2 84.8992 119.2C85.1992 119.2 85.5992 119.1 86.0992 119C86.4992 118.9 86.9992 118.8 87.3992 118.6C88.0992 118.3 88.6992 118 89.0992 117.6C89.4992 117.2 89.7992 116.9 89.9992 116.5C90.1992 116.1 90.2992 115.8 90.2992 115.4C90.2992 115 90.1992 114.7 90.0992 114.3C89.9992 114.1 89.8992 113.9 89.6992 113.6C89.5992 113.4 89.3992 113.2 89.1992 113.1C88.9992 112.9 88.7992 112.8 88.4992 112.7C88.1992 112.6 87.8992 112.6 87.5992 112.6C87.2992 112.6 86.8992 112.6 86.4992 112.7C86.0992 112.8 85.5992 112.9 85.1992 113.1C84.6992 113.3 84.2992 113.5 83.8992 113.7C83.4992 113.9 83.1992 114.1 82.8992 114.4C82.5992 114.6 82.3992 114.9 82.1992 115.1C81.9992 115.3 81.7992 115.6 81.5992 115.8L80.6992 113.7C81.1992 113.5 81.4992 113.3 81.6992 113Z'
                    fill='#efefef'
                  />
                  <path
                    d='M78.8992 113.5L80.3992 122.8L77.8992 123.2L76.7992 116L69.9992 117.1L69.6992 115.1L78.8992 113.5Z'
                    fill='#efefef'
                  />
                  <path
                    d='M55.6 118.7C55.7 117.9 55.9 117.2 56.2 116.6C56.5 116 57 115.5 57.6 115.2C58.2 114.8 58.9 114.6 59.7 114.5C60.5 114.4 61.4 114.3 62.4 114.4C63.4 114.5 64.2 114.7 65 115C65.8 115.3 66.4 115.7 66.9 116.1C67.4 116.6 67.8 117.1 68 117.8C68.2 118.4 68.3 119.2 68.2 120C68.1 120.8 67.9 121.5 67.5 122.1C67.1 122.7 66.7 123.2 66.1 123.5C65.5 123.9 64.8 124.1 64 124.2C63.2 124.3 62.3 124.4 61.3 124.3C60.3 124.2 59.5 124 58.7 123.7C57.9 123.4 57.3 123 56.8 122.6C56.3 122.1 55.9 121.6 55.7 120.9C55.6 120.2 55.5 119.5 55.6 118.7ZM58.1 118.9C58.1 119.2 58.1 119.6 58.2 120C58.3 120.4 58.4 120.7 58.7 121C59 121.3 59.3 121.6 59.8 121.8C60.3 122 60.9 122.2 61.6 122.2C62.1 122.2 62.6 122.3 63 122.2C63.4 122.2 63.7 122.1 64 122C64.3 121.9 64.5 121.7 64.8 121.6C65.1 121.5 65.2 121.2 65.3 121C65.4 120.8 65.5 120.6 65.6 120.3C65.7 120 65.7 119.8 65.7 119.6C65.7 119.4 65.7 119.1 65.7 118.9C65.7 118.7 65.6 118.4 65.5 118.2C65.4 118 65.3 117.8 65.1 117.6C64.9 117.4 64.7 117.2 64.4 117C64.1 116.8 63.8 116.7 63.4 116.6C63 116.5 62.6 116.4 62.1 116.4C61.3 116.3 60.7 116.4 60.2 116.5C59.7 116.6 59.3 116.8 59 117.1C58.7 117.3 58.5 117.6 58.3 118C58.2 118.2 58.1 118.5 58.1 118.9Z'
                    fill='#efefef'
                  />
                  <path
                    d='M43.8996 116.7C43.9996 116.8 44.1996 117 44.4996 117.2C44.6996 117.4 44.9996 117.6 45.2996 117.8C45.5996 118 45.9996 118.2 46.2996 118.4C46.6996 118.6 47.0996 118.8 47.4996 119C47.7996 119.1 48.0996 119.2 48.3996 119.3C48.6996 119.4 48.8996 119.4 48.9996 119.4C49.1996 119.4 49.2996 119.4 49.3996 119.4C49.4996 119.4 49.5996 119.4 49.6996 119.3C49.7996 119.3 49.7996 119.2 49.8996 119.2L49.9996 119.1C49.9996 119 49.9996 118.8 49.8996 118.7C49.7996 118.6 49.6996 118.4 49.4996 118.3C49.2996 118.2 49.0996 118 48.7996 117.8C48.4996 117.6 48.1996 117.4 47.8996 117.2C47.5996 117 47.2996 116.8 46.9996 116.6C46.6996 116.4 46.3996 116.2 46.0996 115.9C45.7996 115.6 45.4996 115.4 45.2996 115.2C45.0996 115 44.8996 114.7 44.6996 114.4C44.5996 114.1 44.4996 113.8 44.3996 113.5C44.3996 113.2 44.3996 112.9 44.4996 112.5C44.6996 112.1 44.8996 111.7 45.0996 111.5C45.3996 111.2 45.6996 111.1 45.9996 110.9C46.2996 110.7 46.6996 110.7 47.0996 110.7C47.4996 110.7 47.8996 110.7 48.1996 110.8C48.5996 110.9 48.9996 111 49.2996 111.1C49.6996 111.2 49.9996 111.3 50.3996 111.5C51.2996 111.8 52.0996 112.2 52.6996 112.6C53.3996 113 53.9996 113.4 54.4996 113.9L53.6996 116C53.1996 115.5 52.6996 115 51.9996 114.5C51.2996 114 50.4996 113.7 49.6996 113.3C49.1996 113.1 48.7996 113 48.3996 112.9C48.0996 112.8 47.7996 112.8 47.5996 112.8C47.3996 112.8 47.1996 112.9 47.0996 112.9C46.9996 113 46.8996 113.1 46.8996 113.1C46.7996 113.2 46.8996 113.4 46.9996 113.5C47.0996 113.7 47.1996 113.8 47.3996 114C47.5996 114.2 47.7996 114.3 48.0996 114.5C48.3996 114.7 48.6996 114.9 48.9996 115C49.2996 115.2 49.5996 115.4 49.8996 115.6C50.1996 115.8 50.4996 116 50.7996 116.3C51.0996 116.5 51.3996 116.8 51.5996 117C51.7996 117.2 51.9996 117.5 52.1996 117.8C52.3996 118.1 52.3996 118.4 52.4996 118.7C52.4996 119 52.4996 119.3 52.3996 119.6C52.2996 120 52.0996 120.3 51.7996 120.5C51.5996 120.7 51.2996 120.9 50.9996 121C50.6996 121.1 50.3996 121.2 49.9996 121.2C49.5996 121.2 49.2996 121.2 48.8996 121.1C48.4996 121 48.1996 121 47.7996 120.9C47.3996 120.8 47.0996 120.7 46.7996 120.6C46.4996 120.5 46.0996 120.3 45.7996 120.2C45.4996 120 45.0996 119.9 44.7996 119.7C44.4996 119.5 44.1996 119.3 43.8996 119.1C43.5996 118.9 43.2996 118.7 43.0996 118.5L43.8996 116.7Z'
                    fill='#efefef'
                  />
                  <path
                    d='M43.7992 109.2L38.5992 117L30.6992 111.7L31.7992 110L37.5992 113.8L38.4992 112.5L32.9992 109L34.0992 107.3L39.5992 110.9L40.5992 109.4L34.7992 105.5L35.8992 103.8L43.7992 109.2Z'
                    fill='#efefef'
                  />
                  <path
                    d='M28.6992 101.7L26.8992 103.3L25.1992 101.4L26.9992 99.8L28.6992 101.7Z'
                    fill='#efefef'
                  />
                  <path
                    d='M21 83.7C21.2 84 21.5 84.2 21.7 84.5C21.9 84.8 22.1 85.1 22.4 85.4C22.6 85.7 22.8 86.1 23 86.5C23.4 87.4 23.7 88.2 23.9 89C24.1 89.8 24.1 90.6 24 91.3C23.9 92 23.6 92.6 23.2 93.2C22.8 93.8 22.2 94.2 21.5 94.6C20.8 95 20 95.1 19.3 95.1C18.6 95.1 17.9 94.9 17.3 94.6C16.7 94.3 16.1 93.8 15.5 93.1C15 92.5 14.5 91.7 14.1 90.9C13.9 90.5 13.7 90.1 13.6 89.7C13.5 89.3 13.3 89 13.3 88.6C13.2 88.2 13.1 87.9 13.1 87.5C13.1 87.1 13 87 13 86.6L15 85.6C15 85.9 15 86.2 15 86.5C15 86.8 15 87.2 15.1 87.5C15.2 87.9 15.2 88.2 15.4 88.6C15.5 89 15.7 89.4 15.9 89.9C16.3 90.6 16.6 91.2 17 91.6C17.4 92 17.8 92.3 18.1 92.4C18.5 92.6 18.9 92.6 19.2 92.6C19.6 92.6 19.9 92.5 20.3 92.3C20.5 92.2 20.7 92.1 20.9 91.9C21.1 91.7 21.3 91.6 21.4 91.3C21.5 91 21.6 90.9 21.7 90.6C21.8 90.3 21.8 90 21.8 89.7C21.8 89.4 21.7 89 21.6 88.6C21.5 88.2 21.3 87.8 21.1 87.3C20.9 86.8 20.6 86.4 20.4 86.1C20.2 85.8 19.9 85.5 19.7 85.2C19.4 84.9 19.2 84.7 18.9 84.5C18.6 84.3 18.4 84.1 18.2 84L20.2 83C20.5 83.3 20.8 83.5 21 83.7Z'
                    fill='#efefef'
                  />
                  <path
                    d='M20.2996 80.9L11.1996 83L10.5996 80.5L17.7996 78.9L16.2996 72.2L18.2996 71.7L20.2996 80.9Z'
                    fill='#efefef'
                  />
                  <path
                    d='M13.6998 58C14.4998 58 15.1998 58.2 15.7998 58.5C16.3998 58.8 16.8998 59.3 17.2998 59.8C17.6998 60.4 17.9998 61 18.1998 61.8C18.3998 62.6 18.4998 63.5 18.3998 64.5C18.3998 65.5 18.1998 66.4 17.9998 67.1C17.7998 67.9 17.3998 68.5 16.9998 69.1C16.5998 69.7 15.9998 70.1 15.3998 70.3C14.7998 70.5 14.0998 70.7 13.2998 70.7C12.4998 70.7 11.7998 70.5 11.1998 70.2C10.5998 69.9 10.0998 69.4 9.69978 68.9C9.29978 68.3 8.99978 67.6 8.79978 66.9C8.59978 66.1 8.49978 65.2 8.59978 64.2C8.59978 63.2 8.79978 62.3 8.99978 61.6C9.19978 60.8 9.59978 60.2 9.99978 59.6C10.3998 59.1 10.9998 58.7 11.5998 58.4C12.1998 58.1 12.8998 58 13.6998 58ZM13.5998 60.6C13.1998 60.6 12.8998 60.6 12.4998 60.7C12.0998 60.8 11.7998 61 11.4998 61.3C11.1998 61.6 10.9998 62 10.7998 62.4C10.5998 62.9 10.4998 63.5 10.4998 64.3C10.4998 64.8 10.4998 65.3 10.5998 65.6C10.6998 66 10.7998 66.3 10.8998 66.6C10.9998 66.9 11.1998 67.1 11.3998 67.3C11.5998 67.5 11.7998 67.7 11.9998 67.8C12.1998 67.9 12.3998 68 12.6998 68.1C12.8998 68.2 13.1998 68.2 13.3998 68.2C13.5998 68.2 13.8998 68.2 14.0998 68.1C14.2998 68 14.5998 68 14.7998 67.9C14.9998 67.8 15.1998 67.6 15.3998 67.5C15.5998 67.4 15.7998 67.1 15.8998 66.8C15.9998 66.5 16.1998 66.2 16.2998 65.8C16.3998 65.4 16.3998 65 16.4998 64.5C16.4998 63.7 16.4998 63.1 16.2998 62.6C16.0998 62.1 15.8998 61.7 15.6998 61.4C15.3998 61.1 15.0998 60.9 14.7998 60.8C14.2998 60.6 13.9998 60.6 13.5998 60.6Z'
                    fill='#efefef'
                  />
                  <path
                    d='M14.9004 46.2C14.8004 46.3 14.6004 46.5 14.4004 46.8C14.2004 47.1 14.0004 47.3 13.8004 47.7C13.6004 48 13.4004 48.4 13.2004 48.8C13.0004 49.2 12.9004 49.6 12.7004 50.1C12.6004 50.4 12.5004 50.8 12.5004 51C12.4004 51.3 12.4004 51.5 12.4004 51.6C12.4004 51.8 12.4004 51.9 12.4004 52C12.4004 52.1 12.4004 52.2 12.5004 52.3C12.5004 52.4 12.6004 52.4 12.6004 52.4C12.6004 52.4 12.7004 52.4 12.7004 52.5C12.8004 52.5 13.0004 52.5 13.1004 52.4C13.2004 52.3 13.4004 52.1 13.5004 51.9C13.6004 51.7 13.8004 51.5 14.0004 51.2C14.2004 50.9 14.3004 50.6 14.5004 50.3C14.7004 50 14.9004 49.7 15.0004 49.3C15.2004 49 15.4004 48.6 15.6004 48.3C15.8004 48 16.0004 47.7 16.3004 47.5C16.5004 47.2 16.8004 47 17.1004 46.9C17.4004 46.7 17.7004 46.6 18.0004 46.6C18.3004 46.6 18.6004 46.6 19.0004 46.7C19.4004 46.8 19.8004 47 20.0004 47.3C20.3004 47.5 20.5004 47.8 20.6004 48.1C20.7004 48.4 20.8004 48.8 20.9004 49.1C20.9004 49.5 20.9004 49.9 20.9004 50.2C20.9004 50.6 20.8004 51 20.7004 51.4C20.6004 51.8 20.5004 52.1 20.4004 52.5C20.1004 53.4 19.8004 54.2 19.5004 54.9C19.1004 55.6 18.8004 56.2 18.4004 56.7L16.2004 56.1C16.7004 55.6 17.2004 55 17.6004 54.3C18.0004 53.6 18.4004 52.8 18.6004 51.9C18.8004 51.4 18.8004 51 18.9004 50.6C18.9004 50.3 18.9004 50 18.9004 49.8C18.9004 49.6 18.8004 49.4 18.7004 49.3C18.6004 49.2 18.5004 49.1 18.4004 49.1C18.3004 49.1 18.1004 49.1 18.0004 49.2C17.9004 49.3 17.7004 49.5 17.6004 49.7C17.5004 49.9 17.3004 50.1 17.1004 50.4C16.9004 50.7 16.8004 51 16.6004 51.3C16.4004 51.6 16.3004 51.9 16.1004 52.3C15.9004 52.6 15.7004 53 15.5004 53.3C15.3004 53.6 15.1004 53.9 14.8004 54.2C14.6004 54.5 14.3004 54.7 14.1004 54.8C13.9004 54.9 13.5004 55 13.2004 55.1C12.9004 55.2 12.6004 55.1 12.3004 55C11.9004 54.9 11.6004 54.7 11.3004 54.5C11.1004 54.3 10.9004 54 10.7004 53.7C10.6004 53.4 10.5004 53.1 10.4004 52.7C10.4004 52.4 10.4004 52 10.4004 51.6C10.4004 51.2 10.5004 50.9 10.6004 50.5C10.7004 50.1 10.8004 49.8 10.9004 49.5C11.0004 49.2 11.1004 48.8 11.3004 48.4C11.4004 48 11.6004 47.7 11.8004 47.4C12.0004 47.1 12.1004 46.7 12.3004 46.4C12.5004 46.1 12.7004 45.8 12.8004 45.5L14.9004 46.2Z'
                    fill='#efefef'
                  />
                  <path
                    d='M22.3992 45.7L14.1992 41L18.8992 32.8L20.5992 33.8L17.1992 39.8L18.4992 40.6L21.7992 34.9L23.4992 35.9L20.1992 41.6L21.7992 42.5L25.2992 36.4L26.9992 37.4L22.3992 45.7Z'
                    fill='#efefef'
                  />
                  <path
                    d='M66.9992 110.3C42.5992 110.3 22.6992 90.4 22.6992 66C22.6992 41.6 42.5992 21.7 66.9992 21.7C91.3992 21.7 111.299 41.6 111.299 66C111.299 90.4 91.3992 110.3 66.9992 110.3ZM66.9992 22.7C43.0992 22.7 23.6992 42.1 23.6992 66C23.6992 89.9 43.0992 109.3 66.9992 109.3C90.8992 109.3 110.299 89.9 110.299 66C110.299 42.1 90.8992 22.7 66.9992 22.7Z'
                    fill='#efefef'
                  />
                  <path
                    d='M66.9988 132.001C30.6462 132.001 0.998047 102.353 0.998047 66C0.998047 29.6474 30.6462 -0.000793457 66.9988 -0.000793457C103.351 -0.000793457 133 29.6474 133 66C133 102.353 103.351 132.001 66.9988 132.001ZM66.9988 1.48907C31.3912 1.48907 2.48791 30.3923 2.48791 66C2.48791 101.608 31.3912 130.511 66.9988 130.511C102.606 130.511 131.51 101.608 131.51 66C131.51 30.3923 102.606 1.48907 66.9988 1.48907Z'
                    fill='#efefef'
                  />
                </svg>
              </div>
            </div>
          </div>
        </div>

        <div className={`menu-frame${currentGnbState ? ' view' : ''}`}>
          <div className='menu-content'>
            <ul className='first-content'>
              <li className={`${blur}${currentGnbState ? ' line-up' : ''}`}>
                <button
                  className='link-button'
                  onClick={() => listClick('/')}
                  onMouseEnter={gnbListHover}
                  onMouseLeave={onHeaderLeave}>
                  HOME<span>HOME</span>
                </button>
              </li>
            </ul>

            <ul className='center-content'>
              <li className={`${blur}${currentGnbState ? ' line-up' : ''}`}>
                <button
                  className='link-button'
                  onClick={() => listClick('/about')}
                  onMouseEnter={gnbListHover}
                  onMouseLeave={onHeaderLeave}>
                  ABOUT<span>ABOUT</span>
                </button>
              </li>

              <li className={`${blur}${currentGnbState ? ' line-up' : ''}`}>
                <button
                  className='link-button'
                  onClick={() => listClick('/skill/language')}
                  onMouseEnter={gnbListHover}
                  onMouseLeave={onHeaderLeave}>
                  SKILL<span>SKILL</span>
                </button>
              </li>

              <li className={`${blur}${currentGnbState ? ' line-up' : ''}`}>
                <button
                  className='link-button'
                  onClick={() => listClick('/footprint')}
                  onMouseEnter={gnbListHover}
                  onMouseLeave={onHeaderLeave}>
                  FOOTPRINT<span>FOOTPRINT</span>
                </button>
              </li>
            </ul>

            {/* <ul className='last-content'>
              <li className={`${blur}${currentGnbState ? ' line-up' : ''}`}>
                <div
                  className='list-contact'
                  onClick={gnbContact}
                  onMouseEnter={gnbListHover}
                  onMouseLeave={onHeaderLeave}>
                  CONTACT<span>CONTACT</span>
                </div>
              </li>
            </ul> */}
          </div>
        </div>
      </div>
    </>
  );
};

export default Header;
