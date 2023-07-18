import React from 'react'
import style from "./SeventhSection.module.css"

function SeventhSection() {
  
  return (
    <div className={style.main}>
        <h1>Industries we serve</h1>
        <p  className={style.para}>We revolutionalize Industries with the power of tech, to seamlessly weave a tapestry of innovation,efficiency, and growth.</p>
        <div className={style.innerbox}>
            <p>Inurance</p>
            <p>Healthcare</p>
            <p>Education</p>
            <p>Travel & Hospitality</p>
            <p>Retail & E-commerce</p>
            <p>Banking & Financial Services</p>
            <p>Manufacturing</p>
            <p>Chemicals</p>
            <p>Energy & Utilities</p>
            <p>Non Profits</p>
            <p>Distribution</p>
            <p>Oil & Gas</p>
            <p>Independent Software Vendors</p>
        </div>
      
    </div>
  )
}

export default SeventhSection
