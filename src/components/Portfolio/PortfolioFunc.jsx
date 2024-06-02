import React from 'react'
import { useState, useEffect  } from 'react'
import { ToolbarFunc } from "../toolbar/ToolbarFunc";
import { ImagesFunc } from '../images/ImagesFunc.jsx';
import {imgs} from '../pictures.js';




export const PortfolioFunc = () => {
  const [selected, setSelected] = useState("All");
  const [pictures, setPictures] = useState(imgs);

  const onSelectFilter = (name) => setSelected(name)
  
  useEffect(() => selected == "All" ? setPictures(imgs): setPictures(imgs.filter(img => img.category === selected)), [selected])


    
  return (
    <>
      <ToolbarFunc 
      filters = {["All", "Websites", "Flayers", "Business Cards"]}
      selected = {selected}
      onSelectFilter = {onSelectFilter}/> 
      <ImagesFunc pictures = {pictures}/>
    </>

 )
}
