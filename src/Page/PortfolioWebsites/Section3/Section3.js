import React from 'react'
import style from "./Section3.module.css"
import Tilt from "react-parallax-tilt";
import { GiSkills } from 'react-icons/gi';
import { GiCrafting } from 'react-icons/gi';
import { MdPersonalInjury } from 'react-icons/md';
import { SiClaris } from 'react-icons/si';
import { TbTruckDelivery } from 'react-icons/tb';
import { FaInnosoft } from 'react-icons/fa';

function Section3() {

  const data=[
    {
      icon:<GiSkills/>,
      title:"Portfolio Experts: ",
      des:"We understand the intricacies of showcasing creative work and how to build websites that effectively showcase your talent."
    },
    {
      icon:<GiCrafting/>,
      title:"WordPress Proficiency: ",
      des:"With a deep understanding of the WordPress platform, we utilize its functionalities to create captivating and visually stunning portfolio websites."
    },
    {
      icon:<MdPersonalInjury/>,
      title:"Stunning Designs: ",
      des:"Our designers prioritize both aesthetics and functionality, crafting designs that reflect your unique style and resonate with your target audience. "
    },
    {
      icon:<SiClaris/>,
      title:"Seamless Integration:  ",
      des:"We ensure that your work is elegantly displayed and easily accessible to visitors who are interested in exploring your portfolio. "
    },
    {
      icon:<TbTruckDelivery/>,
      title:"Technical Excellence: ",
      des:"Our developers optimize your portfolio website for superior speed, performance, and overall user experience."
    },
    {
      icon:<FaInnosoft/>,
      title:"Continuous Support:   ",
      des:"In addition to development, we offer ongoing support to consistently update and maintain your portfolio website for optimal performance."
    },
   
  ]
  return (
    <div className={style.main}>
      <h2>Why Choose Our WordPress Portfolio Website Development Services?</h2>
      <div className={style.card_container} >
      {data.map((item,id)=>

   <Tilt glareEnable={true} tiltMaxAngleX={20} 
   tiltMaxAngleY={20} perspective={1000} >
       <div className={style.card}>
        <h1>{item?.icon}</h1>
          <h5 className={style.title}>{item?.title}</h5>
          <p className={style.des}>{item?.des}</p>
       </div>
   </Tilt>

      )}
      </div>
    </div>
  )
}

export default Section3
