import React from "react";
import style from "./FashionLifestyleWebsite.module.css";
import NavBar from "../../Component/NavBar/NavBar";
import img from "../../Image/Facebook & Instagram Advertising 2.png";
import Section1 from "./Section1/Section1";
import Section2 from "../FirstPage/Section2/Section2";
import Section3 from "../FirstPage/Section3/Section3";
import TenthSection from "../../Section/TenthSection/TenthSection";
import SixthSection from "../../Section/SixthSection/SixthSection";
import EleventhSection from "../../Section/EleventhSection/EleventhSection";
import Footer from "../../Component/Footer/Footer";
import CallButton from "../../Component/CallButton/CallButton";

function FashionLifestyleWebsite() {
  return (
    <div className={style.main}>
      <NavBar />
      <div className={style.container}>
        <div>
          <h1>Fashion Lifestyle Website Development Services</h1>
          <p>
            Revamp your style with our bespoke Fashion Lifestyle Website
            Development Services. We create stunning and user-friendly platforms
            to showcase your brand's elegance and trends. Elevate your online
            presence today!
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
      <CallButton  />
      <Footer />
    </div>
  );
}

export default FashionLifestyleWebsite;
