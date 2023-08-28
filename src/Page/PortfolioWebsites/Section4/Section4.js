import React from "react";
import style from "./Section4.module.css";
import { Link } from "react-router-dom";

function Section4() {
  return (
    <div className={style.main}>
      <p>
        Are you prepared to enhance your artistic adventure? EasyRyt’s WordPress
        Portfolio Website Development solutions are custom-made for artists,
        designers, and imaginative individuals who desire an extraordinary
        platform to display their creations. Get in touch with us now to
        converse about your undertaking, and let's join forces to fabricate a
        WordPress portfolio website that mesmerizes, motivates, and establishes
        your virtual existence!
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
