import PropTypes from "prop-types";
function MenuList({ isCart, filteredList }) {
  const toCart = (itemId) => {
    isCart(itemId);
  };
  return (
    <article>
      {/* 선택된 카테고리의 메뉴 목록 */}
      <ul>
        {filteredList.map((item) => (
          <li key={item.id} onClick={() => toCart(item.id)}>
            {item.name} - {item.price}원
          </li>
        ))}
      </ul>
    </article>
  );
}
MenuList.propTypes = {
  isCart: PropTypes.func,
  filteredList: PropTypes.array,
};
export default MenuList;
