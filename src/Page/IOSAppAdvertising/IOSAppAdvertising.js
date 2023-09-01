import React, { useState } from "react";
import style from "./IOSAppAdvertising.module.css";
import NavBar from "../../Component/NavBar/NavBar";
import img from "../../Image/IOS App Advertising 1.png";
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

function IOSAppAdvertising() {
  const [showPopup, setShowPopup] = useState(false);

  //popup
  const handleGetStartedClick = () => {
    setShowPopup(true);
  };
  return (
    <div className={style.main}>
      <Helmet>
  <title>Powerful iOS App Ads</title>
  <meta charSet="utf-8" />
  <meta
    name="Powerful iOS App Ads"
    content="Drive growth with specialized iOS app marketing services. Elevate downloads and engagement."
  />
</Helmet>

      <NavBar />
      <div className={style.container}>
        <div>
          <h1>iOS App Marketing Services</h1>
          <h6>Crafting Revolutionary Mobile Experiences</h6>
          <p>
            Welcome to our extensive range of services for iPhone App Marketing.
            We are dedicated to helping you achieve tremendous success in the
            dynamic world of Apple app marketing. Our objective is not just to
            set goals, but to guarantee the triumph of your application within
            the vast Apple ecosystem. In order to thrive in the highly
            competitive iOS landscape, it is crucial to have a strategic ally.
            Look no further, as we are the leading authorities in promoting
            Apple applications. Our specialized skills lie in increasing your
            app's visibility, boosting user engagement, and securing high
            download rates. With a profound comprehension of iOS application
            promotion, iPhone application marketing, and the intricate nuances
            of the iPhone app market, we develop tailored approaches that will
            ensure your app stands out and ultimately prospers.
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
          <img className={style.img} src={img} alt="iOS App Marketing Services" />
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

export default IOSAppAdvertising;
