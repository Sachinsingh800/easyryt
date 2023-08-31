import React, { useState } from "react";
import style from "./PodcasRealTimeDataProcessingtWebsite.module.css";
import NavBar from "../../Component/NavBar/NavBar";
import img from "../../Image/Real-Time Data Processing, 1.png";
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

function PodcasRealTimeDataProcessingtWebsite() {
  const [showPopup, setShowPopup] = useState(false);

  //popup
  const handleGetStartedClick = () => {
    setShowPopup(true);
  };
  return (
    <div className={style.main}>
      <Helmet>
  <title>Real-Time Data Processing Services</title>
  <meta charSet="utf-8" />
  <meta
    name="Real-Time Data Processing Services"
    content="Efficiently process data in real-time with our expert services. Elevate your digital solutions seamlessly."
  />
</Helmet>

      <NavBar />
      <div className={style.container}>
        <div>
          <h1>Real-Time Data Processing Services</h1>
          <h6>Discover Our Extensive Array of AWS Solutions</h6>
          <p>
            Welcome to EasyRyt, a dedicated page for specialized real-time data
            processing services, where cutting-edge technology merges with
            efficient data processing solutions. Are you ready to leverage the
            potential of real-time data to make well-informed decisions? Search
            no more. Our skilled team of experts in data processing is at your
            disposal to convert your data streams into valuable insights that
            propel your business towards success.
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

export default PodcasRealTimeDataProcessingtWebsite;
