import React, { useContext } from "react";
import AppContext from "@context/AppContext";
import "@styles/OrderItem.scss";
import icon_close from "@images/icons/icon_close.png";

const OrderItem = (props) => {
  const { indexValue, product } = props;
  const { removeFromCart } = useContext(AppContext);
  const handleRemove = (index) => {
    removeFromCart(index);
  };
  return (
    <div className="OrderItem">
      <figure>
        <img src={product.images[0]} alt={product.title} />
      </figure>
      <p>{product.title}</p>
      <p>${product.price}</p>
      <img
        src={icon_close}
        alt="close"
        onClick={() => handleRemove(indexValue)}
      />
    </div>
  );
};

export default OrderItem;
