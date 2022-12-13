import React, { useContext } from "react";
import OrderItem from "@components/OrderItem";
import AppContext from "@context/AppContext";
import "@styles/MyOrder.scss";
import icon_arrow from "@images/icons/flechita.svg";

const MyOrder = () => {
  const { state } = useContext(AppContext);
  const sumTotal = () => {
    const reducer = (amount, currentValue) => amount + currentValue.price;
    const sum = state.cart.reduce(reducer, 0);
    return sum;
  };
  return (
    <aside className="MyOrder">
      <div className="title-container">
        <img src={icon_arrow} alt="arrow" />
        <p className="title">My order</p>
      </div>
      <div className="my-order-content">
        {state.cart.map((product, index) => (
          <OrderItem indexValue={index} key={index} product={product} />
        ))}

        <div className="order">
          <p>
            <span>Total</span>
          </p>
          <p>${sumTotal()}</p>
        </div>
        <button className="primary-button">Checkout</button>
      </div>
    </aside>
  );
};

export default MyOrder;
