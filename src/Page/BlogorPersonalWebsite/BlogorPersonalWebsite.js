import React, { useState } from "react";
import style from "./BlogorPersonalWebsite.module.css";
import NavBar from "../../Component/NavBar/NavBar";
import img from "../../Image/Blog or Personal Website 1.png";
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

function BlogorPersonalWebsite() {
  const [showPopup, setShowPopup] = useState(false);

  //popup
  const handleGetStartedClick = () => {
    setShowPopup(true);
  };
  return (
    <div className={style.main}>
      <Helmet>
  <title>WordPress Blog Mastery</title>
  <meta charSet="utf-8" />
  <meta
    name="WordPress Blog Mastery"
    content="Crafting personalized websites and blogs with expertise. Elevate your online presence effectively."
  />
</Helmet>
      <NavBar />
      <div className={style.container}>
        <div>
          <h1>WordPress Blog and Personal Website Development Services</h1>
          <h6>
            Cultivate Your Digital Identity with Sophistication and
            Effectiveness
          </h6>
          <p>
            Welcome to our WordPress Blog and Personal Website Development
            Services, where we bring your virtual existence to life with the
            prowess of WordPress - the most renowned and versatile content
            management system globally. Whether you are a blogger, a visionary
            artist, or an ambitious entrepreneur, our skilled WordPress
            developers are at your disposal to transform your vision into a
            breathtaking reality. Through our comprehensive assortment of
            services, we craft WordPress websites that seamlessly combine
            exquisite aesthetics with formidable capabilities.
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
          <img className={style.img} src={img} alt="WordPress Blog and Personal Website Development Services" />
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

export default BlogorPersonalWebsite;
