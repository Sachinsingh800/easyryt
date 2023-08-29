import React from "react";
import style from "./Section4.module.css";
import { Link } from "react-router-dom";

function Section4() {
  return (
    <div className={style.main}>
      <p>
        At EasyRyt, we are not simply offering AWS services; we are presenting
        you with a pathway to imagination and advancement. With our expertise,
        customized solutions, and commitment to your prosperity, we are prepared
        to accompany you on this ground-breaking voyage. As you enter the realm
        of AWS, our collaboration surpasses mere solutions – it revolves around
        crafting strategies that harmonize with your vision. From smooth
        transitions to robust frameworks, our approach is meticulously designed
        to empower your success. Why choose us? Our all-inclusive approach,
        proven accomplishments, and unwavering devotion make us the perfect
        companion for your AWS revolution. Get in contact via to commence your
        AWS journey!
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
