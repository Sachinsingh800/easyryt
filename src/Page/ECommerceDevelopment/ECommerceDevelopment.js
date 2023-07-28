import React from "react";
import style from "./ECommerceDevelopment.module.css";
import NavBar from "../../Component/NavBar/NavBar";
import img from "../../Image/E-Commerce Development 1.png";
import Section1 from "./Section1/Section1";
import Section2 from "../FirstPage/Section2/Section2";
import Section3 from "../FirstPage/Section3/Section3";
import TenthSection from "../../Section/TenthSection/TenthSection";
import SixthSection from "../../Section/SixthSection/SixthSection";
import EleventhSection from "../../Section/EleventhSection/EleventhSection";
import Footer from "../../Component/Footer/Footer";
import CallButton from "../../Component/CallButton/CallButton";

function ECommerceDevelopment() {
  return (
    <div className={style.main}>
      <NavBar />
      <div className={style.container}>
        <div>
          <h1>E-Commerce website Development Services</h1>
          <p>
            Get your online store up and running with our expert E-Commerce
            website development services. User-friendly, secure, and optimized
            for success.
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

export default ECommerceDevelopment;
