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
            Supercharge your online store with our comprehensive E-Commerce
            Advertising Services. Our expert team employs cutting-edge
            strategies to drive qualified traffic, enhance brand visibility, and
            boost sales. From data-driven PPC campaigns to compelling social
            media advertising, we tailor each approach to your unique business
            needs. Utilizing advanced analytics, we continuously optimize your
            campaigns, ensuring maximum return on investment and long-term
            success. Stay ahead of the competition with our result-oriented
            approach, leveraging the latest trends and platforms to connect with
            your target audience. Let us elevate your E-Commerce business to new
            heights and achieve unrivaled growth in the digital landscape.
          </p>
        </div>
      </div>
    </div>
  );
}

export default Section1;
