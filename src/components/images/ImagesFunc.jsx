import React from 'react'
import styles from "./images.module.css";
import imgs from '../pictures.js';


export const ImagesFunc = (props) => {
  const {pictures} = props
  return (
    <div className={styles['imgs-container']}>
      {pictures.map((picture, index)=>
        <img 
        key = {index}
        className={styles['imgs-container-item']} 
        src={picture.img} alt="img" 
        category={picture.category}/>
      )}
    </div>
  )
}
