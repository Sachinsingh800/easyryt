import React , { useState } from "react";
import style from "./PayPerClickAdvertising.module.css";
import NavBar from "../../Component/NavBar/NavBar";
import img from "../../Image/Pay-Per-Click (PPC) Advertising 1.png";
import Section1 from "./Section1/Section1";
import Section2 from "../FirstPage/Section2/Section2";
import Section3 from "../FirstPage/Section3/Section3";
import TenthSection from "../../Section/TenthSection/TenthSection";
import SixthSection from "../../Section/SixthSection/SixthSection";
import EleventhSection from "../../Section/EleventhSection/EleventhSection";
import Footer from "../../Component/Footer/Footer";
import CallButton from "../../Component/CallButton/CallButton";
import PopupOption from "../../Component/PopupOption/PopupOption";

function PayPerClickAdvertising() {
  const [showPopup, setShowPopup] = useState(false);

  const handleGetStartedClick = () => {
    setShowPopup(true);
  };
  return (
    <div className={style.main}>
      <NavBar />
      <div className={style.container}>
        <div>
          <h1>Pay-Per-Click (PPC) Advertising Services</h1>
          <p>
            PPC Advertising Services: Targeted online advertising model where
            advertisers pay a fee only when their ad is clicked. Effectively
            drives traffic and enhances visibility on search engines and
            platforms
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
      <TenthSection />
      <SixthSection />
      <EleventhSection />
      <CallButton/>
      <Footer />
            {/* Popup window */}
            {showPopup && (
        <>
        <button onClick={()=>setShowPopup(false)} className={style.closebtn}>Close</button>
      <PopupOption/>
      </>
      )}
    </div>
  );
}

export default PayPerClickAdvertising;
