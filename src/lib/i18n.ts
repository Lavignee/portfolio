// src/lib/i18n.ts
import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

import ko from '@/locales/ko/common.json';
import en from '@/locales/en/common.json';

const resources = {
  en: {
    translation: en,
  },
  ko: {
    translation: ko,
  },
};

i18n.use(initReactI18next).init({
  resources,
  lng: 'ko', // 기본 언어
  fallbackLng: 'ko',

  keySeparator: false, // 'home.title' 같은 nested key 안 쓰면 false
  interpolation: {
    escapeValue: false, // react가 XSS 알아서 막아줌
  },
});

export default i18n;
