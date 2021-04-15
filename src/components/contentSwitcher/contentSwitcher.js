import React, { lazy, Suspense } from 'react';
import './contentSwitcher.scss';
import { Switch, Route } from 'react-router-dom';
// const Home = lazy(() => import('components/home'));
const AboutDetail = lazy(() => import('components/aboutDetail'));
const SkillDetail = lazy(() => import('components/skillDetail'));
const FootprintDetail = lazy(() => import('components/footprintDetail'));
const NotFound = lazy(() => import('components/notFound'));
import Home from 'components/home';
// import AboutDetail from 'components/aboutDetail';
// import SkillDetail from 'components/skillDetail';
// import FootprintDetail from 'components/footprintDetail';
// import NotFound from 'components/notFound';

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
