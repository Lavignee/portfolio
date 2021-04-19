import React, { useEffect, useState, useRef } from 'react';
import './scrollValueAnimation.scss';
import { useSelector, shallowEqual } from 'react-redux';

const ScrollValueAnimation = () => {
  const [currentGnbState, currentScrollValue, currentScrollLimit] = useSelector(state => [state.CommonValue.currentGnbState, state.CommonValue.currentScrollValue, state.CommonValue.currentScrollLimit], shallowEqual);

  const testRef = useRef(0)
  const [percentView, setPercentView] = useState(false)

  useEffect(() => {
    let testValue = (currentScrollValue / currentScrollLimit) * 100
    testRef.current = testValue.toFixed(0)
  }, [currentScrollLimit, currentScrollValue])

  useEffect(() => {
    location.pathname === '/' ? setPercentView(true) : setPercentView(false)
  }, [currentGnbState])

  return (
    percentView && <div className='scroll-percent'>{testRef.current + '%'}</div>
  )
}

export default ScrollValueAnimation;