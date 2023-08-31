import React, { useState } from "react";
import style from "./PodcastWebsite.module.css";
import NavBar from "../../Component/NavBar/NavBar";
import img from "../../Image/Podcast Website 1.png";
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

function PodcastWebsite() {
  const [showPopup, setShowPopup] = useState(false);

  //popup
  const handleGetStartedClick = () => {
    setShowPopup(true);
  };
  return (
    <div className={style.main}>
      <Helmet>
  <title>Podcast Website Development</title>
  <meta charSet="utf-8" />
  <meta
    name="Podcast Website Development"
    content="Crafting podcast websites with WordPress expertise. Elevate your audio content's online presence effectively."
  />
</Helmet>

      <NavBar />
      <div className={style.container}>
        <div>
          <h1>WordPress Podcast Website Development Services</h1>
          <h6>
            Amplify Your Voice with Expert WordPress Podcast Website Creation
            Solutions
          </h6>
          <p>
            Step into EasyRyt’s tailor-made WordPress Podcast Website Creation
            solutions, where ingenuity, superior design, and profound technical
            know-how combine to enhance your influence in the online sphere.
            With an extensive comprehension of the podcasting industry and a
            profound expertise in WordPress, we fashion websites that not only
            display your material but also generate captivating encounters for
            your audience.
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
          <img className={style.img} src={img} alt="img" />
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

export default PodcastWebsite;
