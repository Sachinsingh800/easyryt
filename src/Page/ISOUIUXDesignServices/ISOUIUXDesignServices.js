import React, { useState } from "react";
import style from "./ISOUIUXDesignServices.module.css";
import NavBar from "../../Component/NavBar/NavBar";
import img from "../../Image/ios UI.UX Design Services 1.png";
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

function ISOUIUXDesignServices() {
  const [showPopup, setShowPopup] = useState(false);

  //popup
  const handleGetStartedClick = () => {
    setShowPopup(true);
  };
  return (
    <div className={style.main}>
      <Helmet>
  <title>iOS Design Services</title>
  <meta charSet="utf-8" />
  <meta
    name="iOS Design Services"
    content="Crafting seamless UI/UX for standout iOS apps. Elevate user experiences with expert design services."
  />
</Helmet>

      <NavBar />
      <div className={style.container}>
        <div>
          <h1>iOS UI/UX Design Services</h1>
          <h6>Crafting Revolutionary Mobile Experiences</h6>
          <p>
            Welcome to EasyRyt, where we are dedicated to delivering remarkable
            iOS UI/UX design solutions that enthral users and enhance the
            performance of your app. As a top-notch provider of UI/UX design
            services, our focus lies in producing aesthetically pleasing and
            intuitive interfaces for iOS applications. Leveraging our
            proficiency and groundbreaking methodology, we breathe vitality into
            your app's concept, guaranteeing its prominence amidst the cutthroat
            App Store terrain.
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

export default ISOUIUXDesignServices;
