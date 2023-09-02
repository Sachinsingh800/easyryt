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
          alt="Portfolio Website"
        />
      </div>

      <div>
        <h2 id="header" ref={sectionRef}>
          The Importance of a Dedicated Portfolio Website
        </h2>
        <p className={style.para} id="header" ref={sectionRef}>
          In this digital era, having a dedicated portfolio website serves as
          your online introduction. It offers a centralized platform to present
          your creative talents effectively. When it comes to artists,
          designers, photographers, and other creative professionals, a
          WordPress portfolio website provides the perfect medium for displaying
          your work. It goes beyond merely presenting images; it involves
          curating an immersive experience that showcases your style,
          demonstrates your expertise, and resonates with your target audience.
        </p>
      </div>
    </div>
  );
}

export default Section;
