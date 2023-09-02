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
          alt="Significance of Google Ads"
        />
      </div>

      <div>
        <h2 id="header" ref={sectionRef}>
          What is the Significance of Google Ads?
        </h2>
        <p className={style.para} id="header" ref={sectionRef}>
          In the expansive realm of the internet, Google serves as the guiding
          force directing individuals to their intended destinations. The
          services provided by Google Ads empower your brand to prominently
          showcase its offerings when users conduct searches using pertinent
          keywords, effectively capturing their attention precisely when they
          are seeking solutions. It goes beyond mere visibility – it revolves
          around providing meaningful value to users who actively pursue the
          solutions your brand can provide.
        </p>
      </div>
    </div>
  );
}

export default Section;
