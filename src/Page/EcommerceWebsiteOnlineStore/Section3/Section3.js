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
      title:"WordPress ECommerce Specialists: ",
      des:"Our team consists of experienced developers skilled in building successful ECommerce websites on the WordPress platform."
    },
    {
      icon:<GiCrafting/>,
      title:"WooCommerce Proficiency:   ",
      des:"We are well-versed in utilizing the full potential of WooCommerce to create online stores that are feature-rich and meet your specific needs."
    },
    {
      icon:<MdPersonalInjury/>,
      title:"Personalized Approach:",
      des:"We recognize that every ECommerce business is distinct. Our solutions are custom-tailored to match your products, brand image, and target market. "
    },
    {
      icon:<SiClaris/>,
      title:"Design Excellence: ",
      des:"Our designers seamlessly blend innovation with functionality, crafting ECommerce websites that captivate attention and provide seamless user experiences. "
    },
    {
      icon:<TbTruckDelivery/>,
      title:"Safe Transactions:  ",
      des:"We prioritize the safety of your customers by implementing strong measures to safeguard their sensitive information during transactions."
    },
    {
      icon:<FaInnosoft/>,
      title:"Ongoing Assistance:  ",
      des:"Beyond just development, we provide continuous support to ensure that your WordPress ECommerce website remains up-to-date and optimized."
    },
   
  ]
  return (
    <div className={style.main}>
      <h2>Why Choose us for WordPress ECommerce Website Development Solutions? </h2>
      <div className={style.card_container} >
      {data.map((item,id)=>

   <Tilt glareEnable={true} tiltMaxAngleX={20} 
   tiltMaxAngleY={20} perspective={1000} >
       <div className={style.card}>
        <h2>{item?.icon}</h2>
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
