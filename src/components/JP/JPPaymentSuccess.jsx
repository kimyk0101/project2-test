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
          ? "トップページに戻ります。"
          : "お支払いが完了しました"}
      </Text>
      {remainingTime !== 0 && (
        <>
          <Text>ありがとうございます</Text>
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
    return <div>チュウモン ジョウホウ オ シュトク チュウデス...</div>;
  }

  return (
    <div className="payment-success">
      <h2>お支払いが完了しました！</h2>
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
        <h3>ちゅうもんサマリー</h3>
        <p>チュウモン バンゴウ : {orderDetails.id || "정보 없음"}</p>
        <p>チュウモン ニチジ : {orderDetails.date || "정보 없음"}</p>
        <p>ゴウケイ キンガク : {orderDetails.totalPrice}ウォン</p>
        <h4>チュウモン リレキ :</h4>
        <ul>
          {orderDetails.items?.map((item) => (
            <li key={item.id}>
              {item.name} - {item.isCart} (
              {(item.isCart * item.price || 0).toLocaleString()}ウォン)
            </li>
          )) || <li>チュウモン ショウヒン ハ アリマセン。</li>}
        </ul>
      </div>
    </div>
  );
}

PaymentSuccess.propTypes = {
  orderDetails: PropTypes.oneOfType([PropTypes.object, PropTypes.array]),
};

export default PaymentSuccess;
