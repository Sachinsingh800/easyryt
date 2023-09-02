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
          alt="Hybrid App Development"
        />
      </div>

      <div>
        <h2 id="header" ref={sectionRef}>
          Why Select Hybrid App Development?
        </h2>
        <p className={style.para} id="header" ref={sectionRef}>
          The execution of hybrid app development involves crafting applications
          that can operate on multiple platforms while preserving a seamless
          user encounter. These applications utilize web technologies and
          frameworks to deliver a unified encounter across various devices,
          granting the adaptability of web development and the capabilities of
          native apps.
        </p>
      </div>
    </div>
  );
}

export default Section;
