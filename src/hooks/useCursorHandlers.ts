// src/hooks/useCursorHandlers.ts
import React from 'react';
import { useRouter } from 'next/router';
import { useCursorStore } from '@/stores/cursor';
import { useCommonValueStore } from '@/stores/commonValue';

export function useCursorHandlers() {
  const router = useRouter();

  // ✅ 여기서도 개별 selector로 읽기/쓰기
  const firstClassName = useCursorStore((state) => state.firstClassName);
  const text = useCursorStore((state) => state.text);

  const setFirstClassName = useCursorStore((state) => state.setFirstClassName);
  const setSecondClassName = useCursorStore(
    (state) => state.setSecondClassName
  );
  const setText = useCursorStore((state) => state.setText);

  const setSwitchAnimation = useCommonValueStore(
    (state) => state.setSwitchAnimation
  );
  const setButtonDelay = useCommonValueStore((state) => state.setButtonDelay);

  // 마우스 오버
  const _onHover = React.useCallback(
    (hoverCursor: string, hoverText?: string | null) => {
      // 값이 이미 같으면 아무것도 안 함 (루프 방지)
      if (
        firstClassName === hoverCursor &&
        (hoverText === undefined || hoverText === null || hoverText === text)
      ) {
        return;
      }

      setFirstClassName(hoverCursor);
      if (hoverText !== undefined && hoverText !== null) {
        setText(hoverText);
      }
    },
    [firstClassName, text, setFirstClassName, setText]
  );

  // 마우스 리브
  const _onLeave = React.useCallback(
    (hoverText?: string | null) => {
      // 이미 초기 상태면 아무것도 안 함
      if (
        firstClassName === '' &&
        (hoverText === undefined ||
          hoverText === null ||
          hoverText === text ||
          text === '')
      ) {
        return;
      }

      setFirstClassName('');
      setSecondClassName('');
      if (hoverText !== undefined && hoverText !== null) {
        setText(hoverText);
      } else {
        setText('');
      }
    },
    [firstClassName, text, setFirstClassName, setSecondClassName, setText]
  );

  // 클릭 (지금 일부 페이지에서만 사용)
  const _onClick = React.useCallback(
    (path: string, hoverText?: string | null) => {
      if (hoverText) _onLeave(hoverText);

      setButtonDelay(true);
      setSwitchAnimation(true);

      setTimeout(() => {
        router.push(path);
      }, 1000);

      setTimeout(() => {
        setSwitchAnimation(false);
        setButtonDelay(false);
      }, 2000);
    },
    [_onLeave, router, setButtonDelay, setSwitchAnimation]
  );

  return { _onHover, _onClick, _onLeave };
}
