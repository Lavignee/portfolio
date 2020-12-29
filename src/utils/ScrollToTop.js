import React, { useEffect } from 'react';
import { withRouter } from 'react-router-dom';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
function ScrollToTop({ history, children }) {
  const reactRoot = document.getElementById('root')

  const unlisten = history.listen(() => {
    history.location.hash === '' && reactRoot.scrollTo(0, 0);
  });

  useEffect(() => {
    ScrollTrigger.refresh();
    return () => unlisten();
  }, []);

  return <>{children}</>;
}

export default withRouter(ScrollToTop);