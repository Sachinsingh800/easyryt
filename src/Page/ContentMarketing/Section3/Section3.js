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
      title:"Strategic Method:",
      des:"Our approach to content marketing is based on a well-thought-out plan. Every piece of content we produce serves a specific purpose, whether it's generating website traffic, enhancing engagement, or converting potential customers."
    },
    {
      icon:<GiCrafting/>,
      title:"Excellent Content:",
      des:"Content reigns supreme, and we proudly wear the crown. Our content creators are experts in their respective domains, delivering not only informative content but also content that deeply connects with your target audience on a personal level."
    },
    {
      icon:<MdPersonalInjury/>,
      title:"Comprehensive Strategy: ",
      des:"We don't just create content in isolation. Our strategy incorporates content creation, optimization, and promotion, ensuring a unified and impactful approach that produces results. "
    },
    {
      icon:<SiClaris/>,
      title:"Audience-Focused: ",
      des:"Your audience comes first. We delve deep into understanding their challenges, preferences, and behaviours, enabling us to develop content that truly resonates. "
    },
    {
      icon:<TbTruckDelivery/>,
      title:"Seasoned Team: ",
      des:"Our team comprises experienced content strategists, writers, designers, and digital marketers who have honed their skills in creating and promoting captivating content across various industries."
    },
    {
      icon:<FaInnosoft/>,
      title:"Transparency:  ",
      des:"We believe in transparent communication. Regular reporting and valuable insights keep you informed, allowing you to witness the direct impact of our efforts."
    },
   
  ]
  return (
    <div className={style.main}>
      <h2> Why Select EasyRyt’s Content Marketing Services?</h2>
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
