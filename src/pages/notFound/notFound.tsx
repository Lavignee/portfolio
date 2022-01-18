import React from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import './notFound.scss';

const NotFound = () => {
  // react-router-dom으로 url 확인 및 화면 이동 명령어 정의.
  let navigate = useNavigate();
  let location = useLocation();

  return (
    <div className='not-found-section'>
      <div className='guide-ment'>
        <h1>이 페이지는 존재하지 않습니다.</h1>
        <br />
        <br />
        <h2>들어오신 경로: '{location.pathname}'</h2>
        <br />
        <br />
        <h3>
          아.. 404를 구경하러 오셨군요?
          <br />
          여길 꾸밀 시간이 아직은 없네요..
          <br />
          일단 뒤로갈까요?
        </h3>
        <br />
        <br />
        <button onClick={() => navigate(-1)}>go back</button>
      </div>
    </div>
  );
};

export default React.memo(NotFound);
