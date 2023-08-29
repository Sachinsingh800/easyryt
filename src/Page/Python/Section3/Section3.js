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
      title:" Expertise and Proficiency:  ",
      des:"Our team consists of skilled experts in Python development with a proven history of successful projects. Their expertise guarantees that your projects are carried out with accuracy and mastery. "
    },
    {
      icon:<GiCrafting/>,
      title:"Tailored Solutions:  ",
      des:"We recognize the importance of customization. Our Python solutions are meticulously tailored to align with your unique business requirements, resulting in applications that are as exclusive as your brand."
    },
    {
      icon:<MdPersonalInjury/>,
      title:"Efficiency and Excellence:  ",
      des:"By merging Python's capabilities with our development prowess, we create applications that excel in both functionality and user experience, delivering optimal outcomes. "
    },
    {
      icon:<SiClaris/>,
      title:"Scalability and Innovation:  ",
      des:"We design solutions with scalability and adaptability in mind, allowing your applications to evolve alongside your business. Our innovative approach ensures long-term success.  "
    },
    {
      icon:<TbTruckDelivery/>,
      title:"Collaborative Partnership: ",
      des:"Collaboration lies at the heart of our process. We closely cooperate with you to integrate your insights and feedback, ensuring that your vision guides the journey of development. "
    },
    {
      icon:<FaInnosoft/>,
      title:"Comprehensive Support:  ",
      des:"Our commitment extends beyond development. We provide continuous support, ensuring the smooth operation of your Python applications, troubleshooting issues, and providing updates as necessary."
    },
   
  ]
  return (
    <div className={style.main}>
      <h2>Why Choose us for Python Development ?</h2>
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
