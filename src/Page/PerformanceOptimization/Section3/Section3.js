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
      des:"Our team of skilled performance optimizers brings vast knowledge and a wealth of experience to the table, ensuring that your projects are executed with meticulous precision and unmatched mastery."
    },
    {
      icon:<GiCrafting/>,
      title:"Tailored Solutions: ",
      des:"We recognize and acknowledge that every digital platform possesses distinct requirements. Our approach focuses on developing optimization strategies that seamlessly align with your specific needs, guaranteeing a seamless and harmonious integration."
    },
    {
      icon:<MdPersonalInjury/>,
      title:"Efficiency and Velocity:   ",
      des:"Our solutions are meticulously crafted to enhance platform speed, responsiveness, and resource efficiency, promising an uninterrupted and swift user experience. "
    },
    {
      icon:<SiClaris/>,
      title:"Cutting-Edge Techniques:   ",
      des:"We harness the power of the latest techniques and technologies to fine-tune your digital properties, ensuring they meet contemporary standards and perform optimally."
    },
    {
      icon:<TbTruckDelivery/>,
      title:"Insights Driven by Data: ",
      des:"Our performance optimization practices rely on comprehensive data analysis. We diligently identify performance bottlenecks and inefficiencies to implement targeted enhancements."
    },
    {
      icon:<FaInnosoft/>,
      title:"Collaborative Partnership:  ",
      des:"Communication lies at the core of our approach. Throughout the optimization process, we foster a close working relationship with you, ensuring that your objectives guide each step and that we highly value your feedback." },
   
  ]
  return (
    <div className={style.main}>
      <h2>Why Choose us for Performance Optimization ?</h2>
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
