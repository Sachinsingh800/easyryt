import React, { useState } from "react";
import style from "./AndroidApplicationDevelopmentServices.module.css";
import NavBar from "../../Component/NavBar/NavBar";
import img from "../../Image/Android Application Development Services 1.png";
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
import Section1 from "./Section1/Section";
import Section from "./Section1/Section";
import { Helmet } from "react-helmet";

function AndroidApplicationDevelopmentServices() {
  const [showPopup, setShowPopup] = useState(false);


  // JSON-LD script for Android Application Development Services
const jsonLdScript = {
  "@context": "https://schema.org/",
  "@type": "Product",
  "name": "Android Application Development Services",
  "image": "https://www.easyryt.com/static/media/Android%20Application%20Development%20Services%201.b68f17f9ca4d1fc1c314.png",
  "description": "Android, as one of the widely used operating systems globally, provides an expansive platform to reach a diverse target audience. Our Android app development services are designed to help organizations harness the power of this platform and create modern, user-friendly, and high-performance applications that drive results.",
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
    "name": "Top-Notch Android App Development Services",
    "reviewBody": "I recently worked with EasyRyt's exceptional team for Android app development. Their technical expertise, user-centric approach, and commitment to deadlines were outstanding. I highly recommend their services for your next Android app project.",
    "reviewRating": {
      "@type": "Rating",
      "ratingValue": "5"
    },
    "author": { "@type": "Person", "name": "Yaman Ali" }
  }
};


  const handleGetStartedClick = () => {
    setShowPopup(true);
  };
  return (
    <div className={style.main}>
      <Helmet>
  <title>Expert Android App Development</title>
  <meta charSet="utf-8" />
  <meta
    name="Expert Android App Development"
    content="Turn your vision into reality with our top-tier Android app development services. Boost engagement and growth."
  />
        {/* Include the JSON-LD script within the head */}
        <script type="application/ld+json">
          {JSON.stringify(jsonLdScript)}
        </script>
</Helmet>
      <NavBar />
      <div className={style.container}>
        <div>
          <h1>Android Application Development Services</h1>
          <h6>Crafting Revolutionary Mobile Experiences</h6>
          <p>
            In modern day dynamic virtual panorama, a sturdy and tasty cell
            presence is paramount for groups to prevail. Android, as one of the
            widely used working systems globally, gives an expansive platform to
            attain a diverse target market. Our Android app development
            offerings are designed to assist organizations harness the energy of
            this platform and create modern, person-friendly, and
            excessive-overall performance programs that pressure effects.
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
          <img className={style.img} src={img} alt="Expert Android App Development" />
        </div>
      </div>
      
     <Section/>
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

export default AndroidApplicationDevelopmentServices;
