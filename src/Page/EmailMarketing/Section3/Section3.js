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
      title:"List Organization and Segmentation: ",
      des:"Constructing a high-quality email list is crucial. We assist you in effectively managing your list and dividing it for precise targeting."
    },
    {
      icon:<GiCrafting/>,
      title:"Captivating Content Development:",
      des:"Our content experts create engaging content that connects with your audience and motivates action."
    },
    {
      icon:<MdPersonalInjury/>,
      title:"Responsive Design: ",
      des:"Your emails will appear stunning on any device, ensuring that your message effectively reaches a varied audience. "
    },
    {
      icon:<SiClaris/>,
      title:"Automation Setup:",
      des:"Save time and enhance efficiency with automated email workflows that nurture potential leads and maintain customer engagement.  "
    },
    {
      icon:<TbTruckDelivery/>,
      title:"Timely Delivery:",
      des:"We apprehend the significance of timely app launches. Our efficient time management guarantees that we supply results inside agreed-upon timelines."
    },
    {
      icon:<FaInnosoft/>,
      title:"Performance Tracking and Reporting: ",
      des:"We offer detailed analytics to monitor the success of your campaigns. This data-oriented approach enables us to make informed decisions and refine strategies."
    },
   
  ]
  return (
    <div className={style.main}>
      <h2>Why Select EasyRyt for Email Marketing Services ?</h2>
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
