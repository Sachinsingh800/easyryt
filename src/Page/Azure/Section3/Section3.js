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
      title:"Proven Proficiency:  ",
      des:"Our group consists of experienced Azure experts with a wealth of knowledge in designing, implementing, and managing Azure solutions. Our history of successful Azure projects speaks volumes about our proficiency."
    },
    {
      icon:<GiCrafting/>,
      title:"Comprehensive Approach: ",
      des:"We don't only provide services; we offer end-to-end solutions. From initial evaluation to continuous support, we encompass every aspect of your Azure journey, ensuring a smooth and all-encompassing transformation."
    },
    {
      icon:<MdPersonalInjury/>,
      title:"Client-Focused Emphasis:  ",
      des:"Your triumph is our primary motivation. We prioritize your distinct requirements and business objectives, tailoring our solutions to deliver results that directly align with your vision and ambitions. "
    },
    {
      icon:<SiClaris/>,
      title:"Catalysts of Innovation:  ",
      des:"We don't merely follow trends; we shape them. Our team is at the forefront of Azure advancements, enabling us to offer you state-of-the-art solutions that give you a competitive advantage in your sector. "
    },
    {
      icon:<TbTruckDelivery/>,
      title:"Collaborative Alliance:  ",
      des:"We have faith in genuine cooperation. We operate alongside your team, attentively considering your observations and incorporating your input at each phase. This alliance method guarantees that the resolutions we provide genuinely mirror your business character. "
    },
    {
      icon:<FaInnosoft/>,
      title:"Sustained Worth:   ",
      des:"Our pledge extends beyond immediate outcomes. We devise resolutions that are expandable, adjustable, and prepared for the future. Your expenditure in Azure services with us changes into long-standing worth and continuous expansion."
    },
   
  ]
  return (
    <div className={style.main}>
      <h2>Why Choose us for Azure Services ?</h2>
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
