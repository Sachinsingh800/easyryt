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
      title:"All-encompassing Proficiency: ",
      des:"Our team of Pile Developers possesses an extensive skill set that covers both the front-end and back-end technologies. This guarantees a smooth integration of design and functionality."
    },
    {
      icon:<GiCrafting/>,
      title:"All-inclusive Solutions: ",
      des:"We offer comprehensive solutions, covering all stages from idea generation to implementation. With our Full Stack Web Development Services, we serve as your trusted companion capable of managing every element of your undertaking."
    },
    {
      icon:<MdPersonalInjury/>,
      title:"Customization at the Core:",
      des:"Each project is distinct. Our strategy revolves around crafting solutions that are tailored to the specific objectives of your business, guaranteeing optimum functionality. "
    },
    {
      icon:<SiClaris/>,
      title:"Collaborative Approach: ",
      des:"We work closely with designers, front-end developers, and stakeholders to ensure that the final outcome aligns with your vision and delivers an exceptional user experience.  "
    },
    {
      icon:<TbTruckDelivery/>,
      title:"Performance Optimization:",
      des:"Our Stack Engineers optimize both the front-end and back-end elements for efficiency, ensuring that your application operates smoothly and offers a seamless user experience."
    },
    {
      icon:<FaInnosoft/>,
      title:"Innovation and Adaptation: ",
      des:"The digital landscape progresses swiftly, and so do we. Our Stack Engineers stay updated with the latest trends and technologies in the industry, ensuring that your project remains at the forefront of innovation."
    },
   
  ]
  return (
    <div className={style.main}>
      <h2>Why Select EasyRyt for  Full Stack Web Development?</h2>
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
