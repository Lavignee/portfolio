import React, { useState, useEffect, useRef } from 'react';
import './splitText.scss';
import { useSelector, shallowEqual } from 'react-redux';

const SplitText = ({ children, scroll, index, animation, setTime, delay, ready, depth, noContainer }) => {
  const [currentSplitText] = useSelector(state => [state.CommonValue.currentSplitText], shallowEqual);

  let childrenLength = 1;
  const [willChange, setWillChange] = useState(false);
  const [happen, setHappen] = useState([]);
  const [split, setSplit] = useState([])
  const splittingTimer = useRef(null)

  const Splitting = () => {
    {
      noContainer ? (
        depth ? (
          setSplit(split => [...split, <div key={index + (childrenLength - 1)} className='split-depth-frame'><span>{children.substring(childrenLength - 1, childrenLength)}</span><div className={`split-target ${animation ? animation : 'default'}`}>{children.substring(childrenLength - 1, childrenLength++)}</div></div>])
        ) : (
          setSplit(split => [...split, <div key={index + (childrenLength - 1)} className={`split-target ${animation ? animation : 'default'}`}>{children.substring(childrenLength - 1, childrenLength++)}</div>])
        )
      ) : (
        depth ? (
          setSplit(split => [...split, <div key={index + (childrenLength - 1)} className='split-depth-frame'><span>{children.substring(childrenLength - 1, childrenLength)}</span><div className={`split-target ${animation ? animation : 'default'}`}>{children.substring(childrenLength - 1, childrenLength++)}</div></div>])
        ) : (
          setSplit(split => [...split, <div key={index + (childrenLength - 1)} className={`split-target ${animation ? animation : 'default'}`}>{children.substring(childrenLength - 1, childrenLength++)}</div>])
        )
      )
    }
    if (childrenLength < children.length + 1) {
      splittingTimer.current = setTimeout(() => {
        Splitting();
      }, setTime ? setTime : 30);
      return () => {
        clearTimeout(splittingTimer.current);
        splittingTimer.current = null;
      }
    }
  }

  const SplittingReady = () => {
    if (currentSplitText === scroll && !happen.includes(currentSplitText) || scroll === 'all') {
      Splitting();
      setHappen(...happen, [currentSplitText])
    }
  }

  useEffect(() => {
    return () => {
      clearTimeout(splittingTimer.current);
      splittingTimer.current = null;
    }
  }, [])

  useEffect(() => {
    splittingTimer.current = null;
    SplittingReady();

    return () => splittingTimer.current = null;
  }, [currentSplitText])

  useEffect(() => {
    if (ready) {
      setWillChange(true)
    }
    return () => setWillChange(false)
  }, [ready])

  return (
    <div className={`split-frame${delay ? ` delay-${delay}` : ''}`}>
      {noContainer ? (
        { split }
      ) : (
        <>
          <div className='origin-size-container'>{children}</div>
          <div className={`animation-container${willChange ? ' will-change' : ''}`}>
            {split}
          </div>
        </>
      )
      }
    </div >
  )
}

export default SplitText;