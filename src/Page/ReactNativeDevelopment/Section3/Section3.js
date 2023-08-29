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
      title:"Expertise in React Native:  ",
      des:"Our team consists of skilled developers who possess a deep understanding of the intricacies of the framework. With hands-on experience and a proven track record, we offer unparalleled proficiency in app development using React Native. "
    },
    {
      icon:<GiCrafting/>,
      title:"Tailored Solutions: ",
      des:"We understand that each project is distinct. Our approach involves creating customized solutions using React Native that align seamlessly with your business objectives, ensuring that your app caters to your specific requirements."
    },
    {
      icon:<MdPersonalInjury/>,
      title:"Cross-Platform Proficiency:  ",
      des:"Our team excels in utilizing the cross-platform capabilities of React Native, guaranteeing flawless performance on both iOS and Android devices. This strategy maximizes your app's accessibility and enhances user engagement. "
    },
    {
      icon:<SiClaris/>,
      title:"Component Reusability:   ",
      des:"The component-based architecture of React Native empowers us to develop reusable components that maintain consistency and efficiency across platforms, resulting in accelerated development and a unified user interface. "
    },
    {
      icon:<TbTruckDelivery/>,
      title:"Excellence in Performance:  ",
      des:"We optimize the loading times and responsiveness of your app by utilizing the native components of React Native. This ensures a superior user experience that captivates and retains users."
    },
    {
      icon:<FaInnosoft/>,
      title:"Ongoing Collaboration: ",
      des:"We consider our clients as partners in the development journey. Our transparent and collaborative approach ensures that your insights and feedback shape the project, resulting in an app that truly reflects your vision and goals."
    },
   
  ]
  return (
    <div className={style.main}>
      <h2>Why Choose us for React Native Development ?</h2>
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
