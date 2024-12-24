import PropTypes from "prop-types";
import { useState, useEffect } from "react";
function Cart({
  items,
  handleIncrement,
  handleDecrease,
  isCartZero,
  allCartZero,
}) {
  const [totalPrice, setTotalPrice] = useState(0);
  useEffect(() => {
    const calculateTotalPrice = () => {
      const totalP = items.reduce(
        (acc, item) => acc + item.price * item.isCart,
        0
      );
      setTotalPrice(totalP);
    };
    calculateTotalPrice();
  }, [items]); // 마지막의 [items] = 의존성 배열, useEffect가 items 배열의 변화에만 반응하도록 설정하는 것
  const [totalAmount, setTotalAmount] = useState(0);
  useEffect(() => {
    const calculateTotalAmount = () => {
      const totalA = items.reduce(
        (acc, item) => acc + parseInt(item.isCart),
        0
      );
      setTotalAmount(totalA);
    };
    calculateTotalAmount();
  }, [items]);
  const onIncrement = (itemId) => {
    handleIncrement(itemId);
  };
  const onDecrease = (itemId) => {
    handleDecrease(itemId);
  };
  const makeCartZero = (itemId) => {
    isCartZero(itemId);
  };
  const makeAllZero = () => {
    allCartZero();
  };
  return (
    <div>
      <h2>주문수량: {totalAmount}개</h2>
      <h2>총 금액: {totalPrice}원</h2>
      <ul>
        {items.map((item) => (
          <li key={item.id}>
            {item.name}
            <button onClick={() => onDecrease(item.id)}>-</button>
            {item.isCart}
            <button onClick={() => onIncrement(item.id)}>+</button>
            <button onClick={() => makeCartZero(item.id)}>삭제</button>
          </li>
        ))}
      </ul>
      <button onClick={() => makeAllZero()}>전체삭제</button>
      <button>결제</button>
    </div>
  );
}
Cart.propTypes = {
  items: PropTypes.array,
  handleIncrement: PropTypes.func,
  handleDecrease: PropTypes.func,
  isCartZero: PropTypes.func,
  allCartZero: PropTypes.func,
};
export default Cart;
