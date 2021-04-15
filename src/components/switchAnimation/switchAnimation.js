import React from 'react';
import './switchAnimation.scss';
import { useSelector, shallowEqual } from 'react-redux';

const SwitchAnimation = () => {
  const [currentSwitchAnimation] = useSelector(state => [state.CommonValue.currentSwitchAnimation], shallowEqual);

  return (
    <>
      <div className={`screen-cover${currentSwitchAnimation ? ' active' : ''}`}></div>
    </>
  )
}

export default SwitchAnimation;