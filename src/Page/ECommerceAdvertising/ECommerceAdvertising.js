import React, { useState } from "react";
import style from "./ECommerceAdvertising.module.css";
import NavBar from "../../Component/NavBar/NavBar";
import img from "../../Image/E-Commerce Advertising 1.png";
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

function ECommerceAdvertising() {
  const [showPopup, setShowPopup] = useState(false);

  //popup
  const handleGetStartedClick = () => {
    setShowPopup(true);
  };
  return (
    <div className={style.main}>
      <Helmet>
  <title>E-commerce Advertising Expertise</title>
  <meta charSet="utf-8" />
  <meta
    name="E-commerce Advertising Expertise"
    content="Boost sales with targeted e-commerce advertising services. Elevate your online store's success."
  />
</Helmet>

      <NavBar />
      <div className={style.container}>
        <div>
          <h1>E-commerce Advertising Services</h1>
          <h6>Unleash the Full Potential of Your Online Stores</h6>
          <p>
            In the highly competitive digital landscape of today, having an
            outstanding ecommerce website is merely the initial step. To achieve
            real success, it is essential to employ effective and focused
            advertising strategies that present your products to the appropriate
            audience at the right moment. Our team of experts specializes in
            creating unique Ecommerce Advertising solutions that elevate your
            brand, enhance conversions, and maximize profitability for your
            online business.
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

export default ECommerceAdvertising;
