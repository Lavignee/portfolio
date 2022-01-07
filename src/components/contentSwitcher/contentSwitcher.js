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

const ContentSwitcher = ({ onHover, onClick, onLeave, pageTimer }) => {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <Routes>
        <Route
          path='/'
          element={
            <Home onHover={onHover} onClick={onClick} onLeave={onLeave} />
          }
        />
        <Route
          path='/about'
          element={<AboutDetail onHover={onHover} onLeave={onLeave} />}
        />
        <Route
          path='/skill/:list'
          element={
            <SkillDetail
              onHover={onHover}
              onLeave={onLeave}
              pageTimer={pageTimer}
            />
          }
        />
        <Route
          path='/footprint'
          element={<FootprintDetail onHover={onHover} onLeave={onLeave} />}
        />
        <Route component={NotFound} />
      </Routes>
    </Suspense>
  );
};

export default ContentSwitcher;
