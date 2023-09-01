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
          alt="Email Marketing"
        />
      </div>

      <div>
        <h1 id="header" ref={sectionRef}>
          Importance of Email Marketing?
        </h1>
        <p className={style.para} id="header" ref={sectionRef}>
          The power of an email lies in its ability to directly reach
          individuals, delivering your message right into their personal sphere.
          A successful email campaign possesses the potential to revolutionize
          your business. Email marketing is not limited to a mere email blast;
          it revolves around designing a personalized experience for your
          recipients, offering them value, and compelling them to take actions
          that align with your objectives. It is a versatile tool that can be
          effectively employed to nurture leads, engage customers, promote
          products or services, and cultivate brand loyalty.
        </p>
      </div>
    </div>
  );
}

export default Section;
