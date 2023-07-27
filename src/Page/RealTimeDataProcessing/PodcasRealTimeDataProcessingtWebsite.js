import React from "react";
import style from "./RealTimeDataProcessing.module.css";
import NavBar from "../../Component/NavBar/NavBar";
import img from "../../Image/Real-Time Data Processing, 1.png";
import Section1 from "./Section1/Section1";
import Section2 from "../FirstPage/Section2/Section2";
import Section3 from "../FirstPage/Section3/Section3";
import TenthSection from "../../Section/TenthSection/TenthSection";
import SixthSection from "../../Section/SixthSection/SixthSection";
import EleventhSection from "../../Section/EleventhSection/EleventhSection";
import Footer from "../../Component/Footer/Footer";

function RealTimeDataProcessing() {
  return (
    <div className={style.main}>
      <NavBar />
      <div className={style.container}>
        <div>
          <h1>Real-Time Data Processing</h1>
          <p>
            Real-Time Data Processing enables instantaneous analysis and actions
            on incoming data, providing up-to-the-minute insights for critical
            decision-making and responsiveness in various applications and
            industries.
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

export default RealTimeDataProcessing;