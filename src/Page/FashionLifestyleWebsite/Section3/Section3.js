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
      title:"Fashion Enthusiasts:",
      des:"We have a fervent passion for fashion and comprehend the vocabulary of chic, guaranteeing that your site reverberates with your intended audience."
    },
    {
      icon:<GiCrafting/>,
      title:"WordPress Proficiency:  ",
      des:"With profound expertise in the WordPress platform, we harness its capabilities to produce captivating and visually captivating fashion lifestyle websites."
    },
    {
      icon:<MdPersonalInjury/>,
      title:"Visual Narrative:  ",
      des:"Our designers possess the skill to tell stories through visuals, creating designs that evoke sentiment and showcase your brand's story. "
    },
    {
      icon:<SiClaris/>,
      title:"Assortment Mastery:",
      des:"We ensure that your collections are displayed in a manner that highlights their distinctiveness and appeals to fashion devotees. "
    },
    {
      icon:<TbTruckDelivery/>,
      title:"Technical Expertise: ",
      des:"Our developers optimize your fashion lifestyle website for top-notch performance, swiftness, and a seamless user experience."
    },
    {
      icon:<FaInnosoft/>,
      title:"Continuous Support:  ",
      des:"Beyond development, we offer ongoing assistance to keep your website up to date and functioning optimally."
    },
   
  ]
  return (
    <div className={style.main}>
      <h2>Why Choose Our Fashion Lifestyle Website Creation Services? </h2>
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
