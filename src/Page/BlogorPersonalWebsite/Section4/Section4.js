import React from "react";
import style from "./Section4.module.css";
import { Link } from "react-router-dom";

function Section4() {
  return (
    <div className={style.main}>
      <p>
        The start of your online adventure commences with an enthralling
        WordPress website. Collaborate with EasyRyt to utilize the potential of
        WordPress web design that seamlessly integrates beauty and efficiency.
        Our WordPress Blog and Individual Website Development Solutions go
        beyond mere websites - they represent your enthusiasm and open doors to
        a myriad of digital possibilities. Reach out to us now to schedule a
        discussion, and let us set sail on a voyage towards unrivalled
        excellence in WordPress web design!
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
