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
      title:"Expertise in Employment Platforms: ",
      des:"We have in-depth knowledge of the dynamics of employment platforms and how to build websites that meet the requirements of both employers and job seekers."
    },
    {
      icon:<GiCrafting/>,
      title:"WordPress Proficiency:   ",
      des:"With a deep understanding of the WordPress platform, we harness its capabilities to design dynamic and user-friendly employment websites."
    },
    {
      icon:<MdPersonalInjury/>,
      title:"Focus on User Experience: ",
      des:"Our design team always prioritizes user satisfaction and creates interfaces that promote seamless navigation, job searching, and application submission. "
    },
    {
      icon:<SiClaris/>,
      title:"Streamlined Job Listing Integration: ",
      des:"We ensure that employers can easily manage job listings and job seekers can swiftly discover and apply for vacancies. "
    },
    {
      icon:<TbTruckDelivery/>,
      title:"Technical Expertise:  ",
      des:"Our developers guarantee technical optimization, enhancing performance, security, and user interactions on your employment website."
    },
    {
      icon:<FaInnosoft/>,
      title:"Continuous Support:  ",
      des:"Not only do we excel in development, but we also provide ongoing support to ensure that your employment website remains up-to-date and operates optimally."
    },
   
  ]
  return (
    <div className={style.main}>
      <h2>Why Choose our Job Board Website Development Services ? </h2>
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
