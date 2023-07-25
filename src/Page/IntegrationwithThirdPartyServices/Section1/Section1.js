import React, { useRef, useEffect } from "react";
import style from "./Section1.module.css";
import img from "../../../Image/crossbg.png";
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
        Crafting   Integration with third-party For Multiple Platforms
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
            Delivering custom   Integration with third-party with dedicated expertise
          </h2>
          <p id="header" ref={sectionRef}>
            Integration with third-party services refers to the process of
            incorporating external functionalities, tools, or data from trusted
            sources into a platform, application, or system. This collaboration
            allows businesses and developers to extend the capabilities of their
            own offerings without building everything from scratch. Through
            well-established APIs or other integration methods, companies can
            access various services, such as payment gateways, social media
            platforms, cloud storage, or analytics tools, seamlessly merging
            them with their own solutions. This streamlined approach enhances
            user experience, boosts efficiency, and fosters innovation by
            leveraging the strengths of multiple reliable providers, ultimately
            providing users with a more comprehensive and feature-rich
            experience.
          </p>
        </div>
      </div>
    </div>
  );
}

export default Section1;
