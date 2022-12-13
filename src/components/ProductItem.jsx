import React, { useContext, useState } from "react";
import AppContext from "@context/AppContext";
import "@styles/ProductItem.scss";
import add_cart from "@images/icons/bt_add_to_cart.svg";

const ProductItem = ({ product }) => {
  const { addToCart } = useContext(AppContext);
  const handleClick = (item) => {
    addToCart(item);
  };

  return (
    <div className="ProductItem">
      <img src={product.images[0]} alt={product.title} />
      <div className="product-info">
        <div>
          <p>${product.price}</p>
          <p>{product.title}</p>
        </div>
        <figure onClick={() => handleClick(product)}>
          <img src={add_cart} alt="Add to cart" />
        </figure>
      </div>
    </div>
  );
};

export default ProductItem;
