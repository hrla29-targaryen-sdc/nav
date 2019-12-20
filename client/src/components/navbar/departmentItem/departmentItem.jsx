import React from 'react';
import style from './DepartmentItem.css'

const DepartmentItem = (props) => {

  const inlineVarAlign = {
    float: 'left',
    width: (100 / props.total) + '%',
  }

  return (
    <div style={inlineVarAlign}>
      <span className={style.departments} onMouseOver={() => 
        {
          props.getCategories(props.index); // grabs the categories for that respective department nav item
          props.handleMouseOver('nav');  // handler for individual nav item
          props.handleAddClass(style.overlayDiv) // add class func for blur function
        }
      }>
        {props.department.name}
      </span>
    </div>
  )
}

export default DepartmentItem;