import React, { useState }  from "react";
import style from "./Facebook&InstagramAdvertising.module.css";
import NavBar from "../../Component/NavBar/NavBar";
import img from "../../Image/Facebook & Instagram Advertising 1.png";
import Section1 from "./Section1/Section1";
import Section2 from "../FirstPage/Section2/Section2";
import Section3 from "../FirstPage/Section3/Section3";
import TenthSection from "../../Section/TenthSection/TenthSection";
import SixthSection from "../../Section/SixthSection/SixthSection";
import EleventhSection from "../../Section/EleventhSection/EleventhSection";
import Footer from "../../Component/Footer/Footer";
import CallButton from "../../Component/CallButton/CallButton";
import PopupOption from "../../Component/PopupOption/PopupOption";

function FacebookInstagramAdvertising() {
  const [showPopup, setShowPopup] = useState(false);

  const handleGetStartedClick = () => {
    setShowPopup(true);
  };
  return (
    <div className={style.main}>
      <NavBar />
      <div className={style.container}>
        <div>
          <h1>Facebook & Instagram Advertising Services</h1>
          <p>
            Boost your business with our Facebook & Instagram Advertising
            Services. Reach your target audience, increase brand awareness, and
            drive sales with our expertly crafted ad campaigns. Maximize ROI
            today!
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
      <CallButton  />

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

export default FacebookInstagramAdvertising;
