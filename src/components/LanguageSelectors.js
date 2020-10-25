import React, { useState } from 'react';
import i18n from "i18next";

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

const LanguageSelectors = () => {
  const [currentLanguages, setcurrentLanguages] = useState(i18n.language);

  const changeLanguages = (e) => {
    i18n.changeLanguage(e.target.dataset.lang)
    setcurrentLanguages(e.target.value)
  }

  return (
    <div>
      <div><b>{currentLanguages}</b></div>
      {languages.map(languages => (
        <div key={languages.id}>
          <button onClick={(e) => changeLanguages(e)} data-lang={languages.data} value={languages.text}>{languages.text}</button>
        </div >
      ))
      }
    </div>
  );
}

export default LanguageSelectors;
