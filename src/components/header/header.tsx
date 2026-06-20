import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import React from 'react';
import { usePathname } from 'next/navigation';
import { useShallow } from 'zustand/react/shallow';

import './header.scss';

import CloseIcon from '../../static/images/close-icon.svg?react';
import HeaderLogo from '../../static/images/header-logo.svg?react';
import MenuIcon from '../../static/images/menu-icon.svg?react';
import useStore from '../../store/useStore';

// Props로 받는 이벤트들에 대한 interface 정의.
interface HeaderProps {
  _onHover: (path: string, hoverText?: string | null) => void;
  _onClick: (path: string, hoverText: string) => void;
  _onLeave: (hoverText?: string | null) => void;
  pageTimer: (path: string, timer: number) => void;
}

gsap.registerPlugin(ScrollTrigger);

const Header = ({ _onHover, _onClick, _onLeave, pageTimer }: HeaderProps) => {
  // 전역 스토어 액션.
  const onSmoothTop = useStore((s) => s.smoothTop);
  const onChangeContactState = useStore((s) => s.changeContactState);
  const onChangeContactStateFalse = useStore((s) => s.changeContactStateFalse);
  const onChangeGnbState = useStore((s) => s.changeGnbState);

  // 전역 스토어 구독.
  const [currentButtonDelay, currentSmoothTopState, currentContactState, currentGnbState] =
    useStore(
      useShallow((s) => [
        s.currentButtonDelay,
        s.currentSmoothTopState,
        s.currentContactState,
        s.currentGnbState,
      ])
    );

  // next/navigation으로 현재 경로 확인.
  const pathname = usePathname();

  const [blur, setBlur] = React.useState('');

  // 로고 마우스 오버 시,
  const onlogoHover = () => {
    // home 화면에서는 top text 출력 이외 화면에서는 home text 출력.
    pathname === '/' ? _onHover(' bl-cursor', 'top?') : _onHover(' bl-cursor', 'Home?');
  };

  // 로고 클릭 시,
  const logoClick = () => {
    if (!currentSmoothTopState) {
      // home 화면에서는 최상위로 이외 화면에서는 home으로 이동.
      pathname === '/' ? onSmoothTop(true) : _onClick('/', 'top?');
    } else {
      return false;
    }
  };

  // gnb 목록 클릭 시,
  const listClick = (path: string) => {
    // gnb 목록 닫기.
    onGnbListClick();

    // 클릭된 목록의 url과 현재 url이 다를 시,
    if (pathname !== path) {
      // 해당 url로 화면 변경.
      pageTimer(path, 100);
    } else {
      return false;
    }
  };

  // gnb 버튼에 마우스 오버 시,
  const gnbButtonHover = () => {
    // gnb의 현재 활성화 여부에 따라 커서 변경.
    currentGnbState ? _onHover(' wh-cursor', 'Close?') : _onHover(' bl-cursor', 'Open?');
  };

  // gnb 버튼 및 메뉴 목록에서 커서 벗어날 시 커서 초기화.
  const onHeaderLeave = () => {
    _onLeave('');
    setBlur('');
  };

  // gnb 버튼 클릭 시,
  const onGnbButtonClick = (cursor: string, text: string) => () => {
    // contact가 열려 있었다면 닫기.
    currentContactState && onChangeContactStateFalse();
    // gnb 메뉴를 닫거나 열기.
    onChangeGnbState();
    // 마우스 오버시 커서 형태 및 텍스트 변경.
    _onHover(cursor, text);
  };

  // Enter/Space 키로 클릭 동작을 수행하기 위한 헬퍼.
  const onActivateKey = (action: () => void) => (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' || e.key === ' ') {
      e.preventDefault();
      action();
    }
  };

  const onGnbListClick = () => {
    // contact가 열려 있었다면 닫기.
    currentContactState && onChangeContactStateFalse();
    // gnb 메뉴를 닫거나 열기.
    onChangeGnbState();
    // 마우스 커서 초기화.
    _onLeave('');
  };

  // gnb 메뉴 목록에서 contact 클릭 시,
  const gnbContact = () => {
    // contact 화면 호출.
    onChangeContactState();
    // 마우스 커서 초기화.
    _onLeave('');
  };

  // gnb 메뉴 목록들의 애니메이션은 리랜더 영향을 피하기 위해 함수 리턴으로 정의.
  const gnbMenu = (_onClick: (e: React.MouseEvent) => void, text: string) => {
    // gnb 메뉴 목록에 마우스 오버 시 커서 변경.
    const gnbListHover = () => {
      _onHover(' go-cursor');
      setBlur('blur');
    };

    return (
      <li className={`${blur}${currentGnbState ? ' line-up' : ''}`}>
        <button
          type='button'
          className='link-button'
          onClick={_onClick}
          onMouseEnter={gnbListHover}
          onMouseLeave={onHeaderLeave}
        >
          {text}
          <span>{text}</span>
        </button>
      </li>
    );
  };

  return (
    <>
      <header>
        <section className='container relative between'>
          {/* 로고 영역 */}
          <div
            className={`link-button${currentButtonDelay ? ' delay' : ''}`}
            role='button'
            tabIndex={0}
            aria-label='home'
            onClick={logoClick}
            onKeyDown={onActivateKey(logoClick)}
            onMouseEnter={onlogoHover}
            onMouseLeave={onHeaderLeave}
          >
            <HeaderLogo className='header-logo' aria-hidden='true' />
          </div>

          {/* Heeader gnb Button 영역 */}
          <div className='right-area'>
            <div
              className='gnb-button'
              role='button'
              tabIndex={0}
              aria-label='open menu'
              onClick={onGnbButtonClick(' wh-cursor', 'Close?')}
              onKeyDown={onActivateKey(onGnbButtonClick(' wh-cursor', 'Close?'))}
              onMouseEnter={gnbButtonHover}
              onMouseLeave={onHeaderLeave}
            >
              <MenuIcon className='menu-img' aria-hidden='true' />
            </div>
          </div>
        </section>
      </header>

      {/* Gnb 메뉴 화면 */}
      <div className='gnb-area'>
        <div className={`gnb-background${currentGnbState ? ' active' : ''}`}></div>
        <div className={`fixed-frame${currentGnbState ? ' view' : ''}`}>
          <div className='container relative gnb-container'>
            {/* Gnb 메뉴 내부 Gnb 버튼 영역 */}
            <div className='right-area'>
              <div
                className='gnb-close-button'
                role='button'
                tabIndex={0}
                aria-label='close menu'
                onClick={onGnbButtonClick(' bl-cursor', 'Open?')}
                onKeyDown={onActivateKey(onGnbButtonClick(' bl-cursor', 'Open?'))}
                onMouseEnter={gnbButtonHover}
                onMouseLeave={onHeaderLeave}
              >
                <CloseIcon
                  className={`close-img${currentContactState ? ' invert' : ''}`}
                  aria-hidden='true'
                />
              </div>
            </div>
          </div>
        </div>

        <div className={`menu-frame${currentGnbState ? ' view' : ''}`}>
          <div className='menu-content'>
            <ul className='first-content'>{gnbMenu(() => listClick('/'), 'HOME')}</ul>

            <ul className='center-content'>
              {gnbMenu(() => listClick('/about'), 'ABOUT')}
              {gnbMenu(() => listClick('/skill/language'), 'SKILL')}
              {gnbMenu(() => listClick('/footprint'), 'FOOTPRINT')}
            </ul>

            {/* 헤드헌터의 잦은 요구로 연락처 관련 내용 숨김. */}
            <ul className='last-content'>{gnbMenu(() => gnbContact(), 'CONTACT')}</ul>
          </div>
        </div>
      </div>
    </>
  );
};

export default Header;
