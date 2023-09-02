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
      title:"Skills and Knowledge:  ",
      des:"Our team consists of experienced developers specialized in Laravel with a vast amount of knowledge in building sophisticated web applications. With a track record of successful projects using Laravel, we bring expertise to every phase of development. "
    },
    {
      icon:<GiCrafting/>,
      title:"Customized Solutions: ",
      des:"We acknowledge the significance of tailored solutions. Our Laravel offerings are intricately designed to perfectly align with your business requirements, resulting in applications that cater specifically to your unique needs. "
    },
    {
      icon:<MdPersonalInjury/>,
      title:"Effectiveness and Accuracy:   ",
      des:"We harness the capabilities of Laravel to deliver applications that excel in both performance and functionality. Our developers combine efficient coding techniques with a meticulous attention to detail, ensuring exceptional outcomes "
    },
    {
      icon:<SiClaris/>,
      title:"Expandability and Advancement:  ",
      des:"Our applications are built for the long term. Focusing on scalability, we create Laravel solutions that can adapt and grow alongside your business, serving as a solid foundation for future expansion. "
    },
    {
      icon:<TbTruckDelivery/>,
      title:"Collaborative Method:  ",
      des:"Cooperation is fundamental to our procedure. We closely collaborate with you, making sure that your perspectives and input are incorporated at each stage of the progress. Your vision drives our solutions."
    },
    {
      icon:<FaInnosoft/>,
      title:"Thorough Excellence:  ",
      des:"Starting from project initiation to continued assistance after launch, we provide a comprehensive method to Laravel development. Our dedication does not cease with deployment; we deliver continual upkeep to ensure the seamless operation of your applications."
    },
   
  ]
  return (
    <div className={style.main}>
      <h2>Why Choose us for Laravel Development ?</h2>
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
