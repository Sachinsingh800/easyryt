import React from "react";
import style from "./Section4.module.css";
import { Link } from "react-router-dom";

function Section4() {
  return (
    <div className={style.main}>
      <p>
        In the aggressive world of cell apps, a sturdy and properly-dependent
        backend is essential for delivering super consumer reviews. At EasyRyt,
        we concentrate on crafting robust app backends that significantly
        improve your app's capability, security, and scalability. Our crew of
        experienced backend developers are dedicated to turning your app’s
        vision into reality. Partner with us for App Backend Development
        offerings. Contact us now, to speak about how we can increase your app's
        backend to the next level!
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
