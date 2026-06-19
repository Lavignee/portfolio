import useStore from '../../store/useStore';

import './switchAnimation.scss';

const SwitchAnimation = () => {
  const currentSwitchAnimation = useStore((s) => s.currentSwitchAnimation);

  return <div className={`screen-cover${currentSwitchAnimation ? ' active' : ''}`}></div>;
};

export default SwitchAnimation;
