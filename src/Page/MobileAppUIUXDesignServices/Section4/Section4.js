import React from "react";
import style from "./Section4.module.css";
import { Link } from "react-router-dom";

function Section4() {
  return (
    <div className={style.main}>
      <p>
        In the ever-changing world of mobile applications, where the user's
        encounter can either make or break the success of an app, the importance
        of outstanding UI/UX design cannot be overstated. At EasyRyt, we go
        above and beyond mere aesthetics and functionality – we craft
        captivating experiences that deeply connect with users, enhance their
        engagement, and propel business growth. Our approach revolves around
        placing the user at the centre, fostering innovation, and promoting
        collaboration, ensuring that your app not only meets but surpasses user
        expectations. Join forces with us to transform your app concept into a
        visually mesmerizing and user-friendly reality that will leave a lasting
        impact on your audience. Take your app's potential to new heights with
        EasyRyt and embark on a journey towards app excellence!
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
