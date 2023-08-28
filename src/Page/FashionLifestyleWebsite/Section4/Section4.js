import React from "react";
import style from "./Section4.module.css";
import { Link } from "react-router-dom";

function Section4() {
  return (
    <div className={style.main}>
      <p>
        Ready to leave a mark in the realm of fashion? EasyRyt’s Fashion
        Lifestyle Website Creation services are tailored to capture the grace of
        your brand and engage fashion enthusiasts. Reach out to us today to
        discuss your project, and let's collaborate to create a WordPress
        fashion lifestyle website that resonates with style connoisseurs and
        sets your brand apart!
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
