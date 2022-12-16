import React, { useContext, useState } from "react";
import AppContext from "@context/AppContext";
import "@styles/ProductItem.scss";
import add_cart from "@images/icons/bt_add_to_cart.svg";
import added_cart from "@images/icons/bt_added_to_cart.svg";
import close_icon from "@images/icons/icon_close.png";

const ProductItem = ({ product }) => {
  const { addToCart, state } = useContext(AppContext);
  const itsProductAdded = () =>
    state.cart.some((item) => item.id === product.id);
  const handleClick = (item) => {
    addToCart(item);
  };
  const validateImage = (image) => {
    if (/^https:\/\/api\.lorem\.space\/image*/i.test(image)) {
      return image;
    }
    return close_icon;
  };

  return (
    <div className="ProductItem">
      <img src={validateImage(product.images[0])} alt={product.title} />
      <div className="product-info">
        <div>
          <p>${product.price}</p>
          <p>{product.title}</p>
        </div>
        <figure onClick={() => handleClick(product)}>
          {itsProductAdded() ? (
            <img src={added_cart} alt="Addeed to cart" />
          ) : (
            <img src={add_cart} alt="Add to cart" />
          )}
        </figure>
      </div>
    </div>
  );
};

export default ProductItem;
