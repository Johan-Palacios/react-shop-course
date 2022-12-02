import React from "react";
import ProductInfo from "@components/ProductInfo";
import "@styles/ProductDetail.scss";
import icon_close from "@images/icons/icon_close.png";

const ProductDetail = () => {
  return (
    <aside className="ProductDetail">
      <div className="ProductDetail-close">
        <img src={icon_close} alt="close" />
      </div>
      <ProductInfo />
    </aside>
  );
};

export default ProductDetail;
