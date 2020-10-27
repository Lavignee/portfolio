import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { changeLanguage } from '../../Modules/LanguageModule';
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
  const dispatch = useDispatch();
  const onChangeLanguage = () => dispatch(changeLanguage(i18n.language));

  const { language } = useSelector(state => ({
    language: state.LanguageModule.language
  }));

  const changeLanguages = e => {
    i18n.changeLanguage(e.target.dataset.lang)
    onChangeLanguage();
  }

  return (
    <div className='language-selectors-frame'>
      <div className='language-selectors'>
        {languages.map(languages => (
          <button key={languages.id} className={language === languages.data ? 'active' : ''} onClick={changeLanguages} data-lang={languages.data}>{languages.text}</button>
        ))
        }
      </div>
    </div>
  );
}

export default LanguageSelectorsComponent;
