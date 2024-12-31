// eslint-disable react/prop-types
// import { useMemo } from "react";
import { CountdownCircleTimer } from "react-countdown-circle-timer";
import PropTypes from "prop-types";
import styled from "styled-components";

const Timer = styled.div`
  font-family: "Montserrat";
  display: flex;
  flex-direction: column;
  align-items: center;
`;
const Text = styled.span`
  color: #aaa;
`;
const Value = styled.span`
  font-size: 40px;
`;
const renderTime = ({ remainingTime }) => {
  return (
    <Timer>
      <Text>
        {remainingTime === 0
          ? "You will be redirected to the home page."
          : "Payment complete."}
      </Text>
      {remainingTime !== 0 && (
        <>
          <Text>Thank you.</Text>
          <Value>{remainingTime}</Value>
        </>
      )}
    </Timer>
  );
};

function PaymentSuccess({ orderDetails }) {
  // const totalPrice = useMemo(() => {
  //   if (!orderDetails || !orderDetails.items) return 0;
  //   return orderDetails.items.reduce(
  //     (sum, item) => sum + (item.price || 0) * (item.count || 0),
  //     0
  //   );
  // }, [orderDetails]);

  if (!orderDetails) {
    return <div>Retrieving order information...</div>;
  }

  return (
    <div className="payment-success">
      <h2>Payment complete!</h2>
      <CountdownCircleTimer
        isPlaying
        duration={10}
        colors={["#004777", "#F7B801", "#A30000", "#A30000"]}
        colorsTime={[7, 5, 2, 0]}
      >
        {renderTime}
        {/* {({ remainingTime }) => remainingTime} */}
      </CountdownCircleTimer>
      <div className="order-summary">
        <h3>Order Summary</h3>
        <p>Order Number : {orderDetails.id || "정보 없음"}</p>
        <p>Order Date and Time : {orderDetails.date || "정보 없음"}</p>
        <p>Total Amount : {orderDetails.totalPrice}won</p>
        <h4>Order Details :</h4>
        <ul>
          {orderDetails.items?.map((item) => (
            <li key={item.id}>
              {item.name} - {item.isCart} (
              {(item.isCart * item.price || 0).toLocaleString()}won)
            </li>
          )) || <li>No items in order.</li>}
        </ul>
      </div>
    </div>
  );
}

PaymentSuccess.propTypes = {
  orderDetails: PropTypes.oneOfType([PropTypes.object, PropTypes.array]),
};

export default PaymentSuccess;
