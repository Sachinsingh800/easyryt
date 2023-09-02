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
      title:"Expertise and Experience:",
      des:"Our group comprises of skilled backend developers with immense experience in developing various and complicated app backends. We stay up to date with the cutting-edge technologies and trends to provide you with present day solutions."
    },
    {
      icon:<GiCrafting/>,
      title:"Custom Solutions:",
      des:"We understand that every app is unique. Our solutions are tailor-made to your precise requirements, ensuring that your app's backend aligns flawlessly with your imagination."
    },
    {
      icon:<MdPersonalInjury/>,
      title:"Agile Development:",
      des:"We observe an agile development methodology, permitting us to confirm to changing necessities and deliver effective backend solutions. This method fosters collaboration, transparency, and quicker shipping. "
    },
    {
      icon:<SiClaris/>,
      title:"Quality Assurance:",
      des:"We are committed to delivering solutions after rigorous testing. Best warranty procedures are an imperative part of our improvement cycle. "
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
      <h2>Why Select EasyRyt for App Backend Development Creation?</h2>
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
