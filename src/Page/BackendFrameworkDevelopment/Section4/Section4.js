import React from "react";
import style from "./Section4.module.css";
import { Link } from "react-router-dom";

function Section4() {
  return (
    <div className={style.main}>
      <p>
        At EasyRyt, we offer more than just backend framework development; we
        provide you with a gateway to powerful, dynamic, and cutting-edge
        applications. With a team of skilled developers, a dedication to
        customization, and an unwavering commitment to excellence, we are
        prepared to be your ally on this transformative voyage. As you embark on
        the path of backend framework development, our collaboration extends
        beyond coding; it is about optimizing functionality, improving user
        experience, and maximizing the potential of your applications. Why
        select us? Because our approach is based on strategic planning,
        customization, scalability, and a partnership that ensures your
        applications are ready for success. Witness the fusion of innovation and
        expertise that brings forth applications that redefine performance and
        responsiveness. With EasyRyt, backend framework development becomes a
        journey of empowerment and accomplishment!
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
