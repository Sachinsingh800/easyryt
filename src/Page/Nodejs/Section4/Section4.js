import React from "react";
import style from "./Section4.module.css";
import { Link } from "react-router-dom";

function Section4() {
  return (
    <div className={style.main}>
      <p>
        Within the realm of digital progress, Node.js serves as a dominant force
        in technology, and at EasyRyt, our offerings extend beyond just Node.js
        development services. We provide you with a pathway to manifesting
        cutting-edge applications from your visionary concepts. Through our
        established expertise, customized solutions, and unwavering commitment
        to excellence, we are poised to become your trusted ally on this
        revolutionary journey. As you embark on the world of Node.js, our
        collaboration surpasses conventional development; it is about
        architecting solutions that redefine user encounters and propel your
        enterprise forward. What sets us apart? The foundation of our approach
        lies in thorough analysis, tailoring, performance optimization, and a
        partnership that guarantees the complete realization of your vision.
        Discover the ingenuity and efficacy that Node.js can infuse into your
        applications. Your metamorphosis commences right here with EasyRyt.
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
