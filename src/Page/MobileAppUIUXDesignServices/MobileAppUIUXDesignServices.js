import React, { useState } from "react";
import style from "./MobileAppUIUXDesignServices.module.css";
import NavBar from "../../Component/NavBar/NavBar";
import img from "../../Image/Mobile App UI.UX Design Services 1.png";
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

function MobileAppUIUXDesignServices() {
  const [showPopup, setShowPopup] = useState(false);

  //popup
  const handleGetStartedClick = () => {
    setShowPopup(true);
  };
  return (
    <div className={style.main}>
      <Helmet>
  <title>Portfolio Website Development</title>
  <meta charSet="utf-8" />
  <meta
    name="Portfolio Website Development"
    content="Expert WordPress development for stunning portfolio websites. Showcase your work with impact."
  />
</Helmet>

      <NavBar />
      <div className={style.container}>
        <div>
          <h1>Mobile App UI/UX Design Services</h1>
          <h6>Crafting Revolutionary Mobile Experiences</h6>
          <p>
            Welcome to our top-notch services for designing UI/UX of mobile
            applications! Here at EasyRyt, we acknowledge the significance of a
            thriving mobile app that surpasses mere functionality. Our aim is to
            deliver an effortless, user-friendly, and aesthetically pleasing
            experience. Our team of talented designers focuses solely on
            crafting exceptional interfaces that engage users and elevate their
            interaction with your application.
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

export default MobileAppUIUXDesignServices;
