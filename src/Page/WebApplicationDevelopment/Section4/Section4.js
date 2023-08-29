import React from "react";
import style from "./Section4.module.css";
import { Link } from "react-router-dom";

function Section4() {
  return (
    <div className={style.main}>
      <p>
        At EasyRyt, we provide more than just web application development; we
        bring you a portal to digital ingenuity and triumph. With a team of
        talented developers, a dedication to personalized solutions, and an
        unyielding commitment to excellence, we are ready to accompany you on
        this transformative expedition. As you embark on the route of web
        application design, our collaboration goes far beyond coding; it is
        about enriching user experiences, amplifying engagement, and unlocking
        the full potential of your online presence. Why select us? Because our
        approach is deeply rooted in strategic envisioning, innovation,
        scalability, and a partnership that ensures your web applications shine
        in the digital realm. Witness the amalgamation of imagination and
        expertise as we fashion applications that redefine user interactions and
        propel digital achievements. With EasyRyt, web application development
        becomes an odyssey of empowerment and triumph!
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
