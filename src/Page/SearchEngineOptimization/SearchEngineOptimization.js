import React, { useState } from "react";
import style from "./SearchEngineOptimization.module.css";
import NavBar from "../../Component/NavBar/NavBar";
import img from "../../Image/social media marketing 1.png";
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

function SearchEngineOptimization() {
  const [showPopup, setShowPopup] = useState(false);

  //popup
  const handleGetStartedClick = () => {
    setShowPopup(true);
  };
  return (
    <div className={style.main}>
      <Helmet>
  <title>Effective SEO Solutions</title>
  <meta charSet="utf-8" />
  <meta
    name="Effective SEO Solutions"
    content="Boost visibility and traffic with our expert SEO services. Elevate your online presence today."
  />
</Helmet>

      <NavBar />
      <div className={style.container}>
        <div>
          <h1>SEO Services</h1>
          <h6>Unlocking Your Online Achievement</h6>
          <p>
            In today's digital environment, possessing a visually attractive
            website is merely the start. To genuinely flourish in the
            competitive online realm, your website needs to be effortlessly
            discoverable by search engines. This is where Search Engine
            Optimization (SEO) comes into action. Our all-encompassing SEO
            marketing services are devised to elevate your online presence,
            propel organic traffic, and amplify your brand's visibility
            throughout the internet
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
          <img className={style.img} src={img} alt="SEO Services" />
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

export default SearchEngineOptimization;
