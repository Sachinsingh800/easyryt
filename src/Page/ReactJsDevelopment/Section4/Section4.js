import React from "react";
import style from "./Section4.module.css";
import { Link } from "react-router-dom";

function Section4() {
  return (
    <div className={style.main}>
      <p>
        At EasyRyt, our primary focus is utilizing the potential of React JS to
        bring your digital aspirations to reality. Our approach is rooted in
        expertise, creativity, and an unwavering commitment to excellence. With
        a team of proficient React developers, a track record of success, and a
        comprehensive development process, we are the perfect partner for
        crafting exceptional web applications. By selecting our services, you're
        not simply choosing a development provider; you're embarking on a
        collaborative adventure where your vision assumes centre stage. We
        strongly believe in designing with the user in mind, promoting component
        reusability, and employing agile methodologies that guarantee your
        application is not only fully functional but also optimized for
        performance and user engagement. Regardless of whether you are
        initiating a new project or enhancing an existing one, we possess the
        requisite experience, knowledge, and unwavering dedication to ensure its
        success. At EasyRyt, we don't simply construct applications; we curate
        experiences that deeply resonate with your target audience and propel
        your business forward. Reach out to us today to commence a
        transformative journey in React JS development. Your triumph is our
        utmost priority!
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
