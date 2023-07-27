import React, { useRef, useEffect } from "react";
import style from "./Section1.module.css";
import img from "../../../Image/Mobile App Testing and Testing Quality Assurance 2.png";
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
        Crafting  Mobile  Applications For Multiple Platforms
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
            Delivering custom   Mobile apps with dedicated expertise
          </h2>
          <p id="header" ref={sectionRef}>
            Mobile App Testing is the meticulous process of evaluating mobile
            applications to identify and rectify defects, ensure functionality,
            and optimize user experience across different devices and operating
            systems. It involves various testing techniques like functional,
            performance, security, and usability testing. Testing Quality
            Assurance (QA) is a comprehensive approach to guaranteeing software
            quality. It involves defining and implementing QA processes,
            standards, and methodologies to verify that software products meet
            specified requirements, are free of defects, and perform reliably.
            QA encompasses all stages of the software development life cycle and
            ensures that rigorous testing, continuous monitoring, and feedback
            mechanisms are in place to deliver high-quality and dependable
            software solutions to users.
          </p>
        </div>
      </div>
    </div>
  );
}

export default Section1;
