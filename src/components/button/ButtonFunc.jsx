import React from 'react'
import styles from "./button.module.css";
// import styles from "../toolbar/toolbar.module.css";



export const ButtonFunc = (props) => {
  const {name, select, onSelectFilter} = props
  return (
    <button 
    className={select == true? [styles['btn'], styles['btn-selected']].join(' ') : styles['btn']} 
    onClick={()=>onSelectFilter(name)}
    >{name}
    </button>
  )
}
