import React from "react";
import style from "./DevOpsandContinuousIntegration.module.css";
import NavBar from "../../Component/NavBar/NavBar";
import img from "../../Image/DevOps and Continuous Integration Continuous Deployment (CI.CD), 1.png";
import Section1 from "./Section1/Section1";
import Section2 from "../FirstPage/Section2/Section2";
import Section3 from "../FirstPage/Section3/Section3";
import TenthSection from "../../Section/TenthSection/TenthSection";
import SixthSection from "../../Section/SixthSection/SixthSection";
import EleventhSection from "../../Section/EleventhSection/EleventhSection";
import Footer from "../../Component/Footer/Footer";

function DevOpsandContinuousIntegration() {
  return (
    <div className={style.main}>
      <NavBar />
      <div className={style.container}>
        <div>
          <h1>
            DevOps and Continuous Integration Continuous Deployment (CICD)
          </h1>
          <p>
            DevOps: An approach that unifies software development (Dev) and IT
            operations (Ops), enhancing collaboration and automation for faster
            and more reliable software delivery. CI/CD: A practice automating
            code integration, testing, and deployment, enabling rapid and
            frequent releases, ensuring a streamlined and error-free software
            delivery pipeline.
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

export default DevOpsandContinuousIntegration;
