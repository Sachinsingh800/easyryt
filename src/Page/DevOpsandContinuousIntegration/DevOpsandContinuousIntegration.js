import React, { useState } from "react";
import style from "./DevOpsandContinuousIntegration.module.css";
import NavBar from "../../Component/NavBar/NavBar";
import img from "../../Image/DevOps and Continuous Integration Continuous Deployment (CI.CD), 1.png";
import Section2 from "./Section2/Section2";
import Section3 from "./Section3/Section3";
import SixthSection from "../../Section/SixthSection/SixthSection";
import EleventhSection from "../../Section/EleventhSection/EleventhSection";
import Footer from "../../Component/Footer/Footer";
import CallButton from "../../Component/CallButton/CallButton";
import PopupOption from "../../Component/PopupOption/PopupOption";
import Section4 from "./Section4/Section4";
import ForthSection from "../../Section/ForthSection/ForthSection";
import ServiceForm from "../../Component/ServiceForm/ServiceForm";
import Section5 from "./Section5/Section5";
import Section from "./Section1/Section";
import { Helmet } from "react-helmet";

function DevOpsandContinuousIntegration() {
  const [showPopup, setShowPopup] = useState(false);

  //popup
  const handleGetStartedClick = () => {
    setShowPopup(true);
  };
  return (
    <div className={style.main}>
      <Helmet>
  <title>DevOps & CI/CD Services</title>
  <meta charSet="utf-8" />
  <meta
    name="DevOps & CI/CD Services"
    content="Streamline your process with expert DevOps and CI/CD services. Elevate your digital solutions seamlessly."
  />
</Helmet>

      <NavBar />
      <div className={style.container}>
        <div>
          <h1>
            Expert DevOps and Continuous Integration/Continuous Deployment
            (CI/CD) Services
          </h1>
          <h6>Discover Our Extensive Array of AWS Solutions</h6>
          <p>
            Welcome to EasyRyt’s dedicated page for Professional DevOps and
            Continuous Integration/Continuous Deployment (CI/CD) Solutions. We
            specialize in providing cutting-edge services that bring together
            innovation and streamlined workflows. If you are ready to accelerate
            the delivery of your software, improve collaboration, and constantly
            enhance your processes, you have come to the right place. Our team
            of skilled DevOps engineers is here to fine-tune your development
            lifecycle, guaranteeing efficiency, dependability, and continuous
            innovation.
          </p>
          <button
            type="submit"
            className={style.submitBtn}
            onClick={handleGetStartedClick}
          >
            Get Started
          </button>
        </div>
        <div className={style.img_box}>
          <img className={style.img} src={img} alt="DevOps and Continuous Integration/Continuous Deployment" />
        </div>
      </div>
      <Section />
      <Section2 />
      <Section3 />
      <Section4 />
      <ServiceForm />
      <ForthSection />
      <SixthSection />
      <EleventhSection />
      <Section5 />
      <CallButton />
      <Footer />
      {showPopup && (
        <>
          <button
            onClick={() => setShowPopup(false)}
            className={style.closebtn}
          >
            Close
          </button>
          <PopupOption />
        </>
      )}
    </div>
  );
}

export default DevOpsandContinuousIntegration;
