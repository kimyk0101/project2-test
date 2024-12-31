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
          "delete": "삭제",
          "deleteAll": "전체삭제",
          "payment": "결제",
          "won": "원",
          "items": "개",
          "payment screen": "결제 화면",
          "payment option": "결제 수단 선택",
          "card": "카드",
          "cash": "현금",
          "qr": "QR 코드",
          "pay": "결제하기",
          "processing payment": "결제 처리 중...",
          "close": "닫기",
          "order details": "주문 내역",
          "orderAmonut": "주문 수량",
          "orderPrice": "주문 금액",
          "orderNumber": "주문 번호",
          "date": "주문 날짜",
          "purchaseList": "구매 목록",
        },
        en: {
          "title": "HA.MI DONKATSU",
          "cart": "cart",
          "totalAmount": "totalAmount : ",
          "totalPrice": "totalPrice : ",
          "delete": "delete",
          "deleteAll": "deleteAll",
          "payment": "payment",
          "won": "won",
          "items": "",
          "payment screen": "Payment Screen",
          "payment option": "Select Payment Option",
          "card": "Credit Card",
          "cash": "Cash",
          "qr": "QR Code",
          "pay": "Pay",
          "processing payment": "Processing Payment...",
          "close": "Close",
          "order details": "Order Details",
          "orderAmonut": "Quantity Ordered",
          "orderPrice": "Order Amount",
          "orderNumber": "Order Number",
          "date": "Order Date",
          "purchaseList": "Purchase List",
        },
        jp: {
          "title": "HA.MI DONKATSU",
          "cart": "カート",
          "totalAmount": "ごうけいすうりょう",
          "totalPrice": "ごうけいきんがく",
          "delete": "さくじょ",
          "deleteAll": "すべてさくじょ",
          "payment": "けっさい",
          "won": "ウォン",
          "items": "",
          "payment screen": "ケッセイ がめん",
          "payment option": "ケッセイ ほうほう せんたく",
          "card": "カード",
          "cash": "ゲンキン",
          "qr": "QRコード",
          "pay": "ケッセイ する",
          "processing payment": "ケッセイ ショリ チュウデス...",
          "close": "トジル",
          "order details": "チュウモン リレキ",
          "orderAmonut": "チュウモン スウリョウ",
          "orderPrice": "チュウモン キングカク",
          "orderNumber": "チュウモン バンゴウ",
          "date": "チュウモン ニチジ",
          "purchaseList": "コウニュウ リスト",
        }
      },
    lng: 'ko', // 기본 언어
    fallbackLng: 'ko', // 번역이 없는 경우 대체 언어
  });

export default i18n;