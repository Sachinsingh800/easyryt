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
      title:"Skilled Flutter Programmers:",
      des:"Our team comprises of experienced Flutter programmers who are knowledgeable in Flutter's capabilities, best practices, and latest updates, making us the best Flutter App Development Company."
    },
    {
      icon:<GiCrafting/>,
      title:"Inventive Solutions:",
      des:"We stay at the forefront of technological advancements and utilize Flutter's features to generate inventive and cutting-edge app solutions."
    },
    {
      icon:<MdPersonalInjury/>,
      title:"Time and Cost Effectiveness:",
      des:"Flutter's cross-platform nature enables us to develop apps more quickly and decrease development expenses without compromising on quality. "
    },
    {
      icon:<SiClaris/>,
      title:"Visual Excellence: ",
      des:"Our designers produce stunning visuals and animations that enhance user engagement and make a long-lasting impression."
    },
    {
      icon:<TbTruckDelivery/>,
      title:"Expandability:",
      des:"We construct apps with expandability in mind, ensuring that your app can expand along with your user base and changing business requirements."
    },
    {
      icon:<FaInnosoft/>,
      title:"Customer-Focused Approach:",
      des:"Your satisfaction is our top priority. We collaborate closely with you to guarantee that your app aligns with your vision and fulfils your objectives."
    },
   
  ]
  return (
    <div className={style.main}>
      <h2>Why Select EasyRyt for Flutter App Development ?</h2>
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
