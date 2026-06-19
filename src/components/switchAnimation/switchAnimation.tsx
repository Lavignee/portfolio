import { shallowEqual, useSelector } from 'react-redux';
import type { RootState } from '../../Modules';

import './switchAnimation.scss';

const SwitchAnimation = () => {
  const [currentSwitchAnimation] = useSelector(
    (state: RootState) => [state.CommonValue.currentSwitchAnimation],
    shallowEqual
  );

  return <div className={`screen-cover${currentSwitchAnimation ? ' active' : ''}`}></div>;
};

export default SwitchAnimation;
