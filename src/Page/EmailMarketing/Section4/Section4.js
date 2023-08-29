import React from "react";
import style from "./Section4.module.css";
import { Link } from "react-router-dom";

function Section4() {
  return (
    <div className={style.main}>
      <p>
        At EasyRyt, we recognize that email marketing entails more than simply
        sending emails – it's about establishing meaningful connections. With
        our comprehensive email advertising services, you can leverage the true
        potential of email to drive engagement, conversions, and business
        growth. Whether you're introducing a new product, promoting a service,
        or simply nurturing leads, our customized strategies are designed to
        deliver outcomes. Ready to elevate your email marketing to the next
        level? Contact us today to discover how our email marketing services can
        transform your campaigns into impactful communication tools!
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
