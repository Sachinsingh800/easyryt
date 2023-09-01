import React, { useState } from "react";
import style from "./SocialMediaMarketing.module.css";
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

function AppBackendDevelopment() {
  const [showPopup, setShowPopup] = useState(false);

  //popup
  const handleGetStartedClick = () => {
    setShowPopup(true);
  };
  return (
    <div className={style.main}>
      <Helmet>
  <title>Impactful Social Media Marketing</title>
  <meta charSet="utf-8" />
  <meta
    name="Impactful Social Media Marketing"
    content="Elevate brand presence through strategic social media marketing. Connect, engage, and grow."
  />
</Helmet>

      <NavBar />
      <div className={style.container}>
        <div>
          <h1>Social Media Marketing Services</h1>
          <h6>Crafting Revolutionary Mobile Experiences</h6>
          <p>
            Social media has become an essential component of marketing
            strategies for businesses in the rapidly evolving digital landscape.
            It presents an unparalleled opportunity to establish connections,
            interact, and cultivate relationships with your desired audience. At
            EasyRyt, we specialize in delivering comprehensive and
            results-oriented services pertaining to social media marketing.
            These services enable businesses to fully leverage the potential
            offered by various social media platforms. Our strategies are
            customized to expand brand visibility, foster engagement, and drive
            conversions.
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
          <img className={style.img} src={img} alt="Social Media Marketing Services" />
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

export default AppBackendDevelopment;
