import React, { useEffect, useState, useRef } from 'react';
import './ScrollValueAnimationComponent.scss';
import { useSelector, shallowEqual } from 'react-redux';

const ScrollValueAnimationComponent = () => {
  const [currentScrollValue, currentScrollLimit] = useSelector(state => [state.CommonValueModule.currentScrollValue, state.CommonValueModule.currentScrollLimit], shallowEqual);

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

export default ScrollValueAnimationComponent;