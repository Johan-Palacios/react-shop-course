import React, { useState, useContext } from "react";
import Menu from "@components/Menu";
import MyOrder from "@containers/MyOrder";
import AppContext from "@context/AppContext";
import "@styles/Header.scss";
import "@styles/global.scss";
import logo_yard_sale from "@images/logos/logo_yard_sale.svg";
import icon_menu from "@images/icons/icon_menu.svg";
import icon_shopping_cart from "@images/icons/icon_shopping_cart.svg";

const Header = () => {
  const [toggle, setToggle] = useState(false);
  const [toggleOrders, setToggleOrders] = useState(false);
  const { state } = useContext(AppContext);
  const stateLongNumber = (stateLength) => {
    if (stateLength > 0 && stateLength <= 9) {
      return <div>{stateLength}</div>;
    }
    if (stateLength > 9) {
      return <div>+9</div>;
    }
  };
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
          <li className="navbar-email" onClick={() => setToggle(!toggle)}>
            platzi@example.com
          </li>
          <li
            className="navbar-shopping-cart"
            onClick={() => setToggleOrders(!toggleOrders)}
          >
            <img src={icon_shopping_cart} alt="shopping cart" />
            {stateLongNumber(state.cart.length)}
          </li>
        </ul>
      </div>
      {toggle && <Menu />}
      {toggleOrders && <MyOrder />}
    </nav>
  );
};

export default Header;
