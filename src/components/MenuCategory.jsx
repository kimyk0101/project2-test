import PropTypes from "prop-types";
// import styled from "styled-components";

// const Wrapping = styled.div`
//   width: 100%;
//   height: 100px;
//   background-color: pink;
//   text-align: center;
//   line-height: 100px;
// `;
// const CategoryBox = styled.span`
//   width: 300px;
//   height: 100px;
//   background-color: lightblue;
//   border: 2px solid black;
//   border-radius: 10px;
// `;
function MenuCategory({ menuCategory, setSelectedCategory }) {
  return (
    <article>
      {/* 메뉴 카테고리 리스트 */}
      <ul>
        {menuCategory.map((category) => (
          <li //  CategoryBox
            key={category.category}
            onClick={() => setSelectedCategory(category.category)}
          >
            {category.title}
          </li> //  CategoryBox
        ))}
      </ul>
    </article> //  Wrapping
  );
}
MenuCategory.propTypes = {
  menuCategory: PropTypes.array,
  setSelectedCategory: PropTypes.func,
};
export default MenuCategory;
