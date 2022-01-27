import React from 'react';
import { Routes, Route } from 'react-router-dom';

import './contentSwitcher.scss';

import Home from '../../pages/home';
import AboutDetail from '../../pages/aboutDetail';
import SkillDetail from '../../pages/skillDetail';
import FootprintDetail from '../../pages/footprintDetail';
import NotFound from '../../pages/notFound';

// TODO: 추후 스켈레톤 작업하기.
// const Home = React.lazy(() => import('../../pages/home'));
// const AboutDetail = React.lazy(() => import('../../pages/aboutDetail'));
// const SkillDetail = React.lazy(() => import('../../pages/skillDetail'));
// const FootprintDetail = React.lazy(() => import('../../pages/footprintDetail'));
// const NotFound = React.lazy(() => import('../../pages/notFound'));

// Props로 받는 이벤트들에 대한 interface 정의.
interface ContentSwitcherProps {
  _onHover: (hoverCursor: string, hoverText?: string | null) => void;
  _onClick: (path: string, hoverText?: string | null) => void;
  _onLeave: (hoverText?: string | null) => void;
  pageTimer: (path: string, timer: number) => void;
}

const ContentSwitcher = ({ _onHover, _onClick, _onLeave, pageTimer }: ContentSwitcherProps) => {
  return (
    <React.Suspense fallback={<div>Loading...</div>}>
      <Routes>
        <Route
          path='/'
          element={<Home _onHover={_onHover} _onClick={_onClick} _onLeave={_onLeave} />}
        />
        <Route
          path='/about'
          element={<AboutDetail _onHover={_onHover} _onLeave={_onLeave} />}
        />
        <Route
          path='/skill/:list'
          element={<SkillDetail _onHover={_onHover} _onLeave={_onLeave} />}
        />
        <Route
          path='/footprint'
          element={<FootprintDetail _onHover={_onHover} _onLeave={_onLeave} />}
        />
        <Route element={NotFound} />
      </Routes>
    </React.Suspense>
  );
};

export default ContentSwitcher;
