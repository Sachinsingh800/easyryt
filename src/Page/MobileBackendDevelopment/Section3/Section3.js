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
      title:"Experienced AWS Professionals:  ",
      des:"Our team consists of AWS-certified experts with extensive knowledge in designing, implementing, and managing AWS solutions. Utilizing our track record of success, we bring a vast amount of expertise to assist in your transformation."
    },
    {
      icon:<GiCrafting/>,
      title:"End-to-End Solutions: ",
      des:"We go beyond mere services and provide comprehensive solutions. Our all-encompassing approach ensures a seamless journey with AWS, covering every aspect of your transformation from initial assessment to continued support."
    },
    {
      icon:<MdPersonalInjury/>,
      title:"Client-Focused Approach:  ",
      des:"Your triumph is our utmost priority. We deeply comprehend your business requirements, tailoring our solutions to align with your objectives. Each step we take is dedicated to contributing to your growth and prosperity. "
    },
    {
      icon:<SiClaris/>,
      title:"Innovative Solutions:  ",
      des:"We are pioneers in AWS advancements. Our team doesn't simply follow trends; we pioneer novel methods to harness the capabilities of AWS. This enables us to offer you solutions that provide a competitive edge in your industry. "
    },
    {
      icon:<TbTruckDelivery/>,
      title:"Collaborative Alliance:  ",
      des:"Our approach goes beyond delivering solutions; we foster partnerships. Collaborating closely with your team, we incorporate your perspectives and input, guaranteeing that the solutions we offer are tailored to your distinct corporate character."
    },
    {
      icon:<FaInnosoft/>,
      title:"Enduring Benefits:   ",
      des:"Our dedication surpasses short-term outcomes. We devise solutions that expand, adjust, and advance in parallel with your business. By teaming up with us, you are investing in AWS services that provide continual worth and progression."
    },
   
  ]
  return (
    <div className={style.main}>
      <h2>Why Select EasyRyt for Amazon Web?</h2>
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
