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
      title:"Knowledge:",
      des:"Our team of experienced PPC Management professionals stays ahead of industry trends and platform updates to deliver cutting-edge campaigns. "
    },
    {
      icon:<GiCrafting/>,
      title:"Personalized Solutions: ",
      des:"We understand that every business is unique. Our strategies are tailored to your specific objectives, target audience, and industry."
    },
    {
      icon:<MdPersonalInjury/>,
      title:"Maximized ROI:",
      des:"We focus on optimizing campaigns for meaningful results. Our goal is to help you achieve the highest possible return on your advertising investment. "
    },
    {
      icon:<SiClaris/>,
      title:"Data-Driven Decision-Making:",
      des:"Our method is based on data analysis. We utilize observations to make well-informed decisions, enhance campaigns, and achieve superior outcomes. "
    },
    {
      icon:<TbTruckDelivery/>,
      title:"Transparency:",
      des:"We maintain open communication, providing you with detailed reports and insights into your campaign's performance."
    },
    {
      icon:<FaInnosoft/>,
      title:"Continuous Improvement: ",
      des:"Our commitment to data-driven optimization ensures that your campaigns evolve and improve over time."
    },
   
  ]
  return (
    <div className={style.main}>
      <h2>Why Select EasyRyt for  PPC Services??</h2>
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
