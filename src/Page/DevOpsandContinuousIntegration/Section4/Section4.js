import React from "react";
import style from "./Section4.module.css";
import { Link } from "react-router-dom";

function Section4() {
  return (
    <div className={style.main}>
      <p>
        At EasyRyt, we provide more than just DevOps and CI/CD implementation;
        we offer you a path to accelerated innovation and software excellence.
        With a team of skilled DevOps engineers, a dedication to customization,
        and an unwavering commitment to excellence, we are ready to be your
        partner on this transformative voyage. As you embark on the journey of
        streamlined development, automated testing, and rapid deployment, our
        collaboration surpasses mere practice implementation; it revolves around
        enhancing your entire software lifecycle. Why select us? Because our
        approach is founded on strategic planning, innovation, dependability,
        and a partnership that ensures your software maintains an edge in an
        ever-evolving digital landscape. Witness the amalgamation of technology
        and expertise, crafting software that is not only efficient but also
        adaptable to evolving business requirements. With EasyRyt, DevOps and
        CI/CD become an expedition of continuous innovation and digital
        excellence!
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
