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
      title:"Expert Development Team:",
      des:"Our builders are skilled in crafting tremendous iOS apps that stand out inside the competitive market, making us the best iPhone App Development company. Their know-how ensures that your app is in safe hands"
    },
    {
      icon:<GiCrafting/>,
      title:"Tailored Solutions:",
      des:"We apprehend that each business has unique requirements. Our iOS Application Development team comes up with solutions that are customized for your precise desires, making sure that your app aligns perfectly together with your emblem and desires."
    },
    {
      icon:<MdPersonalInjury/>,
      title:"Innovative Features:",
      des:"We live up to date with the contemporary iOS tendencies and advancements by integrating revolutionary capabilities that supply your app an aggressive facet."
    },
    {
      icon:<SiClaris/>,
      title:"User-Centric Design:",
      des:"A person-friendly design is essential for engagement in an iOS App Development process. Our designs prioritize consumer experience, making sure your app is intuitive and enjoyable"
    },
    {
      icon:<FaInnosoft/>,
      title:"Stringent Testing:",
      des:"We observe an intensive testing process to pick out and rectify any bugs or overall performance issues, making sure a flawless app experience for your users."
    },
    {
      icon:<TbTruckDelivery/>,
      title:"Timely Delivery:",
      des:"We understand the importance of time limits and strive to deliver projects on time without compromising on the results."
    },
   
  ]
  return (
    <div className={style.main}>
      <h2>Why Select EasyRyt for IOS App Development Services?</h2>
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
