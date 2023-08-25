import React from "react";
import style from "./Section4.module.css";
import { Link } from "react-router-dom";

function Section4() {
  return (
    <div className={style.main}>
      <p>
        In the competitive landscape of mobile apps, delivering a flawless user
        experience is the key to success. With Mobile App Testing Services from
        EasyRyt, you can ensure that your app meets the highest quality
        standards, delights users, and maintains an outstanding reputation. Our
        team of skilled testers is committed to identifying and addressing
        potential issues before they affect your users.
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
