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
      title:"Demonstrated Proficiency: ",
      des:"Our team is comprised of skilled experts in Google Cloud services who bring a wealth of wisdom to the table. With a history of triumphant projects in the realm of Google Cloud, we possess the proficiency to guide your journey of transformation."
    },
    {
      icon:<GiCrafting/>,
      title:"All-Encompassing Solutions: ",
      des:"We provide comprehensive solutions that encompass every facet of your expedition with Google Cloud. From initial evaluation to ongoing assistance, our comprehensive approach ensures a seamless and triumphant transformation."
    },
    {
      icon:<MdPersonalInjury/>,
      title:"Customer-Centric Approach:   ",
      des:"Your triumph is of utmost importance to us. We invest time in comprehending your business requirements and customize our solutions to perfectly align with your objectives, guaranteeing that each step contributes to your prosperity. "
    },
    {
      icon:<SiClaris/>,
      title:"Innovative Solutions:  ",
      des:"We don't settle for just keeping up with trends; we establish them. Our team stays one step ahead of advancements in Google Cloud, enabling us to offer you state-of-the-art solutions that keep you ahead of industry developments. "
    },
    {
      icon:<TbTruckDelivery/>,
      title:"Collaborative Alliance:   ",
      des:"We do not merely offer services; we forge alliances. By closely collaborating with your team, we merge your perspectives and input, guaranteeing that the solutions we provide harmoniously match your distinct corporate character."
    },
    {
      icon:<FaInnosoft/>,
      title:"Enduring Benefit:   ",
      des:"Our dedication does not conclude with instant outcomes. We devise solutions that are expandable, flexible, and well-positioned for upcoming times. When you select us for your Google Cloud metamorphosis, you are investing in a collaborator that presents continuous benefit and advancement."
    },
   
  ]
  return (
    <div className={style.main}>
      <h2>Why Choose us for Google Cloud Services ?</h2>
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
