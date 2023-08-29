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
      title:"Expertise and Proficiency:   ",
      des:"Our proficient team of cloud integration specialists brings extensive knowledge to the table, guaranteeing precise and skilful execution of your projects."
    },
    {
      icon:<GiCrafting/>,
      title:"Customized Solutions:  ",
      des:"We recognize that each business has distinctive integration requirements. Our approach revolves around crafting customized solutions that seamlessly align with your specific needs."
    },
    {
      icon:<MdPersonalInjury/>,
      title:"Efficiency and Connectivity:  ",
      des:"Our integration solutions are optimized to enhance efficiency and enable uninterrupted data flow, guaranteeing seamless collaboration among your cloud services."
    },
    {
      icon:<SiClaris/>,
      title:"Scalability and Future-Proofing: ",
      des:"We devise integration solutions that can adapt and grow alongside your business, ensuring you can meet evolving demands without compromising performance. "
    },
    {
      icon:<TbTruckDelivery/>,
      title:"Collaborative Partnership: ",
      des:"Transparency and effective communication are fundamental to our approach. Throughout the integration process, we work closely with you, ensuring your vision guides every step."
    },
    {
      icon:<FaInnosoft/>,
      title:"Comprehensive Support:  ",
      des:"Our commitment extends beyond implementation. We offer continuous monitoring, troubleshooting, and updates to ensure the reliability and security of your integrated cloud services."
    },
   
  ]
  return (
    <div className={style.main}>
      <h2>Why Choose us for Our Cloud Services Integration Solutions ?</h2>
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
