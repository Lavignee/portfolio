'use client';

import { useRouter } from 'next/navigation';
import { useCallback, useMemo } from 'react';
import useStore from '@/store/useStore';

export interface CursorHandlers {
  // 마우스 오버: 커서 형태/텍스트 변경.
  onHover: (hoverCursor: string, hoverText?: string | null) => void;
  // 좌클릭: 스크린 커버 + 딜레이 후 페이지 전환.
  onClick: (path: string, hoverText?: string | null) => void;
  // 커서 형태 초기화.
  onLeave: (hoverText?: string | null) => void;
  // 지정 시간 후 라우터 이동(헤더 등에서 직접 사용).
  pageTimer: (path: string, timer: number) => void;
}

// App Router에서는 layout->page 간 props 전달이 불가하므로,
// 기존 App.tsx의 커서 핸들러 로직을 훅으로 추출해 어느 클라이언트 컴포넌트에서나 호출한다.
export default function useCursorHandlers(): CursorHandlers {
  const cursorClass = useStore((s) => s.changeFirstClassName);
  const cursorSecondClass = useStore((s) => s.changeSecondClassName);
  const cursorText = useStore((s) => s.changeText);
  const screenCover = useStore((s) => s.changeSwitchAnimation);
  const onChangeButtonDelay = useStore((s) => s.changeButtonDelay);

  const router = useRouter();

  // 커서 형태 초기화, 텍스트 파람 존재 시 텍스트 변경.
  // useCallback으로 참조를 고정한다. 이 핸들러들을 effect 의존성에 넣는 뷰(skillDetail/aboutDetail)가
  // 매 렌더마다 스크롤바/스크롤트리거를 파기·재생성하던 churn을 막기 위함.
  const onLeave = useCallback(
    (hoverText?: string | null) => {
      cursorClass('');
      cursorSecondClass('');
      hoverText && cursorText(hoverText);
    },
    [cursorClass, cursorSecondClass, cursorText]
  );

  // 마우스 오버 시 커서 형태 변경.
  const onHover = useCallback(
    (hoverCursor: string, hoverText?: string | null) => {
      cursorClass(hoverCursor);
      hoverText && cursorText(hoverText);
    },
    [cursorClass, cursorText]
  );

  // 일정 시간 후 라우터 이동(기존 navigate -> router.push).
  const pageTimer = useCallback(
    (path: string, timer: number) => {
      setTimeout(() => {
        router.push(path);
      }, timer);
    },
    [router]
  );

  // 좌클릭 시 스크린 커버 애니메이션 + 버튼 딜레이 후 페이지 전환.
  const onClick = useCallback(
    (path: string, hoverText?: string | null) => {
      hoverText && onLeave(hoverText);
      onChangeButtonDelay(true);
      screenCover(true);
      // 스크린 커버가 화면을 덮은 뒤 커버/버튼딜레이 해제.
      setTimeout(() => {
        screenCover(false);
        onChangeButtonDelay(false);
      }, 2000);
      pageTimer(path, 1000);
    },
    [onLeave, onChangeButtonDelay, screenCover, pageTimer]
  );

  return useMemo(
    () => ({ onHover, onClick, onLeave, pageTimer }),
    [onHover, onClick, onLeave, pageTimer]
  );
}
