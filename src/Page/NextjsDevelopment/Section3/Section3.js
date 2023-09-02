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
      title:"Expertise in Next.js: ",
      des:"Our team consists of experienced Next.js developers who are highly skilled in harnessing the capabilities of the framework to their maximum potential. With a proven track record of successful projects, we bring unparalleled expertise to every development undertaking."
    },
    {
      icon:<GiCrafting/>,
      title:"Tailored Solutions: ",
      des:"We understand that each project is distinctive. Our approach involves tailoring Next.js solutions specifically to align seamlessly with your individual business objectives and requirements, ensuring a truly personalized application."
    },
    {
      icon:<MdPersonalInjury/>,
      title:"Performance-Driven Approach:  ",
      des:"We acknowledge the paramount significance of performance in today's digital landscape. Our focus on utilizing Next.js's server-side rendering ensures applications with outstanding speed and responsiveness, providing a competitive advantage. "
    },
    {
      icon:<SiClaris/>,
      title:"User-Centric Design: ",
      des:"Our design philosophy revolves around creating interfaces that prioritize the user, not only in terms of visual appeal but also in enhancing user engagement and satisfaction, fostering a smooth and enjoyable browsing experience. "
    },
    {
      icon:<TbTruckDelivery/>,
      title:"Collaborative Partnership: ",
      des:"Through our transparent and collaborative approach, we ensure that your insights and feedback play an integral role in the development process, resulting in a solution that resonates with your vision."
    },
    {
      icon:<FaInnosoft/>,
      title:"Ongoing Excellence:   ",
      des:"Our commitment goes beyond development. We offer continuous support, maintenance, and updates to keep your Next.js application operating at its peak performance, guaranteeing that it consistently meets evolving user expectations and industry standards."
    },
   
  ]
  return (
    <div className={style.main}>
      <h2>Why Choose us for Next JS Development ?</h2>
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
