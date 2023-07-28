import React from "react";
import style from "./VuejsDevelopment.module.css";
import NavBar from "../../Component/NavBar/NavBar";
import img from "../../Image/Vue js Development 1.png";
import Section1 from "./Section1/Section1";
import Section2 from "../FirstPage/Section2/Section2";
import Section3 from "../FirstPage/Section3/Section3";
import TenthSection from "../../Section/TenthSection/TenthSection";
import SixthSection from "../../Section/SixthSection/SixthSection";
import EleventhSection from "../../Section/EleventhSection/EleventhSection";
import Footer from "../../Component/Footer/Footer";
import CallButton from "../../Component/CallButton/CallButton";

function VuejsDevelopment() {
  return (
    <div className={style.main}>
      <NavBar />
      <div className={style.container}>
        <div>
          <h1>Vue.js Development Services</h1>
          <p>
            Vue.js Development Services: Expert Vue.js development for
            interactive, efficient, and scalable web applications. Custom
            components, seamless integration, and optimized user experiences to
            elevate your online presence.
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

export default VuejsDevelopment;
