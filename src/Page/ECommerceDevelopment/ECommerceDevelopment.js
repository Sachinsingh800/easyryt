import React, { useState } from "react";
import style from "./ECommerceDevelopment.module.css";
import NavBar from "../../Component/NavBar/NavBar";
import img from "../../Image/E-Commerce Development 1.png";
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

function ECommerceDevelopment() {
  const [showPopup, setShowPopup] = useState(false);

  //popup
  const handleGetStartedClick = () => {
    setShowPopup(true);
  };
  return (
    <div className={style.main}>
      <Helmet>
  <title>Ecommerce Excellence</title>
  <meta charSet="utf-8" />
  <meta
    name="Ecommerce Excellence"
    content="Empower your brand with our top-tier ecommerce website development services. Drive sales and growth."
  />
</Helmet>
      <NavBar />
      <div className={style.container}>
        <div>
          <h1>Ecommerce Website Development Services</h1>
          <h6>Crafting Revolutionary Mobile Experiences</h6>
          <p>
            Introducing our Ecommerce Store Creation Services, where we breathe
            life into your entrepreneurial dreams by establishing a successful
            digital presence. In this age of online trade, possessing a strong
            and customer-focused online store is not merely a choice – it has
            become essential. With an extensive knowledge of digital commerce,
            online shop development, and the art of constructing compelling
            digital shopping platforms, we stand as your reliable ally in
            creating enchanting virtual stores that not only draw in visitors
            but also drive conversions.
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

export default ECommerceDevelopment;
