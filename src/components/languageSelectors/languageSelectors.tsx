import React from 'react';

import './languageSelectors.scss';

import useStore from '../../store/useStore';

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
  const onChangeLanguage = useStore((s) => s.changeLanguage);
  const language = useStore((s) => s.language);

  const [currentLang, setCurrentLang] = React.useState('');
  const [LangList, setLangList] = React.useState(false);
  const changeLanguages = (e: React.MouseEvent<HTMLButtonElement>) => {
    const lang = e.currentTarget.dataset.lang;
    if (!lang) return;
    onChangeLanguage(lang);
  };

  const listView = () => {
    setLangList(!LangList);
  };

  const currentLangCheck = React.useCallback((value: string) => {
    switch (value) {
      case 'ko':
        return setCurrentLang('한국어');
      case 'en':
        return setCurrentLang('English');
      default:
        return setCurrentLang('한국어');
    }
  }, []);

  React.useEffect(() => {
    currentLangCheck(language);
  }, [language, currentLangCheck]);

  return (
    <div className='language-selectors-frame'>
      <div className='language-selectors'>
        <div
          className='default-lang'
          role='button'
          tabIndex={0}
          aria-haspopup='listbox'
          aria-expanded={LangList}
          onClick={listView}
          onKeyDown={(e) => {
            if (e.key === 'Enter' || e.key === ' ') {
              e.preventDefault();
              listView();
            }
          }}
        >
          {currentLang}
          {LangList && (
            <div className='lang-list'>
              {languages.map((languages) => (
                <button
                  type='button'
                  key={languages.id}
                  className={language === languages.data ? 'hide' : ''}
                  onClick={changeLanguages}
                  data-lang={languages.data}
                >
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
