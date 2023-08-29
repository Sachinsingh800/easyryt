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
      title:"Expertise and Knowledge:  ",
      des:"Our team of proficient developers in mobile backend guarantees that your projects are carried out with accuracy and proficiency, as we bring along a wealth of experience. "
    },
    {
      icon:<GiCrafting/>,
      title:"Customized Solutions: ",
      des:"We comprehend that each application possesses distinctive backend requirements. Our strategy revolves around developing backend systems that seamlessly align with the specific needs of your app. "
    },
    {
      icon:<MdPersonalInjury/>,
      title:"Efficiency and Reliability:  ",
      des:"Our solutions are finely tuned to maximize speed, responsiveness, and efficient use of resources, ensuring smooth app operations."
    },
    {
      icon:<SiClaris/>,
      title:"Security and Adherence: ",
      des:"Ensuring data security and compliance with regulations is our top priority. Our backend solutions are meticulously designed to safeguard user data and adhere to industry standards. "
    },
    {
      icon:<TbTruckDelivery/>,
      title:"Scalability and Flexibility: ",
      des:"We construct backend systems that can easily accommodate the growth of your app, guaranteeing top-notch performance even as user numbers soar. "
    },
    {
      icon:<FaInnosoft/>,
      title:" Collaborative Partnership: ",
      des:"Communication is essential. Throughout the development and maintenance process, we collaborate closely with you, ensuring that your app's vision guides every step and your feedback is highly valued."
    },
   
  ]
  return (
    <div className={style.main}>
      <h2>Why Choose us for Our Services in Mobile Backend Development ? </h2>
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
