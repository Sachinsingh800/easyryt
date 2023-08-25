import React, { useState } from "react";
import style from "./MobileAppTestingandTestingQualityAssurance.module.css";
import NavBar from "../../Component/NavBar/NavBar";
import img from "../../Image/React Native App Development 1.png";
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

function MobileAppTestingandTestingQualityAssurance() {
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
          <h1>Mobile Application Testing Services</h1>
          <h6>Crafting Revolutionary Mobile Experiences</h6>
          <p>
            In the rapidly changing world of mobile application development,
            delivering a smooth and bug-free user experience is non-negotiable.
            Mobile application users have high expectations for performance,
            functionality, and usability, and even minor problems can
            significantly impact user retention and brand reputation. At
            EasyRyt, we offer comprehensive Mobile App Testing Services that
            thoroughly examine your app's performance, functionality, and
            compatibility across various devices and platforms. Our scrupulous
            approach to testing ensures that your app meets the highest quality
            standards and surpasses user expectations
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

export default MobileAppTestingandTestingQualityAssurance;
