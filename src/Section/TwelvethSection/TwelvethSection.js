import React from "react";
import style from "./TwelvethSection.module.css";
import img from "../../Image/system-outline-63-settings-cog (1).gif"

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
            <h2>0</h2>
            <h6>Year Experience</h6>
        </div>
        <div>
            <h2>110</h2>
            <h6>Year Experience</h6>
        </div>
        <div>
            <h2>34</h2>
            <h6>Year Experience</h6>
        </div>
        <div>
            <h2>78</h2>
            <h6>Year Experience</h6>
        </div>
        <div>
            <h2>12</h2>
            <h6>Year Experience</h6>
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
