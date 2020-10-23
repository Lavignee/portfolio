import React from 'react';

function Contact({ }) {
  return (
    <div>
      {/* 이메일, 지도, 연락처? */}
      {/* 그리드 화면 분할 */}
      <div>+82 010-2690-9243</div>
      <div>kakao Lavignee</div>
      <div>email doyoung9243@naver.com</div>
      <input type='text' placeholder='title' />
      <textarea placeholder='content'></textarea>
      <button>보내기</button>
    </div>
  )
}

export default Contact;
