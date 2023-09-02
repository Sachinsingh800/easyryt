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
      title:"Expertise and Excellence: ",
      des:"Our team consists of skilled developers who excel in creating interfaces that have a meaningful impact. With years of experience, we have perfected our skills to deliver outstanding results."
    },
    {
      icon:<GiCrafting/>,
      title:"Design-Development Fusion: ",
      des:"Our collaboration between design and development guarantees that your front end not only has a visually appealing appearance but also operates smoothly, providing a comprehensive user experience."
    },
    {
      icon:<MdPersonalInjury/>,
      title:"User-Focused Approach: ",
      des:"We always prioritize the needs of our users. Our front end development aims to create interfaces that users genuinely enjoy engaging with, fostering positive brand interactions. "
    },
    {
      icon:<SiClaris/>,
      title:"Continuous Innovation: ",
      des:"The digital market is moving at a high speed and so are we. Our developers constantly stay ahead of industry trends, continuously innovating to provide cutting-edge solutions. "
    },
    {
      icon:<TbTruckDelivery/>,
      title:"Partnership and Communication: ",
      des:"We value teamwork. We ensure that you are involved and well-informed throughout the development process, making sure that your vision is transformed into reality."
    },
    {
      icon:<FaInnosoft/>,
      title:"Performance-Oriented:  ",
      des:"Performance is crucial. Our front end development not only emphasizes aesthetics but also focuses on optimizing performance to ensure a seamless user experience."
    },
   
  ]
  return (
    <div className={style.main}>
      <h2>Why Select EasyRyt for App Backend Development Creation?</h2>
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
