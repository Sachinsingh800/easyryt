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
      title:"Podcast Lovers: ",
      des:"Our team is fervent about podcasts and comprehends the distinct requirements of podcasters. Our proficiency guarantees that your podcast website is customized to your specific niche."
    },
    {
      icon:<GiCrafting/>,
      title:"WordPress Expertise:  ",
      des:"With extensive understanding of the WordPress ecosystem, we harness its capabilities to craft dynamic and functional podcast websites."
    },
    {
      icon:<MdPersonalInjury/>,
      title:"Captivating Designs: ",
      des:"Our designers fuse imagination with utility, forging podcast websites that enthral visitors and inspire exploration. "
    },
    {
      icon:<SiClaris/>,
      title:"Ease of Managing Episodes: ",
      des:"We devise user-friendly episode management systems that simplify the process of uploading, organizing, and presenting your content.  "
    },
    {
      icon:<TbTruckDelivery/>,
      title:"Technical Superiority:  ",
      des:"Our developers ensure that your podcast website is technically optimized for seamless performance and rapid loading times."
    },
    {
      icon:<FaInnosoft/>,
      title:"Continuous Assistance:  ",
      des:"Beyond mere development, we provide ongoing support to ensure your podcast website remains updated and performs optimally."
    },
   
  ]
  return (
    <div className={style.main}>
      <h2>Why Select Our WordPress Podcast Website Development Services? </h2>
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
