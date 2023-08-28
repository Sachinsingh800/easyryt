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
      title:"Strategic Ingenuity:",
      des:"We don't merely construct websites; our WordPress Developers engineer digital solutions that align with your business goals, fostering growth and triumph."
    },
    {
      icon:<GiCrafting/>,
      title:"Creative Integration:",
      des:"Our team of designers and developers collaborate seamlessly to craft websites that are not only visually appealing but also technologically advanced, captivating your target audience."
    },
    {
      icon:<MdPersonalInjury/>,
      title:"Client-Centred Cooperation:  ",
      des:"Your vision and insights hold significance. We maintain transparent communication throughout the development process, guaranteeing that your aspirations are interwoven into the framework of your website. "
    },
    {
      icon:<SiClaris/>,
      title:"Proven Skills: ",
      des:"Having a history of successful undertakings in various sectors, our skills guarantee you top-notch quality and creativity. "
    },
    {
      icon:<TbTruckDelivery/>,
      title:"Reasonable Excellence:  ",
      des:"Unparalleled quality doesn't have to come at a high cost. Our services for developing business websites on WordPress deliver exceptional value for your financial commitment."
    },
    {
      icon:<FaInnosoft/>,
      title:"Continuous Innovation:  ",
      des:"Our commitment is to always be at the forefront of industry trends and technological advancements, guaranteeing that your website is immune to obsolescence and formidable in the market."
    },
   
  ]
  return (
    <div className={style.main}>
      <h2>Why Choose us for WordPress Business Website Development Services?</h2>
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
