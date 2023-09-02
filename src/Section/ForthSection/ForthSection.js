import React from 'react'
import Slider from '../../Component/Slider/Slider'
import style from "./ForthSection.module.css"

function ForthSection() {
  return (
    <div className={style.main}>
        <h2>Our clients</h2>
        <Slider/>
    </div>
  )
}

export default ForthSection
