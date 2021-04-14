import React, { useState, useEffect } from 'react';
import './LanguageSelectorsComponent.scss';
import { useDispatch, useSelector, shallowEqual } from 'react-redux';
import { changeLanguage } from '../../modules/CommonValueModule';
import i18n from 'i18next';

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
  const onChangeLanguage = (lang) => dispatch(changeLanguage(lang));
  const [language] = useSelector(state => [state.CommonValueModule.language], shallowEqual);

  const [currentLang, setCurrentLang] = useState('');
  const [LangList, setLangList] = useState(false);
  const changeLanguages = e => {
    i18n.changeLanguage(e.target.dataset.lang)
    onChangeLanguage(e.target.dataset.lang);
  }

  const listView = () => {
    setLangList(!LangList)
  }

  const currentLangCheck = (value) => {
    switch (value) {
      case 'ko':
        return setCurrentLang('한국어')
      case 'en':
        return setCurrentLang('English')
      default:
        return setCurrentLang('한국어')
    }
  }

  useEffect(() => {
    currentLangCheck(language);
  }, [language]);

  return (
    <div className='language-selectors-frame'>
      <div className='language-selectors'>
        <div className='default-lang' onClick={listView}>
          {currentLang}
          {LangList && (
            <div className='lang-list'>
              {languages.map(languages => (
                <button key={languages.id} className={language === languages.data ? 'hide' : ''} onClick={changeLanguages} data-lang={languages.data}>{languages.text}</button>
              ))
              }
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default LanguageSelectorsComponent;
