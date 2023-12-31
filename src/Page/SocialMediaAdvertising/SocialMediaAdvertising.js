import React, { useState } from "react";
import style from "./SocialMediaAdvertising.module.css";
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

function SocialMediaAdvertising() {
  const [showPopup, setShowPopup] = useState(false);

  //popup
  const handleGetStartedClick = () => {
    setShowPopup(true);
  };
  return (
    <div className={style.main}>
      <Helmet>
  <title>Strategic Social Media Ad Services</title>
  <meta charSet="utf-8" />
  <meta
    name="Strategic Social Media Ad Services"
    content="Amplify reach through impactful social media advertising. Elevate engagement and brand awareness."
  />
</Helmet>

      <NavBar />
      <div className={style.container}>
        <div>
          <h1>Social Media Advertising</h1>
          <h6>Crafting Revolutionary Mobile Experiences</h6>
          <p>
            In the fast-paced digital world, cell programs have become a
            critical medium for businesses to interact with their customers. A
            crucial element of a hit cell app is its backend – the engine that
            powers the app's capability, overall performance, and user
            experience. The focus should be on crafting strong and efficient app
            backends that lay the basis for high-quality app reports. Our App
            Backend Development offerings are designed to empower your app with
            seamless functionality, complete control, safety, and scalability.
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
          <img className={style.img} src={img} alt="Social Media Advertising" />
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

export default SocialMediaAdvertising;
