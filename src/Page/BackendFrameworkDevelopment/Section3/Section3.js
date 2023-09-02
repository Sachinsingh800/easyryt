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
      title:"Expertise and Experience:  ",
      des:"Our group of talented backend developers bring extensive knowledge to the table, ensuring your projects are carried out with accuracy and mastery."
    },
    {
      icon:<GiCrafting/>,
      title:"Tailored Solutions:  ",
      des:"We understand that each project possesses distinctive requirements. Our approach revolves around crafting backend frameworks that seamlessly align with your specific needs, nurturing innovation. "
    },
    {
      icon:<MdPersonalInjury/>,
      title:"Efficiency and Performance:   ",
      des:"Our solutions not only function effectively but are also optimized for swift responsiveness and efficient utilization of resources, ensuring smooth operations. "
    },
    {
      icon:<SiClaris/>,
      title:"Scalability and Future-Readiness: ",
      des:"We fashion frameworks that expand alongside your business, guaranteeing your preparedness for growing user demands and technological advancements.  "
    },
    {
      icon:<TbTruckDelivery/>,
      title:"Collaborative Partnership:  ",
      des:"Communication is vital. Throughout the development and maintenance process, we collaborate closely with you, ensuring every step is guided by your vision."
    },
    {
      icon:<FaInnosoft/>,
      title:"Comprehensive Support:   ",
      des:"Our dedication transcends development. We provide continuous support, troubleshooting, and updates to ensure your backend framework remains dependable and in line with your evolving needs."
    },
   
  ]
  return (
    <div className={style.main}>
      <h2>Why Choose us for Backend Framework Development Services ?</h2>
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
