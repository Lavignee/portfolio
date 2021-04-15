import React, { useEffect, useState, useRef } from 'react';
import './scrollValueAnimation.scss';
import { useSelector, shallowEqual } from 'react-redux';

const ScrollValueAnimation = () => {
  const [currentScrollValue, currentScrollLimit] = useSelector(state => [state.CommonValue.currentScrollValue, state.CommonValue.currentScrollLimit], shallowEqual);

  const testRef = useRef(0)
  const [percentView, setPercentView] = useState(false)

  useEffect(() => {
    let testValue = (currentScrollValue / currentScrollLimit) * 100
    testRef.current = testValue.toFixed(0)
  }, [currentScrollLimit, currentScrollValue])

  useEffect(() => {
    location.pathname === '/' ? setPercentView(true) : setPercentView(false)
  }, [location.pathname])

  return (
    percentView && <div className='scroll-percent'>{testRef.current + '%'}</div>
  )
}

export default ScrollValueAnimation;