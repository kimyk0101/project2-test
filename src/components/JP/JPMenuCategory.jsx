import PropTypes from "prop-types";
import styled from "styled-components";

/* styled-components */
const Wrapping = styled.div`
  // border: 1px solid black;
  width: 1360px;
  height: 100px;
  background-color: #f47e28;
  text-align: center;
  display: flex;
  justify-content: center;
  align-items: center;
`;
const CategoryBox = styled.span`
  width: 25%;
  height: 100%;
  color: white;
  background-color: #b44b1e;
  // border: 1px solid #f47e28;
  // margin: 0 2px;
  border-radius: 10px;
  font-size: 47px;
  font-weight: bold;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
`;

/* MenuCategory-components */
function MenuCategory({ categoryData, setSelectedCategory }) {
  return (
    <Wrapping>
      {/* 메뉴 카테고리 리스트 */}
      {categoryData.map((item) => (
        <CategoryBox
          key={item.id}
          onClick={() => {
            setSelectedCategory(item.id);
          }}
        >
          {item.title}
        </CategoryBox>
      ))}
    </Wrapping>
  );
}
MenuCategory.propTypes = {
  categoryData: PropTypes.array,
  setSelectedCategory: PropTypes.func,
};
export default MenuCategory;
