import { useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useTranslation } from "react-i18next";
import i18n from "/src/i18n";

function MainScreen() {
  const navigate = useNavigate();

  // 화면 터치 시 다음 화면으로 이동
  const handleTouch = () => {
    navigate("/menu"); // 메뉴 화면으로 이동
  };

  const [selectedLanguage, setSelectedLanguage] = useState("ko"); // 기본언어는 한국어 설정

  // 다국어 데이터
  const languageData = {
    // 한국어
    ko: {
      message: "화면을 터치하여 메뉴로 이동",
      play: "재생",
      pause: "정지",
      languages: "언어 선택",
    },
    // 영어
    en: {
      message: "Touch the screen to go the menu",
      play: "play",
      pause: "Pause",
      languages: "Select Language",
    },
  };

  // const handleLanguageChange = (language) => {
  //   i18n.changeLanguage(language); // 선택된 언어로 변경
  //   setSelectedLanguage(language); // 상태 업데이트
  // };


    // 언어 선택 이벤트 처리
    const handleLanguageChange = (language) => {
      setSelectedLanguage(language);
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
        <span style={{ fontWeight: "bold", marginBottom: "5px" }}>
          {languageData[selectedLanguage].languages}
        </span>
        {Object.keys(languageData).map((language) => (
          <button
            key={language}
            style={{
              backgroundColor:
                selectedLanguage === language ? "#FFD700" : "#fff",
              color: selectedLanguage === language ? "#000" : "#000",
              border: "none",
              padding: "10px",
              borderRadius: "5px",
              cursor: "pointer",
            }}
            onClick={(e) => {
              e.stopPropagation(); //  언어 선택 후 바로 메뉴 화면으로 넘어가지 않도록
              handleLanguageChange(language);
            }}
          >
            {language}
          </button>
        ))}
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
        {" "}
        {languageData[selectedLanguage].message}
      </div>
    </div>
  );
}
export default MainScreen;
