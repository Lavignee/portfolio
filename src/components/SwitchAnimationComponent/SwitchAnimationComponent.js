import React from 'react';
import { useSelector } from 'react-redux';
import './SwitchAnimationComponent.scss';

const SwitchAnimationComponent = () => {
  const { currentSwitchAnimation } = useSelector(state => ({
    currentSwitchAnimation: state.CommonValueModule.currentSwitchAnimation
  }));

  return (
    <>
      {/* <div className={`screen-cover${currentSwitchAnimation ? ' active' : ''}`}></div> */}
    </>
  )
}

export default SwitchAnimationComponent;