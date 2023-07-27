import React from "react";
import style from "./AndroidAppAdvertising.module.css";
import NavBar from "../../Component/NavBar/NavBar";
import img from "../../Image/Android App Advertising 1.png";
import Section1 from "./Section1/Section1";
import Section2 from "../FirstPage/Section2/Section2";
import Section3 from "../FirstPage/Section3/Section3";
import TenthSection from "../../Section/TenthSection/TenthSection";
import SixthSection from "../../Section/SixthSection/SixthSection";
import EleventhSection from "../../Section/EleventhSection/EleventhSection";
import Footer from "../../Component/Footer/Footer";

function AndroidAppAdvertising() {
  return (
    <div className={style.main}>
      <NavBar />
      <div className={style.container}>
        <div>
          <h1>Android App Advertising Services</h1>
          <p>
            Boost your app's visibility and user base with our expert Android
            App Advertising Services. Drive installs, engagement, and revenue
            through targeted campaigns and strategic promotions. Try now!
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

export default AndroidAppAdvertising;
