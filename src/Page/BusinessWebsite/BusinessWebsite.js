import React, { useState } from "react";
import style from "./BusinessWebsite.module.css";
import NavBar from "../../Component/NavBar/NavBar";
import img from "../../Image/App UI.UX Design Services 1.png";
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

function BusinessWebsite() {
  const [showPopup, setShowPopup] = useState(false);

  //popup
  const handleGetStartedClick = () => {
    setShowPopup(true);
  };
  return (
    <div className={style.main}>
      <Helmet>
  <title>WordPress Business Development Services</title>
  <meta charSet="utf-8" />
  <meta
    name="WordPress Business Development Services"
    content="Empower your brand with expert WordPress business development services. Elevate online success."
  />
</Helmet>

      <NavBar />
      <div className={style.container}>
        <div>
          <h1>WordPress Business Development Services</h1>
          <h6>Revamp Your Enterprise with Our Extensive WordPress Corporate</h6>
          <p>
            Welcome to the domain of our WordPress Corporate Website Creation,
            where creativity, expertise in design, and technical proficiency
            unite to propel your enterprise towards online recognition. Equipped
            with WordPress as our primary instrument and your ambitions as our
            compass, we fabricate digital platforms that go beyond mere
            functionality - they become driving forces for expansion.
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
          <img className={style.img} src={img} alt="img" />
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

export default BusinessWebsite;
