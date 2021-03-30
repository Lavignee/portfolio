import React, { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
import './SplitTextComponent.scss';

const SplitTextComponent = ({ children, scroll, index, animation, setTime, delay, depth, noContainer }) => {
  const { scrollValue } = useSelector(state => ({
    scrollValue: state.ScrollValueModule.scrollValue
  }));

  let childrenLength = 1;
  const [willChange, setWillChange] = useState(null);
  const [happen, setHappen] = useState([]);
  const [split, setSplit] = useState([])

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
      setTimeout(() => {
        Splitting();
      }, setTime ? setTime : 30)
    } else {
      setWillChange(null)
    }
  }

  const SplittingReady = () => {
    if (scrollValue === scroll && !happen.includes(scrollValue) || scroll === 'all') {
      setWillChange(true);
      Splitting();
      setHappen(...happen, [scrollValue])
    }
  }

  useEffect(() => {
    SplittingReady();
  }, [scrollValue])

  return (
    <div className={`split-frame${willChange && noContainer ? ' will-change' : ''}${delay ? ` delay-${delay}` : ''}`}>
      {noContainer ? (
        { split }
      ) : (
        <>
          <div className='origin-size-container'>{children}</div>
          <div className={`animation-container${willChange && !noContainer ? ' will-change' : ''}`}>
            {split}
          </div>
        </>
      )
      }
    </div >
  )
}

export default SplitTextComponent;