import React, { useEffect, useState, useRef } from 'react';
import './scrollValueAnimation.scss';
import { useLocation } from 'react-router-dom';
import { useSelector, shallowEqual } from 'react-redux';
import { isMobile } from 'react-device-detect';
import { RootState } from '../../Modules';

const ScrollValueAnimation = () => {
  const [currentGnbState, currentScrollValue, currentScrollLimit] = useSelector(
    (state: RootState) => [
      state.CommonValue.currentGnbState,
      state.CommonValue.currentScrollValue,
      state.CommonValue.currentScrollLimit,
    ],
    shallowEqual
  );

  let location = useLocation();

  const scrollPercentRef = useRef(null);
  const [percentView, setPercentView] = useState(false);

  useEffect(() => {
    let scrollPercent = ((+currentScrollValue / +currentScrollLimit) * 100).toFixed(0);
    scrollPercentRef.current = Number.isNaN(scrollPercent) ? 0 : scrollPercent
  }, [currentScrollLimit, currentScrollValue]);

  useEffect(() => {
    if (location.pathname === '/' || location.pathname === '/about' || (location.pathname === '/footprint' && isMobile)) {
      setPercentView(true);
    } else {
      setPercentView(false);
    }
  }, [currentGnbState, location]);

  return (
    percentView && <div className='scroll-percent'>{scrollPercentRef.current + '%'}</div>
  );
};

export default ScrollValueAnimation;
