import React, { useRef, useEffect } from "react";
import style from "./Section1.module.css";
import img from "../../../Image/Cloud Services Integration, 2.png";
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
        Crafting Cloud Solutions For Multiple Platforms
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
            Delivering custom Cloud Solutions with dedicated expertise
          </h2>
          <p id="header" ref={sectionRef}>
            These solutions enable businesses and individuals to scale resources
            according to their needs, reducing the need for physical
            infrastructure and upfront costs. Cloud providers like Amazon Web
            Services (AWS), Microsoft Azure, and Google Cloud offer a range of
            services, including Infrastructure as a Service (IaaS), Platform as
            a Service (PaaS), and Software as a Service (SaaS), facilitating
            data storage, analysis, collaboration, and deployment of
            applications with high flexibility, reliability, and
            cost-effectiveness.
          </p>
        </div>
      </div>
    </div>
  );
}

export default Section1;
