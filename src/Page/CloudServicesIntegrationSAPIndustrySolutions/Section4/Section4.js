import React from "react";
import style from "./Section4.module.css";
import { Link } from "react-router-dom";

function Section4() {
  return (
    <div className={style.main}>
      <p>
        At EasyRyt, we offer more than just integration services for cloud; we
        provide you with a gateway to effortless collaboration and improved
        effectiveness. With a team of skilled integrators, a commitment to
        tailor-made solutions, and a focus on excellence, we are prepared to be
        your partner on this transformative venture. As you embrace the realm of
        integrating cloud services, our collaboration extends beyond technology;
        it encompasses optimizing operations, fostering teamwork, and maximizing
        the advantages of cloud technology. Why should you choose us? Because
        our approach is grounded in strategic planning, customization,
        interconnectivity, and a partnership that ensures your digital
        integration is smooth and impactful. Experience the amalgamation of
        innovation and expertise to create a harmonious cloud ecosystem that
        propels your business forward. With EasyRyt, integrating cloud services
        becomes a journey of harmony and empowerment!
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
