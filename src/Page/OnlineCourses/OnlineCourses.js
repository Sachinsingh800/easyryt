import React, { useState } from "react";
import style from "./OnlineCourses.module.css";
import NavBar from "../../Component/NavBar/NavBar";
import img from "../../Image/Online Courses 1.png";
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

function OnlineCourses() {
  const [showPopup, setShowPopup] = useState(false);

  //popup
  const handleGetStartedClick = () => {
    setShowPopup(true);
  };
  return (
    <div className={style.main}>
      <Helmet>
  <title>Online Course Mastery Development Services</title>
  <meta charSet="utf-8" />
  <meta
    name="Online Course Mastery Development Services"
    content="Expert WordPress development for engaging online courses. Elevate your educational platform effectively."
  />
</Helmet>
      <NavBar />
      <div className={style.container}>
        <div>
          <h1>WordPress Online Courses Development Services</h1>
          <h6>
            Unleash Your Digital Capability with Our WordPress Online Website
            Creation Solutions.
          </h6>
          <p>
            Welcome to EasyRyt’s specialized WordPress Online Website Creation
            solutions, where ingenuity, design superiority, and technical
            expertise come together to form compelling online encounters. With
            WordPress as our artistic platform, we fashion websites that not
            only embody your brand but also enhance your virtual existence with
            effortless functionality and exquisite visuals.
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
          <img className={style.img} src={img} alt="WordPress Online Courses Development Services" />
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

export default OnlineCourses;
