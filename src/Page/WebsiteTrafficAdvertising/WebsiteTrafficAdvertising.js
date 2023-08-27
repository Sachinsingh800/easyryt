import React, { useState } from "react";
import style from "./WebsiteTrafficAdvertising.module.css";
import NavBar from "../../Component/NavBar/NavBar";
import img from "../../Image/Website Traffic Advertising 1.png";
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

function WebsiteTrafficAdvertising() {
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
          <h1>Advertising for Website Visitors</h1>
          <h6>Generate Traffic, Increase Interaction, Attain Expansion</h6>
          <p>
            Welcome to EasyRyt’s services for advertising website visitors,
            where we revolutionize your online presence from stagnant to
            dynamic, generating a constant flow of individuals to your webpage
            and unlocking a realm full of possibilities. In the thriving realm
            of the digital world, where visibility plays a crucial role,
            advertising for website visitors stands as the guiding light that
            directs potential clients to your virtual doorstep. Through our
            comprehensive strategies, we amplify the prominence of your brand,
            spark involvement, and pave the way for sustainable progress.
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

export default WebsiteTrafficAdvertising;
