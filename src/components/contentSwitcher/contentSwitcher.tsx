import React from 'react';
import { Route, Routes } from 'react-router-dom';

import './contentSwitcher.scss';

// 랜딩(Home)은 초기 로드 시 fallback 깜빡임을 막기 위해 즉시 로드,
// 네비게이션으로 진입하는 상세 페이지는 코드 스플리팅으로 지연 로드.
import Home from '../../views/home';

const AboutDetail = React.lazy(() => import('../../views/aboutDetail'));
const SkillDetail = React.lazy(() => import('../../views/skillDetail'));
const FootprintDetail = React.lazy(() => import('../../views/footprintDetail'));
const NotFound = React.lazy(() => import('../../views/notFound'));

// Props로 받는 이벤트들에 대한 interface 정의.
interface ContentSwitcherProps {
  _onHover: (hoverCursor: string, hoverText?: string | null) => void;
  _onClick: (path: string, hoverText?: string | null) => void;
  _onLeave: (hoverText?: string | null) => void;
}

const ContentSwitcher = ({ _onHover, _onClick, _onLeave }: ContentSwitcherProps) => {
  return (
    <React.Suspense fallback={<div>Loading...</div>}>
      <Routes>
        <Route
          path='/'
          element={<Home _onHover={_onHover} _onClick={_onClick} _onLeave={_onLeave} />}
        />
        <Route path='/about' element={<AboutDetail _onHover={_onHover} _onLeave={_onLeave} />} />
        <Route
          path='/skill/:list'
          element={<SkillDetail _onHover={_onHover} _onLeave={_onLeave} />}
        />
        <Route
          path='/footprint'
          element={<FootprintDetail _onHover={_onHover} _onLeave={_onLeave} />}
        />
        <Route path='*' element={<NotFound />} />
      </Routes>
    </React.Suspense>
  );
};

export default ContentSwitcher;
