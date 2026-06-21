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
  const [tooltipState, setTooltipState] = React.useState(false);
  // 툴팁 텍스트와 트리거를 aria-describedby로 연결하기 위한 안정 id(SSR 안전).
  const tooltipId = React.useId();

  const showTooltip = () => {
    _onHover(' pagination-cursor');
    setTooltipState(true);
  };
  const hideTooltip = () => {
    _onLeave();
    setTooltipState(false);
  };
  // 터치/키보드용 토글.
  const toggleTooltip = () => {
    setTooltipState((prev) => {
      prev ? _onLeave() : _onHover(' pagination-cursor');
      return !prev;
    });
  };

  return (
    // 마우스(hover) 외에 포커스(키보드)·클릭(터치)로도 툴팁을 열 수 있게 한다.
    // biome-ignore lint/a11y/useSemanticElements: 단락 내 인라인 텍스트를 감싸는 트리거라 <button>(블록·텍스트 흐름 충돌) 대신 span+role을 쓴다.
    <span
      className='tooltip-area'
      role='button'
      tabIndex={0}
      aria-describedby={tooltipState ? tooltipId : undefined}
      onMouseEnter={showTooltip}
      onMouseLeave={hideTooltip}
      onFocus={showTooltip}
      onBlur={hideTooltip}
      onClick={toggleTooltip}
      onKeyDown={(e) => {
        if (e.key === 'Enter' || e.key === ' ') {
          e.preventDefault();
          toggleTooltip();
        }
      }}
    >
      {tooltipState && (
        <span className='tooltip-frame' id={tooltipId} role='tooltip'>
          <span>{info}</span>
        </span>
      )}
      {children}
    </span>
  );
};
export default Tooltip;
