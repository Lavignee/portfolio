import React, { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
import './SplitTextComponent.scss';

const SplitTextComponent = ({ children, scroll, index, animation }) => {
  const { scrollValue } = useSelector(state => ({
    scrollValue: state.ScrollValueModule.scrollValue
  }));

  let childrenLength = 1;
  const [split, setSplit] = useState([]);
  const [happen, setHappen] = useState([]);

  const Splitting = () => {
    setSplit(split => [...split, { text: children.substring(childrenLength - 1, childrenLength++), index: `${index}${childrenLength - 1}` }]);
    if (childrenLength < children.length + 1) {
      setTimeout(() => {
        Splitting();
      }, 50)
    }
  }

  useEffect(() => {
    if (scrollValue === scroll && !happen.includes(scrollValue)) {
      Splitting()
      setHappen(...happen, [scrollValue])
    }
  }, [scrollValue])

  return (
    <div className='split-frame'>
      {split.map(split => (
        <div key={split.index} className={`split-target ${animation} ${split.index}`}>{split.text}</div>
      ))}
    </div>
  )
}

export default SplitTextComponent;