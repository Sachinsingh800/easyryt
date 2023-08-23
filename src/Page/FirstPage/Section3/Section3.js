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
      title:"Technical Proficiency:",
      des:"Our group of skilled programmers and artists possesses extensive knowledge of mobile app creation technologies and best practices."
    },
    {
      icon:<GiCrafting/>,
      title:"User-Focused Approach:",
      des:"We prioritize user satisfaction, crafting apps that are not just visually appealing but also easy to use and captivating."
    },
    {
      icon:<MdPersonalInjury/>,
      title:"Personalized Solutions:",
      des:"We comprehend that each app is distinctive. Our solutions are tailored to your precise goals, target audience, and industry. "
    },
    {
      icon:<SiClaris/>,
      title:"Clarity:",
      des:"We believe in transparent and honest communication throughout the creation process, keeping you informed and involved."
    },
    {
      icon:<TbTruckDelivery/>,
      title:"Punctual Delivery:",
      des:"We value your time and ensure that your app is created and launched within the agreed-upon timeframe."
    },
    {
      icon:<FaInnosoft/>,
      title:"Innovative Advancement:",
      des:" We remain at the forefront of the most recent technologies and trends in the development of mobile applications. By including augmented reality and merging sophisticated functionalities, we introduce originality to your native mobile app, causing it to shine in the competitive application arena."
    },
   
  ]
  return (
    <div className={style.main}>
      <h2>Why Select EasyRyt for Native Mobile App Creation?</h2>
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
