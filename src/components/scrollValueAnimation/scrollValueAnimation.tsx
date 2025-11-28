import React from 'react';
// import './scrollValueAnimation.scss'; // Next에서는 나중에 globals.scss로 합칠 예정

import { useRouter } from 'next/router';
import { useCommonValueStore } from '@/stores/commonValue';

const ScrollValueAnimation: React.FC = () => {
  const router = useRouter();

  const currentScrollValue = useCommonValueStore((s) => s.currentScrollValue);
  const currentScrollLimit = useCommonValueStore((s) => s.currentScrollLimit);

  // 실제 표시할 % 값
  const [percent, setPercent] = React.useState(0);
  // 이 컴포넌트 자체를 보여줄지 여부
  const [visible, setVisible] = React.useState(false);

  // 스크롤 값/한계값이 바뀔 때마다 퍼센트 계산
  React.useEffect(() => {
    if (!currentScrollLimit) {
      setPercent(0);
      return;
    }

    const raw = (currentScrollValue / currentScrollLimit) * 100;
    const clamped = Math.max(0, Math.min(100, Math.round(raw)));

    setPercent(clamped);
  }, [currentScrollValue, currentScrollLimit]);

  // 어떤 페이지에서 퍼센트 표기를 보여줄지 결정
  React.useEffect(() => {
    const path = router.pathname;

    // 필요에 따라 조건 더 추가해도 됨
    const showOnPage =
      path === '/about' ||
      path.startsWith('/skill') ||
      path === '/footprint' ||
      path === '/';

    setVisible(showOnPage);
  }, [router.pathname]);

  if (!visible) return null;

  return <div className='scroll-percent'>{percent}%</div>;
};

export default ScrollValueAnimation;
