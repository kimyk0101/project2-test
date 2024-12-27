import { useState, useEffect, createContext, useContext } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import i18n from "./i18n";

import MainScreen from "./components/MainScreen";
import Header from "./components/Header";
import MenuCategory from "./components/MenuCategory";
import MenuList from "./components/MenuList";
import Cart from "./components/Cart";

function App() {
  const [categoryData, setCategoryData] = useState([]);
  const [setData, setSetData] = useState([]);
  const [cutletData, setCutletData] = useState([]);
  const [noodleData, setNoodleData] = useState([]);
  const [sideData, setSideData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const [
          menuCategoryResponse,
          setListResponse,
          cutletListResponse,
          noodleListResponse,
          sideListResponse,
        ] = await Promise.all([
          fetch(`http://localhost:3000/menuCategory?language=${language}`),
          fetch(`http://localhost:3000/setList?language=${language}`),
          fetch(`http://localhost:3000/cutletList?language=${language}`),
          fetch(`http://localhost:3000/noodleList?language=${language}`),
          fetch(`http://localhost:3000/sideList?language=${language}`),
        ]);

        const data1 = await menuCategoryResponse.json();
        const data2 = await setListResponse.json();
        const data3 = await cutletListResponse.json();
        const data4 = await noodleListResponse.json();
        const data5 = await sideListResponse.json();

        setCategoryData(data1);
        setSetData(data2);
        setCutletData(data3);
        setNoodleData(data4);
        setSideData(data5);
        setAllData(allData);

        setAllMenuLists([...data2, ...data3, ...data4, ...data5]); // 데이터 병합: set, cutlet, noodle, side
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, [language]);

  const [selectedCategory, setSelectedCategory] = useState(null); // 선택된 카테고리(클릭 이벤트)

  const [allMenuLists, setAllMenuLists] = useState([]);

  const boughtItems = allMenuLists.filter((item) => item.isCart > 0);

  // 수량 +1
  const handleIncrement = (itemId) => {
    setAllMenuLists((prevData) =>
      prevData.map((item) =>
        item.id === itemId ? { ...item, isCart: item.isCart + 1 } : item
      )
    );
  };

  // 수량 -1
  const handleDecrease = (itemId) => {
    setAllMenuLists((prevData) =>
      prevData.map((item) =>
        item.id === itemId ? { ...item, isCart: item.isCart - 1 } : item
      )
    );
  };

  // 삭제
  const isCartZero = (itemId) => {
    setAllMenuLists((prevData) =>
      prevData.map((item) =>
        item.id === itemId ? { ...item, isCart: 0 } : item
      )
    );
  };

  // isCart 전체 삭제
  const allCartZero = () => {
    setAllMenuLists(allMenuLists.map((item) => ({ ...item, isCart: 0 })));
  };

  //  코드 1: 메뉴를 직접 선택해도 cart에 수량을 추가할 수 있음
  /*
  const isCart = (itemId) => {
    setAllMenuLists((prevData) =>
      prevData.map((item) =>
        item.id === itemId ? { ...item, isCart: item.isCart + 1 } : item
      )
    );
  };
  */

  //  코드 2: cart에 담기기 전에만 메뉴를 선택해서 수량을 +1하고, 이후에는 cart의 +를 사용해야만 수량이 추가됨
  const isCart = (itemId) => {
    setAllMenuLists((prevData) =>
      prevData.map((item) =>
        item.id === itemId
          ? { ...item, isCart: item.isCart === 0 ? 1 : item.isCart }
          : item
      )
    );
  };

  //  언어 선택
  const [language, setLanguage] = useState("ko");
  const [allData, setAllData] = useState({}); // 모든 데이터를 저장할 상태

  const handleLanguageChange = (newLanguage) => {
    setLanguage(newLanguage);
    i18n.changeLanguage(newLanguage);
  };

  return (
    <div className="App">
      <LanguageContext.Provider value={{ language, handleLanguageChange }}>
        <div>
          <Router>
            <Routes>
              <Route path="/" element={<MainScreen />} />
              <Route
                path="/menu"
                element={
                  <>
                    <Header />
                    <MenuCategory
                      categoryData={categoryData}
                      setSelectedCategory={setSelectedCategory}
                    />
                    <MenuList
                      isCart={isCart}
                      setData={setData}
                      cutletData={cutletData}
                      noodleData={noodleData}
                      sideData={sideData}
                      selectedCategory={selectedCategory}
                    />
                    <Cart
                      items={boughtItems}
                      handleIncrement={handleIncrement}
                      handleDecrease={handleDecrease}
                      isCartZero={isCartZero}
                      allCartZero={allCartZero}
                    />
                  </>
                }
              />
            </Routes>
          </Router>
        </div>
      </LanguageContext.Provider>
    </div>
  );
}

export default App;
