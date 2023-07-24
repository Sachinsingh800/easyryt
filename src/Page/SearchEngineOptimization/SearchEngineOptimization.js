import React from "react";
import style from "./SearchEngineOptimization.module.css";
import NavBar from "../../Component/NavBar/NavBar";
import img from "../../Image/cross-platform-app-development.png";
import Section1 from "./Section1/Section1";
import Section2 from "../FirstPage/Section2/Section2";
import Section3 from "../FirstPage/Section3/Section3";
import TenthSection from "../../Section/TenthSection/TenthSection";
import SixthSection from "../../Section/SixthSection/SixthSection";
import EleventhSection from "../../Section/EleventhSection/EleventhSection";
import Footer from "../../Component/Footer/Footer";

function SearchEngineOptimization() {
  return (
    <div className={style.main}>
      <NavBar />
      <div className={style.container}>
        <div>
          <h1>Search Engine Optimization (SEO) Services</h1>
          <p>
            SEO Services enhance website visibility on search engines, boosting
            organic traffic and improving rankings. Experts optimize content,
            keywords, and technical aspects to maximize online presence and
            business growth.
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

export default SearchEngineOptimization;