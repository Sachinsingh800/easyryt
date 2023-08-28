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
      title:"Established Expertise: ",
      des:"Our collection of work speaks volumes. We have effectively created and launched numerous online shopping platforms across various sectors, each meticulously crafted to boost sales and establish brand recognition."
    },
    {
      icon:<GiCrafting/>,
      title:"Uniqueness at the Core: ",
      des:"We recognize that your business stands out. Our approach revolves around creating personalized solutions that meet your specific requirements, ensuring your online store encompasses the essence of your brand."
    },
    {
      icon:<MdPersonalInjury/>,
      title:"Magento Specialists: ",
      des:"Our mastery of Magento distinguishes us. We utilize the full potential of this framework to develop online shopping websites that are rich in features, adaptable, and aligned with your objectives. "
    },
    {
      icon:<SiClaris/>,
      title:"Openness and Collaboration: ",
      des:"We highly value partnerships. Throughout the development journey, we maintain an open line of communication, consistently keeping you informed and actively involving you at every phase. "
    },
    {
      icon:<TbTruckDelivery/>,
      title:"Data-Driven Enhancement:",
      des:"Our online commercial platforms are constructed to adapt and progress. We consistently examine user conduct, performance indicators, and market tendencies to enhance your platform for optimal conversions."
    },
    {
      icon:<FaInnosoft/>,
      title:"Smooth User Journey: ",
      des:"The experience of your consumers is of utmost importance to us. We devise digital marketplaces that are effortless to navigate, responsive, and crafted to guide visitors seamlessly towards completing a transaction."
    },
   
  ]
  return (
    <div className={style.main}>
      <h2>Why Select EasyRyt for Ecommerce Website Development?</h2>
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
