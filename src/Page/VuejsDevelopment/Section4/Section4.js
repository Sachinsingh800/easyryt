import React from "react";
import style from "./Section4.module.css";
import { Link } from "react-router-dom";

function Section4() {
  return (
    <div className={style.main}>
      <p>
        Beyond development, we offer ongoing support to ensure that your
        Affiliate marketing website is always up to date and operating at its
        best. Enhance Your Affiliate Marketing Performance with WordPress
        Excellence: Are you prepared to stand out in the field of affiliate
        marketing? EasyRyt’s specialized WordPress Development services for
        Affiliate Marketing Websites are designed for affiliates who desire a
        remarkable online platform for their promotional activities.
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
