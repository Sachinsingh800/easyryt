import React from "react";
import style from "./TwelvethSection.module.css";
import img from "../../Image/system-outline-63-settings-cog (1).gif"
import { ExperienceCounter1,ExperienceCounter2,ExperienceCounter3,ExperienceCounter4,ExperienceCounter5 } from "../../Component/Counter/Counter";

function TwelvethSection() {
  return (
    <>
    <div className={style.main}>
      <h1>Why Hire From Us?</h1>
      <p>
        We Are a Team Of Qualified Development Professionals Adept At Expanding
        Your Current Systems Capabilities Via The Development And Integration
        Of Salesforce CRM.
      </p>
      <div className={style.container}>
        <div>
            <h2><ExperienceCounter1/></h2>
            <h6>Year Experience</h6>
        </div>
        <div>
            <h2><ExperienceCounter2/></h2>
            <h6>Support</h6>
        </div>
        <div>
            <h2><ExperienceCounter3/></h2>
            <h6>Customization</h6>
        </div>
        <div>
            <h2><ExperienceCounter4/></h2>
            <h6>Timely Delivery</h6>
        </div>
        <div>
            <h2><ExperienceCounter5/></h2>
          
            <h6>Expertise</h6>
        </div>

      </div>
      <img className={style.img} src={img} alt="img" />
             <img className={style.img1} src={img} alt="img" />
             <img className={style.img2} src={img} alt="img" />
             <img className={style.img3} src={img} alt="img" />
    </div>
          
             </>
  );
}

export default TwelvethSection;
