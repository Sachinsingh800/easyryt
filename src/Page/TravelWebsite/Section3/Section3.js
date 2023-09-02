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
      title:"Travel Enthusiasts: ",
      des:"We possess an ardour for globetrotting and comprehend the essentials of crafting websites that transport guests to various corners of the globe."
    },
    {
      icon:<GiCrafting/>,
      title:"WordPress Proficiency:  ",
      des:"With an extensive understanding of the WordPress platform, we harness its capabilities to fabricate dynamic and captivating travel websites."
    },
    {
      icon:<MdPersonalInjury/>,
      title:"Visual Wonders:  ",
      des:"Our designers prioritize aesthetics, constructing designs that elicit the essence of wanderlust and invigorate visitors to embark on novel ventures. "
    },
    {
      icon:<SiClaris/>,
      title:"Location Proficiency: ",
      des:"We ensure that the specifics of destinations, itineraries, and travel guides are presented in a manner that resonates with the interests of voyagers. "
    },
    {
      icon:<TbTruckDelivery/>,
      title:"Technical Expertise: ",
      des:"Our developers optimize your travel website to enhance speed, performance, and user engagements. "
    },
    {
      icon:<FaInnosoft/>,
      title:"Continuous Assistance: ",
      des:"Beyond development, we offer ongoing support to keep your travel website up to date and functioning optimally."
    },
   
  ]
  return (
    <div className={style.main}>
      <h2>Why Select Our WordPress Travel Website Creation Services? </h2>
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
