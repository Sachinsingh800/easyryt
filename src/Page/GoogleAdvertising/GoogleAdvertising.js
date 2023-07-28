import React from "react";
import style from "./GoogleAdvertising.module.css";
import NavBar from "../../Component/NavBar/NavBar";
import img from "../../Image/Google Advertising 1.png"
import Section1 from "./Section1/Section1";
import Section2 from "../FirstPage/Section2/Section2";
import Section3 from "../FirstPage/Section3/Section3";
import TenthSection from "../../Section/TenthSection/TenthSection";
import SixthSection from "../../Section/SixthSection/SixthSection";
import EleventhSection from "../../Section/EleventhSection/EleventhSection";
import Footer from "../../Component/Footer/Footer";
import CallButton from "../../Component/CallButton/CallButton";

function GoogleAdvertising() {
  return (
    <div className={style.main}>
      <NavBar />
      <div className={style.container}>
        <div>
          <h1>Google Ads Services</h1>
          <p>
            Google Ads Services: Reach your target audience with precision
            through Google's powerful advertising platform. Drive traffic, boost
            sales, and grow your business with targeted, measurable campaigns.
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

export default GoogleAdvertising;
