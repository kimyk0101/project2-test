import { useState } from "react";
import { useNavigate } from "react-router-dom";
import i18n from "/src/i18n.js";
import { useTranslation } from "react-i18next";

function MainScreen() {
  const navigate = useNavigate();
  const { t } = useTranslation();

  // 화면 터치 시 다음 화면으로 이동
  const handleTouch = () => {
    navigate("/menu"); // 메뉴 화면으로 이동
  };

  const [selectedLanguage, setSelectedLanguage] = useState("ko"); // 기본언어는 한국어 설정

  const handleLanguageChange = (language) => {
    i18n.changeLanguage(language); // 선택된 언어로 변경
    setSelectedLanguage(language); // 상태 업데이트
  };

  return (
    <div
      onClick={handleTouch}
      style={{
        position: "relative",
        width: "100%",
        height: "100vh",
        overflow: "hidden",
        cursor: "pointer",
      }}
    >
      {/* 언어 선택 */}
      <div>
        <button
          onClick={(e) => {
            e.stopPropagation(); //  언어 선택 후 바로 메뉴 화면으로 넘어가지 않도록
            handleLanguageChange("ko");
          }}
          style={{
            backgroundColor: selectedLanguage === "ko" ? "#FFD700" : "#fff",
            color: selectedLanguage === "ko" ? "#000" : "#000",
            border: "1px, solid, black",
            padding: "10px",
            borderRadius: "5px",
            cursor: "pointer",
          }}
        >
          {t("translations:languages")}
        </button>
        <button
          onClick={(e) => {
            e.stopPropagation();
            handleLanguageChange("en");
          }}
          style={{
            backgroundColor: selectedLanguage === "en" ? "#FFD700" : "#fff",
            color: selectedLanguage === "en" ? "#000" : "#000",
            border: "1px, solid, black",
            padding: "10px",
            borderRadius: "5px",
            cursor: "pointer",
          }}
        >
          {t("translations:languages")}
        </button>
      </div>
      {/* 안내 텍스트 */}
      <div
        style={{
          position: "absolute",
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%)",
          color: "#fff",
          textAlign: "center",
          fontSize: "2rem",
          fontWeight: "bold",
          backgroundColor: "rgba(0, 0, 0, 0.5)",
          padding: "20px",
          borderRadius: "10px",
        }}
      >
        {t(`${selectedLanguage}:translations:message`)}
      </div>
    </div>
  );
}
export default MainScreen;
