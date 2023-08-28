import React, { useState } from "react";
import style from "./WebsiteUIUXDesignServices.module.css";
import NavBar from "../../Component/NavBar/NavBar";
import img from "../../Image/Website UI.UX Design Services 1.png";
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

function WebsiteUIUXDesignServices() {
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
          <h1>Website UI/UX Design Services</h1>
          <h6>Crafting Revolutionary Mobile Experiences</h6>
          <p>
            Welcome to EasyRyt, your collaborator in developing captivating
            UI/UX designs for websites that enrich user involvement and foster
            triumph in the digital realm. As a distinguished supplier of design
            services for user interfaces, we concentrate on fabricating
            aesthetically pleasing and intuitive frameworks that make a
            permanent impact on individuals exploring your online platform.
            Through our proficiency, inventiveness, and emphasis on user
            satisfaction, we metamorphose your website into an immersive digital
            odyssey.
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

export default WebsiteUIUXDesignServices;
