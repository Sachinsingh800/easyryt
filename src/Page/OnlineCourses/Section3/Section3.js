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
      title:"Thorough Exploration",
      des:"We commence by immersing ourselves in your brand's identity, grasping your objectives, target audience, and unique selling points."
    },
    {
      icon:<GiCrafting/>,
      title:" Customized Solutions ",
      des:"Each business possesses individuality, and we have faith in constructing websites that mirror that distinctiveness. Our WordPress developers’ fashion personalized solutions that align with your brand's principles and aims."
    },
    {
      icon:<MdPersonalInjury/>,
      title:"Design Excellence",
      des:"Our designers combine ingenuity and user-centred design principles to fabricate visually remarkable websites that enthral and captivate visitors. "
    },
    {
      icon:<SiClaris/>,
      title:"Flawless WordPress Incorporation",
      des:"Harnessing the potential of WordPress, we assure that your website not only appears astonishing but also operates seamlessly on various devices and browsers. "
    },
    {
      icon:<TbTruckDelivery/>,
      title:"Expertise in WooCommerce ",
      des:"For companies aiming to establish an online store, we seamlessly incorporate WooCommerce, offering a reliable framework for safe transactions and efficient product administration."
    },
    {
      icon:<FaInnosoft/>,
      title:"Continuous Assistance ",
      des:"Our dedication goes beyond just development. We provide ongoing support and upkeep to ensure your website remains up-to-date, secure, and operating at its best."
    },
   
  ]
  return (
    <div className={style.main}>
      <h2>Why Select EasyRyt for Online Courses Development ?</h2>
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
