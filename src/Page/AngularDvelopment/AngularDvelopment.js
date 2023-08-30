import React, { useState } from "react";
import style from "./AngularDvelopment.module.css";
import NavBar from "../../Component/NavBar/NavBar";
import img from "../../Image/Angular Dvelopment 1.png";
import Section2 from "../FirstPage/Section2/Section2";
import Section3 from "../FirstPage/Section3/Section3";
import TenthSection from "../../Section/TenthSection/TenthSection";
import SixthSection from "../../Section/SixthSection/SixthSection";
import EleventhSection from "../../Section/EleventhSection/EleventhSection";
import Footer from "../../Component/Footer/Footer";
import CallButton from "../../Component/CallButton/CallButton";
import PopupOption from "../../Component/PopupOption/PopupOption";
import Section from "./Section1/Section";
import Section5 from "./Section5/Section5";

function AngularDvelopment() {
  const [showPopup, setShowPopup] = useState(false);

  const handleGetStartedClick = () => {
    setShowPopup(true);
  };
  return (
    <div className={style.main}>
      <NavBar />
      <div className={style.container}>
        <div>
          <h1>Angular JS Development Service</h1>
          <p>
            Welcome to EasyRyt’s AngularJS Development Solutions Explore the
            possibilities of state-of-the-art web applications with our
            specialized AngularJS Software Development Solutions. As a reputable
            AngularJS development firm, we stand out in leveraging the
            capabilities of this strong framework to develop vibrant and
            engaging applications that connect with your target audience.
            Whether you aim to enhance an ongoing project or create a brand new
            one, our team of skilled AngularJS professionals is available to
            transform your concept into reality.
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
      <Section/> 
      <Section2 />
      <Section3 />
      <TenthSection />
      <SixthSection />
      <EleventhSection />
      <Section5/>
      <CallButton />
      <Footer />
      {/* Popup window */}
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

export default AngularDvelopment;
