import React from 'react';
import { changeLanguage } from '../../Modules/commonValue';
import { useDispatch, useSelector, shallowEqual } from 'react-redux';

import './languageSelectors.scss';

import i18n from 'i18next';
import { RootState } from '../../Modules';

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
  const dispatch = useDispatch();
  const onChangeLanguage = React.useCallback((lang) => dispatch(changeLanguage(lang)), []);
  const [language] = useSelector(
    (state: RootState) => [state.CommonValue.language],
    shallowEqual
  );

  const [currentLang, setCurrentLang] = React.useState('');
  const [LangList, setLangList] = React.useState(false);
  const changeLanguages = (e: any) => {
    i18n.changeLanguage(e.target.dataset.lang);
    onChangeLanguage(e.target.dataset.lang);
  };

  const listView = () => {
    setLangList(!LangList);
  };

  const currentLangCheck = (value: string) => {
    switch (value) {
      case 'ko':
        return setCurrentLang('한국어');
      case 'en':
        return setCurrentLang('English');
      default:
        return setCurrentLang('한국어');
    }
  };

  React.useEffect(() => {
    currentLangCheck(language);
  }, [language]);

  return (
    <div className='language-selectors-frame'>
      <div className='language-selectors'>
        <div className='default-lang' onClick={listView}>
          {currentLang}
          {LangList && (
            <div className='lang-list'>
              {languages.map((languages) => (
                <button
                  key={languages.id}
                  className={language === languages.data ? 'hide' : ''}
                  onClick={changeLanguages}
                  data-lang={languages.data}>
                  {languages.text}
                </button>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default LanguageSelectors;
