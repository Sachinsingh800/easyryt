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
      title:"Proficiency and Know-how:  ",
      des:"Our team of proficient web developers brings vast experience and expertise to the table, guaranteeing the meticulous and skilled execution of your projects. "
    },
    {
      icon:<GiCrafting/>,
      title:"Customized Solutions:  ",
      des:"We comprehend that each project possesses distinct requirements. Our approach revolves around constructing web applications that seamlessly align with your precise needs."
    },
    {
      icon:<MdPersonalInjury/>,
      title:"Productivity and Performance:  ",
      des:"Our solutions are not solely functional; they are optimized for rapidity, responsiveness, and efficient utilization of resources, assuring seamless user experiences.  "
    },
    {
      icon:<SiClaris/>,
      title:"Cutting-Edge Design: ",
      des:"We prioritize user-centric design, ensuring that your web application enthrals users and fosters significant interactions, ultimately enhancing engagement and conversions.  "
    },
    {
      icon:<TbTruckDelivery/>,
      title:"Scalability and Adaptability:  ",
      des:"We develop web applications with future growth in mind, allowing your systems to adapt alongside your business, accommodating forthcoming enhancements and technological advancements. "
    },
    {
      icon:<FaInnosoft/>,
      title:"Collaborative Partnership:   ",
      des:"Communication is vital. Throughout the development process, we collaborate closely with you, ensuring that your vision guides each step and your feedback holds utmost importance."
    },
   
  ]
  return (
    <div className={style.main}>
      <h2>Why Choose us for Web Application Development ? </h2>
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
