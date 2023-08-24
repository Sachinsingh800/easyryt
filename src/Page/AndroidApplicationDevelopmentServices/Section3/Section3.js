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
      title:"Experienced Team:",
      des:"Our initial step is to gain a deep understanding of your app's purpose, target audience, and distinguishing features. Our team of experts collaborates closely with you to define the objectives and scope of your project."
    },
    {
      icon:<GiCrafting/>,
      title:"Technology Selection:",
      des:"The selection of the most appropriate technology stack is crucial for successful cross-platform development. Our developers, who have extensive experience in this field, choose the frameworks and tools that best suit the specific requirements of your project."
    },
    {
      icon:<MdPersonalInjury/>,
      title:"Design and User Experience:",
      des:"Our talented design team creates interfaces that are intuitive and user-friendly, providing a consistent experience across different platforms. Our focus is on usability, aesthetics, and functionality to ensure maximum user engagement. "
    },
    {
      icon:<SiClaris/>,
      title:"Efficient Development:",
      des:"The development process we follow adheres to the best practices in cross-platform development, resulting in a robust and scalable application. We utilize frameworks such as React Native, Flutter, and Xamarin to ensure optimal performance."
    },
    {
      icon:<TbTruckDelivery/>,
      title:"Testing and Quality Assurance:",
      des:"Rigorous testing forms the core of our development process. We ensure that your app functions flawlessly on various devices and platforms, delivering a smooth and bug-free experience."
    },
    {
      icon:<FaInnosoft/>,
      title:"Deployment and Support:",
      des:"We handle the entire deployment process across multiple app stores and provide ongoing support to address any issues that may arise and implement necessary updates."
    },
   
  ]
  return (
    <div className={style.main}>
      <h2>Why Select EasyRyt for Cross-platform  App Creation?</h2>
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
