import React, { useState } from "react";
import style from "./AndroidAppUIUXDesignServices.module.css";
import NavBar from "../../Component/NavBar/NavBar";
import img from "../../Image/Android App Advertising 1.png";
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

function AndroidAppUIUXDesignServices() {
  const [showPopup, setShowPopup] = useState(false);

  //popup
  const handleGetStartedClick = () => {
    setShowPopup(true);
  };
  return (
    <div className={style.main}>
      <Helmet>
  <title>Android App Design Services</title>
  <meta charSet="utf-8" />
  <meta
    name="Android App Design Services"
    content="Crafting stellar UI/UX for standout Android apps. Elevate user experiences with expert design services."
  />
</Helmet>

      <NavBar />
      <div className={style.container}>
        <div>
          <h1>Android App UI/UX Design Services</h1>
          <h6>Crafting Revolutionary Mobile Experiences</h6>
          <p>
            Welcome to EasyRyt’s top-notch Android Application Interface and
            Experience Design services! In today's ever-evolving digital
            landscape, ensuring a flawless, visually stunning, and intuitive
            interface holds the key to triumph in the realm of Android
            applications. Our team of expert designers, who specialize in
            crafting extraordinary interfaces, are here to engage users and
            optimize their interaction with your app for unrivalled success..
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
          <img className={style.img} src={img} alt="Android App Design Services" />
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

export default AndroidAppUIUXDesignServices;
