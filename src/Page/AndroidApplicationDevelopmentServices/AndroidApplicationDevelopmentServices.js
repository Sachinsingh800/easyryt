import React from "react";
import style from "./AndroidApplicationDevelopmentServices.module.css";
import NavBar from "../../Component/NavBar/NavBar";
import img from "../../Image/Android Application Development Services 1.png";
import Section1 from "./Section1/Section1";
import Section2 from "../FirstPage/Section2/Section2";
import Section3 from "../FirstPage/Section3/Section3";
import TenthSection from "../../Section/TenthSection/TenthSection";
import SixthSection from "../../Section/SixthSection/SixthSection";
import EleventhSection from "../../Section/EleventhSection/EleventhSection";
import Footer from "../../Component/Footer/Footer";
import CallButton from "../../Component/CallButton/CallButton";

function AndroidApplicationDevelopmentServices() {
  return (
    <div className={style.main}>
      <NavBar />
      <div className={style.container}>
        <div>
          <h1>Android Application Development Services</h1>
          <p>
            Get professional Android app development services tailored to your
            needs. Expert team, cutting-edge technology, and seamless user
            experiences to bring your ideas to life. Elevate your business
            today!
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

export default AndroidApplicationDevelopmentServices;
