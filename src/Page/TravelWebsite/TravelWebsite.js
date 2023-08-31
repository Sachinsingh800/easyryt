import React, { useState } from "react";
import style from "./TravelWebsite.module.css";
import NavBar from "../../Component/NavBar/NavBar";
import img from "../../Image/Website Traffic Advertising 2.png";
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

function TravelWebsite() {
  const [showPopup, setShowPopup] = useState(false);

  //popup
  const handleGetStartedClick = () => {
    setShowPopup(true);
  };
  return (
    <div className={style.main}>
      <Helmet>
  <title>Travel Site Development</title>
  <meta charSet="utf-8" />
  <meta
    name="Travel Site Development"
    content="Expert WordPress development for captivating travel websites. Elevate your wanderlust platform seamlessly."
  />
</Helmet>

      <NavBar />
      <div className={style.container}>
        <div>
          <h1>WordPress Travel Website Development Services</h1>
          <h6>
            Embark on Digital Journeys with Professional WordPress Travel
            Website Development Solutions
          </h6>
          <p>
            Welcome to EasyRyt,s specialized WordPress Travel Website
            Development services, where creativity, design brilliance, and
            technical expertise merge to build captivating online platforms that
            evoke the desire to wander. With a comprehensive understanding of
            the travel industry and proficiency in WordPress, we design websites
            that not only highlight travel destinations but also immerse
            visitors in unforgettable virtual travel encounters.
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

export default TravelWebsite;
