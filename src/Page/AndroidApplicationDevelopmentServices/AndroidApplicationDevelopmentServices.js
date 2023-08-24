import React, { useState } from "react";
import style from "./AndroidApplicationDevelopmentServices.module.css";
import NavBar from "../../Component/NavBar/NavBar";
import img from "../../Image/Android Application Development Services 1.png";
import Section2 from "./Section2/Section2";
import Section3 from "./Section3/Section3";
import TenthSection from "../../Section/TenthSection/TenthSection";
import SixthSection from "../../Section/SixthSection/SixthSection";
import EleventhSection from "../../Section/EleventhSection/EleventhSection";
import Footer from "../../Component/Footer/Footer";
import CallButton from "../../Component/CallButton/CallButton";
import PopupOption from "../../Component/PopupOption/PopupOption";
import Section4 from "./Section4/Section4";
import ForthSection from "../../Section/ForthSection/ForthSection";
import FifthSection from "../../Section/FifthSection/FifthSection";
import ServiceForm from "../../Component/ServiceForm/ServiceForm";
import Section5 from "./Section5/Section5";
import Section1 from "./section1/Section1";

function AndroidApplicationDevelopmentServices() {
  const [showPopup, setShowPopup] = useState(false);

  const handleGetStartedClick = () => {
    setShowPopup(true);
  };
  return (
    <div className={style.main}>
      <NavBar />
      <div className={style.container}>
        <div>
          <h1>Android Application Development Services</h1>
          <h6>Crafting Revolutionary Mobile Experiences</h6>
          <p>
            In modern day dynamic virtual panorama, a sturdy and tasty cell
            presence is paramount for groups to prevail. Android, as one of the
            widely used working systems globally, gives an expansive platform to
            attain a diverse target market. Our Android app development
            offerings are designed to assist organizations harness the energy of
            this platform and create modern, person-friendly, and
            excessive-overall performance programs that pressure effects.
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
      <Section1 />
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

export default AndroidApplicationDevelopmentServices;
