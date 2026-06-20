'use client';

import { useEffect, useState } from 'react';

// 클라이언트 마운트 이후에만 true.
// window/navigator(UA) 기반 분기가 서버 렌더와 클라이언트 첫 렌더에서 갈려
// 하이드레이션 불일치가 나는 것을 막는 용도.
export default function useMounted() {
  const [mounted, setMounted] = useState(false);
  useEffect(() => setMounted(true), []);
  return mounted;
}
