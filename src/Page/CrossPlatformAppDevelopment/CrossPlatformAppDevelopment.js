import React, { useState } from "react";
import style from "./CrossPlatformAppDevelopment.module.css";
import NavBar from "../../Component/NavBar/NavBar";
import img from "../../Image/cross-platform-app-development.png";
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
import Section from "../AndroidApplicationDevelopmentServices/Section1/Section";
import { Helmet } from "react-helmet";

function CrossPlatformAppDevelopment() {
  const [showPopup, setShowPopup] = useState(false);

  // JSON-LD script
  const jsonLdScript = {
    "@context": "https://schema.org/",
    "@type": "Product",
    "name": "Cross-Platform App Development",
    "image": "https://www.easyryt.com/static/media/cross-platform-app-development.00446e7950fca98289b5.png",
    "description": "In the ever-evolving landscape of cellular applications, cross-platform mobile development has emerged as a sport-changer. With the proliferation of devices, running structures, and consumer expectations, organizations are searching for efficient answers to attain a much broader target market without compromising on person experience.",
    "brand": {
      "@type": "Brand",
      "name": "EasyRyt"
    },
    "aggregateRating": {
      "@type": "AggregateRating",
      "ratingValue": "5",
      "ratingCount": "1",
      "reviewCount": "1"
    },
    "review": {
      "@type": "Review",
      "name": "Outstanding Cross-Platform App Development Services",
      "reviewBody": "I recently had the pleasure of working with a team of experts who provided Cross-Platform App Development services. Their efficiency, cost-effectiveness, and user-centric design approach were exceptional. I highly recommend their services.",
      "reviewRating": {
        "@type": "Rating",
        "ratingValue": "5"
      },
      "author": { "@type": "Person", "name": "Shravani Gosavi" }
    }
  };

  // Popup
  const handleGetStartedClick = () => {
    setShowPopup(true);
  };

  return (
    <div className={style.main}>
      <Helmet>
        <title>We Transform Digital Solutions</title>
        <meta charSet="utf-8" />
        <meta
          name="Cross-Platform Excellence."
          content="Crafting versatile apps for maximum reach. Elevate engagement with our expert development services."
        />
             {/* Include the JSON-LD script within the head */}
             <script type="application/ld+json">
          {JSON.stringify(jsonLdScript)}
        </script>
      </Helmet>
      <NavBar />
      <div className={style.container}>
        <div>
          <h1>Cross-Platform App Development</h1>
          <h6>Crafting Revolutionary Mobile Experiences</h6>
          <p>
            In the ever-evolving landscape of cellular applications,
            cross-platform mobile development has emerged as a sport-changer.
            With the proliferation of devices, running structures, and consumer
            expectations, organizations are searching for efficient answers to
            attain a much broader target market without compromising on person
            experience. Cross-platform app improvement has risen to this
            challenge, offering a way to broaden programs that run seamlessly
            across more than one structures. In this article, we will delve into
            the advantages of cross-platform mobile development and why it's a
            method well worth considering for your next project.
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
          <img className={style.img} src={img} alt="Cross-Platform App Development" />
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

export default CrossPlatformAppDevelopment;
