import React, { useState } from "react";
import style from "./ReactNativeDevelopment.module.css";
import NavBar from "../../Component/NavBar/NavBar";
import img from "../../Image/React Js Development 1.png";
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

function ReactNativeDevelopment() {
  const [showPopup, setShowPopup] = useState(false);

  //popup
  const handleGetStartedClick = () => {
    setShowPopup(true);
  };
  return (
    <div className={style.main}>
      <Helmet>
  <title>Seamless Native App Development</title>
  <meta charSet="utf-8" />
  <meta
    name="Seamless Native App Development"
    content="Crafting top-notch native apps for seamless user experiences. Elevate your digital presence with our expert development services."
  />
</Helmet>
      <NavBar />
      <div className={style.container}>
        <div>
          <h1>React Native Development Services</h1>
          <h6>Crafting Revolutionary Mobile Experiences</h6>
          <p>
            Welcome to EasyRyt’s Services in Building React Native Applications.
            Explore the realm of flexible and captivating mobile apps with our
            expert React Native App Development Services. As trailblazers in the
            field of React and React Native application development, we
            transform your concepts into reality by crafting user-friendly and
            cutting-edge apps that cater to the demands of contemporary mobile
            users. Whether you imagine a vibrant one-page app or a comprehensive
            solution that spans multiple platforms, our talented team of React
            Native specialists is dedicated to transforming your mobile vision
            into a tangible masterpiece.
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
          <img className={style.img} src={img} alt="React Native Development Services" />
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

export default ReactNativeDevelopment;
