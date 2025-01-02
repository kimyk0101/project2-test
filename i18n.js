import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';

i18n
  .use(LanguageDetector)  //  브라우저의 언어 설정을 기반으로 자동으로 언어를 감지
  .use(initReactI18next)  
  .init({
    resources: {
        ko: {
          "title": "HA.MI 돈카츠",
          "cart": "장바구니",
          "totalAmount": "주문수량 : ",
          "totalPrice": "총 금액 : ",
        },
        en: {
          "title": "HA.MI DONKATSU",
          "cart": "cart",
          "totalAmount": "totalAmount : ",
          "totalPrice": "totalPrice : ",
        },
        jp: {
          "title": "HA.MI DONKATSU",
          "cart": "カート",
          "totalAmount": "ごうけいすうりょう",
          "totalPrice": "ごうけいきんがく",
        }
      },
    lng: 'ko', // 기본 언어
    fallbackLng: 'ko', // 번역이 없는 경우 대체 언어
  });

export default i18n;