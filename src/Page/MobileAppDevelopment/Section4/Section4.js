import React from "react";
import style from "./Section4.module.css";
import { Link } from "react-router-dom";

function Section4() {
  return (
    <div className={style.main}>
      <p>
        Ready to convert your app idea right into a fact? Our crew is eager to
        embark in this journey with you, creating a cell app that resonates
        along with your target audience, drives engagement, and propels your
        commercial enterprise ahead. Elevate your emblem thru the energy of
        mobile era. Contact us now to get commenced to your mobile app
        development journey!
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
