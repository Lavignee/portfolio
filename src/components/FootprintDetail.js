import React from 'react';
import { useHistory } from 'react-router-dom';
import InnerLayout from '../compositions/innerlayout';

const FootprintDetail = () => {
  let history = useHistory();
  const back = () => {
    history.goBack();
  }
  return (
    <InnerLayout className='inner-card'>
      <button onClick={back}>뒤로가기</button>
      <div>경력사항</div>
      <ul>
        <li>2019.12 ~ 2020.04 볼트러스트 (상주 프리랜서)</li>
        <div>암호화폐 커스터디 서비스 기획 및 개발.</div>

        <li>2016.07 ~ 2019.10 크리에이티브코드 (설립 멤버)</li>
        <div>암호화폐 웹 지갑/웹 거래소 기획 및 개발.</div>
        <div>암호화폐 웹 소개/웹 판매 사이트 기획 및 개발.</div>
        <div>암호화폐 웹 레그/전산관리 솔루션 기획 및 개발.</div>
        <div>회사 운영 및 인사 관리.</div>
      </ul>

      <div>암호화폐 관련 웹 서비스</div>
      <ul>
        <li>2019.12 ~ 2020.04 커스터디 서비스 기획 및 개발</li>
        <div>Next.js(SSR) 프로젝트</div>
        <div>Material-UI기반의 React 개발</div>
        <div>자산 변동량 Chart 개발</div>
        <div>웹사이트 번역 작업</div>
        <div>HTML 이메일폼 퍼블리싱 작업</div>
        {/* <p>Online과 Offline의 분리가 명확하고 다양한 권한 관리와 보안정책이 도입된 암호화폐 관리 서비스입니다. 처음에는 디자이너 없이 Material-UI 프레임워크의 기능과 디자인을 그대로 사용하여 개발된 코드였으나, 제가 계약된 당시에는 새로운 디자인을 적용해야 했습니다. 기존에 작성된 코드는 이미 Backend 분야와 접목하여 대부분의 기능을 사용 중이었기 때문에 프레임워크에 뼈대와 스타일을 일일이 오버라이드 하여 작업하였습니다.</p> */}

        <li>2019.06 ~ 2019.10 회사 소개 홈페이지 및 데모 웹 지갑 기획</li>
        <div>사이트 구조 및 Flow 기획</div>
        <div>사이트 내부 컨텐츠 기획</div>
        {/* <p>설립되고 몇 년이나 흘렀지만 회사를 소개하는 웹사이트가 없었습니다. 대표이사와 상의하여 다양한 문구를 직접 작성하고 메인화면부터 페이지 구성, 자잘한 동적 효과 등을 기획하였습니다. 당시 솔루션 개발을 동시에 하고 있었으므로 개발 자체는 직접 하지 않았습니다.</p> */}

        <li>2019.06 ~ 2019.10 암호화폐 웹 레그/전산관리 솔루션 기획 및 개발</li>
        <div>해당기간에 3개 서비스 동시 개발.</div>
        <div>.NET Framework 기반 Backend.</div>
        <div>Bootstrap 기반 및 Jquery를 통해 개발.</div>
        <div>회원 조직도 출력 및 검색 기능 개발.</div>
        <div>기간 지정 달력 기능 도입.</div>
        <div>세밀하고 다양한 계산식 개발.</div>
        {/* <p>클라이언트의 요청으로 회원 및 보유 암호화폐를 관리하는 웹 사이트를 개발하였습니다. 회원 간의 조직도를 웹상에서 표현하기 위해 OrgChart 기능을 도입하였고 조직도가 상당한 분량의 데이터를 표현해야 하므로 Zoom In/Out 기능과 Drag 기능을 추가로 개발했습니다. 또한, 사용자들이 소수점 단위의 구입, 구축, 전송 등의 다양한 계산을 해야 하므로 front 단에서 입력값에 따른 계산식을 개발하여 입력 제한 또는 계산 결과, 가이드 멘트 등을 출력했습니다.</p> */}

        <li>2019.03 ~ 2019.06 암호화폐 웹 소개/웹 판매 사이트 기획 및 개발</li>
        <div>웹 소개 사이트 총 2개 / 웹 판매 사이트 총 2개.</div>
        <div>.NET Framework 기반 backend.</div>
        <div>Bootstrap 기반 및 Jquery를 통해 개발.</div>
        <div>GSAP를 통한 애니메이션 구현.</div>
        <div>타이머 및 프로그레스 바 기능 도입.</div>
        {/* <p>클라이언트의 요청으로 ICO(Initial Coin Offering),IEO(Initial Exchange Offering) 기능의 웹 사이트를 개발하였습니다. 매끄러운 Parallax 효과를 위해 GSAP를 사용하였고 작은 기기에서도 테이블 형태의 정보를 쉽게 편하게 확인하기 위해 이중 스크롤 레이아웃으로 개발한 특이점이 있습니다.</p> */}

        <li>2017 ~ 2019.03 암호화폐 웹 거래소/지갑 기획 및 개발</li>
        <div>웹 거래소 총 9개 / 웹 지갑 총 6개</div>
        <div>PHP CodeIgniter 기반 backend.</div>
        <div>Bootstrap 기반 및 Jquery를 통해 개발.</div>
        <div>Google reCaptcha 기능 도입.</div>
        <div>암호화폐의 시간/기간별 시세 표기를 위한 StockChart 기능 도입.</div>
        <div>다국어 번역 기능 도입.</div>
        <div>QR Code Generator/QR Code Scanner 기능 도입.</div>
        <div>정규식을 통한 폼 밸리데이션 개발로 View 단에서 직관적이고 빠른 피드백 방식을 개발.</div>
        {/* <p>오픈소스 기반의 암호화폐 웹 지갑과 거래소 소스를 지속적으로 개선하여 다양한 기업에 판매하였습니다. 처음에는 프랑스어 주석만 가득하고 기본 거래 기능만 있던 소스를 CodeIgniter로 옮겨와서 Front 단과 Back 단으로 구분하여 개선했습니다. 이후 차트와 새로운 코인 연동, 성능 개선 등을 반복하고, 고객 요청에 따라 다양한 추가 기능을 개발하다 보니 해당 기능들을 옵션 형태로 넣고 빼며 최종적으로는 테마 형태로 디자인들을 추가하여 다양한 솔루션형태로 판매하였습니다. 당시 모든 타 거래소는 PC와 휴대기기 버전을 따로 개발했으나 완전 반응형으로 작업해온 특이점이 있습니다.</p> */}
      </ul>

      <div>외부 수주</div>
      <ul>
        <li>2016.02 ~ 2017 각종 기업의 소개/운영 사이트 개발</li>
        <div>쇼핑몰 웹 사이트. (일반기업 솔루션 기반)</div>
        <div>이사센터 웹 사이트. (별도 Backend개발자에게 html 제공)</div>
        <div>소규모 소개 웹 사이트 2개. (Wordpress 기반)</div>
        <div>일식 요리학원 웹 사이트. (XEboard, Gnuboard 기반)</div>
        <div>쇼핑몰 웹 사이트. (Firstmall 기반)</div>
        <div>종이액자기업 웹 사이트. (Wordpress 기반)</div>
        <div>쇼핑몰 웹 사이트. (Gnuboard 기반)</div>
        <div>제약, 바이오 화학분야 기업 소개 웹 사이트. (Wordpress 기반)</div>
        <div>플라스마 기술 기업 소개 웹 사이트. (Wordpress 기반)</div>
        <div>흥신소 소개 웹 사이트. (Wordpress 기반)</div>
        {/* <p>독학으로 퍼블리싱을 공부하며 지인들과 함께 팀을 꾸려 다양한 외주작업을 했습니다. Backend 개발자가 없었으므로 WordPress, Gnuboard 등 다양한 프레임워크를 통해 업무를 진행하였습니다.</p> */}
      </ul>
    </InnerLayout>
  )
}

export default FootprintDetail;
