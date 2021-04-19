import React, { lazy, Suspense } from 'react';
import { Switch, Route } from 'react-router-dom';

import './contentSwitcher.scss';

// const Home = lazy(() => import('components/home'));
const AboutDetail = lazy(() => import('pages/aboutDetail'));
const SkillDetail = lazy(() => import('pages/skillDetail'));
const FootprintDetail = lazy(() => import('pages/footprintDetail'));
const NotFound = lazy(() => import('pages/notFound'));

import Home from 'pages/home';
// import AboutDetail from 'pages/aboutDetail';
// import SkillDetail from 'pages/skillDetail';
// import FootprintDetail from 'pages/footprintDetail';
// import NotFound from 'pages/notFound';

const ContentSwitcher = ({ onHover, onClick, onLeave, pageTimer }) => {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <Switch>
        <Route path='/' exact render={() => <Home onHover={onHover} onClick={onClick} onLeave={onLeave} />} />
        <Route path='/about' render={() => <AboutDetail onHover={onHover} onLeave={onLeave} />} />
        <Route path='/skill/:list' render={({ match }) => <SkillDetail match={match} onHover={onHover} onLeave={onLeave} pageTimer={pageTimer} />} />
        <Route path='/footprint' render={() => <FootprintDetail onHover={onHover} onLeave={onLeave} />} />
        <Route component={NotFound} />
      </Switch>
    </Suspense>
  )
}

export default ContentSwitcher;
