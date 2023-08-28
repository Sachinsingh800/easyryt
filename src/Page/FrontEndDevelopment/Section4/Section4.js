import React from "react";
import style from "./Section4.module.css";
import { Link } from "react-router-dom";

function Section4() {
  return (
    <div className={style.main}>
      <p>
        In the realm of digital engagements, the forepart is your palette.
        Collaborate with EasyRyt, to create a unique and captivating work of art
        that fascinates, involves, and converts. Our Forepart Development
        Services go beyond mere lines of code – they are a fusion of creativity
        and innovation that enhance your brand's online existence.
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
