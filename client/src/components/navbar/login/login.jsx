import React from 'react';
import style from './Login.css';

const Login = (props) => (
  <span className={style.login} onMouseOver={() => props.handleMouseOver('accountHover')} onMouseLeave={() => props.handleMouseOut('accountHover')}>
    Sign In

    <svg height="7" width="12" transform="translate(5,0)">
      <path className={style.arrowDown} d="M6.002 6L1 1m5.002 5L11 1.002"></path>
    </svg>
  </span>
)

export default Login;