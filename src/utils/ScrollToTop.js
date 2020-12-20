import React, { useEffect } from 'react';
import { withRouter } from 'react-router-dom';

function ScrollToTop({ history, children }) {
  const reactRoot = document.getElementById('root')
  useEffect(() => {
    const unlisten = history.listen(() => {
      history.location.hash === '' && reactRoot.scrollTo(0, 0);
    });
    return () => {
      unlisten();
    }
  }, []);

  return <>{children}</>;
}

export default withRouter(ScrollToTop);