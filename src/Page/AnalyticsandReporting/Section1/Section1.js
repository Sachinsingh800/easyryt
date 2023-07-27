import React, { useRef, useEffect } from "react";
import style from "./Section1.module.css";
import img from "../../../Image/Analytics and Reporting 2.png";
import { gsap } from "gsap";
import { useIntersection } from "react-use";

function Section1() {
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
      <h1 id="header" ref={sectionRef}>
      Digital Marketing Firm That Promises Assured Enhancements
      </h1>
      <div className={style.innercontain}>
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
          <h2 id="header" ref={sectionRef}>
          Digital Marketing Firm That Promises Assured Enhancements
          </h2>
          <p id="header" ref={sectionRef}>
            Analytics and Reporting encompass a comprehensive set of tools and
            techniques that help businesses and organizations transform raw data
            into valuable insights. Through data collection, analysis, and
            interpretation, these processes enable stakeholders to measure
            performance, track key metrics, and identify patterns and trends.
            The data is then presented through visualizations, dashboards, and
            reports, providing a clear and concise representation of complex
            information. By leveraging analytics and reporting, decision-makers
            can make informed choices, optimize processes, and identify
            opportunities for growth and improvement. This data-driven approach
            ensures businesses stay competitive, adapt to changing market
            conditions, and achieve their goals effectively and efficiently
          </p>
        </div>
      </div>
    </div>
  );
}

export default Section1;
