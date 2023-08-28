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
      title:"WordPress Expertise: ",
      des:"Our team of specialists in WordPress has vast knowledge in crafting sophisticated and operative websites on the WordPress platform."
    },
    {
      icon:<GiCrafting/>,
      title:"Innovative Excellence:   ",
      des:"We value the importance of Wordpress design. Our inventive designers collaborate with developers to generate visually impressive websites that resonate with your target audience."
    },
    {
      icon:<MdPersonalInjury/>,
      title:"User-Focused Approach: ",
      des:"User experience is fundamental to our designs. We produce websites that not only possess aesthetic appeal but also function seamlessly. "
    },
    {
      icon:<SiClaris/>,
      title:"Personalization:",
      des:"We customize our solutions to align with your vision and goals, guaranteeing that your WordPress website is exclusively yours. "
    },
    {
      icon:<TbTruckDelivery/>,
      title:"Cooperative Partnership:  ",
      des:"Continuous communication maintains your involvement throughout the development process, assuring that your vision is brought to fruition. Punctual Delivery: We recognize the significance of deadlines. Our development process is streamlined, guaranteeing that your website is launched on time."
    },
    {
      icon:<FaInnosoft/>,
      title:"Scalability and Future-Proofing:  ",
      des:"Our back-end solutions are designed with scalability in mind. We guarantee that your digital ecosystem can accommodate growth and adapt to evolving technological trends."
    },
   
  ]
  return (
    <div className={style.main}>
      <h2>Why Choose us for WordPress Blog and Individual Website Development ?</h2>
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
