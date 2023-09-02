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
          alt="Vue.js in Website Development"
        />
      </div>

      <div>
        <h2 id="header" ref={sectionRef}>
          The Importance of Vue.js in Website Development
        </h2>
        <p className={style.para} id="header" ref={sectionRef}>
          Vue.js has become a significant technology in contemporary website
          development, transforming the way we create dynamic and interactive
          applications. Its significance lies in its capacity to simplify
          development, enhance user experiences, and guarantee outstanding
          performance. With an advanced framework, Vue.js provides efficient
          integration and a lightweight structure, leading to quick loading
          durations and captivating user interfaces. By selecting Vue.js,
          businesses embrace a technology that harmonizes technical expertise
          with user-focused design, making their online presence both
          competitive and immersive.
        </p>
      </div>
    </div>
  );
}

export default Section;
