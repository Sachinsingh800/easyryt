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
      title:"Skilled Specialists in Incorporation:   ",
      des:"Our team consists of proficient experts with extensive knowledge, guaranteeing flawless and efficient amalgamation of various external partner services. "
    },
    {
      icon:<GiCrafting/>,
      title:"Tailored Resolutions: ",
      des:"We recognize that each incorporation is distinct. Our approach focuses on developing resolutions that seamlessly align with your specific necessities. "
    },
    {
      icon:<MdPersonalInjury/>,
      title:"Productiveness and Compatibility:  ",
      des:"Our resolutions are devised to ensure that external partner services integrate effortlessly with your existing systems, augmenting functionality and compatibility. "
    },
    {
      icon:<SiClaris/>,
      title:"Protection of Data and Adherence to Regulations:   ",
      des:"We prioritize the security of data and compliance with regulatory requirements. Our incorporation resolutions are designed to safeguard sensitive information and guarantee adherence to industry norms.  "
    },
    {
      icon:<TbTruckDelivery/>,
      title:"Flexibility and Adaptability:  ",
      des:"We design incorporation systems that can adapt alongside your enterprise, accommodating future enhancements and alterations. "
    },
    {
      icon:<FaInnosoft/>,
      title:"Cooperative Partnership:  ",
      des:"Communication is crucial. Throughout the incorporation process and beyond, we collaborate closely with you, ensuring that your objectives guide every phase."
    },
   
  ]
  return (
    <div className={style.main}>
      <h2>Why Choose us for Third-Party Integration ?</h2>
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
