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
      title:"Expert React Developers:",
      des:"Our team consists of skilled React engineers who have a deep understanding of the complexities of the framework. They possess extensive knowledge of best practices and the most recent trends, resulting in the delivery of exceptional development work."
    },
    {
      icon:<GiCrafting/>,
      title:"Proven History of Success: ",
      des:"Through a collection of accomplished React JS projects, we showcase a consistent ability to provide outstanding applications that not only meet but surpass client expectations."
    },
    {
      icon:<MdPersonalInjury/>,
      title:"Customized Solutions:   ",
      des:"We recognize the distinctiveness of each project. Our solutions are tailor-made to meet your specific business requirements, guaranteeing that your application effectively addresses your objectives. "
    },
    {
      icon:<SiClaris/>,
      title:"Comprehensive Approach:   ",
      des:"From conceptualization to deployment and even beyond, we offer all-encompassing solutions. Our comprehensive approach covers everything from design and development to testing, deployment, and ongoing support, ensuring a seamless and integrated experience. "
    },
    {
      icon:<TbTruckDelivery/>,
      title:"Collaborative Partnership: ",
      des:"We consider our clients as partners in the journey of development. We highly value your input, encourage open communication, and ensure that your insights are incorporated throughout the entire development process."
    },
    {
      icon:<FaInnosoft/>,
      title:"Innovation and Flexibility:   ",
      des:"Our team thrives on innovation and adaptability. We remain up-to-date with the latest technologies and methodologies, ensuring that your application benefits from cutting-edge solutions that can readily adapt to evolving needs."
    },
   
  ]
  return (
    <div className={style.main}>
      <h2>Why Choose us for React JS Development ?</h2>
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
