import React, { useState } from "react";
import style from "./AnalyticsandReporting.module.css";
import NavBar from "../../Component/NavBar/NavBar";
import img from "../../Image/Analytics and Reporting 1.png";
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

function AnalyticsandReporting() {
  const [showPopup, setShowPopup] = useState(false);

  //popup
  const handleGetStartedClick = () => {
    setShowPopup(true);
  };
  return (
    <div className={style.main}>
      <Helmet>
  <title>Data Analytics Mastery</title>
  <meta charSet="utf-8" />
  <meta
    name="Data Analytics Mastery"
    content="Unlock insights for informed decisions with expert data analytics and reporting. Elevate your strategy."
  />
</Helmet>

      <NavBar />
      <div className={style.container}>
        <div>
          <h1>Data Analytics and Reporting Services</h1>
          <h6>Crafting Revolutionary Mobile Experiences</h6>
          <p>
            Welcome to EasyRyt’s comprehensive Data Analytics and Reporting
            Services, where information comes to life and guides your business
            decisions with accuracy. In today's data-centric environment, having
            the capability to extract meaningful insights from your operations
            is crucial. Our proficient team specializes in transforming raw data
            into actionable knowledge, assisting you in optimizing strategies,
            improving performance, and staying ahead in a competitive market.
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
          <img className={style.img} src={img} alt="Data Analytics Mastery" />
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

export default AnalyticsandReporting;
