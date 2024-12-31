/* eslint-disable react/prop-types */
import PropTypes from "prop-types";
// import { useMemo } from "react";

function OrderHistory({ orders }) {
  return (
    <div className="order-history">
      <h2>Order Details</h2>

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
        <strong>Quantity Ordered : {order.totalAmount}</strong>
        <br />
        <strong>Order Amount : {order.totalPrice}won</strong>
      </p>
      <h3>Order Number : {order.id}</h3>

      <p>Order Date : {order.date2}</p>
      <h4>Purchase List</h4>
      <ul>
        {order.items.map((item) => (
          <li key={item.id}>
            {item.name} - {item.isCart} ({item.price * item.isCart}won)
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
