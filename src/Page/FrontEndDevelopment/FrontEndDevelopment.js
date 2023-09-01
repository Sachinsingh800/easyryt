import React, { useState } from "react";
import style from "./FrontEndDevelopment.module.css";
import NavBar from "../../Component/NavBar/NavBar";
import img from "../../Image/Front End Development 1.png";
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

function FrontEndDevelopment() {
  const [showPopup, setShowPopup] = useState(false);

  //popup
  const handleGetStartedClick = () => {
    setShowPopup(true);
  };
  return (
    <div className={style.main}>
      <Helmet>
  <title>Dynamic Front-End Solutions</title>
  <meta charSet="utf-8" />
  <meta
    name="Dynamic Front-End Solutions"
    content="Crafting engaging interfaces for seamless user experiences. Elevate your digital presence with our expertise."
  />
</Helmet>
      <NavBar />
      <div className={style.container}>
        <div>
          <h1>Front End Development</h1>
          <h6>Crafting Revolutionary Mobile Experiences</h6>
          <p>
            Welcome to our services in Crafting Immersive User Experiences for
            Front end Development, where ingenuity and originality intersect to
            shape the digital facade of your brand. As technology advances, the
            forefront of your digital representation has become increasingly
            vital. With a profound comprehension of front end development and an
            unwavering dedication to excellence, we are your collaborators in
            producing enthralling and user-oriented interfaces that make a
            lasting impact.
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
          <img className={style.img} src={img} alt="Front End Development" />
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

export default FrontEndDevelopment;
