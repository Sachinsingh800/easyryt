import React, { useState } from "react";
import style from "./EcommerceWebsiteOnlineStore.module.css";
import NavBar from "../../Component/NavBar/NavBar";
import img from "../../Image/Ecommerce Online Store 1.png";
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

function EcommerceWebsiteOnlineStore() {
  const [showPopup, setShowPopup] = useState(false);

  //popup
  const handleGetStartedClick = () => {
    setShowPopup(true);
  };
  return (
    <div className={style.main}>
      <NavBar />
      <div className={style.container}>
        <div>
          <h1>WordPress eCommerce Website Development</h1>
          <h6>
            Unlock the Potential of your Enterprise with Development of
            WordPress ECommerce Websites
          </h6>
          <p>
            We invite you to explore, the exclusive services dedicated to
            WordPress ECommerce Website Development. At EasyRyt, we utilize the
            capabilities of WordPress, WooCommerce, and our refined knowledge to
            construct captivating online shops that leave a lasting impact.
            Through the perfect fusion of cutting-edge technology, innovative
            design, and user-friendly interfaces, we bring your ECommerce
            aspirations to life, fuelling profitability and expansion.
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

export default EcommerceWebsiteOnlineStore;
