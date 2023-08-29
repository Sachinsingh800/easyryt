import React from "react";
import style from "./Section4.module.css";
import { Link } from "react-router-dom";

function Section4() {
  return (
    <div className={style.main}>
      <p>
        Our ultimate goal is to attain measurable outcomes, whether it's
        increased brand recognition, website traffic, or lead generation. Begin
        Enhance your brand's presence on social media with EasyRyt's
        comprehensive Social Media Marketing Services. Our team is prepared to
        create a personalized strategy that encourages engagement, establishes
        relationships, and amplifies conversions.
      </p>
      <h2>Get in touch with us today</h2>
      <p>
        Let’s discuss discuss how we can enhance your brand with a Native mobile
        app that sets you apart in the digital landscape!
      </p>
      <button
        onClick={() => (window.location.href = "/Contact-Us")}
        className={style.btn}
      >
        Start Conversation
      </button>
    </div>
  );
}

export default Section4;
