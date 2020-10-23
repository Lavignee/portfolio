import React from 'react';
import { Switch, Route } from 'react-router-dom';
import './style/index.scss';
import Header from './containers/Header';
import Home from './containers/Home';
import AboutDetail from './components/AboutDetail';
import SkillDetail from './components/SkillDetail';
import FootprintDetail from './components/FootprintDetail';
import Contact from './containers/Contact';
import Footer from './containers/Footer';

const App = () => {
  return (
    <div>
      {/* [정적인 본문 레이아웃] */}
      < hr />
      <div>
        {/* [동적인 본문 레이아웃] */}
        <hr />
        <Header />
        <hr />
        <Switch>
          <Route path="/" exact={true} component={Home} />
          <Route path="/about" component={AboutDetail} />
          <Route path="/skill" component={SkillDetail} />
          <Route path="/footprint" component={FootprintDetail} />
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
        <hr />
        <Contact />
        <hr />
        <Footer />
      </div>
      {/* 마우스 애니메이션, 폰트? */}
    </div >
  );
}

export default App;
