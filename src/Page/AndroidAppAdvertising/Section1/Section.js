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
          alt="Application Backend"
        />
      </div>

      <div>
        <h2 id="header" ref={sectionRef}>
          Why Select Application Backend Creation?
        </h2>
        <p className={style.para} id="header" ref={sectionRef}>
          In today's digital era, when mobile applications have become an
          essential part of everyday existence, standing out in the midst of the
          multitude of applications is of utmost importance. This is where our
          mobile app marketing services excel. With countless applications
          competing for attention on various platforms, the importance of a
          strategic and personalized mobile app marketing approach cannot be
          emphasized enough. A successful mobile app5 marketing strategy not
          only enhances the visibility of your application but also improves
          user interaction, boosts downloads, and ultimately contributes to the
          overall success of your application. Our specialized expertise as an
          application marketing agency ensures that your application doesn't
          simply get lost in the crowd, but rather takes centre stage, capturing
          the hearts and minds of your target audience.
        </p>
      </div>
    </div>
  );
}

export default Section;
