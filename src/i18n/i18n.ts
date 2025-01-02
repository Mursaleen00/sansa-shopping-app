import { initReactI18next } from 'react-i18next';
import en from './resource/en.json';
import sp from './resource/sp.json';
import i18n from 'i18next';

i18n.use(initReactI18next).init({
  resources: {
    en: {
      translation: en,
    },
    sp: {
      translation: sp,
    },
  },
  fallbackLng: 'en',
  lng: 'en',
  debug: false,
  interpolation: {
    escapeValue: false,
  },
});
export default i18n;
