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
      title:"Extensive Knowledge in Vue.js: ",
      des:"Our team consists of highly skilled Vue.js developers who possess a deep understanding of the framework's capabilities. With practical experience and a proven track record of successful projects, we offer unparalleled expertise in Vue.js development."
    },
    {
      icon:<GiCrafting/>,
      title:"Customized Solutions: ",
      des:"We acknowledge that each project is distinctive. Our methodology involves tailoring Vue.js solutions to seamlessly align with your business objectives, ensuring a truly personalized application that caters to your specific requirements."
    },
    {
      icon:<MdPersonalInjury/>,
      title:"Exceptional Performance:  ",
      des:"We recognize the paramount importance of performance in today's digital landscape. Our focus on harnessing Vue.js's lightweight architecture guarantees applications with exceptional loading speed and responsiveness. "
    },
    {
      icon:<SiClaris/>,
      title:"User-Focused Approach: ",
      des:"Our design and development strategies prioritize the creation of user-centric interfaces that not only have a visually appealing design but also foster user engagement and satisfaction, enhancing the overall user experience."
    },
    {
      icon:<TbTruckDelivery/>,
      title:"Coordinated Partnership:  ",
      des:"We consider our clients as partners in the development journey. Our transparent and collaborative approach ensures that your insights and feedback play an integral role throughout the development process. "
    },
    {
      icon:<FaInnosoft/>,
      title:"Continuous Excellence:   ",
      des:"Our commitment extends beyond the completion of development. We provide ongoing support, maintenance, and updates to ensure that your Vue.js application maintains peak performance and adapts to evolving needs."
    },
   
  ]
  return (
    <div className={style.main}>
      <h2>Why Choose us for Vue JS Development  ?</h2>
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
