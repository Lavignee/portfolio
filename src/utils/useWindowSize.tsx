import React from 'react';

const useWindowSize = () => {
  // SSR/하이드레이션 시 서버·클라 첫 렌더가 동일하도록 결정적 초기값을 쓰고,
  // 실제 크기는 마운트 후 effect에서 반영한다.
  const [windowSize, setWindowSize] = React.useState({ width: 1200, height: 800 });

  const changeWindowSize = React.useCallback(() => {
    setWindowSize({ width: window.innerWidth, height: window.innerHeight });
  }, []);

  React.useEffect(() => {
    changeWindowSize();
    window.addEventListener('resize', changeWindowSize);
    return () => window.removeEventListener('resize', changeWindowSize);
  }, [changeWindowSize]);

  return windowSize;
};

export default useWindowSize;
