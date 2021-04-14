import React from 'react';
import './ContentSwitcherComponent.scss';
import { Switch, Route } from 'react-router-dom';
import HomeComponent from 'components/HomeComponent';
import AboutDetailComponent from 'components/AboutDetailComponent';
import SkillDetailComponent from 'components/SkillDetailComponent';
import FootprintDetailComponent from 'components/FootprintDetailComponent';
import NotFoundComponent from 'components/NotFoundComponent';

const ContentSwitcherComponent = ({ onHover, onClick, onLeave, pageTimer }) => {
  return (
    <Switch>
      <Route path='/' exact render={() => <HomeComponent onHover={onHover} onClick={onClick} onLeave={onLeave} />} />
      <Route path='/about' render={() => <AboutDetailComponent onHover={onHover} onLeave={onLeave} />} />
      <Route path='/skill/:list' render={({ match }) => <SkillDetailComponent match={match} onHover={onHover} onLeave={onLeave} pageTimer={pageTimer} />} />
      <Route path='/footprint' render={() => <FootprintDetailComponent onHover={onHover} onLeave={onLeave} />} />
      <Route component={NotFoundComponent} />
    </Switch>
  )
}

export default ContentSwitcherComponent;
