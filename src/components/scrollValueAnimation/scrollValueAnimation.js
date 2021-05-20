import React, { useEffect, useState, useRef } from 'react';
import './scrollValueAnimation.scss';
import { useHistory } from 'react-router-dom';
import { useSelector, shallowEqual } from 'react-redux';

const ScrollValueAnimation = () => {
  const [currentGnbState, currentScrollValue, currentScrollLimit] = useSelector(state => [state.CommonValue.currentGnbState, state.CommonValue.currentScrollValue, state.CommonValue.currentScrollLimit], shallowEqual);

  let history = useHistory();
  const testRef = useRef(0)
  const [percentView, setPercentView] = useState(false)

  useEffect(() => {
    let testValue = (currentScrollValue / currentScrollLimit) * 100
    testRef.current = testValue.toFixed(0)
  }, [currentScrollLimit, currentScrollValue])

  useEffect(() => {
    history.location.pathname === '/' ? setPercentView(true) : setPercentView(false)
  }, [currentGnbState, history.location.pathname])

  return (
    percentView && <div className='scroll-percent'>{testRef.current + '%'}</div>
  )
}

export default ScrollValueAnimation;