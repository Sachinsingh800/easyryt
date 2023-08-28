import React from "react";
import style from "./Section4.module.css";
import { Link } from "react-router-dom";

function Section4() {
  return (
    <div className={style.main}>
      <p>
        In the digital world, the rear part is the powerhouse that propels
        triumph. Collaborate with EasyRyt to build a strong back end development
        that not only sustains your digital endeavours but also propels them
        ahead. Our Back End Development Services go beyond mere code - they are
        the cogs that drive your digital revolution. Get in touch with us now
        for a discussion, and together let's construct a rear part that
        guarantees your digital accomplishments!
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
