import React from 'react';

import './tooltip.scss';

// Props로 받는 이벤트들에 대한 interface 정의.
interface TooltipProps {
  _onHover: (hoverCursor: string, hoverText?: string | null) => void;
  _onLeave: (hoverText?: string | null) => void;
  children: string;
  info: string;
}

const Tooltip = ({ _onHover, _onLeave, children, info }: TooltipProps) => {
  const [tooltipState, setTooltipState] = React.useState(false)
  const hoverTooltip = () => {
    _onHover(' pagination-cursor')
    setTooltipState(true);
  }
  const leaveTooltip = () => {
    _onLeave();
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