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
      title:"Expertise and Experience:   ",
      des:"Our team of knowledgeable server architects brings vast experience to the table, guaranteeing your projects are carried out with accuracy and expertise. "
    },
    {
      icon:<GiCrafting/>,
      title:"Tailored Solutions:  ",
      des:"We comprehend that each business possesses distinct server necessities. Our approach revolves around constructing structures that harmonize flawlessly with your specific requirements, improving performance."
    },
    {
      icon:<MdPersonalInjury/>,
      title:"Efficiency and Reliability:   ",
      des:"Our solutions are not solely functional; they are optimized for rapidity, responsiveness, and effective resource utilization, assuring uninterrupted operations.  "
    },
    {
      icon:<SiClaris/>,
      title:"Scalability and Adaptability: ",
      des:"We design server architectures that can advance alongside your business, ensuring you are prepared for growth and scientific progress.  "
    },
    {
      icon:<TbTruckDelivery/>,
      title:"Collaborative Partnership: ",
      des:"Transparency and communication are vital. Throughout the development and maintenance process, we collaborate closely with you to ensure your vision influences each step."
    },
    {
      icon:<FaInnosoft/>,
      title:"Comprehensive Support:   ",
      des:"Our dedication surpasses mere implementation. We offer ongoing monitoring, troubleshooting, and updates to ensure your servers uphold their dependability and security. By selecting us for your server architecture and configuration needs, you are choosing a partner committed to maximizing your server potential, enhancing performance, and guaranteeing security. Witness the transformative impact of efficient server environments with a team that is fully devoted to your triumph."
    },
   
  ]
  return (
    <div className={style.main}>
      <h2>Why Choose us for Our Services in Server Architecture and Configuration? </h2>
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
