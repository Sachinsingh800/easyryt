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
      title:"Expertise:",
      des:"Our team of certified professionals in Google Ads has a proven track record of delivering successful campaigns across various industries."
    },
    {
      icon:<GiCrafting/>,
      title:"Personalization: ",
      des:"We understand that your business is unique. Our customized Adwords strategies are designed to align with your specific objectives and target audience."
    },
    {
      icon:<MdPersonalInjury/>,
      title:"Data-Driven Approach: ",
      des:"Our decisions are supported by data and analytics, ensuring that every action we take is strategic and well-informed. "
    },
    {
      icon:<SiClaris/>,
      title:"Continuous Optimization:",
      des:"We never settle for mediocrity. Your campaigns will be consistently monitored and fine-tuned for optimal performance. "
    },
    {
      icon:<TbTruckDelivery/>,
      title:"Transparent Reporting: ",
      des:"Through our comprehensive reports, you will gain a clear understanding of your campaigns' effectiveness and the value they bring to your business."
    },
    {
      icon:<FaInnosoft/>,
      title:"Measurable Results: ",
      des:"We assess the achievement not solely through clicks but through the influence that your Google Ads campaigns have on your brand's digital visibility, website traffic, and conversions."
    },
   
  ]
  return (
    <div className={style.main}>
      <h2>Why Select EasyRyt for Google Ads Services?</h2>
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
