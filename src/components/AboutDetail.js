import React from 'react';
import InnerLayout from '../composition/innerlayout';

const AboutDetail = ({ onToggle }) => {
  return (
    <InnerLayout className='inner-card'>
      <button onClick={onToggle}>뒤로가기</button>
      <div>학생시절</div>
      <p>8살부터 사용해온 컴퓨터는 제게는 너무 신기하고 배울 것이 참 많은 기기였습니다. 학교에서 배우는 국어, 영어, 수학보다 컴퓨터의 탐색기를 하나하나 열어보고 각종 윈도우의 기능과 타자 연습, 다양한 게임들을 해보는 게 가장 큰 재미였습니다. 일찍 배운 컴퓨터 타자로 <b>아버지의 책 출간을 돕기도 했습니다.</b> 이후 미대 교수였던 아버지의 영향을 받아 미술 전공을 준비했었지만, 입시 미술이 적성에 맞지 않아 고등학교를 졸업한 20살에 곧바로 입대하였습니다.</p>

      <div>전역 후</div>
      <p>22살에 사회에 막 나와서는 다양한 일을 해보고자 <b>20~30대로 이루어진 젊은 건설팀</b>에 들어가 1년 정도 몸을 쓰는 일도 해보았고, <b>다양한 공장에서 OP(Operator) 일</b>도 2년간 해보았습니다. 이후 학생 시절에 PC방 아르바이트 일이 즐거웠던 기억이 있어 <b>프랜차이즈 PC방</b>에 점장으로 취업하여 2년간 일했습니다. 하드웨어에 대한 공부도 많이 하였고, <b>전국 매출 상위 1%의 매장</b>이 되어 프랜차이즈 기업에서 스카우트 제의를 받아 여러 매장을 오픈 및 관리 하였습니다. 하지만 해당 분야에서 좋은 여건에 있었음에도 앞으로 전망이 밝지 않다는 판단에 그만두게 되었고, 웹사이트를 운영하려는 지인을 돕게 되면서 웹 개발자의 영역을 알게 되었습니다. 이후 인터넷으로 독학하여 퍼블리싱을 배우고 <b>지인들과 팀</b>을 꾸려 외주 업무를 시작했습니다.</p>

      <div>현재</div>
      <p>지인들과 팀을 꾸려 일을 하다 <b>작은 회사를 설립</b>하였고, 회사 운영을 함께 하며 개발 일을 해왔습니다. 초보 개발자였지만 기획자가 따로 없었으므로 서비스의 개발과 개선 등을 기획부터 해왔고, 회사의 <b>인사관리</b>, <b>고객 응대</b>, <b>세무</b>, <b>수금</b>까지 맡았습니다. <b>적은 인원</b>과 자본으로 힘들게 시작하였지만 성장하는 회사를 보고 즐겁게 일할 수 있었습니다. 하지만 이제는 대표가 된 팀원의 <b>변해가는 모습</b>과 <b>운영 방식</b>에 회의감을 느끼고, 이 다양한 일을 계속 처리해가면서 전문가가 되기는 어렵겠다는 생각에 퇴사하게 되었습니다. 지금까지 얻은 다양한 경험은 저에게 넓은 시각을 주었습니다. 다만, 앞으로는 좀 더 frontend 개발자로서 전문성을 가지고 나아가려 합니다.</p>
    </InnerLayout>
  )
}

export default AboutDetail;
