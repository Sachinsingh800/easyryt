import React, { useState } from "react";
import style from "./NativeAppDevelopment.module.css";
import NavBar from "../../Component/NavBar/NavBar";
import img from "../../Image/Mobile-App-Development.png";
import Section1 from "./section1/Section1";
import Section2 from "./Section2/Section2";
import Section3 from "./Section3/Section3";
import TenthSection from "../../Section/TenthSection/TenthSection";
import SixthSection from "../../Section/SixthSection/SixthSection";
import EleventhSection from "../../Section/EleventhSection/EleventhSection";
import Footer from "../../Component/Footer/Footer";
import CallButton from "../../Component/CallButton/CallButton";
import PopupOption from "../../Component/PopupOption/PopupOption";
import Section4 from "./Section4/Section4";
import ForthSection from "../../Section/ForthSection/ForthSection"
import FifthSection from "../../Section/FifthSection/FifthSection"
import ServiceForm from "../../Component/ServiceForm/ServiceForm";
import Section5 from "./Section5/Section5";
import { Helmet } from "react-helmet";

function NativeAppDevelopment() {
  const [showPopup, setShowPopup] = useState(false);

  const handleGetStartedClick = () => {
    setShowPopup(true);
  };
  return (
    <div className={style.main}>
            <Helmet>
        <title>Pro React Native Development</title>
        <meta charSet="utf-8" />
        <meta
          name="Pro React Native Development."
          content="Unlock seamless cross-platform experiences with our React Native expertise. Elevate your app's performance."
        />
      </Helmet>
      <NavBar />
      <div className={style.container}>
        <div>
          <h1>Native App Development Services</h1>
          <h6>Crafting Revolutionary Mobile Experiences</h6>
          <p>
            In the rapidly progressing world of mobile technology, possessing a
            robust and user-friendly mobile app is no longer a luxury—it's a
            necessity. Native Mobile App Development offers a state-of-the-art
            solution that merges the efficiency and functionality of Native
            applications with seamless user experiences. At EasyRyt, we
            specialize in Native Mobile App Development, fabricating
            groundbreaking apps that captivate users, enhance brand identity,
            and stimulate business expansion.
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
      <Section4/>
     <ServiceForm/>
      <ForthSection />
      <SixthSection/>
      <EleventhSection/>
      <Section5/>
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

export default NativeAppDevelopment;
