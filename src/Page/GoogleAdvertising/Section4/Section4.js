import React from "react";
import style from "./Section4.module.css";
import { Link } from "react-router-dom";

function Section4() {
  return (
    <div className={style.main}>
      <p>
        Unleash the power of Google Ads with EasyRyt's expert Google Ads
        services. Whether you aim to enhance website traffic, drive sales, or
        increase brand awareness, we possess the tools and expertise to make it
        happen. Reach out to us today to schedule a consultation and embark on
        the first phase of unlocking your business's online potential!
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
