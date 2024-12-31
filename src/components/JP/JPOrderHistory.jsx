/* eslint-disable react/prop-types */
import PropTypes from "prop-types";
// import { useMemo } from "react";

function OrderHistory({ orders }) {
  return (
    <div className="order-history">
      <h2>チュウモン リレキ</h2>

      {orders.map((order) => (
        <OrderItem key={order.id} order={order} />
      ))}
    </div>
  );
}

function OrderItem({ order }) {
  return (
    <div className="order-item">
      <p>
        <strong>チュウモン スウリョウ : {order.totalAmount}</strong>
        <br />
        <strong>チュウモン キングカク : {order.totalPrice}ウォン</strong>
      </p>
      <h3>チュウモン バンゴウ : {order.id}</h3>

      <p>チュウモン ニチジ : {order.date2}</p>
      <h4>コウニュウ リスト</h4>
      <ul>
        {order.items.map((item) => (
          <li key={item.id}>
            {item.name} - {item.isCart} ({item.price * item.isCart}ウォン)
          </li>
        ))}
      </ul>
    </div>
  );
}

OrderHistory.propTypes = {
  orders: PropTypes.array,
};

export default OrderHistory;
