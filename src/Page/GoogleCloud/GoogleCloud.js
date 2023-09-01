import React, { useState } from "react";
import style from "./GoogleCloud.module.css";
import NavBar from "../../Component/NavBar/NavBar";
import img from "../../Image/Google Cloud 1.png";
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

function GoogleCloud() {
  const [showPopup, setShowPopup] = useState(false);

  //popup
  const handleGetStartedClick = () => {
    setShowPopup(true);
  };
  return (
    <div className={style.main}>
      <Helmet>
  <title>Google Cloud Services</title>
  <meta charSet="utf-8" />
  <meta
    name="Google Cloud Services"
    content="Leverage expert Google Cloud services for seamless digital solutions. Elevate your infrastructure effortlessly."
  />
</Helmet>

      <NavBar />
      <div className={style.container}>
        <div>
          <h1>Google Cloud Services</h1>
          <h6>
            Discover the Limitless Possibilities of Our Google Cloud Offerings
          </h6>
          <p>
            Embrace the opportunities that await on EasyRyt’s exclusive page
            devoted to Google Cloud solutions, where groundbreaking advancements
            and streamlined efficiency merge seamlessly. Are you prepared to
            reshape your enterprise using the state-of-the-art features found
            within Google Cloud Platform (GCP)? Your search ends here. Our
            extensive assortment of Google Cloud offerings has been intricately
            crafted to enhance your operational potential and furnish you with a
            commanding advantage in the ever-evolving digital realm.
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
          <img className={style.img} src={img} alt="GoogleCloud" />
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

export default GoogleCloud;
