import React from "react";
import style from "./Section4.module.css";
import { Link } from "react-router-dom";

function Section4() {
  return (
    <div className={style.main}>
      <p>
        Cross-platform app development is a strategic approach that offers a
        multitude of advantages for agencies aiming to make a mark in the mobile
        app world. From reaching a much wider target market to lowering
        development charges and making sure a consistent consumer experience,
        the benefits are clean. As the mobile landscape maintains to adapt,
        embracing cross-platform development can position your IT employer as a
        modern participant that can provide fantastic apps effectively and
        efficaciously. So, whether you are launching a startup or expanding your
        app portfolio, keep in mind the energy of pass-platform improvement to
        propel your fulfilment.
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
