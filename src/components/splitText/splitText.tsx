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
  delay: boolean;
  ready: boolean;
  depth: boolean;
  noContainer: boolean;
}

const SplitText = ({
  children,
  scroll,
  index,
  animation,
  setTime,
  delay,
  ready,
  depth,
  noContainer,
}: SplitTextProps) => {
  // redux useSelector 정의.
  const [currentSplitText] = useSelector((state: RootState) => [state.CommonValue.currentSplitText], shallowEqual);

  let childrenLength = 0;
  const [willChange, setWillChange] = React.useState(false);
  const [happen, setHappen] = React.useState<string[]>([]);
  const [split, setSplit] = React.useState<JSX.Element[]>([]);
  const splittingTimer = React.useRef<any>(null);

  // children의 length만큼 state에 
  const Splitting = React.useCallback(() => {
    if (childrenLength <= children.length) {
      childrenLength++
      depth
        ? setSplit(
          (split) => [
            ...split,
            <div
              key={index + (childrenLength - 1)}
              className='split-depth-frame'>
              <span>
                {children.substring(childrenLength - 1, childrenLength)}
              </span>
              <div
                className={`split-target ${animation ? animation : 'default'}`}>
                {children.substring(childrenLength - 1, childrenLength)}
              </div>
            </div>,
          ],
        )
        : setSplit(
          (split) => [
            ...split,
            <div
              key={index + (childrenLength - 1)}
              className={`split-target ${animation ? animation : 'default'}`}>
              {children.substring(childrenLength - 1, childrenLength)}
            </div>,
          ],
        );

      splittingTimer.current = setTimeout(
        () => {
          Splitting();
        },
        setTime ? setTime : 30
      );
    }
  }, [animation, children, childrenLength, depth, index, setTime]);

  const SplittingReady = React.useCallback(() => {
    if (
      (currentSplitText === scroll && !happen.includes(currentSplitText)) ||
      scroll === 'all'
    ) {
      Splitting();
      setHappen([...happen, currentSplitText]);
    }
  }, [Splitting, currentSplitText, happen, scroll]);

  React.useEffect(() => {
    return () => {
      clearTimeout(splittingTimer.current);
      splittingTimer.current = null;
    };
  }, []);

  React.useEffect(() => {
    splittingTimer.current = null;
    SplittingReady();
  }, [SplittingReady, currentSplitText]);

  React.useEffect(() => {
    if (ready) {
      setWillChange(true);
    }
    return () => setWillChange(false);
  }, [ready]);

  return (
    <div className={`split-frame${delay ? ` delay-${delay}` : ''}`}>
      {noContainer ? (
        { split }
      ) : (
        <>
          <div className='origin-size-container'>{children}</div>
          <div
            className={`animation-container${willChange ? ' will-change' : ''
              }`}>
            {split}
          </div>
        </>
      )}
    </div>
  );
};

SplitText.defaultProps = {
  setTime: null,
  depth: true,
  delay: false,
  noContainer: false
}

export default SplitText;
