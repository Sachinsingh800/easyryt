import React, { useRef, useEffect } from "react";
import style from "./Section1.module.css";
import img from "../../../Image/Pay-Per-Click (PPC) Advertising 2.png";
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
            PPC Advertising Services offer a results-driven online marketing
            approach, where advertisers only pay when their ads are clicked by
            users. This targeted advertising model allows businesses to reach
            their ideal audience precisely, appearing on search engines and
            various platforms. With a set budget, advertisers can bid on
            keywords relevant to their products or services, optimizing ad
            placement and maximizing ROI. PPC campaigns provide real-time
            analytics and performance data, enabling constant refinement and
            improvement. As a cost-effective method, PPC drives traffic, boosts
            brand visibility, and generates potential leads, making it an
            essential component of any comprehensive digital marketing strategy
            for businesses of all sizes.
          </p>
        </div>
      </div>
    </div>
  );
}

export default Section1;
