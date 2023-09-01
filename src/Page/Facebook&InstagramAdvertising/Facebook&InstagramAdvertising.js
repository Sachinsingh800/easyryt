import React, { useState } from "react";
import style from "./Facebook&InstagramAdvertising.module.css";
import NavBar from "../../Component/NavBar/NavBar";
import img from "../../Image/Facebook & Instagram Advertising 1.png";
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

function FacebookInstagramAdvertising() {
  const [showPopup, setShowPopup] = useState(false);

  //popup
  const handleGetStartedClick = () => {
    setShowPopup(true);
  };
  return (
    <div className={style.main}>
      <Helmet>
  <title>Dynamic Facebook & Instagram Ads</title>
  <meta charSet="utf-8" />
  <meta
    name="Dynamic Facebook & Instagram Ads"
    content="Elevate engagement through strategic Facebook & Instagram advertising. Maximize brand impact."
  />
</Helmet>

      <NavBar />
      <div className={style.container}>
        <div>
          <h1>Facebook & Instagram Advertising</h1>
          <h6>Crafting Revolutionary Mobile Experiences</h6>
          <p>
            Do you desire to harness the potential of social media to engage
            with your intended viewers and generate outcomes, in order to take
            your business to the next level? Look no further than our extensive
            Services for Instagram and Facebook Promotions. With a group of
            seasoned online marketers, a proven history of achievements, and an
            extensive comprehension of the constantly changing social media
            environment, we are here to enhance your brand's online existence
            and generate tangible progress.
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
          <img className={style.img} src={img} alt="Facebook & Instagram Advertising" />
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

export default FacebookInstagramAdvertising;
