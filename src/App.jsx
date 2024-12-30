import { useState, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import MainScreen from "/src/components/MainScreen";
import Header from "/src/components/Header";
import MenuCategory from "/src/components/MenuCategory";
import MenuList from "/src/components/MenuList";
import Cart from "/src/components/Cart";
import ENHeader from "/src/components/ENHeader";
import ENMenuCategory from "/src/components/ENMenuCategory";
import ENMenuList from "/src/components/ENMenuList";
import ENCart from "/src/components/ENCart";

function App() {
  const [categoryData, setCategoryData] = useState([]);
  const [setData, setSetData] = useState([]);
  const [cutletData, setCutletData] = useState([]);
  const [noodleData, setNoodleData] = useState([]);
  const [sideData, setSideData] = useState([]);
  const [ENcategoryData, setENCategoryData] = useState([]);
  const [ENsetData, setENSetData] = useState([]);
  const [ENcutletData, setENCutletData] = useState([]);
  const [ENnoodleData, setENNoodleData] = useState([]);
  const [ENsideData, setENSideData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const [
          menuCategoryResponse,
          setListResponse,
          cutletListResponse,
          noodleListResponse,
          sideListResponse,
          ENmenuCategoryResponse,
          ENsetListResponse,
          ENcutletListResponse,
          ENnoodleListResponse,
          ENsideListResponse,
        ] = await Promise.all([
          fetch("http://localhost:3000/menuCategory"),
          fetch("http://localhost:3000/setList"),
          fetch("http://localhost:3000/cutletList"),
          fetch("http://localhost:3000/noodleList"),
          fetch("http://localhost:3000/sideList"),
          fetch("http://localhost:3000/en-menuCategory"),
          fetch("http://localhost:3000/en-setList"),
          fetch("http://localhost:3000/en-cutletList"),
          fetch("http://localhost:3000/en-noodleList"),
          fetch("http://localhost:3000/en-sideList"),
        ]);

        const data1 = await menuCategoryResponse.json();
        const data2 = await setListResponse.json();
        const data3 = await cutletListResponse.json();
        const data4 = await noodleListResponse.json();
        const data5 = await sideListResponse.json();
        const data6 = await ENmenuCategoryResponse.json();
        const data7 = await ENsetListResponse.json();
        const data8 = await ENcutletListResponse.json();
        const data9 = await ENnoodleListResponse.json();
        const data10 = await ENsideListResponse.json();


        setCategoryData(data1);
        setSetData(data2);
        setCutletData(data3);
        setNoodleData(data4);
        setSideData(data5);
        setENCategoryData(data6);
        setENSetData(data7);
        setENCutletData(data8);
        setENNoodleData(data9);
        setENSideData(data10);

        setAllMenuLists([...data2, ...data3, ...data4, ...data5]); // 데이터 병합: set, cutlet, noodle, side
        setENAllMenuLists([...data7, ...data8, ...data9, ...data10]); // 데이터 병합: ENset, ENcutlet, ENnoodle, ENside
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);

  const [selectedCategory, setSelectedCategory] = useState(null); // 선택된 카테고리(클릭 이벤트)

  const [allMenuLists, setAllMenuLists] = useState([]);
  const [ENallMenuLists, setENAllMenuLists] = useState([]);

  const boughtItems = allMenuLists.filter((item) => item.isCart > 0);
  const ENboughtItems = ENallMenuLists.filter((item) => item.isCart > 0);

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

  // 수량 +1
  const ENhandleIncrement = (itemId) => {
    setENAllMenuLists((prevData) =>
      prevData.map((item) =>
        item.id === itemId ? { ...item, isCart: item.isCart + 1 } : item
      )
    );
  };

  // 수량 -1
  const ENhandleDecrease = (itemId) => {
    setENAllMenuLists((prevData) =>
      prevData.map((item) =>
        item.id === itemId ? { ...item, isCart: item.isCart - 1 } : item
      )
    );
  };

  // 삭제
  const ENisCartZero = (itemId) => {
    setENAllMenuLists((prevData) =>
      prevData.map((item) =>
        item.id === itemId ? { ...item, isCart: 0 } : item
      )
    );
  };

  // isCart 전체 삭제
  const ENallCartZero = () => {
    setENAllMenuLists(allMenuLists.map((item) => ({ ...item, isCart: 0 })));
  };

  //  코드 1: 메뉴를 직접 선택해도 cart에 수량을 추가할 수 있음
  /*
  const ENisCart = (itemId) => {
    setENAllMenuLists((prevData) =>
      prevData.map((item) =>
        item.id === itemId ? { ...item, isCart: item.isCart + 1 } : item
      )
    );
  };
  */

  //  코드 2: cart에 담기기 전에만 메뉴를 선택해서 수량을 +1하고, 이후에는 cart의 +를 사용해야만 수량이 추가됨
  const ENisCart = (itemId) => {
    setENAllMenuLists((prevData) =>
      prevData.map((item) =>
        item.id === itemId
          ? { ...item, isCart: item.isCart === 0 ? 1 : item.isCart }
          : item
      )
    );
  };

  return (
    <div className="App">
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
          <Route
            path="/ENmenu"
            element={
              <>
                <ENHeader />
                <ENMenuCategory
                  categoryData={ENcategoryData}
                  setSelectedCategory={setSelectedCategory}
                />
                <ENMenuList
                  isCart={ENisCart}
                  setData={ENsetData}
                  cutletData={ENcutletData}
                  noodleData={ENnoodleData}
                  sideData={ENsideData}
                  selectedCategory={selectedCategory}
                />
                <ENCart
                  items={ENboughtItems}
                  handleIncrement={ENhandleIncrement}
                  handleDecrease={ENhandleDecrease}
                  isCartZero={ENisCartZero}
                  allCartZero={ENallCartZero}
                />
              </>
            }
          />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
