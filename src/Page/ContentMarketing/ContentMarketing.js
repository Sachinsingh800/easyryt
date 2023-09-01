import React, { useState } from "react";
import style from "./ContentMarketing.module.css";
import NavBar from "../../Component/NavBar/NavBar";
import img from "../../Image/Content Marketing 1.png";
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

function ContentMarketing() {
  const [showPopup, setShowPopup] = useState(false);

  //popup
  const handleGetStartedClick = () => {
    setShowPopup(true);
  };
  return (
    <div className={style.main}>
      <Helmet>
  <title>Strategic Content Marketing</title>
  <meta charSet="utf-8" />
  <meta
    name="Strategic Content Marketing"
    content="Fuel growth with compelling content strategies. Elevate your brand's online presence effectively."
  />
</Helmet>

      <NavBar />
      <div className={style.container}>
        <div>
          <h1>Content Marketing Services</h1>
          <h6>Crafting Revolutionary Mobile Experiences</h6>
          <p>
            In the ever-changing online world of today, where each brand vies
            for recognition, a carefully constructed strategy for disseminating
            valuable information can serve as your guiding light towards
            triumph. We invite you to experience our all-encompassing Services
            for Promoting Valuable Information, where we reshape the story of
            your brand into compelling content that enthrals, enlightens, and
            persuades. Enlisting the expertise of our veteran strategists,
            creators, and promoters, we become your ally in establishing a
            significant presence in the digital realm.
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
          <img className={style.img} src={img} alt="Content Marketing Services" />
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

export default ContentMarketing;
