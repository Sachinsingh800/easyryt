import React from "react";
import style from "./Section4.module.css";
import { Link } from "react-router-dom";

function Section4() {
  return (
    <div className={style.main}>
      <p>
        Are you prepared to establish a powerful digital store? With EasyRyt’s
        top-notch WordPress ECommerce Website Development solutions, your
        website is guaranteed to have a winning advantage. Reach out to us now
        to talk about your project objectives, and let's begin a journey to
        build an ECommerce site that not only fulfils but surpasses your
        anticipations!
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
