import React from "react";
import style from "./CrossPlatformAppDevelopment.module.css";
import NavBar from "../../Component/NavBar/NavBar";
import img from "../../Image/cross-platform-app-development.png";
import Section1 from "./Section1/Section1";
import Section2 from "../FirstPage/Section2/Section2";
import Section3 from "../FirstPage/Section3/Section3";
import TenthSection from "../../Section/TenthSection/TenthSection";
import SixthSection from "../../Section/SixthSection/SixthSection";
import EleventhSection from "../../Section/EleventhSection/EleventhSection";
import Footer from "../../Component/Footer/Footer";
import CallButton from "../../Component/CallButton/CallButton";

function CrossPlatformAppDevelopment() {
  return (
    <div className={style.main}>
      <NavBar />
      <div className={style.container}>
        <div>
          <h1>Cross-Platform App Development</h1>
          <p>
            Cross Platform App Development Services: Expert solutions for
            creating versatile mobile applications that work seamlessly across
            multiple platforms, reducing development time and costs. Delivering
            efficiency and wide audience reach.
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
      <CallButton/>
      <Footer />
    </div>
  );
}

export default CrossPlatformAppDevelopment;
