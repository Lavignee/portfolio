import React from 'react';

const languages = [
  {
    id: 1,
    text: '한국어',
    select: true
  },
  {
    id: 2,
    text: 'English',
    select: false
  },
];

const LanguageSelectors = () => {
  return (
    <div>
      {languages.map(languages => (
        <div key={languages.id}>
          {languages.select && (
            <span><b>{languages.text}</b></span>
          )}
          <span>{languages.text}</span>
        </div >
      ))
      }
    </div>
  );
}

export default LanguageSelectors;
