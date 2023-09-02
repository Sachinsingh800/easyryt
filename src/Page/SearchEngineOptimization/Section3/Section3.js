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
      title:"Devoted Specialists: ",
      des:"Our team of SEO experts stays updated with the latest algorithm updates and industry trends. You can rely on us to implement methods that align with best practices. "
    },
    {
      icon:<GiCrafting/>,
      title:"Personalized Approaches:",
      des:"We recognize that every business is distinct. Our approaches towards SEO are customized to match your specific objectives, target audience, and industry, ensuring optimal outcomes."
    },
    {
      icon:<MdPersonalInjury/>,
      title:"Openness:",
      des:"We believe in transparent communication. Our clients receive regular reports elucidating the progress of our SEO endeavours and the influence on their online presence. "
    },
    {
      icon:<SiClaris/>,
      title:"Long-Term Collaboration:",
      des:"We are dedicated to your long-term success. As the digital panorama evolves, we adapt our SEO marketing approach to guarantee your website remains competitive and exceedingly visible. "
    },
    {
      icon:<TbTruckDelivery/>,
      title:"Timely Delivery:",
      des:"We apprehend the significance of timely app launches. Our efficient time management guarantees that we supply results inside agreed-upon timelines."
    },
    {
      icon:<FaInnosoft/>,
      title:"Client-Centric Approach: ",
      des:"Your satisfaction is our priority. We maintain open communication throughout the development system, keeping you updated and involved at every stage."
    },
   
  ]
  return (
    <div className={style.main}>
      <h2>Why Select EasyRyt for SEO Services?</h2>
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
