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
      title:"Experts in Design:  ",
      des:"Our experienced designers specializing in UI/UX offer a wealth of knowledge and ingenuity. They have a wide range of expertise across various industries, guaranteeing designs that deeply resonate with your specific target audience."
    },
    {
      icon:<GiCrafting/>,
      title:"A User-Focused Method: ",
      des:"Users are our top priority. Through thorough research and design-driven by empathy, we create experiences that cater to the unique needs of users, nurturing engagement and contentment. "
    },
    {
      icon:<MdPersonalInjury/>,
      title:"Unmatched Creativity: ",
      des:"Our designs go beyond mere functionality; they are visually captivating while staying true to your brand identity. We seamlessly blend aesthetics with practicality, resulting in designs that leave a lasting impact.  "
    },
    {
      icon:<SiClaris/>,
      title:"Collaborative Partnership:  ",
      des:"Collaboration is fundamental to our values. Throughout the design process, we maintain close cooperation with you, appreciating your insights to ensure that the final product reflects your vision and objectives.  "
    },
    {
      icon:<TbTruckDelivery/>,
      title:"Pioneering Solutions:  ",
      des:"Our team continuously keeps up with the latest design trends and adheres to industry best practices. This guarantees that your designs are not only up-to-date but also innovative and forward-thinking. "
    },
    {
      icon:<FaInnosoft/>,
      title:"Outcome-Oriented Approach:   ",
      des:"Designing is our passion and are created with a deep meaning hidden in it. Our designs are strategically crafted to enhance user engagement, retention, and conversions, ultimately translating into measurable business results."
    },
   
  ]
  return (
    <div className={style.main}>
      <h2> Why Choose us for UI/UX Design Services?</h2>
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
