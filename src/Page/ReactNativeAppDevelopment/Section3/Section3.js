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
      icon:<FaInnosoft/>,
      title:"Professional React Native Development Company:",
      des:"Our team consists of proficient React Native developers who have a thorough understanding of the framework's capabilities, best practices, and latest updates."
    },
    {
      icon:<GiSkills/>,
      title:"State-of-the-art Solutions: ",
      des:"We stay ahead of the technological curve, harnessing React Native's potential to deliver innovative and forward-thinking app solutions."
    },
    {
      icon:<GiCrafting/>,
      title:"Time and Cost Effectiveness: ",
      des:"React Native's cross-platform nature speeds up development timelines and reduces expenses while maintaining app quality."
    },
    {
      icon:<MdPersonalInjury/>,
      title:"Visual Excellence: ",
      des:"Our designers create captivating visuals and animations that enhance user engagement and leave a lasting impression.  "
    },
    {
      icon:<SiClaris/>,
      title:"Scalability:",
      des:"We design apps with scalability in mind, ensuring they can accommodate growth in user base and evolving business requirements. "
    },
    {
      icon:<TbTruckDelivery/>,
      title:"Expandability:",
      des:"We construct apps with expandability in mind, ensuring that your app can expand along with your user base and changing business requirements."
    },

   
  ]
  return (
    <div className={style.main}>
      <h2>Why Select EasyRyt for Flutter App Development ?</h2>
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
