import React, { useState } from "react";
import style from "./PerformanceOptimization.module.css";
import NavBar from "../../Component/NavBar/NavBar";
import img from "../../Image/Performance Optimization, 1.png";
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

function PerformanceOptimization() {
  const [showPopup, setShowPopup] = useState(false);

  //popup
  const handleGetStartedClick = () => {
    setShowPopup(true);
  };
  return (
    <div className={style.main}>
      <Helmet>
  <title>Performance Optimization Services</title>
  <meta charSet="utf-8" />
  <meta
    name="Performance Optimization Services"
    content="Boost efficiency and speed with expert optimization services. Elevate your digital solutions seamlessly."
  />
</Helmet>

      <NavBar />
      <div className={style.container}>
        <div>
          <h1>Performance Optimization Services</h1>
          <h6>Discover Our Extensive Array of AWS Solutions</h6>
          <p>
            Welcome to EasyRyt’s specialized page for Expert Performance
            Enhancement Services, where creativity intersects with peak
            performance solutions. Are you prepared to unlock the genuine
            capacity of your digital platforms? Explore no further. Our skilled
            group of specialists in performance optimization is here to enhance
            your online existence by optimizing speed, effectiveness, and user
            delight.
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

export default PerformanceOptimization;
