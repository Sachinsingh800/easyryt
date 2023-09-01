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
          alt="Integrating Cloud Services"
        />
      </div>

      <div>
        <h1 id="header" ref={sectionRef}>
          The Importance of Integrating Cloud Services
        </h1>
        <p className={style.para} id="header" ref={sectionRef}>
          In the ever-changing world of business, integration services for cloud
          technology have become a game-changer, presenting the opportunity to
          unlock new levels of efficiency, collaboration, and adaptability.
          Seamlessly combining different cloud services allows your company to
          operate harmoniously, enabling the free flow of data and effortless
          synchronization of processes. This kind of integration sets the stage
          for improved decision-making, decreased operational complexities, and
          enriched customer interactions. The integration of cloud services
          empowers you to harness the collective capabilities of various cloud
          platforms, ensuring that your business operations stay streamlined and
          responsive to evolving demands. By embracing professional integration
          services for cloud technology, you are making an investment in a
          transformative strategy that propels your business towards digital
          excellence, granting you the ability to fully leverage the potential
          of cloud technology.
        </p>
      </div>
    </div>
  );
}

export default Section;
