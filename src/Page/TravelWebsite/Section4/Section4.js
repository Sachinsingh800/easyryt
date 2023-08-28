import React from "react";
import style from "./Section4.module.css";
import { Link } from "react-router-dom";

function Section4() {
  return (
    <div className={style.main}>
      <p>
        Are you ready to guide travellers on unforgettable digital odysseys?
        EasyRyt’s WordPress Travel Website Creation services are tailored to
        encapsulate the enchantment of exploration and kindle a yearning for
        wanderlust. Get in touch with us today to discuss your project, and
        let's collaborate to conceive a WordPress travel website that transports
        visitors to far-flung lands and ignites their eagerness to explore.!
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
