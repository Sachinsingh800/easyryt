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
          alt="Android Application Development"
        />
      </div>

      <div>
        <h1 id="header" ref={sectionRef}>
          Why Select Android Application Development?
        </h1>
        <p className={style.para} id="header" ref={sectionRef}>
          The process of Android application creation goes beyond mere coding,
          it involves transforming your ideas into a user-friendly and
          functionally advanced mobile application. With a staggering number of
          over 2 billion Android devices in use worldwide, developing an app
          that truly connects with this expansive user base necessitates skills,
          imagination, and meticulousness. At EasyRyt, we take great
          satisfaction in designing Android applications that not only adhere to
          industry benchmarks but also surpass user anticipations
        </p>
      </div>
    </div>
  );
}

export default Section;
