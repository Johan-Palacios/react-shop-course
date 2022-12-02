import React from "react";
import "@styles/Header.scss";
import "@styles/global.scss"
import logo_yard_sale from "@images/logos/logo_yard_sale.svg";
import icon_menu from "@images/icons/icon_menu.svg";
import icon_shopping_cart from "@images/icons/icon_shopping_cart.svg";

const Header = () => {
  return (
    <nav>
      <img src={icon_menu} alt="menu" className="menu" />
      <div className="navbar-left">
        <img src={logo_yard_sale} alt="logo" className="nav-logo" />
        <ul>
          <li>
            <a href="/">All</a>
          </li>
          <li>
            <a href="/">Clothes</a>
          </li>
          <li>
            <a href="/">Electronics</a>
          </li>
          <li>
            <a href="/">Furnitures</a>
          </li>
          <li>
            <a href="/">Toys</a>
          </li>
          <li>
            <a href="/">Others</a>
          </li>
        </ul>
      </div>
      <div className="navbar-right">
        <ul>
          <li className="navbar-email">platzi@example.com</li>
          <li className="navbar-shopping-cart">
            <img src={icon_shopping_cart} alt="shopping cart" />
            <div>2</div>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Header;
