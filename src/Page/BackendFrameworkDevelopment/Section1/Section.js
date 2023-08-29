import React, { useRef, useEffect } from "react";
import style from "./Section.module.css";
import img from "../../../Image/have-a-great-idea-for-an-app.png";
import { gsap } from "gsap";
import { useIntersection } from "react-use";

function Section() {
  const sectionRef = useRef(null);
  const intersection = useIntersection(sectionRef, {
    root: null,
    rootMargin: "0px",
    threshold: 0.2,
  });

  useEffect(() => {
    const fadeInTimeline = gsap.timeline({ paused: true });
    fadeInTimeline.to("#header", {
      opacity: 1,
      y: -60,
      ease: "power4.out",
      duration: 1,
    });

    const fadeOutTimeline = gsap.timeline({ paused: true });
    fadeOutTimeline.to("#header", {
      opacity: 0,
      y: -50,
      ease: "power4.out",
      duration: 1,
    });

    if (intersection && intersection.intersectionRatio < 0.2) {
      fadeOutTimeline.play();
    } else {
      fadeInTimeline.play();
    }
  }, [intersection]);

  return (
    <div className={style.main}>
      <div>
        <img
          id="header"
          ref={sectionRef}
          className={style.img}
          src={img}
          alt="img"
        />
      </div>

      <div>
        <h1 id="header" ref={sectionRef}>
          The Importance of Developing a Backend Framework
        </h1>
        <p className={style.para} id="header" ref={sectionRef}>
          In the world of software and application creation, a robust backend
          framework acts as the groundwork for seamless functionality,
          performance, and user experience. The backend framework functions as
          the powerhouse behind applications, managing data processing,
          communication, and business rules. An effectively created backend
          framework ensures that your applications run smoothly, utilizing
          resources efficiently and providing quick response times. It also
          enables the integration of intricate features, APIs, and databases,
          facilitating dynamic interactions with users. Additionally, a
          well-designed backend framework enhances security, allowing for strong
          authentication and safeguarding of data. Investing in professional
          backend framework development is essential to deliver visually
          appealing applications that are also powerful, responsive, and capable
          of supporting your business's growth and innovative efforts.
        </p>
      </div>
    </div>
  );
}

export default Section;
