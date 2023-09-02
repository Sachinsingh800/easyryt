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
      title:"Experienced Design Team: ",
      des:"Our proficient designers specialize in creating website user interface and user experience designs that align with the most recent design trends and user preferences."
    },
    {
      icon:<GiCrafting/>,
      title:"User-Focused Philosophy: ",
      des:"We believe in working together. Throughout the design process, we engage with you to guarantee that the final product reflects your vision and goals."
    },
    {
      icon:<MdPersonalInjury/>,
      title:"Innovative Solutions:  ",
      des:"Our team remains up-to-date with the latest design trends, ensuring that your website stands out as pioneering and forward-thinking. "
    },
    {
      icon:<SiClaris/>,
      title:"Outcome-Oriented Designs:  ",
      des:"Our designs are meticulously crafted to enhance user involvement, conversions, and overall website performance. "
    },
    {
      icon:<TbTruckDelivery/>,
      title:"Established Track Record: ",
      des:"With a history of successful website user interface and user experience design projects across various industries, we possess the expertise to deliver designs that contribute to your online accomplishments."
    },
    {
      icon:<FaInnosoft/>,
      title:"Continuous Assistance:   ",
      des:"Beyond development, we offer ongoing support to ensure that your Affiliate marketing website is always up to date and operating at its best."
    },
   
  ]
  return (
    <div className={style.main}>
      <h2>Why Choose us for Website UI/UX Design ?</h2>
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
