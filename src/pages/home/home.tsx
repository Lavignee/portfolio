import React from 'react';
import { useDispatch } from 'react-redux';
import { makeSmoothScroll } from '../../Modules/commonValue';

import './home.scss';

import Main from '../../components/main';
import About from '../../components/about';
import Skill from '../../components/skill';
import Footprint from '../../components/footprint';

// Props로 받는 이벤트들에 대한 interface 정의.
interface HomeProps {
  onHover: (hoverCursor: string, hoverText?: string | null) => void;
  onClick: (path: string, hoverText: string) => void;
  onLeave: (hoverText?: string | null) => void;
}

const Home = ({ onHover, onClick, onLeave }: HomeProps) => {
  // redux dispatch 정의.
  const dispatch = useDispatch();
  const makeScroll = React.useCallback((value: boolean) => dispatch(makeSmoothScroll(value)), [dispatch]);

  // 화면 진입 시 현재 컨텐츠를 기준으로 스크롤 재생성.
  React.useEffect(() => {
    makeScroll(true);
  }, [makeScroll]);

  return (
    <div className='home-area'>
      <Main onHover={onHover} onLeaves={onLeave} />
      <About onHover={onHover} onClick={onClick} onLeaves={onLeave} />
      <Skill onHover={onHover} onClick={onClick} onLeave={onLeave} />
      <Footprint onHover={onHover} onClick={onClick} onLeave={onLeave} />
    </div>
  );
};

export default Home;
