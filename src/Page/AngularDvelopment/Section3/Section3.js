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
      title:"AngularJS Expertise: ",
      des:"Our team comprises skilled developers proficient in AngularJS, possessing a profound comprehension of the framework's intricate details. With hands-on practice and a proven track record, we bring unmatched proficiency to every project involving AngularJS development."
    },
    {
      icon:<GiCrafting/>,
      title:"Tailored Solutions:",
      des:"We recognize the distinctiveness of each project. Our approach involves creating customized solutions in AngularJS that align flawlessly with your business objectives, guaranteeing that your application caters to your specific requirements."
    },
    {
      icon:<MdPersonalInjury/>,
      title:"Mature Framework Proficiency:  ",
      des:"As a reputable company specializing in AngularJS development, we possess a deep understanding of the framework's capabilities and subtleties. We harness its mature ecosystem to construct resilient, scalable, and feature-rich applications. "
    },
    {
      icon:<SiClaris/>,
      title:"User-Centric Approach:  ",
      des:"Our design and development strategies place user experiences at the forefront. We design interfaces that not only captivate aesthetically but also engage users, promoting a seamless and pleasurable interaction with your application. "
    },
    {
      icon:<TbTruckDelivery/>,
      title:"Collaborative Partnership: ",
      des:"We regard our clients as partners on our development journey. Our transparent and collaborative approach ensures that your insights and feedback shape the project, resulting in an application that truly reflects your vision."
    },
    {
      icon:<FaInnosoft/>,
      title:"Continuous Excellence:  ",
      des:"Our commitment surpasses development. We provide ongoing support, updates, and maintenance to ensure that your AngularJS application sustains peak performance and evolves in accordance with evolving industry standards."
    },
   
  ]
  return (
    <div className={style.main}>
      <h2>Why Choose us for Angular JS Development ?</h2>
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
