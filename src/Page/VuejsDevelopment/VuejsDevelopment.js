import React, { useState } from "react";
import style from "./VuejsDevelopment.module.css";
import NavBar from "../../Component/NavBar/NavBar";
import img from "../../Image/Vue js Development 1.png";
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

function VuejsDevelopment() {
  const [showPopup, setShowPopup] = useState(false);

  //popup
  const handleGetStartedClick = () => {
    setShowPopup(true);
  };
  return (
    <div className={style.main}>
      <NavBar />
      <div className={style.container}>
        <div>
          <h1>Vue JS Development Services</h1>
          <h6>
            Unleash the capabilities of your web applications with our
            state-of-the-art Vue.js Development Services
          </h6>
          <p>
            Greetings to EasyRyt’s Vue.js Development Services! As innovators in
            the digital sphere, we are experts in utilizing the potential of
            Vue.js to fabricate vibrant and engaging applications that connect
            with your desired users. Whether your objective is to construct a
            flexible one-page application or augment the performance of an
            ongoing project, our adept Vue.js professionals are at your service
            to manifest your creative concepts.
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

export default VuejsDevelopment;
