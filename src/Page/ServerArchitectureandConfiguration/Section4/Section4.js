import React from "react";
import style from "./Section4.module.css";
import { Link } from "react-router-dom";

function Section4() {
  return (
    <div className={style.main}>
      <p>
        At EasyRyt, we don't just provide server solutions; we present you with
        a pathway to enhancing your digital structure. With a team of
        experienced professionals, a dedication to tailoring solutions, and an
        unwavering commitment to excellence, we are ready to be your partner on
        this transformative voyage. As you navigate the realm of server
        framework and setup, our collaboration goes beyond technology; it's
        about optimizing efficiency, reinforcing security, and maximizing the
        performance of your server environment. Why choose us? Because our
        approach is based on strategic planning, customization, scalability, and
        a partnership that ensures your digital foundation is robust and
        future-proof. Witness the fusion of innovation and expertise to create a
        server infrastructure that propels your business forward. With EasyRyt,
        server excellence is a journey of dependability and empowerment!
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
