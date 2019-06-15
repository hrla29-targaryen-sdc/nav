import React from 'react';
import Subcategories from '../Subcategories/Subcategories'
import style from './Categories.css'

const Categories = (props) => {

  const inlineVarAlign = {
    float: 'left',
    width: (100 / props.total) + '%'
  };

  return (
    <div className={style.entireCategorySectionAlignDiv}>

      <div style={inlineVarAlign} className={style.categoryDiv}>

        <span className={style.categories}>
          <strong>{props.category.name}</strong>
        </span>

        <ul className={style.subcategories}>
          {props.category.subcategories.map((subcategory, index) => <Subcategories key={index} subcategory={subcategory} />)}
        </ul>  

      </div>

    </div>
  )
}

export default Categories;