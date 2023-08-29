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
          The Significance of AngularJS in Modern Web Development
        </h1>
        <p className={style.para} id="header" ref={sectionRef}>
          AngularJS serves as a fundamental technology in contemporary web
          development, performing a crucial role in shaping the manner in which
          dynamic and interactive applications are constructed. Its importance
          lies not solely in its technical abilities but also in its capacity to
          streamline the development processes and enhance user experiences.
          AngularJS presents a comprehensive framework that empowers developers
          to forge applications with abundant features that cater to diverse
          business necessities. One of the key benefits of AngularJS is its
          well-established and validated nature. With a robust ecosystem and a
          track record of successful projects, AngularJS offers a dependable
          foundation for constructing intricate and scalable applications. Its
          modular architecture fosters the reuse of code, enabling more
          efficient development and less burdensome maintenance.
        </p>
      </div>
    </div>
  );
}

export default Section;
