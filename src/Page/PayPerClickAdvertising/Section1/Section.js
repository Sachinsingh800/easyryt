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
          alt="PPC Advertising"
        />
      </div>

      <div>
        <h1 id="header" ref={sectionRef}>
          Why Select  for PPC Advertising??
        </h1>
        <p className={style.para} id="header" ref={sectionRef}>
          PPC advertising offers a distinct advantage for businesses seeking
          rapid outcomes and precise audience targeting. Unlike conventional
          marketing methods, PPC management allows you to showcase your ads
          directly to individuals who are actively searching for products or
          services connected to your industry. This highly focused approach
          results in higher conversion rates, amplified brand visibility, and
          enhanced control over your marketing budget.
        </p>
      </div>
    </div>
  );
}

export default Section;
