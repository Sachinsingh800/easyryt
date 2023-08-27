import React from "react";
import style from "./Section4.module.css";
import { Link } from "react-router-dom";

function Section4() {
  return (
    <div className={style.main}>
      <p>
        Take your e-business to new heights with ecommerce promotion. In the
        ever-changing realm of e-commerce, possessing an outstanding website is
        merely the first step. To truly flourish, your e-commerce website
        requires the attention and recognition it deserves. Our services for
        promoting e-commerce are specifically crafted to propel your e business
        forward by showcasing your goods to the ideal audience, at the perfect
        moment. Are you prepared to elevate your e-commerce presence? Get in
        touch with us today to discover how our skilled advertising tactics can
        revolutionize your digital shop into a thriving, revenue-generating
        force.
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
