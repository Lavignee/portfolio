import { gsap } from 'gsap';
import React from 'react';
import { isDesktop } from '@/utils/device';
import { useShallow } from 'zustand/react/shallow';

import './customCursor.scss';
import useMounted from '../../hooks/useMounted';
import useStore from '../../store/useStore';

const CustomCursor = ({ children }: { children: React.ReactNode }) => {
  // 전역 스토어 액션.
  const cursorSecondClass = useStore((s) => s.changeSecondClassName);

  // 전역 스토어 구독.
  const [firstClassName, secondClassName, text, language] = useStore(
    useShallow((s) => [s.firstClassName, s.secondClassName, s.text, s.language])
  );

  const cursorRef = React.useRef<HTMLDivElement | null>(null);
  const cursorInfoRef = React.useRef<HTMLDivElement | null>(null);

  // SSR에선 isDesktop이 false라 커서 DOM이 빠지지만, 클라이언트 첫 렌더에선 true가 되어
  // 하이드레이션 불일치가 발생한다. 마운트 이후에만 isDesktop을 반영해 서버/클라 첫 렌더를 일치시킨다.
  const mounted = useMounted();
  const isDesktopMounted = mounted && isDesktop;

  // gsap로 마우스 애니메이션 동작.
  const moveCircle = (e: React.MouseEvent) => {
    if (isDesktop) {
      gsap.to(cursorRef?.current, {
        duration: 0,
        css: {
          left: e.pageX,
          top: e.pageY,
        },
      });

      gsap.to(cursorInfoRef?.current, {
        duration: 0.3,
        css: {
          left: e.pageX,
          top: e.pageY,
        },
      });
    }
  };

  // 마우스 다운 시 커서 형태 변경.
  const onMouseDown = () => {
    cursorSecondClass(' down-cursor');
  };

  // 마우스 업 시 커서 형태 초기화.
  const onMouseUp = () => {
    cursorSecondClass('');
  };

  return (
    // biome-ignore lint/a11y/noStaticElementInteractions: 커스텀 커서 추적을 위한 마우스 레이어로 키보드 상호작용 대상이 아님.
    <div
      className={language}
      onMouseMove={(e) => moveCircle(e)}
      onMouseDown={onMouseDown}
      onMouseUp={onMouseUp}
    >
      {/* 내부 컨텐츠 영역 */}
      {children}

      {/* 마우스 DOM */}
      {isDesktopMounted && (
        <div className='cursor-area'>
          <div
            className={`custom-cursor-back${firstClassName}${secondClassName}`}
            ref={cursorInfoRef}
          ></div>
          <div className={`custom-cursor-info${firstClassName}${secondClassName}`} ref={cursorRef}>
            <span>{text}</span>
          </div>
        </div>
      )}
    </div>
  );
};

export default CustomCursor;
