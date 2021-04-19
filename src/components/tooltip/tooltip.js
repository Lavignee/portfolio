import React, { useState } from 'react';

import './tooltip.scss';

const Tooltip = ({ onHover, onLeave, children, info }) => {
  const [tooltipState, setTooltipState] = useState(false)
  const hoverTooltip = () => {
    onHover(' pagination-cursor')
    setTooltipState(true);
  }
  const leaveTooltip = () => {
    onLeave();
    setTooltipState(false);
  }

  return (
    <span className='tooltip-area' onMouseEnter={hoverTooltip} onMouseLeave={leaveTooltip}>
      {tooltipState && <span className='tooltip-frame' onMouseEnter={hoverTooltip} ><span>{info}</span></span>}
      {children}
    </span>
  )
}
export default Tooltip;