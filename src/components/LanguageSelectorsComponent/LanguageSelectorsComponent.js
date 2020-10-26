import React, { useState } from 'react';
import i18n from "i18next";
import './LanguageSelectorsComponent.scss';

const languages = [
  {
    id: 1,
    text: '한국어',
    data: 'ko',
  },
  {
    id: 2,
    text: 'English',
    data: 'en',
  },
];


const LanguageSelectorsComponent = () => {
  const [currentLanguages, setcurrentLanguages] = useState(i18n.language);

  const changeLanguages = (e) => {
    i18n.changeLanguage(e.target.dataset.lang)
    setcurrentLanguages(e.target.dataset.lang)
  }

  return (
    <div className='language-selectors-frame'>
      <div className='language-selectors'>
        {/* <span>{currentLanguages === 'en' ? 'English' : '한국어'}</span> */}
        {languages.map(languages => (
          <button key={languages.id} className={currentLanguages === languages.data ? 'active' : ''} onClick={(e) => changeLanguages(e)} data-lang={languages.data}>{languages.text}</button>
        ))
        }
      </div>
    </div>
  );
}

export default LanguageSelectorsComponent;
