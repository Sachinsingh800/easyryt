import React from 'react'
import style from "./FirstSection.module.css"
import Form from '../../Component/Form/Form'
import img from "../../Image/hand.png"

function FirstSection() {
  return (
    <div className={style.main}>
      <div className={style.leftBox}>
        <span>Smart Digital Solutions for Growing SMEs & MSMEs</span>
        <p>Trusted by over 1,000 ambitious brands</p>
        <img className={style.img} src={img} alt='handimg' />
      </div>
      <div className={style.rightBox}>
     <div className={style.form}><Form/></div>  
      </div>
    </div>
  )
}

export default FirstSection
