import React from 'react';
import { useSelector, shallowEqual } from 'react-redux';
import { RootState } from '../../Modules';

import './switchAnimation.scss';

const SwitchAnimation = () => {
  const [currentSwitchAnimation] = useSelector((state: RootState) => [state.CommonValue.currentSwitchAnimation], shallowEqual);

  return (
    <div className={`screen-cover${currentSwitchAnimation ? ' active' : ''}`}></div>
  )
}

export default SwitchAnimation;