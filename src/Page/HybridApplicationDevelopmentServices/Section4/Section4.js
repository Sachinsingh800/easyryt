import React from "react";
import style from "./Section4.module.css";
import { Link } from "react-router-dom";

function Section4() {
  return (
    <div className={style.main}>
      <p>
        Ready to take your emblem to new heights with a modern hybrid software?
        Contact us today to speak about your venture requirements and desires.
        Our team will be happy to embark on this journey with you, leveraging
        the energy of hybrid technology to create a software that resonates with
        your target market and drives business achievement. Transform your
        imaginative and prescient right into a fact. Contact us today to get
        commenced!
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
