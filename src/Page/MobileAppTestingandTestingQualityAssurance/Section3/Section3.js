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
      title:"Skilled Testing Team:",
      des:"Our expert testing professionals have extensive experience in testing mobile apps across various industries and platforms."
    },
    {
      icon:<GiCrafting/>,
      title:"Extensive Testing:",
      des:"Our testing services cover a wide range of aspects, ensuring that every aspect of your app is thoroughly examined for quality."
    },
    {
      icon:<MdPersonalInjury/>,
      title:"Modern Tools:",
      des:"We utilize cutting-edge testing tools and methodologies to provide accurate and reliable results. "
    },
    {
      icon:<SiClaris/>,
      title:"Detailed Documentation:",
      des:"Our comprehensive test reports provide insights into problems, suggestions for enhancements, and a clear roadmap for addressing identified issues."
    },
    {
      icon:<TbTruckDelivery/>,
      title:"Punctual Delivery:",
      des:"We understand the importance of launching your app on time. Our efficient testing process ensures timely delivery without compromising on quality."
    },
    {
      icon:<FaInnosoft/>,
      title:"Customer Collaboration:",
      des:"We believe in collaborative partnerships. Your input and feedback are vital to our testing process, ensuring that your app meets your expectations."
    },
   
  ]
  return (
    <div className={style.main}>
      <h2>Why Select EasyRyt for Mobile Application Testing Services?</h2>
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
