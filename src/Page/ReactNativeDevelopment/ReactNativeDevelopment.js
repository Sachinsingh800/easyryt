import React from "react";
import style from "./ReactNativeDevelopment.module.css";
import NavBar from "../../Component/NavBar/NavBar";
import img from "../../Image/React Js Development 1.png";
import Section1 from "./Section1/Section1";
import Section2 from "../FirstPage/Section2/Section2";
import Section3 from "../FirstPage/Section3/Section3";
import TenthSection from "../../Section/TenthSection/TenthSection";
import SixthSection from "../../Section/SixthSection/SixthSection";
import EleventhSection from "../../Section/EleventhSection/EleventhSection";
import Footer from "../../Component/Footer/Footer";

function ReactNativeDevelopment() {
  return (
    <div className={style.main}>
      <NavBar />
      <div className={style.container}>
        <div>
          <h1>React Native Development Services</h1>
          <p>
            Expert React Native development services for cross-platform mobile
            app solutions, combining native performance with JavaScript ease.
            Seamless user experiences and rapid deployment for your business
            needs.
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

export default ReactNativeDevelopment;