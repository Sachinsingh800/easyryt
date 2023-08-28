import React from "react";
import style from "./Section4.module.css";
import { Link } from "react-router-dom";

function Section4() {
  return (
    <div className={style.main}>
      <p>
        In the ever-changing world of Android applications, where the user
        interface and user experience are of utmost importance, our services in
        designing the visual and interactive aspects stand out as a symbol of
        brilliance. At EasyRyt, our primary focus lies in creating app
        experiences for the Android platform that deeply resonate with users,
        encouraging their active participation and fostering an unwavering
        loyalty to the brand. When you opt for our services, you are choosing a
        partner that seamlessly combines imagination, an understanding of user
        preferences, and technical expertise to produce visual and interactive
        designs that not only meet but surpass expectations. With EasyRyt, you
        are selecting a path towards optimizing the potential of your Android
        application, ensuring it offers a visually captivating and user-friendly
        experience that redefines industry standards. Embrace the transformative
        power of exceptional design for user interaction and visual appeal –
        collaborate with EasyRyt, to unveil the true brilliance of your Android
        application.
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
