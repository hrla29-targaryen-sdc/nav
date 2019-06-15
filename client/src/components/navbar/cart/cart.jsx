import React from 'react';
import style from './Cart.css';

const Cart = (props) => (
  <span className={style.cart} onMouseEnter={() => props.handleMouseOver('cartHover')} onMouseLeave={() => props.handleMouseOut('cartHover')}>
    <svg height="25" width="25" transform="translate(16,4)">
      <path className={style.emptyBag} d="M23.5 9.5a1 1 0 0 0-1-1h-21a1 1 0 0 0-1 1v13a1 1 0 0 0 1 1h21a1 1 0 0 0 1-1v-13z"></path>
      <path className={style.emptyBagHook} d="M6 8a6 6 0 1 1 12 0"></path>
    </svg>
    <span className={style.bagNumber}>
      0
    </span>
  </span>
)

export default Cart;