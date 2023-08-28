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
      title:"Skilled Design Team:  ",
      des:"Our talented team of user interface/experience designers possesses extensive experience. They have worked across various industries, guaranteeing that the design of your Android app is customized to your target audience and aligned with current industry patterns."
    },
    {
      icon:<GiCrafting/>,
      title:"User-Focused Approach: ",
      des:"Users lie at the heart of our designs. By conducting thorough research and employing empathetic design strategies, we produce experiences that deeply resonate with your target audience, ultimately boosting engagement and satisfaction."
    },
    {
      icon:<MdPersonalInjury/>,
      title:"Collaborative Partnership:  ",
      des:"We place a strong emphasis on teamwork. Throughout the design process, we work closely with you, valuing your insights and involving you in every decision. Your vision and feedback serve as guiding principles for our design approach. "
    },
    {
      icon:<SiClaris/>,
      title:"Personalized Solutions:   ",
      des:"We understand that every client is unique. Therefore, we tailor our solutions to meet your specific requirements and goals. Our design process is adaptive, ensuring that the final product aligns with your aspirations. "
    },
    {
      icon:<TbTruckDelivery/>,
      title:"Attention to Detail:  ",
      des:"We believe in delivering excellence. Our team pays meticulous attention to every detail, ensuring that the design of your Android app is visually appealing, user-friendly, and seamless in its functionality."
    },
    {
      icon:<FaInnosoft/>,
      title:"Timely Delivery:   ",
      des:"We understand the importance of meeting deadlines. With our efficient project management, we ensure that your Android app UI/UX design is completed within the agreed-upon timeframe, without compromising on quality."
    },
   
  ]
  return (
    <div className={style.main}>
      <h2>Why Select EasyRyt for  Android Application User Interface ?</h2>
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
