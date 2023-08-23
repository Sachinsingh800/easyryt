import React from "react";
import style from "./Section4.module.css";
import { Link } from "react-router-dom";


function Section4() {
  return (
    <div className={style.main}>
      <p>
        Enhance Your Brand with EasyRyt, Native Mobile App Creation Services
        Prepared to convert your app idea into reality. Our Native Mobile App
        Creation services are designed to produce immersive and groundbreaking
        apps that resonate with users and drive business expansion. Whether
        you're aiming to enhance customer involvement, amplify conversions, or
        provide a unique solution, our team is here to bring your vision to
        life.
      </p>
      <h2>Get in touch with us today</h2>
      <p>
          Let’s discuss  discuss how we can enhance your brand with
        a Native mobile app that sets you apart in the digital landscape!
      </p>
   <button onClick={()=>window.location.href="/Contact-Us"} className={style.btn}>Start Conversation</button>
    </div>
  );
}

export default Section4;
