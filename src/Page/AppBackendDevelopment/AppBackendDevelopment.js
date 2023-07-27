import React from "react";
import style from "./AppBackendDevelopment.module.css";
import NavBar from "../../Component/NavBar/NavBar";
import img from "../../Image/App Backend Development 1.png";
import Section1 from "./Section1/Section1";
import Section2 from "../FirstPage/Section2/Section2";
import Section3 from "../FirstPage/Section3/Section3";
import TenthSection from "../../Section/TenthSection/TenthSection";
import SixthSection from "../../Section/SixthSection/SixthSection";
import EleventhSection from "../../Section/EleventhSection/EleventhSection";
import Footer from "../../Component/Footer/Footer";

function AppBackendDevelopment() {
  return (
    <div className={style.main}>
      <NavBar />
      <div className={style.container}>
        <div>
          <h1>App Backend Development Services</h1>
          <p>
            Expert app backend development services for seamless, efficient, and
            scalable performance. APIs, databases, and server-side solutions
            tailored to your app's unique needs. Boost your app's functionality
            today.
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

export default AppBackendDevelopment;
