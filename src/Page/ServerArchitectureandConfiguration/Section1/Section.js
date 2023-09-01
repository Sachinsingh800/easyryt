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
          alt="Server Architecture and Configuration"
        />
      </div>

      <div>
        <h1 id="header" ref={sectionRef}>
          The Importance of Server Architecture and Configuration
        </h1>
        <p className={style.para} id="header" ref={sectionRef}>
          In the ever-changing digital world, strong server architecture and
          effective configuration are essential for successful IT operations. A
          well-planned server environment ensures smooth communication, optimal
          utilization of resources, and secure data storage. Efficient
          configuration guarantees fast data processing, minimizes downtime, and
          improves user experiences. Additionally, a flexible and protected
          server infrastructure establishes the groundwork for accommodating
          future expansion while safeguarding sensitive data. By investing in
          professional server architecture and configuration, you are
          positioning your business for operational excellence, increased
          security, and the ability to adapt to evolving technology needs. It is
          a strategic move to ensure your digital ecosystem remains dependable,
          adaptable, and ready for success.
        </p>
      </div>
    </div>
  );
}

export default Section;
