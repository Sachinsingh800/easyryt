import React from "react";
import style from "./Section4.module.css";
import { Link } from "react-router-dom";

function Section4() {
  return (
    <div className={style.main}>
      <p>
        In the aggressive global market of iOS app development, status out calls
        for a mix of innovation, consumer-oriented layout, and technical
        prowess. At EasyRyt, we combine those factors to create iOS applications
        that now not only meet industry requirements however exceed consumer
        expectancies. Whether you're a startup aiming to make a mark or a
        longtime business enterprise seeking to amplify your virtual footprint,
        our iOS app development services are tailored to your desires. Partner
        with us to turn your app imaginative and prescient right into a reality
        and make an enduring effect within the iOS app surroundings.
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
