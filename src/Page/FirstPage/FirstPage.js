import React from "react";
import style from "./FirstPage.module.css";
import NavBar from "../../Component/NavBar/NavBar";
import img from "../../Image/Mobile-App-Development.png"
import Section1 from "./section1/Section1";
import Section2 from "./Section2/Section2";
import Section3 from "./Section3/Section3";
import TenthSection from "../../Section/TenthSection/TenthSection";
import SixthSection from "../../Section/SixthSection/SixthSection";
import EleventhSection from "../../Section/EleventhSection/EleventhSection";
import Footer from "../../Component/Footer/Footer";


function FirstPage() {
  return (
    <div className={style.main}>
      <NavBar />
      <div className={style.container}>
        <div>
          <h1>Native App Development Services</h1>
          <p>
            Offering Native App Development Services, we build high-quality
            mobile apps tailored for Android and iOS platforms, ensuring optimal
            performance, seamless user experience, and efficient utilization of
            device capabilities.
          </p>
          <button type="submit" className={style.submitBtn}>Get Started</button>
        </div>
        <div>
            <img className={style.img} src={img} alt="img" />
            </div>
      </div>
      <Section1 />
      <Section2/>
      <Section3/>
      <TenthSection/>
      <SixthSection />
      <EleventhSection/>
      <Footer/>
    </div>
  );
}

export default FirstPage;
