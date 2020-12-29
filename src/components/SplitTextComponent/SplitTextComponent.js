import React, { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
import './SplitTextComponent.scss';

const SplitTextComponent = ({ children, scroll, index, animation, setTime, delay, depth, noContainer }) => {
  const { scrollValue } = useSelector(state => ({
    scrollValue: state.ScrollValueModule.scrollValue
  }));

  let childrenLength = 1;
  const [willChange, setWillChange] = useState(null);
  const [split, setSplit] = useState([]);
  const [happen, setHappen] = useState([]);

  const Splitting = () => {
    setSplit(split => [...split, { text: children.substring(childrenLength - 1, childrenLength++), index: `${index ? index : ''}-${childrenLength - 1}` }]);
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
      setWillChange(true)
      Splitting()
      setHappen(...happen, [scrollValue])
    }
  }

  useEffect(() => {
    SplittingReady();
  }, [scrollValue])

  return (
    <div className={`split-frame${willChange && noContainer ? ' will-change' : ''}${delay ? ` delay-${delay}` : ''}`}>
      {noContainer ? (
        depth ? (
          split.map(split => (
            <div key={split.index} className={`split-depth-frame${index ? ` ${split.index}` : ''}`}><span>{split.text}</span><div className={`split-target ${animation ? animation : 'default'}${index ? ` ${split.index}` : ''}`}>{split.text}</div></div>
          ))
        ) : (
            split.map(split => (
              <div key={split.index} className={`split-target ${animation ? animation : 'default'}${index ? ` ${split.index}` : ''}`}>{split.text}</div>
            ))
          )
      ) : (
          <>
            <div className='origin-size-container'>{children}</div>
            <div className={`animation-container${willChange && !noContainer ? ' will-change' : ''}`}>
              {depth ? (
                split.map(split => (
                  <div key={split.index} className={`split-depth-frame${index ? ` ${split.index}` : ''}`}><span>{split.text}</span><div className={`split-target ${animation ? animation : 'default'}${index ? ` ${split.index}` : ''}`}>{split.text}</div></div>
                ))
              ) : (
                  split.map(split => (
                    <div key={split.index} className={`split-target ${animation ? animation : 'default'}${index ? ` ${split.index}` : ''}`}>{split.text}</div>
                  ))
                )}
            </div>
          </>
        )}
    </div>
  )
}

export default SplitTextComponent;