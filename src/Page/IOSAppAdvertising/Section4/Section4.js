import React from "react";
import style from "./Section4.module.css";
import { Link } from "react-router-dom";

function Section4() {
  return (
    <div className={style.main}>
      <p>
        As the iPhone app market continues to develop, teaming up with a
        seasoned iPhone App Marketing agency becomes essential. Partner with
        EasyRyt, to unlock the complete potential of your app on the iOS app
        market. Let's collaborate to create an iOS app marketing plan that not
        only boosts downloads but also cultivates a devoted user base. Reach out
        to us today for a consultation, and together let's embark on a journey
        towards triumph in the iOS app world!
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
