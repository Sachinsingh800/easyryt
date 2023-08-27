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
      title:"Expertise:",
      des:"Our team of proficient digital marketers possesses an extensive comprehension of the intricacies of Facebook Ads and Instagram Ads. We remain up-to-date with the most recent trends and algorithm changes to guarantee that your campaigns are consistently optimized."
    },
    {
      icon:<GiCrafting/>,
      title:"Visual Innovation:",
      des:"Innovation is at the core of our advertisement compositions. We merge captivating visuals with persuasive advertisement text to develop advertisements that deeply connect with your target demographic."
    },
    {
      icon:<MdPersonalInjury/>,
      title:"Customization: ",
      des:"We understand that each business has distinct objectives. Our marketing strategies are custom-tailored to your specific aims, whether it involves driving website traffic, elevating brand awareness, or enhancing conversions. "
    },
    {
      icon:<SiClaris/>,
      title:"Data-Driven:",
      des:"We firmly believe in the power of data. We perpetually monitor the performance of your advertisements, analyse the outcomes, and make adjustments based on data to ensure that your campaigns yield the most favourable results. "
    },
    {
      icon:<TbTruckDelivery/>,
      title:"Transparency:",
      des:"You will have full transparency into the progress of your campaigns. Our regular reporting keeps you well-informed about crucial metrics, enabling you to trace the success of your marketing endeavours."
    },
    {
      icon:<FaInnosoft/>,
      title:"ROI-Focused: ",
      des:"Our ultimate objective is to generate a significant return on investment for your advertising budget. We tirelessly work to ensure that every penny spent on ads produces meaningful outcomes for your business."
    },
   
  ]
  return (
    <div className={style.main}>
      <h2>Why Select EasyRyt for App Backend Development Creation?</h2>
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
