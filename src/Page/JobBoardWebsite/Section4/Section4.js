import React from "react";
import style from "./Section4.module.css";
import { Link } from "react-router-dom";

function Section4() {
  return (
    <div className={style.main}>
      <p>
        Prepared to exert a substantial influence in the employment market? EasyRyt’s
        WordPress Job Board Website Development solutions are crafted to enable
        individuals searching for jobs and recruiters alike. Get in touch with
        us now to converse about your venture, and let's cooperate to establish
        a WordPress employment platform that simplifies the recruitment
        procedure and links skilled individuals with potential!
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
