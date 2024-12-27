import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import translationEN from "/src/lang/en.json";
import translationKO from "/src/lang/ko.json";
import Backend from 'i18next-http-backend';
import LanguageDetector from 'i18next-browser-languagedetector';

const resources = {
  en: {
    translation: translationEN
  },
  ko: {
    translation: translationKO
  }
};

i18n
  .use(Backend) // 서버에서 JSON 파일을 가져오기 위한 백엔드 모듈
  .use(LanguageDetector)  //  브라우저의 언어 설정을 기반으로 자동으로 언어를 감지
  .use(initReactI18next)  
  .init({
    resources,
    fallbackLng: 'ko', // 맞는 번역 파일이 없을 경우 사용할 기본 언어
    debug: true,
    interpolation: {
      escapeValue: false // not needed for react!!
    },
    backend: {
      loadPath: '/lang/{{lng}}.json'  //  번역 파일의 경로 ({{lng}} => 언어 변경하면 자동으로 변경)
    }
  });

export default i18n;