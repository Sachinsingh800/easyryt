import React from "react";
import style from "./MobileAppTestingandTestingQualityAssurance.module.css";
import NavBar from "../../Component/NavBar/NavBar";
import img from "../../Image/cross-platform-app-development.png";
import Section1 from "./Section1/Section1";
import Section2 from "../FirstPage/Section2/Section2";
import Section3 from "../FirstPage/Section3/Section3";
import TenthSection from "../../Section/TenthSection/TenthSection";
import SixthSection from "../../Section/SixthSection/SixthSection";
import EleventhSection from "../../Section/EleventhSection/EleventhSection";
import Footer from "../../Component/Footer/Footer";

function MobileAppTestingandTestingQualityAssurance() {
  return (
    <div className={style.main}>
      <NavBar />
      <div className={style.container}>
        <div>
          <h1>Mobile App Testing and Testing Quality Assurance</h1>
          <p>
            Mobile App Testing: Ensuring mobile applications are free of bugs
            and function as intended on various devices and platforms. Testing
            Quality Assurance: Processes and methodologies to ensure the overall
            quality and reliability of software products through rigorous
            testing and validation.
          </p>
          <button type="submit" className={style.submitBtn}>
            Get Started
          </button>
        </div>
        <div>
          <img className={style.img} src={img} alt="img" />
        </div>
      </div>
      <Section1 />
      <Section2 />
      <Section3 />
      <TenthSection />
      <SixthSection />
      <EleventhSection />
      <Footer />
    </div>
  );
}

export default MobileAppTestingandTestingQualityAssurance;
