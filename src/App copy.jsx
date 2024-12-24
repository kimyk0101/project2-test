// import './App.css'
import { useState, useEffect } from "react";

import Header from "./components/Header";
import MenuCategory from "./components/MenuCategory copy";
import MenuList from "./components/MenuList";
import Cart from "./components/Cart";

function App() {
  const [menuData, setMenuData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [selectedCategory, setSelectedCategory] = useState(null); // 선택된 카테고리

  const fetchData = async (url) => {
    try {
      const response = await fetch(url);
      const data = await response.json();
      return data;
    } catch (error) {
      console.error("Error fetching data:", error);
      return []; // 에러 발생 시 빈 배열 반환
    }
  };

  useEffect(() => {
    const fetchAllData = async () => {
      if (!selectedCategory) return; // 선택된 카테고리가 없으면 함수 종료
      try {
        const [
          menuCategoryData,
          setListData,
          cutletListData,
          noodleListData,
          sideListData,
        ] = await Promise.all(
          // fetchData("http://localhost:3000/menuCategory"),
          // fetchData("http://localhost:3000/setList"),
          // fetchData("http://localhost:3000/cutletList"),
          // fetchData("http://localhost:3000/noodleList"),
          // fetchData("http://localhost:3000/sideList"),
          fetchData(`http://localhost:3000/categories/${selectedCategory}`)
        );

        // 데이터 병합 (예시)
        const combinedData = [
          ...menuCategoryData,
          ...setListData,
          ...cutletListData,
          ...noodleListData,
          ...sideListData,
        ];

        setMenuData(combinedData);
        setIsLoading(false);
      } catch (error) {
        console.error("Error fetching data:", error);
        setIsLoading(false); // 에러 발생 시에도 로딩 상태 해제
      }
    };

    fetchAllData();
  }, [selectedCategory]);

  const filterMenuList = (categoryId) => {
    return menuData.filter((item) => item.category === categoryId);
  };

  const filteredList = filterMenuList(selectedCategory);

  const boughtItems = menuData.filter((item) => item.isCart > 0);
  const handleIncrement = (itemId) => {
    setMenuData(
      menuData.map((item) =>
        item.id === itemId ? { ...item, isCart: item.isCart + 1 } : item
      )
    );
  };
  const handleDecrease = (itemId) => {
    setMenuData(
      menuData.map((item) =>
        item.id === itemId ? { ...item, isCart: item.isCart - 1 } : item
      )
    );
  };
  const isCartZero = (itemId) => {
    setMenuData(
      menuData.map((item) =>
        item.id === itemId ? { ...item, isCart: 0 } : item
      )
    );
  };
  const allCartZero = () => {
    setMenuData(menuData.map((item) => ({ ...item, isCart: 0 })));
  };

  const isCart = (itemId) => {
    setMenuData(
      menuData.map((item) =>
        item.id === itemId ? { ...item, isCart: item.isCart + 1 } : item
      )
    );
  };

  return (
    <div className="App">
      <Header />
      <MenuCategory
        menuData={menuData}
        setSelectedCategory={setSelectedCategory}
      />
      <MenuList isCart={isCart} filteredList={filteredList} />
      <Cart
        items={boughtItems}
        handleIncrement={handleIncrement}
        handleDecrease={handleDecrease}
        isCartZero={isCartZero}
        allCartZero={allCartZero}
      ></Cart>
    </div>
  );
}

export default App;
