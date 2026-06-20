import React from 'react';
import './scrollValueAnimation.scss';
import { isMobile } from 'react-device-detect';
import { usePathname } from 'next/navigation';
import { useShallow } from 'zustand/react/shallow';
import useStore from '../../store/useStore';

const ScrollValueAnimation = () => {
  // 전역 스토어 구독.
  const [currentScrollValue, currentScrollLimit] = useStore(
    useShallow((s) => [s.currentScrollValue, s.currentScrollLimit])
  );

  // next/navigation으로 현재 경로 확인.
  const pathname = usePathname();

  // 스크롤 퍼센트의 랜더 여부.
  const [percentView, setPercentView] = React.useState(false);
  // 스크롤 퍼센트 계산값을 담기 위한 로컬 변수 용도.
  const [percentCalc, setpercentCalc] = React.useState<number>(0);

  React.useEffect(() => {
    // 화면 로드 시 스크롤 퍼센트 계산. (0으로 나눠 NaN/Infinity가 되는 경우 0 처리)
    const scrollPercentCalc = Math.round((+currentScrollValue / +currentScrollLimit) * 100);
    setpercentCalc(Number.isFinite(scrollPercentCalc) ? scrollPercentCalc : 0);
  }, [currentScrollLimit, currentScrollValue]);

  React.useEffect(() => {
    // 화면 로드 시 url에 따라 스크롤 퍼센트의 랜더 여부 변경.
    if (
      pathname === '/' ||
      pathname === '/about' ||
      (pathname === '/footprint' && isMobile)
    ) {
      setPercentView(true);
    } else {
      setPercentView(false);
    }

    // 화면 벗어날 시 퍼센트 초기화.
    return () => {
      setpercentCalc(0);
    };
  }, [pathname]);

  return percentView ? <div className='scroll-percent'>{percentCalc}%</div> : null;
};

export default ScrollValueAnimation;
