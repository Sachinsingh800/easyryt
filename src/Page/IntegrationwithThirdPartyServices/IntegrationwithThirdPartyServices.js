import React, { useState } from "react";
import style from "./IntegrationwithThirdPartyServices.module.css";
import NavBar from "../../Component/NavBar/NavBar";
import img from "../../Image/Integration with Third-Party Services, 1.png";
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

function IntegrationwithThirdPartyServices() {
  const [showPopup, setShowPopup] = useState(false);

  //popup
  const handleGetStartedClick = () => {
    setShowPopup(true);
  };
  return (
    <div className={style.main}>
      <Helmet>
  <title>Third Party Integration Services</title>
  <meta charSet="utf-8" />
  <meta
    name="Third Party Integration Services"
    content="Seamlessly connect with third-party services. Elevate your digital solutions with expert integration."
  />
</Helmet>

      <NavBar />
      <div className={style.container}>
        <div>
          <h1>Integration with Third Party Services</h1>
          <h6>Discover Our Extensive Array of AWS Solutions</h6>
          <p>
            Welcome to EasyRyt’s dedicated page on Seamless Compatibility with
            External Services. Here, creativity intersects with adaptability and
            effectiveness. Are you prepared to broaden your online boundaries by
            flawlessly linking with external services? Search no more. Our
            skilled team of integration experts is here to build a cohesive and
            effective digital environment that unlocks fresh opportunities.
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
          <img className={style.img} src={img} alt="Third Party Integration Services" />
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

export default IntegrationwithThirdPartyServices;
