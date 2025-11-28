import React from 'react';
// import './switchAnimation.scss'; // 나중에 globals.scss로 이동 예정

import { useCommonValueStore } from '@/stores/commonValue';

const SwitchAnimation: React.FC = () => {
  const currentSwitchAnimation = useCommonValueStore(
    (state) => state.currentSwitchAnimation
  );

  return (
    <div className={`screen-cover${currentSwitchAnimation ? ' active' : ''}`} />
  );
};

export default SwitchAnimation;
