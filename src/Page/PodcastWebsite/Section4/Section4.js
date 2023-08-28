import React from "react";
import style from "./Section4.module.css";
import { Link } from "react-router-dom";

function Section4() {
  return (
    <div className={style.main}>
      <p>
        Are you prepared to elevate your podcast to unprecedented levels?
        EasyRyt’s specialized services in WordPress Development for Podcast
        Websites are specifically designed for podcasters who desire an
        extraordinary online platform for their valuable content. Reach out to
        us at the present time to initiate a conversation about your venture,
        and together let us collaborate to fashion a WordPress podcast website
        that deeply connects with your audience and solidifies your online
        presence!
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
