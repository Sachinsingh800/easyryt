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
      title:"Associate Advertising Specialists: ",
      des:"We comprehend the subtleties of associate marketing and how to build optimized websites for increasing conversions and revenue generation.."
    },
    {
      icon:<GiCrafting/>,
      title:"WordPress Mastery:",
      des:"With a deep understanding of the WordPress platform, we utilize its capabilities to craft dynamic and high-performing Affiliate marketing websites."
    },
    {
      icon:<MdPersonalInjury/>,
      title:"Conversion-Focused Designs:  ",
      des:"Our designers prioritize crafting designs that stimulate clicks, interactions, and ultimately, purchases of Affiliate products. "
    },
    {
      icon:<SiClaris/>,
      title:"Seamless Integration:  ",
      des:"We ensure that the Affiliate products smoothly integrate into your website, enhancing the user experience and driving engagement. "
    },
    {
      icon:<TbTruckDelivery/>,
      title:"Technical Expertise:  ",
      des:"Our developers guarantee that your Affiliate marketing website is technically optimized for speed, performance, and security."
    },
    {
      icon:<FaInnosoft/>,
      title:"Continuous Assistance:   ",
      des:"Beyond development, we offer ongoing support to ensure that your Affiliate marketing website is always up to date and operating at its best."
    },
   
  ]
  return (
    <div className={style.main}>
      <h2>Why Select EasyRyt for Affiliate Marketing Website?</h2>
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
