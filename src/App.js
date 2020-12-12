import React from 'react';
import { Switch, Route } from 'react-router-dom';
import CustomCursorAreaContainer from './Containers/CustomCursorAreaContainer'
import HeaderContainer from './Containers/HeaderContainer';
import HomeComponent from './Components/HomeComponent';
import AboutDetailComponent from './Components/AboutDetailComponent';
import SkillDetailComponent from './Components/SkillDetailComponent';
import FootprintDetailComponent from './Components/FootprintDetailComponent';
import ContactComponent from './Components/ContactComponent';
import ScrollToTop from './utils/ScrollToTop'
import './style/index.scss';

const App = () => {
  return (
    <CustomCursorAreaContainer>
      <HeaderContainer />
      <ScrollToTop>
        <Switch>
          <Route path="/" exact={true} component={HomeComponent} />
          <Route path="/about" component={AboutDetailComponent} />
          <Route path="/skill/:list" component={SkillDetailComponent} />
          <Route path="/footprint" component={FootprintDetailComponent} />
          <Route
            // path 를 따로 정의하지 않으면 모든 상황에 렌더링됨
            render={({ location }) => (
              <div>
                <h2>이 페이지는 존재하지 않습니다.</h2>
                <p>current path: "{location.pathname}"</p>
              </div>
            )}
          />
        </Switch>
      </ScrollToTop>
      <ContactComponent />
    </CustomCursorAreaContainer>
  );
}

export default App;
