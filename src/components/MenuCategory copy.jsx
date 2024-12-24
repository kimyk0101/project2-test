import PropTypes from "prop-types";

function MenuCategory({ menuData, setSelectedCategory }) {
  return (
    <article>
      {/* 메뉴 카테고리 리스트 */}
      <ul>
        {menuData.map((category) => (
          <li //  CategoryBox
            key={category.id}
            onClick={() => setSelectedCategory(category.id)}
          >
            {category.title}
          </li> //  CategoryBox
        ))}
      </ul>
    </article> //  Wrapping
  );
}
MenuCategory.propTypes = {
  menuData: PropTypes.array,
  setSelectedCategory: PropTypes.func,
};
export default MenuCategory;
