import React from "react";
import style from "./Section4.module.css";
import { Link } from "react-router-dom";

function Section4() {
  return (
    <div className={style.main}>
      <p>
        The app market advances swiftly, and so do we. Our team remains
        up-to-date with the latest industry trends, emerging technologies, and
        cutting-edge marketing approaches. This ensures that your app remains at
        the vanguard of innovation. In a world where mobile applications vie for
        recognition and installations, your app warrants the limelight. Partner
        with EasyRyt - the agency dedicated to promoting apps - and let us
        engage users with captivating narratives. Together, we will actualize
        your app's vision and propel it towards triumph. Get in touch now for a
        consultation and uncover the methods through which we can enhance your
        app's prominence in the digital domain!
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
