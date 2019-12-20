import React from 'react';
import style from './Search.css';

const Search = (props) => (
  <span className={style.search} onMouseEnter={() => props.handleMouseOver('searchHover')}>
    <svg height="24" width="21" transform="translate(-5,5)">
      <path transform="rotate(-44.984 16.5 18.5)" className={style.searchIcon} d="M15.288 14.762h2.424v7.475h-2.424z"></path>
      <path className={style.searchIcon} d="M13.5 15.5l-1-1"></path>
      <circle className={style.searchIcon} cx="7.5" cy="9.5" r="7"></circle>
    </svg>
    <span>
    Search 
    </span>
  </span>
)

export default Search;