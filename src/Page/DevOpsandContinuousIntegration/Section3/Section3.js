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
      title:"Proficient DevOps Specialists:   ",
      des:"Our squad consists of talented DevOps specialists with vast expertise, guaranteeing seamless execution of DevOps and CI/CD methodologies."
    },
    {
      icon:<GiCrafting/>,
      title:"Tailored Solutions: ",
      des:"We acknowledge the unique requirements of each organization. Our approach revolves around crafting solutions that perfectly align with your specific needs. "
    },
    {
      icon:<MdPersonalInjury/>,
      title:"Effectiveness and Velocity:   ",
      des:"Our solutions are designed to expedite software delivery, diminishing development cycles and empowering you to gain an edge in a competitive environment. "
    },
    {
      icon:<SiClaris/>,
      title:"Trustworthiness and Automation: ",
      des:"We prioritize dependability through automation. Our CI/CD pipelines and IaC implementations ensure consistent and flaw-free deployments.  "
    },
    {
      icon:<TbTruckDelivery/>,
      title:"Expandability and Resource Optimization:  ",
      des:"We deploy containerization and orchestration solutions that facilitate efficient resource utilization and effortless scalability. "
    },
    {
      icon:<FaInnosoft/>,
      title:"Collaborative Partnership:  ",
      des:"Communication is key. Throughout the entire DevOps and CI/CD implementation, we collaborate closely with you, making sure your objectives guide every step of the way."
    },
   
  ]
  return (
    <div className={style.main}>
      <h2>What Choose us for Our DevOps and CI/CD Services ?</h2>
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
