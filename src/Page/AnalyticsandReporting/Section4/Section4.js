import React from "react";
import style from "./Section4.module.css";
import { Link } from "react-router-dom";

function Section4() {
  return (
    <div className={style.main}>
      <p>
        Whether it be streamlining operations or enhancing marketing techniques,
        our services equip you with the ability to make assured choices that
        result in expansion. Are you prepared to utilize the power of Analytics
        Reporting? Reach out to us now to explore how our proficient services
        can convert your data into a valuable resource, propelling your business
        towards triumph!
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
