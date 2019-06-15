import React from 'react';
import style from './SearchResults.css';

const SearchResults = ({result, search, handleMouseOver, index}) => {

  // let searchIdx = result.keyword.search(search)
  // let searchLen = search.length
  // let searchIdxLen = searchIdx + searchLen

  return (
    <li>
      <span className={style.result} onMouseEnter={() => handleMouseOver('resultHoverIdx', index)}>
        <strong>{result.keyword}</strong>
      </span>
    </li>
  )
}

export default SearchResults;


        // {result.keyword.slice(0, searchIdx)}
        // <strong>{result.keyword.slice(searchIdx, searchIdxLen)}</strong>
        // {result.keyword.slice(searchIdxLen)}