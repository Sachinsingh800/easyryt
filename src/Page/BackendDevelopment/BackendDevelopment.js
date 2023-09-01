import React, { useState } from "react";
import style from "./BackendDevelopment.module.css";
import NavBar from "../../Component/NavBar/NavBar";
import img from "../../Image/Backend Development 1.png";
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


function BackendDevelopment() {
  const [showPopup, setShowPopup] = useState(false);

  //popup
  const handleGetStartedClick = () => {
    setShowPopup(true);
  };
  return (
    <div className={style.main}>
<Helmet>
  <title>Robust Back-End Solutions</title>
  <meta charSet="utf-8" />
  <meta
    name="Robust Back-End Solutions"
    content="Powering your web presence with secure and scalable back-end development. Elevate performance effortlessly."
  />
</Helmet>
      <NavBar />
      <div className={style.container}>
        <div>
          <h1>Back-End Web Development Services</h1>
          <h6>Crafting Revolutionary Mobile Experiences</h6>
          <p>
            Welcome to our Back-End Web Development Services, where creativity
            merges with functionality to design sturdy and dynamic digital
            experiences. Serving as the backbone of your digital presence, the
            back end plays a vital role in guaranteeing the seamless, secure,
            and efficient operation of your website or application. With an
            in-depth understanding of back end development, we stand as your
            allies in creating influential solutions that propel your online
            endeavours forward.
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
          <img className={style.img} src={img} alt="Back-End Web Development Services" />
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

export default BackendDevelopment;
