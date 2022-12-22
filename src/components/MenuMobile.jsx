import React from 'react'
import '@styles/MenuMobile.scss'
import close from '@images/icons/icon_close.png'

function MenuMobile( { onCerrar } ) {
  return (
    <div className="mobile-menu">
      <img src={close} alt="close menu" className="close" onClick={onCerrar} />
      <div>
        <ul>
          <li><a href="/">CATEGORIES</a></li>
          <li><a href="/">All</a></li>
          <li><a href="/">Cloth</a></li>
          <li><a href="/">Electronics</a></li>
          <li><a href="/">Furniture</a></li>
          <li><a href="/">Toys</a></li>
          <li><a href="/">Others</a></li>
        </ul>
        <ul>
          <li><a href="/">My orders</a></li>
          <li><a href="/">My Account</a></li>
        </ul>
      </div>
      <ul>
        <li><a href="/" className="email">platzi@example.com</a></li>
        <li><a href="/" className="sign-out">Sign out</a></li>
      </ul>
    </div>
  )
}

export default MenuMobile