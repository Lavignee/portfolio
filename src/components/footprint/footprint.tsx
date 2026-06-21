import { gsap } from 'gsap';
import React from 'react';
import { isDesktop as isDesktopRaw } from 'react-device-detect';
import { useShallow } from 'zustand/react/shallow';
import useMounted from '@/hooks/useMounted';

const footprint = '/images/footprint.jpg';
const footprintArrow = '/images/footprint-arrow.svg';
const footprintCircle = '/images/footprint-circle.svg';

import './footprint.scss';

import useStore from '../../store/useStore';
import Footer from '../footer';

// Props로 받는 이벤트들에 대한 interface 정의.
interface FootprintProps {
  _onHover: (path: string, hoverText?: string | null) => void;
  _onClick: (path: string, hoverText?: string | null) => void;
  _onLeave: (hoverText?: string | null) => void;
}

const Footprint = ({ _onHover, _onClick, _onLeave }: FootprintProps) => {
  // 렌더에서만 쓰는 디바이스 분기는 하이드레이션 불일치를 막기 위해 마운트 후 값으로 게이트.
  const mounted = useMounted();
  const isDesktop = mounted ? isDesktopRaw : false;

  // 전역 스토어 구독.
  const [currentButtonDelay, currentScrollLimit, currentScrollValue] = useStore(
    useShallow((s) => [s.currentButtonDelay, s.currentScrollLimit, s.currentScrollValue])
  );

  const footprintCursorRef = React.useRef(null);
  const [clipPathReady, setClipPathReady] = React.useState(false);

  // 클립패스 위치 계산.
  const footprintMoveCircle = (e: React.MouseEvent) => {
    gsap.to(footprintCursorRef.current, {
      duration: 0.3,
      css: {
        clipPath: `circle(20% at ${e.pageX}px ${e.pageY - (window.innerHeight / 2 + (+currentScrollLimit - +currentScrollValue))}px)`,
      },
    });
  };

  return (
    <>
      {/* biome-ignore lint/a11y/noStaticElementInteractions: 데스크톱 클립패스 시각 효과용 마우스 핸들러로 키보드 상호작용 대상이 아님. */}
      <section
        id='footprint'
        className='container-fluid footprint-section'
        onMouseEnter={isDesktop ? () => setClipPathReady(true) : undefined}
        onMouseMove={isDesktop ? (e) => footprintMoveCircle(e) : undefined}
        onMouseLeave={isDesktop ? () => setClipPathReady(false) : undefined}
      >
        <div
          className={`footprint-image-mask${clipPathReady ? ' will-change' : ''}`}
          ref={footprintCursorRef}
        >
          {isDesktop && <img src={footprint} alt='footprint' />}
        </div>

        <div className='container footprint-title-area'>
          <div className='footprint-content'>
            <div className='footprint-circle-area'>
              {/* 회전 장식 — 모바일 반응형 CSS가 존재하므로 isDesktop 게이트 제거(모바일에서도 노출). */}
              <img width='100%' height='auto' src={footprintCircle} alt='' />
            </div>

            <h2>Footprint</h2>
            <span>프로젝트 / 경력사항 / 외부수주</span>
            <div className='footprint-arrow-area'>
              <img width='100%' height='100%' src={footprintArrow} alt='footprint design arrow' />
            </div>
          </div>

          <div
            className={`link-button${currentButtonDelay ? ' delay' : ''}`}
            role='button'
            tabIndex={0}
            aria-label='footprint'
            onMouseEnter={() => _onHover(' go-cursor')}
            onMouseLeave={() => _onLeave()}
            onClick={() => _onClick('/footprint')}
            onKeyDown={(e) => {
              if (e.key === 'Enter' || e.key === ' ') {
                e.preventDefault();
                _onClick('/footprint');
              }
            }}
          ></div>
        </div>

        <div className='footprint-back-text'>FOOTPRINT</div>
      </section>
      <Footer />
    </>
  );
};

export default React.memo(Footprint);
