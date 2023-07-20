import React from 'react'
import style from "./FourteenSection.module.css"
import ClientsSlider from '../../Component/ClientsSlider/ClientsSlider';

function FourteenSection() {
  return (
    <div className={style.main}>
        <h1>What Our Clients Say</h1>
        <ClientsSlider/>
    </div>
  )
}

export default FourteenSection;
