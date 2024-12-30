import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import '../db.json';
import i18nData from '../i18n.json';
import LanguageDetector from 'i18next-browser-languagedetector';

i18n
  .use(LanguageDetector)  //  브라우저의 언어 설정을 기반으로 자동으로 언어를 감지
  .use(initReactI18next)  
  .init({
    resources: {
        ko: {
          translation: {
            ...i18nData.ko.translation,
          },
        },
        en: {
          translation: {
            ...i18nData.en.translation,
          },
        }
      },
    lng: 'ko', // 기본 언어
    fallbackLng: 'ko', // 번역이 없는 경우 대체 언어
  });

export default i18n;