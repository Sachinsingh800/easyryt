import React from "react";
import style from "./Section4.module.css";
import { Link } from "react-router-dom";

function Section4() {
  return (
    <div className={style.main}>
      <p>
        In a world flooded with information, it is essential for your brand's
        story to be effectively communicated. Our content marketing solutions
        are tailored to break through the noise and convey your message with
        significant impact. Let's collaborate to construct a content marketing
        plan that not only accomplishes your business objectives but also
        positions your brand as a leading authority in your industry.
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
