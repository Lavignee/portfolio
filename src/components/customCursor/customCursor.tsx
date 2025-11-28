// src/components/customCursor/customCursor.tsx
import React from 'react';
import { isDesktop } from 'react-device-detect';
import { gsap } from 'gsap';

import { useCursorStore } from '@/stores/cursor';
import { useCommonValueStore } from '@/stores/commonValue';
// import './customCursor.scss'; // 스타일은 나중에 globals에서 붙일 예정

interface CustomCursorProps {
  children: React.ReactNode;
}

const CustomCursor: React.FC<CustomCursorProps> = ({ children }) => {
  // ✅ 각 필드를 개별 selector로 읽기 (객체 리턴 X)
  const firstClassName = useCursorStore((state) => state.firstClassName);
  const secondClassName = useCursorStore((state) => state.secondClassName);
  const text = useCursorStore((state) => state.text);

  const language = useCommonValueStore((state) => state.language);

  const cursorRef = React.useRef<HTMLDivElement | null>(null);
  const cursorInfoRef = React.useRef<HTMLDivElement | null>(null);

  const moveCircle = React.useCallback(
    (e: React.MouseEvent<HTMLDivElement>) => {
      if (!isDesktop) return;

      const { clientX, clientY } = e;

      if (cursorRef.current) {
        gsap.to(cursorRef.current, {
          duration: 0.2,
          x: clientX,
          y: clientY,
          ease: 'power2.out',
        });
      }
      if (cursorInfoRef.current) {
        gsap.to(cursorInfoRef.current, {
          duration: 0.25,
          x: clientX,
          y: clientY,
          ease: 'power2.out',
        });
      }
    },
    []
  );

  const onMouseDown = React.useCallback(() => {
    // 필요하면 로컬 클릭 이펙트만 여기서 처리 (지금은 비워둠)
  }, []);

  const onMouseUp = React.useCallback(() => {
    // same
  }, []);

  return (
    <div
      className={language}
      onMouseMove={moveCircle}
      onMouseDown={onMouseDown}
      onMouseUp={onMouseUp}
    >
      {children}
      {isDesktop && (
        <div className='cursor-area'>
          <div
            className={`custom-cursor-back${firstClassName}${secondClassName}`}
            ref={cursorInfoRef}
          />
          <div
            className={`custom-cursor-info${firstClassName}${secondClassName}`}
            ref={cursorRef}
          >
            <span>{text}</span>
          </div>
        </div>
      )}
    </div>
  );
};

export default CustomCursor;
