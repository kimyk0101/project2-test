import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import menuData from '../db.json';
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
            ...menuTranslations
          },
          menu: menuData // 메뉴 데이터는 별도로 관리
        },
        en: {
          translation: {
            ...i18nData.en.translation,
            ...menuTranslations
          },
          menu: menuData
        }
      },
    lng: 'ko', // 기본 언어
    fallbackLng: 'ko', // 번역이 없는 경우 대체 언어
  });

export default i18n;