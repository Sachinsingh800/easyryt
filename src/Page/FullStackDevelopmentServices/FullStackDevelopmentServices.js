import React, { useState } from "react";
import style from "./FullStackDevelopmentServices.module.css";
import NavBar from "../../Component/NavBar/NavBar";
import img from "../../Image/Full Stack Development Services 1.png";
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

function FullStackDevelopmentServices() {
  const [showPopup, setShowPopup] = useState(false);

  //popup
  const handleGetStartedClick = () => {
    setShowPopup(true);
  };
  return (
    <div className={style.main}>
      <Helmet>
  <title>Complete FullStack Solutions</title>
  <meta charSet="utf-8" />
  <meta
    name="Complete FullStack Solutions"
    content="Crafting end-to-end digital experiences with our expert FullStack development services. Elevate your brand seamlessly."
  />
</Helmet>
      <NavBar />
      <div className={style.container}>
        <div>
          <h1>FullStack Development Services</h1>
          <h6>Crafting Revolutionary Mobile Experiences</h6>
          <p>
            Welcome to our Full Stack Web Development Solutions, where
            creativity meets flexibility to generate comprehensive digital
            solutions. As the technological landscape evolves, the need for Full
            Stack Web Developers who can effortlessly navigate both the
            front-end and back-end development stages has never been more
            crucial. With proficiency in full stack development, we are your
            allies in shaping dynamic, user-centric, and entirely operational
            web applications that bring your vision to reality.
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
          <img className={style.img} src={img} alt="FullStack Development Services" />
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

export default FullStackDevelopmentServices;
