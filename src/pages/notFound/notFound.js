import React, { memo } from 'react';
import { useHistory } from 'react-router-dom';
import './notFound.scss';

const NotFound = () => {
  let history = useHistory();

  const back = () => {
    history.back()
  }

  return (
    <div className='not-found-section'>
      <div className='guide-ment'>
        <h1>이 페이지는 존재하지 않습니다.</h1>
        <br /><br />
        <h2>들어오신 경로: '{history.location.pathname}'</h2>
        <br /><br />
        <h3>아.. 404를 구경하러 오셨군요?<br />여길 꾸밀 시간이 아직은 없네요..<br />일단 뒤로갈까요?</h3>
        <br /><br />
        <button onClick={back}>go back</button>
      </div>
    </div>
  )
}

export default memo(NotFound);