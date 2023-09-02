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
          alt="Performance Optimization Services"
        />
      </div>

      <div>
        <h2 id="header" ref={sectionRef}>
          The Importance of Performance Optimization Services
        </h2>
        <p className={style.para} id="header" ref={sectionRef}>
          In today's ever-changing digital landscape, the demands for flawless
          and expedient experiences from users have reached unprecedented
          levels. The enhancement of performance emerges as a critical element
          in meeting these expectations and securing the triumph of digital
          platforms. A rapid-loading and highly responsive website or
          application not only amplifies user contentment but also fosters
          active participation and conversions. The advancement in performance
          also yields positive effects on the ranking of search engines,
          resulting in better visibility and escalated traffic. Beyond the realm
          of user experience, optimizing performance also impacts the costs
          associated with operations by reducing the necessity for extensive
          servers and bandwidth. By investing in the talents of knowledgeable
          professionals who specialize in performance optimization, you will not
          only elevate the overall user journey but also maximize the
          possibilities for triumph within an environment that is becoming
          increasingly competitive online.
        </p>
      </div>
    </div>
  );
}

export default Section;
