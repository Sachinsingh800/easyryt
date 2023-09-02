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
      des:"Our crew accommodates skilled developers and designers with a proven song document in turning in a hit mobile app across diverse industries, making us the best mobile app development company."
    },
    {
      icon:<GiCrafting/>,
      title:"Innovative Solutions:",
      des:"We stay ahead of the curve on the subject of rising technology and trends as our answers are designed to offer a competitive part in the market."
    },
    {
      icon:<MdPersonalInjury/>,
      title:"Collaborative Partnership:",
      des:"We trust that the exceptional consequences that come from collaboration. We discuss carefully with you during the improvement process, making sure that your vision is delivered to life. "
    },
    {
      icon:<SiClaris/>,
      title:"Quality Assurance:",
      des:"Our rigorous checking out and techniques assure that your mobile app is of the very best first-rate, supplying a clean and enjoyable experience for the users."
    },
    {
      icon:<TbTruckDelivery/>,
      title:"Timely Delivery:",
      des:"We recognize the significance of a well-timed delivery. Our crew is dedicated to assemble the time limits without compromising on the quality of your cell app."
    },
    {
      icon:<FaInnosoft/>,
      title:"Deployment and Support:",
      des:"We handle the entire deployment process across multiple app stores and provide ongoing support to address any issues that may arise and implement necessary updates."
    },
   
  ]
  return (
    <div className={style.main}>
      <h2>Why Select EasyRyt for Mobile App Development?</h2>
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
