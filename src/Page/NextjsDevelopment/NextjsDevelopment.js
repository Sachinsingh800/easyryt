import React, { useState } from "react";
import style from "./NextjsDevelopment.module.css";
import NavBar from "../../Component/NavBar/NavBar";
import img from "../../Image/Next js Development 1.png";
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

function NextjsDevelopment() {
  const [showPopup, setShowPopup] = useState(false);

  //popup
  const handleGetStartedClick = () => {
    setShowPopup(true);
  };
  return (
    <div className={style.main}>
      <Helmet>
  <title>NextJS Development Services</title>
  <meta charSet="utf-8" />
  <meta
    name="NextJS Development Services"
    content="Crafting top-tier web experiences with NextJS expertise. Elevate your digital presence seamlessly."
  />
</Helmet>

      <NavBar />
      <div className={style.container}>
        <div>
          <h1>Next JS Development Services</h1>
          <h6>Crafting Revolutionary Mobile Experiences</h6>
          <p>
            Enhance Your Web Journey with Next.js Development Solutions Embrace
            the world of Next.js Development Solutions, where originality meets
            flawless online experiences. As a key player in the digital domain,
            EasyRyt excels at leveraging the capabilities of Next.js to craft
            web applications that redefine user engagements. Whether you have a
            vision of a vibrant single-page application, an advanced online
            marketplace, or a captivating content-driven website, our team of
            Next.js specialists are dedicated to transforming your concepts into
            tangible achievements..
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
          <img className={style.img} src={img} alt="Next JS Development Services" />
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

export default NextjsDevelopment;
