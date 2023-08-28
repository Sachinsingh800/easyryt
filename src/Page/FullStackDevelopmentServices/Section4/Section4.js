import React from "react";
import style from "./Section4.module.css";
import { Link } from "react-router-dom";

function Section4() {
  return (
    <div className={style.main}>
      <p>
        The digital landscape progresses swiftly, and so do we. Our Stack
        Engineers stay updated with the latest trends and technologies in the
        industry, ensuring that your project remains at the forefront of
        innovation. In the realm of digital experiences, Full Stack Web
        Development connects imagination with efficiency. Collaborate with
        EasyRyt to craft web applications that not only captivate users but also
        empower your business to flourish. Our Full Stack Web Development
        Services go beyond mere code – they represent a seamless amalgamation of
        design and technology.
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
