import React from 'react'
import style from "./SecondSection.module.css"
import { Counter1,Counter2,Counter3,Counter4,Counter5 } from '../../Component/Counter/Counter'

function SecondSection() {
  return (
    <div className={style.main}>
        <h1>ABOUT US</h1>
      <div   className={style.innerbox}>
        <h2>We Provide Custom Web Design, Mobile App Development Solutions for your venture or start-ups.
       </h2>
       <p>We are professional and experienced in delivering Customized & Superior quality Web Design and App development solutions at most reasonable price. Here we assist you to Figure out the finest results out of your funds through our digital services.</p>
      </div>
      <div   className={style.bottominnerbox}>
     <h2><span className={style.span}><Counter1/>+</span><p>Years Of Experience</p></h2>
     <h2><span className={style.span}><Counter2/>+</span><p>Clients over all the world</p></h2>
     <h2><span className={style.span}><Counter3/>+</span><p>Web & Apps Delivered</p></h2>
     <h2><span className={style.span}><Counter4/>%</span><p>Consistent Growth rate since 2017</p></h2>
     <h2><span className={style.span}><Counter5/>%</span><p>Repeat Clients</p></h2>
     <button>Learn more</button>
      </div>
    </div>
  )
}

export default SecondSection
