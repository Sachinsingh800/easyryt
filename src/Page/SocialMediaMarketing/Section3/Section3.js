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
      title:"Proficiency and Background: ",
      des:"Our specialists in social networking platforms possess a vast reservoir of knowledge and skill. They have effectively devised and implemented promotional approaches on various online platforms for enterprises operating in diverse sectors."
    },
    {
      icon:<GiCrafting/>,
      title:"Creative Brilliance: ",
      des:"Innovation is at the heart of what we do. Our team of content producers and designers work together to craft visually captivating and emotionally evocative content that captivates and engages your target audience."
    },
    {
      icon:<MdPersonalInjury/>,
      title:"Personalization: ",
      des:"We don't believe in one-size-fits-all solutions. Our approaches are tailor-made to fit your distinct business requirements.  "
    },
    {
      icon:<SiClaris/>,
      title:"Data-Driven: ",
      des:"Our choices are grounded in data and analytics, guaranteeing that we are on the correct path to achieve your objectives.  "
    },
    {
      icon:<TbTruckDelivery/>,
      title:"Openness: ",
      des:"We uphold transparent communication with our clients, offering regular updates and reports on campaign performance. "
    },
    {
      icon:<FaInnosoft/>,
      title:"Genuine Involvement:  ",
      des:"Authenticity holds great importance. We interact with your target audience in a sincere and significant manner, constructing trust and nurturing allegiance to your brand."
    },
   
  ]
  return (
    <div className={style.main}>
      <h2> Why Select EasyRyt for Social Media Marketing Services?</h2>
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
