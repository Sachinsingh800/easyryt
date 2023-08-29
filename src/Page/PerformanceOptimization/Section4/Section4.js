import React from "react";
import style from "./Section4.module.css";
import { Link } from "react-router-dom";

function Section4() {
  return (
    <div className={style.main}>
      <p>
        At EasyRyt, we provide more than just performance improvement; we offer
        you a pathway to unlocking the complete potential of your online
        platforms. With a team of skilled professionals, a dedication to
        personalization, and an unwavering commitment to excellence, we are
        ready to be your partner on this transformative adventure. As you embark
        on the journey of performance optimization, our collaboration goes
        beyond enhancing loading times; it's about enriching user satisfaction,
        increasing engagement, and maximizing the worth of your online presence.
        Why select us? Because our approach is grounded in strategic planning,
        innovation, efficiency, and an alliance that ensures your platforms
        function at their best. Experience the fusion of technology and
        expertise, creating platforms that redefine speed and effectiveness.
        With EasyRyt, performance optimization becomes a voyage towards digital
        excellence and success!
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
