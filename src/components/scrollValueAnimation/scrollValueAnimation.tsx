import React from 'react';
import './scrollValueAnimation.scss';
import { useLocation } from 'react-router-dom';
import { useSelector, shallowEqual } from 'react-redux';
import { RootState } from '../../Modules';
import { isMobile } from 'react-device-detect';

const ScrollValueAnimation = () => {
  // redux useSelector 정의.
  const [currentGnbState, currentScrollValue, currentScrollLimit] = useSelector((state: RootState) => [state.CommonValue.currentGnbState, state.CommonValue.currentScrollValue, state.CommonValue.currentScrollLimit], shallowEqual);

  // react-router-dom으로 url 확인.
  let location = useLocation();

  // 스크롤 퍼센트 계산값을 담기 위한 로컬 변수 용도.
  // 스크롤 퍼센트의 랜더 여부.
  const [percentView, setPercentView] = React.useState(false);
  const [percentCalc, setpercentCalc] = React.useState<number>(0);

  React.useEffect(() => {
    // 화면 로드 시 스크롤 퍼센트 계산.
    const scrollPercentCalc: any = ((+currentScrollValue / +currentScrollLimit) * 100).toFixed(0);
    setpercentCalc(!Number(scrollPercentCalc) || scrollPercentCalc === Infinity ? 0 : scrollPercentCalc);
  }, [currentScrollLimit, currentScrollValue, setpercentCalc]);

  React.useEffect(() => {
    // 화면 로드 시 url에 따라 스크롤 퍼센트의 랜더 여부 변경.
    if (location.pathname === '/' || location.pathname === '/about' || (location.pathname === '/footprint' && isMobile)) {
      setPercentView(true);
    } else {
      setPercentView(false);
    }

    return () => {
      setpercentCalc(0);
    }
  }, [currentGnbState, location]);

  return (
    percentView ? <div className='scroll-percent'>{percentCalc}%</div> : null
  );
};

export default ScrollValueAnimation;
