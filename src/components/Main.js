import React from 'react';
import Layout from '../composition/layout';
import { Trans, withTranslation } from 'react-i18next';

const Main = () => {
  return (
    <Layout className='card'>
      <div><Trans i18nKey='greeting1'>프론트 앤드 개발자</Trans></div>
      <p><Trans i18nKey='greeting2'>2016년부터 FrontEnd 개발과 기획 업무를 병행해온 4년 차 개발자 '이도영'입니다. </Trans></p>
    </Layout>
  )
}

export default withTranslation("translations")(Main);
