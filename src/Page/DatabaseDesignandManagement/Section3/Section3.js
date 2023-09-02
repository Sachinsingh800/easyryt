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
      title:"Experience and Proficiency:  ",
      des:"Our database professionals bring extensive expertise to the table, guaranteeing that your projects are carried out with exactitude and mastery."
    },
    {
      icon:<GiCrafting/>,
      title:"Customized Solutions:",
      des:"We comprehend that your data requirements are distinct. Our approach revolves around developing database solutions that seamlessly correspond to your specific business demands."
    },
    {
      icon:<MdPersonalInjury/>,
      title:"Efficiency and Performance:  ",
      des:"Our solutions are not only effective; they are also optimized for swiftness, responsiveness, and resourceful data administration, ensuring smooth operations. "
    },
    {
      icon:<SiClaris/>,
      title:"Scalability and Future-Proofing:  ",
      des:"We construct databases with growth in mind, enabling your solutions to adapt alongside your business and accommodate expanding data capacities.  "
    },
    {
      icon:<TbTruckDelivery/>,
      title:"Collaborative Partnership:  ",
      des:"Transparency and communication are fundamental. Throughout the development and upkeep process, we collaborate closely with you, ensuring that your perspective directs every phase. "
    },
    {
      icon:<FaInnosoft/>,
      title:"Comprehensive Assistance:   ",
      des:"Our commitment extends beyond implementation. We provide continuous support, issue resolution, and updates to uphold the reliability of your databases and keep them attuned to your evolving requirements."
    },
   
  ]
  return (
    <div className={style.main}>
      <h2>Why Choose us for Database Design and Management  ?</h2>
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
