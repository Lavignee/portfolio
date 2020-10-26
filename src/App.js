import React from 'react';
import { Switch, Route } from 'react-router-dom';
import './style/index.scss';
import CustomCursorAreaContainer from './Containers/CustomCursorAreaContainer'
import HeaderContainer from './Containers/HeaderContainer';
import HomeContainer from './Containers/HomeContainer';
import AboutDetailContainer from './Containers/AboutDetailContainer';
import SkillDetailContainer from './Containers/SkillDetailContainer';
import FootprintDetailContainer from './Containers/FootprintDetailContainer';
import ContactComponent from './Components/ContactComponent';
import FooterContainer from './Containers/FooterContainer';

const App = () => {
  return (
    <CustomCursorAreaContainer>
      {/* [정적인 본문 레이아웃] */}
      <div>
        {/* [동적인 본문 레이아웃] */}
        <HeaderContainer />
        <Switch>
          <Route path="/" exact={true} component={HomeContainer} />
          <Route path="/about" component={AboutDetailContainer} />
          <Route path="/skill" component={SkillDetailContainer} />
          <Route path="/footprint" component={FootprintDetailContainer} />
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
        <ContactComponent />
        <FooterContainer />
      </div>
    </CustomCursorAreaContainer>
  );
}

export default App;
