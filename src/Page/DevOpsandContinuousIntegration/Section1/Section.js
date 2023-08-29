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
          The Importance of DevOps and CI/CD
        </h1>
        <p className={style.para} id="header" ref={sectionRef}>
          In the domain of software development, DevOps and Continuous
          Integration/Continuous Deployment (CI/CD) hold great significance.
          DevOps encourages teamwork, enhancing communication and expediting
          innovation. In the meantime, CI/CD automates code merging, testing,
          and rollout, resulting in expedited and dependable software launches.
          These methodologies empower organizations to promptly adapt to market
          requirements, refine software excellence, and cultivate a culture of
          never-ending enhancement. With streamlined procedures and automated
          workflows, enterprises can efficaciously deliver software, diminish
          errors, and remain competitive in the ever-evolving digital realm.
        </p>
      </div>
    </div>
  );
}

export default Section;
