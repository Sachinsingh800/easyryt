import React, { useState } from "react";
import style from "./MobileBackendDevelopment.module.css";
import NavBar from "../../Component/NavBar/NavBar";
import img from "../../Image/Mobile Backend Development, 1.png";
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

function MobileBackendDevelopment() {
  const [showPopup, setShowPopup] = useState(false);

  //popup
  const handleGetStartedClick = () => {
    setShowPopup(true);
  };
  return (
    <div className={style.main}>
      <Helmet>
  <title>Mobile Backend Development</title>
  <meta charSet="utf-8" />
  <meta
    name="Mobile Backend Development"
    content="Optimize mobile apps with our backend development services. Elevate performance seamlessly."
  />
</Helmet>

      <NavBar />
      <div className={style.container}>
        <div>
          <h1>Mobile Backend Development Services</h1>
          <h6>Discover Our Extensive Array of AWS Solutions</h6>
          <p>
            Welcome to EasyRyt’s dedicated page for specialized services in
            developing backends for mobile applications. Here, we bring together
            cutting-edge ideas with strong backend solutions. If you are looking
            to enhance the capabilities of your mobile app by implementing a
            robust backend infrastructure, you have come to the right place. Our
            team of knowledgeable backend developers is ready to craft flawless
            and high-performing backend systems that power the functionality of
            your mobile app.
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

export default MobileBackendDevelopment;
