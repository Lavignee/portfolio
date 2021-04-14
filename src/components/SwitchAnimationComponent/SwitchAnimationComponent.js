import React from 'react';
import './SwitchAnimationComponent.scss';
import { useSelector, shallowEqual } from 'react-redux';

const SwitchAnimationComponent = () => {
  const [currentSwitchAnimation] = useSelector(state => [state.CommonValueModule.currentSwitchAnimation], shallowEqual);

  return (
    <>
      <div className={`screen-cover${currentSwitchAnimation ? ' active' : ''}`}></div>
    </>
  )
}

export default SwitchAnimationComponent;