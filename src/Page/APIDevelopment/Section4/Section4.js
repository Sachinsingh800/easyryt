import React from "react";
import style from "./Section4.module.css";
import { Link } from "react-router-dom";

function Section4() {
  return (
    <div className={style.main}>
      <p>
        At EasyRyt, we don't just provide API development solutions; we offer
        you a pathway to unlocking seamless interactions and data interchange.
        With a team of experienced developers, a commitment to customization,
        and a dedication to excellence, we are ready to be your partner on this
        transformative expedition. As you venture into the realm of API
        development, our collaboration goes beyond writing code; it's about
        creating solutions that redefine connectivity and propel your business
        forward. Why select us? Because our approach is rooted in strategic
        planning, customization, effectiveness, and a partnership that ensures
        your vision becomes a reality. Witness the fusion of innovation and
        expertise to create APIs that bridge the gaps in your digital ecosystem.
        With EasyRyt, API development is a journey of integration and
        empowerment!
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
