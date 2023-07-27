import React from "react";
import style from "./EcommerceWebsiteOnlineStore.module.css";
import NavBar from "../../Component/NavBar/NavBar";
import img from "../../Image/Ecommerce Online Store 1.png";
import Section1 from "./Section1/Section1";
import Section2 from "../FirstPage/Section2/Section2";
import Section3 from "../FirstPage/Section3/Section3";
import TenthSection from "../../Section/TenthSection/TenthSection";
import SixthSection from "../../Section/SixthSection/SixthSection";
import EleventhSection from "../../Section/EleventhSection/EleventhSection";
import Footer from "../../Component/Footer/Footer";

function EcommerceWebsiteOnlineStore() {
  return (
    <div className={style.main}>
      <NavBar />
      <div className={style.container}>
        <div>
          <h1>Ecommerce Website Online Store Development Services</h1>
          <p>
            Boost your business with our expert Ecommerce Website Development
            services. Create a powerful online store that attracts customers and
            maximizes sales. Contact us today for tailored solutions.
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

export default EcommerceWebsiteOnlineStore;