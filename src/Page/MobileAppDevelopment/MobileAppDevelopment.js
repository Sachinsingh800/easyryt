import React from "react";
import style from "./MobileAppDevelopment.module.css";
import NavBar from "../../Component/NavBar/NavBar";
import img from "../../Image/cross-platform-app-development.png";
import Section1 from "./Section1/Section1";
import Section2 from "../FirstPage/Section2/Section2";
import Section3 from "../FirstPage/Section3/Section3";
import TenthSection from "../../Section/TenthSection/TenthSection";
import SixthSection from "../../Section/SixthSection/SixthSection";
import EleventhSection from "../../Section/EleventhSection/EleventhSection";
import Footer from "../../Component/Footer/Footer";

function MobileAppDevelopment() {
  return (
    <div className={style.main}>
      <NavBar />
      <div className={style.container}>
        <div>
          <h1>Mobile Application Development Services</h1>
          <p>
            Get cutting-edge Mobile App Development Services: Custom app design,
            seamless functionality, and expert support for Android and iOS
            platforms. Enhance your business reach and engagement today!
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

export default MobileAppDevelopment;