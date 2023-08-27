import React from "react";
import style from "./Section4.module.css";
import { Link } from "react-router-dom";

function Section4() {
  return (
    <div className={style.main}>
      <p>
        In the ever-evolving realm of internet marketing, Website Traffic
        Advertising serves as your gateway to enticing, captivating, and
        converting prospective clients. Collaborate with EasyRyt to capitalize
        on tactics that generate focused traffic, enhance brand exposure, and
        pave the path to long-lasting expansion. Our Website Traffic Advertising
        Solutions go beyond mere initiatives – they represent a voyage towards
        triumph in the digital realm. Get in touch with us now to schedule a
        consultation, and let us embark on a journey of unparalleled website
        traffic proficiency hand in hand!
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
