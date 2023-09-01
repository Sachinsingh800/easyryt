import React, { useState } from "react";
import style from "./UIUXDesignServices.module.css";
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

function UIUXDesignServices() {
  const [showPopup, setShowPopup] = useState(false);

  //popup
  const handleGetStartedClick = () => {
    setShowPopup(true);
  };
  return (
    <div className={style.main}>
      <Helmet>
  <title>Innovative UIUX Design</title>
  <meta charSet="utf-8" />
  <meta
    name="Innovative UIUX Design"
    content="Crafting captivating user experiences. Elevate your product with expert design services."
  />
</Helmet>

      <NavBar />
      <div className={style.container}>
        <div>
          <h1>UI/UX Design Services</h1>
          <h6>Crafting Revolutionary Mobile Experiences</h6>
          <p>
            Welcome to EasyRyt’s inclusive UI/UX Design offerings! Here, we
            specialize in crafting outstanding user experiences through
            instinctive interface design. Our devoted team of UI/UX designers
            blends creativity with user-centred principles to produce designs
            that enchant users and enhance digital interactions..
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
          <img className={style.img} src={img} alt="UI/UX Design Services" />
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

export default UIUXDesignServices;
