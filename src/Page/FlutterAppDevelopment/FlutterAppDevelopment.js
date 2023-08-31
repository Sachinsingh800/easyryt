import React, { useState } from "react";
import style from "./FlutterAppDevelopment.module.css";
import NavBar from "../../Component/NavBar/NavBar";
import img from "../../Image/Flutter App Development 1.png";
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

function FlutterAppDevelopment() {
  const [showPopup, setShowPopup] = useState(false);

  //popup
  const handleGetStartedClick = () => {
    setShowPopup(true);
  };
  return (
    <div className={style.main}>
      <Helmet>
  <title>Expert Flutter App Development</title>
  <meta charSet="utf-8" />
  <meta
    name="Expert Flutter App Development"
    content="Crafting stunning cross-platform apps with Flutter. Elevate user engagement and reach effortlessly."
  />
</Helmet>
      <NavBar />
      <div className={style.container}>
        <div>
          <h1>Flutter App Development Services</h1>
          <h6>Crafting Revolutionary Mobile Experiences</h6>
          <p>
            In the ever-changing realm of mobile app creation, providing a
            uniform and captivating user experience across varied platforms is
            vital. Flutter, an inventive UI toolbox developed by Google,
            empowers developers to build high-quality, cross-platform apps with
            a sole codebase. At EasyRyt we specialize in harnessing the
            potential of Flutter to construct visually appealing, feature-rich,
            and high-functioning applications. Our Flutter App Development
            services are designed to breathe life into your app concepts,
            offering unparalleled user experiences on iOS, Android, and beyond.
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

export default FlutterAppDevelopment;
