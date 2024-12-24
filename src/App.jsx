// import './App.css'
import { useState } from "react";
import Header from "./components/Header";
import MenuCategory from "./components/MenuCategory";
import MenuList from "./components/MenuList";
import Cart from "./components/Cart";

function App() {
  const menuCategory = [
    { category: 1, title: "세트" },
    { category: 2, title: "돈카츠" },
    { category: 3, title: "면/밥" },
    { category: 4, title: "사이드" },
  ];

  const [setList, setSetList] = useState([
    { id: 1, name: "어린이 세트", price: 9000, isCart: 1 },
    { id: 2, name: "옛날 돈카츠 세트", price: 13000, isCart: 0 },
    { id: 3, name: "왕 돈카츠 세트", price: 13000, isCart: 0 },
    { id: 4, name: "치즈 돈카츠 세트", price: 13000, isCart: 0 },
    { id: 5, name: "등심카츠 세트", price: 13000, isCart: 0 },
    { id: 6, name: "안심카츠 세트", price: 13000, isCart: 0 },
    { id: 7, name: "생선카츠 세트", price: 13000, isCart: 0 },
    { id: 8, name: "로제카츠 세트 ", price: 13000, isCart: 1 },
  ]);

  const [cutletList, setCutletList] = useState([
    { id: 101, name: "옛날 돈카츠", price: 11000, isCart: 0 },
    { id: 102, name: "왕 돈카츠", price: 15000, isCart: 0 },
    { id: 103, name: "치즈 돈카츠", price: 12000, isCart: 2 },
    { id: 104, name: "치킨카츠", price: 11000, isCart: 0 },
    { id: 105, name: "등심카츠", price: 11000, isCart: 0 },
    { id: 106, name: "안심카츠", price: 12000, isCart: 0 },
    { id: 107, name: "생선카츠", price: 11000, isCart: 0 },
    { id: 108, name: "매운 돈카츠", price: 12000, isCart: 0 },
    { id: 109, name: "로제 돈카츠", price: 13000, isCart: 0 },
    { id: 110, name: "함박 스테이크", price: 13000, isCart: 0 },
  ]);

  const [noodleList, setNoodleList] = useState([
    { id: 201, name: "카레우동", price: 8000, isCart: 0 },
    { id: 202, name: "가쓰오우동", price: 8000, isCart: 0 },
    { id: 203, name: "새우우동", price: 8000, isCart: 0 },
    { id: 204, name: "유부우동", price: 8000, isCart: 0 },
    { id: 205, name: "김치우동", price: 8000, isCart: 0 },
    { id: 206, name: "냉소바", price: 7000, isCart: 0 },
    { id: 207, name: "온소바", price: 7000, isCart: 0 },
    { id: 208, name: "오므라이스", price: 10000, isCart: 0 },
    { id: 209, name: "김치볶음밥 ", price: 9000, isCart: 0 },
    { id: 210, name: "새우볶음밥", price: 9000, isCart: 0 },
  ]);

  const [sideList, setSideList] = useState([
    { id: 301, name: "콜라", price: 2000, isCart: 0 },
    { id: 302, name: "사이다", price: 2000, isCart: 0 },
    { id: 303, name: "공깃밥 추가", price: 1000, isCart: 0 },
    { id: 304, name: "스프", price: 1000, isCart: 0 },
    { id: 305, name: "된장국", price: 1000, isCart: 0 },
    { id: 306, name: "새우튀김", price: 3000, isCart: 0 },
    { id: 307, name: "고로케", price: 2500, isCart: 0 },
    { id: 308, name: "소세지", price: 2000, isCart: 0 },
  ]);

  const [selectedCategory, setSelectedCategory] = useState(null); // 선택된 카테고리

  const filterMenuList = (category) => {
    switch (category) {
      case 1:
        return setList;
      case 2:
        return cutletList;
      case 3:
        return noodleList;
      case 4:
        return sideList;
      default:
        return [];
    }
  };

  const filteredList = filterMenuList(selectedCategory); //  선택된 카테고리의 메뉴 리스트만 필터링

  const [allMenuLists, setAllMenuLists] = useState([
    ...setList,
    ...cutletList,
    ...noodleList,
    ...sideList,
  ]);

  const boughtItems = allMenuLists.filter((item) => item.isCart != 0);
  const handleIncrement = (itemId) => {
    setAllMenuLists(
      allMenuLists.map((item) =>
        item.id === itemId ? { ...item, isCart: item.isCart + 1 } : item
      )
    );
  };
  const handleDecrease = (itemId) => {
    setAllMenuLists(
      allMenuLists.map((item) =>
        item.id === itemId ? { ...item, isCart: item.isCart - 1 } : item
      )
    );
  };
  const isCartZero = (itemId) => {
    setAllMenuLists(
      allMenuLists.map((item) =>
        item.id === itemId ? { ...item, isCart: 0 } : item
      )
    );
  };
  const allCartZero = () => {
    setAllMenuLists(allMenuLists.map((item) => ({ ...item, isCart: 0 })));
  };

  const isCart = (itemId) => {
    setAllMenuLists(
      allMenuLists.map((item) =>
        item.id === itemId ? { ...item, isCart: item.isCart + 1 } : item
      )
    );
  };

  return (
    <div className="App">
      <Header />
      <MenuCategory
        menuCategory={menuCategory}
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
