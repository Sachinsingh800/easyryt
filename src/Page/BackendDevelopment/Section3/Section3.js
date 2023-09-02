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
      title:"Proficiency and Superiority :",
      des:"Our team of experienced back-end programmers possesses years of knowledge in developing solutions that empower seamless digital experiences."
    },
    {
      icon:<GiCrafting/>,
      title:"Personalization at the Core:  ",
      des:"We comprehend that your project is one-of-a-kind. Our approach revolves around developing solutions that are customized to meet your specific requirements, guaranteeing optimal functionality."
    },
    {
      icon:<MdPersonalInjury/>,
      title:"Comprehensive Project Comprehension: ",
      des:"We don't simply write code; we grasp the broader perspective. Our back-end programmers work closely with designers, front-end developers, and stakeholders to ensure a cohesive and synchronized development process. "
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
      title:"Scalability and Future-Proofing:  ",
      des:"Our back-end solutions are designed with scalability in mind. We guarantee that your digital ecosystem can accommodate growth and adapt to evolving technological trends."
    },
   
  ]
  return (
    <div className={style.main}>
      <h2>Why Select EasyRyt for Back-End Programming?</h2>
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
