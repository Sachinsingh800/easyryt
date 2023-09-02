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
      title:"Expertise and Skill:   ",
      des:"Our team comprises of proficient developers who specialize in Node.js and possess a vast amount of knowledge in developing outstanding applications. With a proven history of success, we guarantee the competence of your project. "
    },
    {
      icon:<GiCrafting/>,
      title:"Customized Solutions: ",
      des:"We comprehend that each project is distinctive. Our solutions are meticulously crafted to align with your precise objectives, guaranteeing that your applications perfectly cater to your business requirements. "
    },
    {
      icon:<MdPersonalInjury/>,
      title:"Performance-Focused Strategy:  ",
      des:"We are committed to delivering top-notch applications that excel in performance. By utilizing the swiftness of Node.js, we create applications that are not only speedy but also highly responsive and user-friendly. "
    },
    {
      icon:<SiClaris/>,
      title:"Scalability as the Core Principle:   ",
      des:"The scalability offered by Node.js serves as the cornerstone of our methodology. We design applications that effortlessly handle increasing user demands, ensuring that your solutions maintain their robustness as your business expands."
    },
    {
      icon:<TbTruckDelivery/>,
      title:"Collaborative Alliance:  ",
      des:"We have faith in open and ongoing dialogue. During the progress of development, we engage you, integrate your input, and ensure the complete fulfilment of your vision. "
    },
    {
      icon:<FaInnosoft/>,
      title:"Comprehensive Superiority:  ",
      des:"Our methodology surpasses mere coding. We prioritize meticulous testing, streamlined coding techniques, and meticulousness, guaranteeing that your node.js applications attain utmost excellence."
    },
   
  ]
  return (
    <div className={style.main}>
      <h2>Why Choose us for Node.js Development Services ?</h2>
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
