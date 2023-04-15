import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';
import Backend from 'i18next-http-backend';

i18n
  .use(Backend)
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    debug: false,
    fallbackLng: 'en',
    backend: {
      loadPath: '/so-yummy-frontend/locales/{{lng}}/{{ns}}.json',
    },
  });
i18n.changeLanguage('en');

export default i18n;
