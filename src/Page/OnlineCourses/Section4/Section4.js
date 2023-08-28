import React from "react";
import style from "./Section4.module.css";
import { Link } from "react-router-dom";

function Section4() {
  return (
    <div className={style.main}>
      <p>
        Enhance Your Online Image with Remarkable WordPress: It's the perfect
        moment to establish your brand for triumph in the digital realm. At
        EasyRyt, we provide exceptional services for WordPress Online Website
        Development aim to uplift your virtual portrayal, grab your viewer's
        interest, and stimulate progress. Get in touch with us now to converse
        about your venture, and let's collaborate in constructing a unique
        WordPress website that shines amidst the virtual scenery, forming a
        captivating connection between your brand and its online viewership!
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
