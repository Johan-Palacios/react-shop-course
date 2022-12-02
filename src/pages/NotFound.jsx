import React from "react";
import "@styles/PasswordRecovery.scss";
import logo_yard_sale from "@images/logos/logo_yard_sale.svg";

const NotFound = () => {
  return (
    <div className="login">
      <div className="form-container">
        <img src={logo_yard_sale} alt="logo" className="logo" />
        <h1 className="title">Whoops!, Error 404</h1>
        <p className="subtitle">
          Page not found, plese return to the main page with te following button
        </p>
        <button className="primary-button login-button">Main page</button>
      </div>
    </div>
  );
};

export default NotFound;
