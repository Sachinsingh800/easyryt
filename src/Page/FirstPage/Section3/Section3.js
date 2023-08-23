import React from 'react'
import style from "./Section3.module.css"
import Tilt from "react-parallax-tilt";
import { GiSkills } from 'react-icons/gi';
import { GiCrafting } from 'react-icons/gi';
import { MdPersonalInjury } from 'react-icons/md';
import { SiClaris } from 'react-icons/si';
import { TbTruckDelivery } from 'react-icons/tb';

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
   
  ]
  return (
    <div className={style.main}>
      <h1>Why Select EasyRyt for Native Mobile App Creation?</h1>
      <div className={style.card_container} >
      {data.map((item,id)=>

   <Tilt glareEnable={true} tiltMaxAngleX={10} 
   tiltMaxAngleY={10} perspective={1000} >
       <div className={style.card}>
        <h4>{item?.icon}</h4>
          <h4>{item?.title}</h4>
          <p>{item?.des}</p>
       </div>
   </Tilt>

      )}
      </div>
    </div>
  )
}

export default Section3
