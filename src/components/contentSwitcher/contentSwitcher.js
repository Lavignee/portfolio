import React from 'react';
import './contentSwitcher.scss';
import { Switch, Route } from 'react-router-dom';
import Home from 'components/home';
import AboutDetail from 'components/aboutDetail';
import SkillDetail from 'components/skillDetail';
import FootprintDetail from 'components/footprintDetail';
import NotFound from 'components/notFound';

const ContentSwitcher = ({ onHover, onClick, onLeave, pageTimer }) => {
  return (
    <Switch>
      <Route path='/' exact render={() => <Home onHover={onHover} onClick={onClick} onLeave={onLeave} />} />
      <Route path='/about' render={() => <AboutDetail onHover={onHover} onLeave={onLeave} />} />
      <Route path='/skill/:list' render={({ match }) => <SkillDetail match={match} onHover={onHover} onLeave={onLeave} pageTimer={pageTimer} />} />
      <Route path='/footprint' render={() => <FootprintDetail onHover={onHover} onLeave={onLeave} />} />
      <Route component={NotFound} />
    </Switch>
  )
}

export default ContentSwitcher;
