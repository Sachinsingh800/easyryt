import React, { useState } from "react";
import style from "./Python.module.css";
import NavBar from "../../Component/NavBar/NavBar";
import img from "../../Image/Python 1.png";
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

function Python() {
  const [showPopup, setShowPopup] = useState(false);

  //popup
  const handleGetStartedClick = () => {
    setShowPopup(true);
  };
  return (
    <div className={style.main}>
      <Helmet>
  <title>Python Development Services</title>
  <meta charSet="utf-8" />
  <meta
    name="Python Development Services"
    content="Empower your projects with expert Python development. Elevate your digital solutions seamlessly."
  />
</Helmet>

      <NavBar />
      <div className={style.container}>
        <div>
          <h1>Python Development Services</h1>
          <h6>Discover Our Extensive Array of AWS Solutions</h6>
          <p>
            Welcome to EasyRyt’s specialized page for Python Development
            Services. Here, the convergence of creativity and coding prowess
            takes place. Are you prepared to leverage the complete potential of
            Python for your software engineering requirements? There is no need
            to search elsewhere. Our highly skilled group of Python developers
            is available to convert your concepts into vibrant and adaptable
            solutions that redefine user interactions and propel your business
            to new heights.
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

export default Python;
