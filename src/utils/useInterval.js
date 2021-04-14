import React, { useRef, useEffect } from 'react';

const useInterval = (callback, delay) => {
  const savedCallback = useRef();

  useEffect(() => {
    savedCallback.current = callback;
  });

  useEffect(() => {
    if (delay !== null) {
      const tick = setInterval(() => {
        savedCallback.current();
      }, delay)
      return () => clearInterval(tick);
    }
  }, [delay]);
}

export default useInterval;