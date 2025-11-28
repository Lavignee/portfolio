import type { NextPage } from 'next';

import Home from '@/pages/home/home';
import { useCursorHandlers } from '@/hooks/useCursorHandlers';

const IndexPage: NextPage = () => {
  const { _onHover, _onClick, _onLeave } = useCursorHandlers();

  return <Home _onHover={_onHover} _onClick={_onClick} _onLeave={_onLeave} />;
};

export default IndexPage;
