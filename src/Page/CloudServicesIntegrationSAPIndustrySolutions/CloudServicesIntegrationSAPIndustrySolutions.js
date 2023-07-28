import React from "react";
import style from "./CloudServicesIntegrationSAPIndustrySolutions.module.css";
import NavBar from "../../Component/NavBar/NavBar";
import img from "../../Image/Cloud Services Integration, 1.png";
import Section1 from "./Section1/Section1";
import Section2 from "../FirstPage/Section2/Section2";
import Section3 from "../FirstPage/Section3/Section3";
import TenthSection from "../../Section/TenthSection/TenthSection";
import SixthSection from "../../Section/SixthSection/SixthSection";
import EleventhSection from "../../Section/EleventhSection/EleventhSection";
import Footer from "../../Component/Footer/Footer";
import CallButton from "../../Component/CallButton/CallButton";

function CloudServicesIntegrationSAPIndustrySolutions() {
  return (
    <div className={style.main}>
      <NavBar />
      <div className={style.container}>
        <div>
          <h1>Cloud Services Integration Services</h1>
          <p>
            Cloud Services Integration Services facilitate seamless integration
            of various cloud-based applications and resources, enabling
            efficient data transfer, process automation, and smooth
            communication between systems, all within the cloud environment.
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

export default CloudServicesIntegrationSAPIndustrySolutions;
