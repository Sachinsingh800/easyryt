import React, { useState } from "react";
import style from "./CloudSolutions.module.css";
import NavBar from "../../Component/NavBar/NavBar";
import img from "../../Image/Cloud Services Integration, 1.png";
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

function CloudSolutions() {
  const [showPopup, setShowPopup] = useState(false);

  //popup
  const handleGetStartedClick = () => {
    setShowPopup(true);
  };
  return (
    <div className={style.main}>
      <NavBar />
      <div className={style.container}>
        <div>
          <h1>Amazon Web Services</h1>
          <h6>Discover Our Extensive Array of AWS Solutions</h6>
          <p>
            Step into the realm of EasyRyt’s specialized AWS offerings, granting
            you access to harness the exceptional capabilities of Amazon Web
            Services. Are you prepared to propel your enterprise towards the
            forefront of the industry, equipped with the flexibility,
            protection, and ingenuity that AWS provides? Search no more. Our
            comprehensive selection of AWS solutions is crafted with meticulous
            precision to accommodate businesses in pursuit of digital revolution
            and a leading position in the ever-evolving contemporary
            environment.
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
          <img className={style.img} src={img} alt="Amazon Web Services" />
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

export default CloudSolutions;
