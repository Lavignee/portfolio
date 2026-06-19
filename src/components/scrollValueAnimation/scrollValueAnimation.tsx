import React from 'react';
import './scrollValueAnimation.scss';
import { isMobile } from 'react-device-detect';
import { useLocation } from 'react-router-dom';
import { shallow } from 'zustand/shallow';
import useStore from '../../store/useStore';

const ScrollValueAnimation = () => {
  // 전역 스토어 구독.
  const [currentScrollValue, currentScrollLimit] = useStore(
    (s) => [s.currentScrollValue, s.currentScrollLimit],
    shallow
  );

  // react-router-dom으로 url 확인.
  const location = useLocation();

  // 스크롤 퍼센트의 랜더 여부.
  const [percentView, setPercentView] = React.useState(false);
  // 스크롤 퍼센트 계산값을 담기 위한 로컬 변수 용도.
  const [percentCalc, setpercentCalc] = React.useState<number>(0);

  React.useEffect(() => {
    // 화면 로드 시 스크롤 퍼센트 계산.
    const scrollPercentCalc: any = ((+currentScrollValue / +currentScrollLimit) * 100).toFixed(0);
    setpercentCalc(
      !Number(scrollPercentCalc) || scrollPercentCalc === 'Infinity' ? 0 : scrollPercentCalc
    );
  }, [currentScrollLimit, currentScrollValue, setpercentCalc]);

  React.useEffect(() => {
    // 화면 로드 시 url에 따라 스크롤 퍼센트의 랜더 여부 변경.
    if (
      location.pathname === '/' ||
      location.pathname === '/about' ||
      (location.pathname === '/footprint' && isMobile)
    ) {
      setPercentView(true);
    } else {
      setPercentView(false);
    }

    // 화면 벗어날 시 퍼센트 초기화.
    return () => {
      setpercentCalc(0);
    };
  }, [location]);

  return percentView ? <div className='scroll-percent'>{percentCalc}%</div> : null;
};

export default ScrollValueAnimation;
