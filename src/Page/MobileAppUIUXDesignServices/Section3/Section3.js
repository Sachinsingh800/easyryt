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
      title:"Knowledgeable Team:",
      des:"Our experienced User Interface/User Experience designers bring a vast amount of know-how to the table. Their expertise covers a broad range of industries, ensuring that your application design is customized to your target audience and industry trends."
    },
    {
      icon:<GiCrafting/>,
      title:"User-Focused Approach: ",
      des:"We prioritize the satisfaction of your users. Through thorough research and design based on understanding and empathy, we develop experiences that deeply resonate with your users, enhancing their involvement and contentment."
    },
    {
      icon:<MdPersonalInjury/>,
      title:"Collaborative Partnership:  ",
      des:"We strongly believe in teamwork. Throughout the design process, we work closely with you, appreciating your insights and involving you in every decision. Your vision and feedback serve as the guiding force behind our design approach. "
    },
    {
      icon:<SiClaris/>,
      title:"Cutting-Edge Design:  ",
      des:"Our team maintains a cutting-edge approach to design trends and emerging technologies. This guarantees that your app not only meets present-day standards but also distinguishes itself as a forward-thinking resolution that captivates users. "
    },
    {
      icon:<TbTruckDelivery/>,
      title:"Customized Solutions:  ",
      des:"We comprehend that each app possesses its own unique qualities. Our methodology is adaptable to your specific requirements, objectives, and brand image, resulting in a design that seamlessly aligns with your vision."
    },
    {
      icon:<FaInnosoft/>,
      title:"Results-Oriented: ",
      des:"Our ultimate aim is the success of your app. Our designs are not only visually appealing but are also strategically tailored to foster user engagement, retention, and conversions, ultimately resulting in measurable business achievements."
    },
   
  ]
  return (
    <div className={style.main}>
      <h2>Why Choose us for UI/US Design Services ?</h2>
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
