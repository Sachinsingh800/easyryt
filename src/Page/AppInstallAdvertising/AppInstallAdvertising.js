import React, { useState } from "react";
import style from "./AppInstallAdvertising.module.css";
import NavBar from "../../Component/NavBar/NavBar";
import img from "../../Image/App Install Advertising 1.png";
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

function AppInstallAdvertising() {
  const [showPopup, setShowPopup] = useState(false);

  //popup
  const handleGetStartedClick = () => {
    setShowPopup(true);
  };
  return (
    <div className={style.main}>
      <Helmet>
  <title>Boost App Installs</title>
  <meta charSet="utf-8" />
  <meta
    name="Boost App Installs"
    content="Drive downloads with strategic app install advertising. Elevate your app's reach effectively."
  />
</Helmet>

      <NavBar />
      <div className={style.container}>
        <div>
          <h1> App Install Advertising</h1>
          <h6>Crafting Revolutionary Mobile Experiences</h6>
          <p>
            EasyRyt, the ultimate platform for extensive and outcome-oriented
            app promotion solutions. As an expert app marketing agency, we are
            dedicated to accelerating the growth and exposure of your mobile
            application in the ever-evolving digital world. With a deep
            comprehension of the complexities associated with app promotion and
            mobile app marketing, we devise customized tactics that align with
            your app's distinctive character, guaranteeing its reach to the
            appropriate user base and facilitating extraordinary
            accomplishments.
          </p>
          <button
            type="submit"
            className={style.submitBtn}
            onClick={handleGetStartedClick}
          >
            Get Started
          </button>
        </div>
        <div>
          <img className={style.img} src={img} alt="App Install Advertising" />
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

export default AppInstallAdvertising;
