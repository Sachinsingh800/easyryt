import React from "react";
import style from "./Section4.module.css";
import { Link } from "react-router-dom";

function Section4() {
  return (
    <div className={style.main}>
      <p>
        In the ever-changing realm of mobile app development, delivering a
        consistent and captivating user experience is crucial. With Flutter App
        Development services from EasyRyt, you can transform your app
        aspirations into reality. Our team of proficient programmers and
        designers are dedicated to crafting cross-platform apps that captivate,
        engage, and surpass user expectations.
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
