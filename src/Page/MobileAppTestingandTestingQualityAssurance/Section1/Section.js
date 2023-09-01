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
          alt="Mobile Application Testing?"
        />
      </div>

      <div>
        <h1 id="header" ref={sectionRef}>
          Why Select Mobile Application Testing?
        </h1>
        <p className={style.para} id="header" ref={sectionRef}>
          At EasyRyt, we acknowledge that the success of a mobile app depends on
          its ability to deliver a flawless user experience. Our Mobile App
          Testing Services combines industry best practices, state-of-the-art
          tools, and a team of skilled testers to identify and resolve issues
          before they reach your users.
        </p>
      </div>
    </div>
  );
}

export default Section;
