import React from "react";
import style from "./Section4.module.css";
import { Link } from "react-router-dom";

function Section4() {
  return (
    <div className={style.main}>
      <p>
        In an era where progress in technology drives the prosperity of
        enterprises, Google Cloud Platform (GCP) stands as a shining example of
        originality and possibilities. At EasyRyt, we don't just offer Google
        Cloud services; we grant you a pathway to redefine the capabilities of
        your business. With our proven expertise, customer-centric approach, and
        unwavering commitment to innovation, we are prepared to be your
        companion on this groundbreaking journey. As you embark on the realm of
        Google Cloud, our collaboration surpasses providing solutions; it
        revolves around co-creating strategies that align with your vision. From
        smooth transitions to dynamic infrastructures, our approach aims to
        empower your expedition. Why select us? Our comprehensive methodology,
        history of achievements, and steadfast dedication position us as the
        ideal partner for your Google Cloud revolution. Reveal the boundless
        possibilities with Google Cloud, guided by EasyRyt. Your digital
        metamorphosis awaits!
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
