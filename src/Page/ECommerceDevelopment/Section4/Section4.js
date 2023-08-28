import React from "react";
import style from "./Section4.module.css";
import { Link } from "react-router-dom";

function Section4() {
  return (
    <div className={style.main}>
      <p>
        The experience of your consumers is of utmost importance to us. We
        devise digital marketplaces that are effortless to navigate, responsive,
        and crafted to guide visitors seamlessly towards completing a
        transaction. In the realm of digital commerce, your online platform
        stands as your digital flagship. Collaborate with EasyRyt to embark on
        an expedition of e-business metamorphosis. Our Online Commercial
        Platform Development Services encompass more than mere technology – they
        represent a fusion of originality, strategic planning, and ingenuity
        that infuse vitality into your virtual store. Reach out to us today for
        a consultation, and let's fabricate an e-commerce website that not only
        fulfils but surpasses your expectations!
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
