import React from 'react';
import { useSelector, shallowEqual } from 'react-redux';
import { RootState } from '../../Modules';

import './splitText.scss';

// Props로 받는 값들에 대한 interface 정의.
interface SplitTextProps {
  children: string;
  scroll: string;
  index: string;
  animation: string;
  setTime: number;
  delay?: number | null;
  depth?: boolean | null;
  noContainer?: boolean | null;
}

const SplitText = ({
  children,
  scroll,
  index,
  animation,
  setTime,
  delay,
  depth,
  noContainer,
}: SplitTextProps) => {
  // redux useSelector 정의.
  const [currentSplitText] = useSelector((state: RootState) => [state.CommonValue.currentSplitText], shallowEqual);

  let childrenLength = 0;
  const [willChange, setWillChange] = React.useState(true);
  // const [happen, setHappen] = React.useState<string[]>([]);
  const [split, setSplit] = React.useState<JSX.Element[]>([]);
  const splittingTimer = React.useRef<any>(null);
  const delayTimer = React.useRef<any>(null);

  // children으로 들어온 string을 각각 DOM으로 감싸서 배열에 입력.
  const Splitting = React.useCallback(() => {
    if (childrenLength <= children.length) {
      childrenLength++
      setSplit((split) => [...split,
      <div
        key={index + (childrenLength - 1)}
        className={`${depth ? 'split-depth-frame' : `split-target ${animation ? animation : 'default'}`}`}>
        {depth ? (
          <>
            <span>
              {children.substring(childrenLength - 1, childrenLength)}
            </span>
            <div
              className={`split-target ${animation ? animation : 'default'}`}>
              {children.substring(childrenLength - 1, childrenLength)}
            </div>
          </>
        ) : (
          children.substring(childrenLength - 1, childrenLength)
        )}
      </div>
      ])

      splittingTimer.current = setTimeout(() => {
        Splitting();
      }, setTime ? setTime : 30);
    } else {
      setWillChange(false);
    }
  }, [animation, children, childrenLength, depth, index, setTime]);

  // 화면 벗어날 시 타이머 삭제.
  React.useEffect(() => {
    return () => {
      clearTimeout(delayTimer.current);
      clearTimeout(splittingTimer.current);
      setWillChange(false);
    };
  }, []);

  // currentSplitText가 prop으로 들어온 param과 일치하거나 all(항상)인 경우 split 동작.
  React.useEffect(() => {
    if (currentSplitText === scroll || scroll === 'all') {
      if (delay) {
        delayTimer.current = setTimeout(() => {
          Splitting();
          clearTimeout(delayTimer.current);
        }, delay)
      } else {
        Splitting();
      }
    }
  }, [Splitting, currentSplitText, delay, scroll]);

  return (
    <div className='split-frame'>
      {noContainer ? (
        { split }
      ) : (
        <>
          <div className='origin-size-container'>{children}</div>
          <div className={`animation-container${willChange ? ' will-change' : ''}`}>{split}</div>
        </>
      )}
    </div>
  );
};

export default SplitText;
