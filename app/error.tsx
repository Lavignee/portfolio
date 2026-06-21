'use client';

import { useEffect } from 'react';

// 라우트 세그먼트 에러 바운더리. AppShell(헤더/커서)은 유지하고 페이지 영역만 대체해
// 뷰에서 예외가 나도 화면 전체가 하얗게 죽지 않도록 한다.
export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    console.error(error);
  }, [error]);

  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        minHeight: '60vh',
        gap: '2rem',
        textAlign: 'center',
        padding: '4rem 2rem',
      }}
    >
      <h2 style={{ fontSize: '3rem' }}>문제가 발생했습니다</h2>
      <p style={{ fontSize: '1.6rem', opacity: 0.7 }}>
        일시적인 오류일 수 있습니다. 다시 시도해 주세요.
      </p>
      <button
        type='button'
        onClick={reset}
        style={{
          padding: '1.2rem 2.8rem',
          border: '1px solid currentColor',
          borderRadius: '0.4rem',
          background: 'transparent',
          fontSize: '1.6rem',
        }}
      >
        다시 시도
      </button>
    </div>
  );
}
