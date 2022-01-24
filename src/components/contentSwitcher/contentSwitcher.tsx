import React, { lazy, Suspense } from 'react';
import { Routes, Route } from 'react-router-dom';

import './contentSwitcher.scss';

import Home from '../../pages/home';
// import AboutDetail from 'pages/aboutDetail';
// import SkillDetail from 'pages/skillDetail';
// import FootprintDetail from 'pages/footprintDetail';
// import NotFound from 'pages/notFound';

// const Home = lazy(() => import('components/home'));
const AboutDetail = lazy(() => import('../../pages/aboutDetail'));
const SkillDetail = lazy(() => import('../../pages/skillDetail'));
const FootprintDetail = lazy(() => import('../../pages/footprintDetail'));
const NotFound = lazy(() => import('../../pages/notFound'));

const ContentSwitcher = ({ _onHover, _onClick, _onLeave, pageTimer }) => {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <Routes>
        <Route
          path='/'
          element={
            <Home _onHover={_onHover} _onClick={_onClick} _onLeave={_onLeave} />
          }
        />
        <Route
          path='/about'
          element={<AboutDetail _onHover={_onHover} _onLeave={_onLeave} />}
        />
        <Route
          path='/skill/:list'
          element={
            <SkillDetail
              _onHover={_onHover}
              _onLeave={_onLeave}
              pageTimer={pageTimer}
            />
          }
        />
        <Route
          path='/footprint'
          element={<FootprintDetail _onHover={_onHover} _onLeave={_onLeave} />}
        />
        <Route element={NotFound} />
      </Routes>
    </Suspense>
  );
};

export default ContentSwitcher;
