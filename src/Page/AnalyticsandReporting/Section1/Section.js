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
          Unleashing the Power of Data Analytics and Reporting
        </h1>
        <p className={style.para} id="header" ref={sectionRef}>
          Data analysis and reporting work together seamlessly to empower your
          business. Data analysis involves the methodical examination of data to
          reveal patterns, trends, and connections. These observations provide
          valuable insights into customer behaviour, operational efficiency, and
          market dynamics. On the other hand, reporting is the process of
          presenting these insights in concise and visually captivating formats,
          making it simpler for stakeholders to comprehend and respond to the
          information.
        </p>
      </div>
    </div>
  );
}

export default Section;
