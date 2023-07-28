import React from "react";
import style from "./IntegrationwithThirdPartyServices.module.css";
import NavBar from "../../Component/NavBar/NavBar";
import img from "../../Image/Integration with Third-Party Services, 1.png";
import Section1 from "./Section1/Section1";
import Section2 from "../FirstPage/Section2/Section2";
import Section3 from "../FirstPage/Section3/Section3";
import TenthSection from "../../Section/TenthSection/TenthSection";
import SixthSection from "../../Section/SixthSection/SixthSection";
import EleventhSection from "../../Section/EleventhSection/EleventhSection";
import Footer from "../../Component/Footer/Footer";
import CallButton from "../../Component/CallButton/CallButton";

function IntegrationwithThirdPartyServices() {
  return (
    <div className={style.main}>
      <NavBar />
      <div className={style.container}>
        <div>
          <h1>Integration with Third-Party Services</h1>
          <p>
            Seamless integration of external services into a platform or
            application, expanding functionality and enhancing user experience
            through collaboration with trusted third-party providers.
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

export default IntegrationwithThirdPartyServices;
