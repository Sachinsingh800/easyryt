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
      title:"Expertise and Experience:   ",
      des:"Our team comprises skilled developers who have a vast amount of knowledge and expertise in creating APIs. With a well-established history of success, we guarantee that your projects will be executed with meticulousness and proficiency."
    },
    {
      icon:<GiCrafting/>,
      title:"Customized Solutions: ",
      des:"We recognize that each business is distinctive. Therefore, our approach centres around designing APIs that are tailored to meet your specific requirements, resulting in seamless integration within your ecosystem."
    },
    {
      icon:<MdPersonalInjury/>,
      title:"Streamlined Performance:  ",
      des:"We prioritize both the functionality and efficiency of our APIs. Our designs are optimized for speed, responsiveness, and user satisfaction, ensuring exceptional performance. "
    },
    {
      icon:<SiClaris/>,
      title:"Robust Security and Compliance:  ",
      des:"The safeguarding of data is of paramount importance to us. We employ strong security measures, including authentication, encryption, and adherence to industry standards, in order to ensure the protection of your data. "
    },
    {
      icon:<TbTruckDelivery/>,
      title:"Collaborative Partnership: ",
      des:"We firmly believe in transparent and continuous communication. Throughout the development process, we actively involve you, integrate your feedback, and work towards achieving your vision."
    },
    {
      icon:<FaInnosoft/>,
      title:"End-to-End Excellence:   ",
      des:"Our commitment extends beyond development. We provide comprehensive support that includes detailed documentation, efficient troubleshooting, and ongoing maintenance, guaranteeing the reliability and up-to-datedness of your APIs."
    },
   
  ]
  return (
    <div className={style.main}>
      <h2>Why Choose us for API Development ?</h2>
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
