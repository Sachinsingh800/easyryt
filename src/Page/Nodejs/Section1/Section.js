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
          alt="Node.js Development"
        />
      </div>

      <div>
        <h1 id="header" ref={sectionRef}>
          Importance of Node.js Development
        </h1>
        <p className={style.para} id="header" ref={sectionRef}>
          In the rapidly evolving realm of web and app development, Node.js
          emerges as a revolutionary force, providing a plethora of benefits
          that can profoundly influence the online presence of your company.
          Node.js, constructed on Chrome's V8 JavaScript engine, is renowned for
          its exceptional swiftness and efficiency, making it an optimal
          selection for crafting high-performance applications. Its
          non-blocking, event-driven architecture guarantees that your apps can
          handle simultaneous connections without compromising their
          responsiveness. This is particularly critical in today's age of
          instantaneous interactions and dynamic user experiences. By embracing
          Node.js development, you unlock the capability to generate flexible,
          expandable, and real-time applications that cater to the requirements
          of present-day users, bestowing upon your company a competitive
          advantage in an ever-changing digital landscape.
        </p>
      </div>
    </div>
  );
}

export default Section;
