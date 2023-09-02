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
      title:"Skilled iOS Designers: ",
      des:"Our proficient designers have a strong command of iOS design principles and possess extensive expertise in crafting interfaces that align with the most current trends and user preferences."
    },
    {
      icon:<GiCrafting/>,
      title:"User-Focused Approach: ",
      des:"Users are at the heart of our designs. We make it a priority to understand your audience, creating designs that cater to their needs and expectations for optimal engagement and satisfaction."
    },
    {
      icon:<MdPersonalInjury/>,
      title:"Collaborative Approach: ",
      des:"We believe in the power of collaboration. Throughout the design process, we actively involve you to ensure that the final product aligns with your vision and goals. "
    },
    {
      icon:<SiClaris/>,
      title:"Innovative Advancements:   ",
      des:"Our team stays up-to-date with the latest iOS design trends, guaranteeing that your app not only meets industry standards but also stands out as inventive and forward-thinking. "
    },
    {
      icon:<TbTruckDelivery/>,
      title:"Strategic Design Thinking:  ",
      des:"Our designs are not only visually appealing; they are thoughtfully crafted to enhance user engagement, retention, and conversions."
    },
    {
      icon:<FaInnosoft/>,
      title:"Proven Outcomes: ",
      des:"With a strong track record of successful iOS UI/UX design projects across various industries, we have the skills and expertise to deliver designs that contribute to the success of your app."
    },
   
  ]
  return (
    <div className={style.main}>
      <h2>Why Choose us for iOS UI/UX Design Services ?</h2>
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
