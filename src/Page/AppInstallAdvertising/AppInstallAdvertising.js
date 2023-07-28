import React , { useState } from "react";
import style from "./AppInstallAdvertising.module.css";
import NavBar from "../../Component/NavBar/NavBar";
import img from "../../Image/App Install Advertising 1.png";
import Section1 from "./Section1/Section1";
import Section2 from "../FirstPage/Section2/Section2";
import Section3 from "../FirstPage/Section3/Section3";
import TenthSection from "../../Section/TenthSection/TenthSection";
import SixthSection from "../../Section/SixthSection/SixthSection";
import EleventhSection from "../../Section/EleventhSection/EleventhSection";
import Footer from "../../Component/Footer/Footer";
import CallButton from "../../Component/CallButton/CallButton";
import PopupOption from "../../Component/PopupOption/PopupOption";

function AppInstallAdvertising() {
  const [showPopup, setShowPopup] = useState(false);

  const handleGetStartedClick = () => {
    setShowPopup(true);
  };
  return (
    <div className={style.main}>
      <NavBar />
      <div className={style.container}>
        <div>
          <h1>App Install Advertising Services</h1>
          <p>
            App Install Advertising Services: Boost app downloads and user
            acquisition with our targeted advertising solutions. Reach your
            ideal audience across platforms and drive growth for your app.
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

export default AppInstallAdvertising;
