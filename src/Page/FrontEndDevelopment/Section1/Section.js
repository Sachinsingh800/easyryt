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
          alt="Front End Development"
        />
      </div>

      <div>
        <h1 id="header" ref={sectionRef}>
          The Importance of Front End Development
        </h1>
        <p className={style.para} id="header" ref={sectionRef}>
          Within the digital domain, the initial interaction point with users is
          the front end. It serves as the entrance through which they engage,
          interact, and establish connections with your brand. A
          skilfully-crafted front end experience not only captivates users, but
          also seamlessly guides them through your website or application,
          fostering positive interactions and generating conversions. It
          transcends mere aesthetics – it involves establishing an immersive and
          user-friendly journey that strikes a chord with your target audience.
        </p>
      </div>
    </div>
  );
}

export default Section;
