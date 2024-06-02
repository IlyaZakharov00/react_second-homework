import React from 'react'
import styles from "./toolbar.module.css";
import { ButtonFunc } from '../button/ButtonFunc';


export const ToolbarFunc = (props) => {
  const {filters, selected, onSelectFilter} = props
  
  return ( 

           <ul className={styles["toolbar-list"]}>
            {filters.map((filter)=>
              <ButtonFunc 
              key={filter} 
              name={filter} 
              select = {filter == selected? true : false } 
              onSelectFilter = {onSelectFilter}
              />
            )}
           </ul>
  )
}

