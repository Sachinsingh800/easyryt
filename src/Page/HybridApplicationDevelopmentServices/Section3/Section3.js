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
      title:"Expertise and Experience:",
      des:"Our group brings a wealth of experience in hybrid mobile app development and software development, staying up to date with the modern trends and technology to supply contemporary solutions. "
    },
    {
      icon:<GiCrafting/>,
      title:"Collaborative Approach:",
      des:"We price open communication and collaboration with our customers. Your input is important in the course of the improvement method, making sure the final product aligns perfectly together with your vision."
    },
    {
      icon:<MdPersonalInjury/>,
      title:"Quality Assurance:",
      des:"Our great guarantee techniques assure a high-performing, trojan horse-unfastened application that meets the very best requirements of excellence and reliability. "
    },
    {
      icon:<SiClaris/>,
      title:"Custom Solutions:",
      des:"We recognize that every business is particular. Our hybrid app development services are tailored in your unique dreams and requirements, ensuring a clearly custom designed answer."
    },
    {
      icon:<TbTruckDelivery/>,
      title:"Timely Delivery:",
      des:"We are devoted to delivering your hybrid software inside agreed-upon timelines, helping you launch your product to the market hastily."
    },
    {
      icon:<FaInnosoft/>,
      title:"Deployment and Support:",
      des:"We handle the entire deployment process across multiple app stores and provide ongoing support to address any issues that may arise and implement necessary updates."
    },
   
  ]
  return (
    <div className={style.main}>
      <h2>Why Select  EasyRyt for Hybrid Application Development?</h2>
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
