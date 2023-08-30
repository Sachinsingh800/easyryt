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
      title:"Expertise and Experience: ",
      des:"We excel in iPhone app marketing and have a proven history of delivering exceptional outcomes. Our team's extensive knowledge and experience make us the ideal partner to lead your app towards success. "
    },
    {
      icon:<GiCrafting/>,
      title:"Mastery of the iOS Ecosystem: ",
      des:"We comprehend the intricacies of the iOS environment – from the most recent design guidelines to patterns in user behaviour. This understanding allows us to develop marketing tactics that seamlessly integrate with the iOS experience. "
    },
    {
      icon:<MdPersonalInjury/>,
      title:"Customized Strategies for Distinct Applications: ",
      des:"Your application is unique, and therefore its marketing approach should be as well. We approach each project as a distinct challenge, tailoring strategies that align with your app's objectives and principles.  "
    },
    {
      icon:<SiClaris/>,
      title:"Open Collaboration: ",
      des:"Communication is at the heart of our partnership. We keep you informed about every aspect of our strategies, ensuring your involvement in the decision-making process. "
    },
    {
      icon:<TbTruckDelivery/>,
      title:"Measurable Outcomes: ",
      des:"Our main focus is on delivering quantifiable results. We establish clear objectives and key performance indicators, guaranteeing that our approaches produce tangible outcomes. "
    },
    {
      icon:<FaInnosoft/>,
      title:"Staying Ahead of Trends: ",
      des:"The iPhone app market constantly evolves. Our team maintains a leading position, consistently upgrading our strategies to incorporate the most recent industry trends and optimal methodologies. "
    },
   
  ]
  return (
    <div className={style.main}>
      <h2>Why select us for promoting your iOS application?</h2>
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
