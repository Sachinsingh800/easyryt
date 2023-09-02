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
          alt="Mobile Application Development"
        />
      </div>

      <div>
        <h2 id="header" ref={sectionRef}>
          Why Select Mobile Application Development?
        </h2>
        <p className={style.para} id="header" ref={sectionRef}>
          Mobile application development goes beyond mere coding; it entails
          comprehending user actions, crafting user-friendly interfaces, and
          enhancing efficiency on diverse devices. At [Your Company Name], we
          take great pride in crafting exceptional mobile applications that not
          only meet industry benchmarks but also surpass user anticipations,
          leaving a substantial impression on the digital domain.
        </p>
      </div>
    </div>
  );
}

export default Section;
