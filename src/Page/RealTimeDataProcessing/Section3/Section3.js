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
      title:"Proficiency and Background:  ",
      des:"Our team of proficient data processing specialists brings a wealth of experience to the table, ensuring your projects are carried out with accuracy and expertise."
    },
    {
      icon:<GiCrafting/>,
      title:"Customized Solutions: ",
      des:"We comprehend that each organization possesses distinct data processing requirements. Our strategy centres around developing solutions that seamlessly align with your particular needs. "
    },
    {
      icon:<MdPersonalInjury/>,
      title:"Effectiveness and Swiftness:  ",
      des:"Our solutions are optimized for efficiency, guaranteeing prompt real-time data processing that facilitates timely decision-making. "
    },
    {
      icon:<SiClaris/>,
      title:"Actionable Forecasts: ",
      des:"We concentrate on transforming data into practical prognoses. Our team effectively employs cutting-edge analytics to convert raw data into valuable intelligence. "
    },
    {
      icon:<TbTruckDelivery/>,
      title:"Scalability and Flexibility:  ",
      des:"We devise solutions that can adapt alongside your business, ensuring you are well-prepared for escalating data volumes and future demands. "
    },
    {
      icon:<FaInnosoft/>,
      title:"Collaborative Partnership:  ",
      des:"Effective communication is fundamental. Throughout the data processing journey, we work closely with you, ensuring your vision guides every stride in the process."
    },
   
  ]
  return (
    <div className={style.main}>
      <h2>Why Choose us for Our Real-Time Data Processing Services ? </h2>
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
