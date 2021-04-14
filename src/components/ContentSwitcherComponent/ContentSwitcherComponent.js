import React from 'react';
import './ContentSwitcherComponent.scss';
import { Switch, Route } from 'react-router-dom';
import HomeComponent from '../../Components/HomeComponent';
import AboutDetailComponent from '../../Components/AboutDetailComponent';
import SkillDetailComponent from '../../Components/SkillDetailComponent';
import FootprintDetailComponent from '../../Components/FootprintDetailComponent';
import NotFoundComponent from '../../Components/NotFoundComponent';

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
