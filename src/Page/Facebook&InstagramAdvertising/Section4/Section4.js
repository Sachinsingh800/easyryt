import React from "react";
import style from "./Section4.module.css";
import { Link } from "react-router-dom";

function Section4() {
  return (
    <div className={style.main}>
      <p>
        Are you prepared to tap into the potential of Facebook Ads and Instagram
        Ads? Reach out to us today to have a conversation about your
        aspirations, and let's join forces to establish a strong digital
        presence that fosters expansion for your enterprise. Our team is
        enthusiastic about working alongside you to formulate a tailored
        approach that propels your b\rand to the forefront of the social media
        realm!
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
