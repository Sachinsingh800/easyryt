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
          alt="Significance of a Powerful Online Commerce Presence"
        />
      </div>

      <div>
        <h1 id="header" ref={sectionRef}>
          The Significance of a Powerful Online Commerce Presence
        </h1>
        <p className={style.para} id="header" ref={sectionRef}>
          In the era of digital technology, a sturdy online commerce presence is
          not only beneficial but also absolutely necessary. With a growing
          number of individuals opting for internet-based shopping, possessing a
          well-crafted online commerce platform acts as your pathway to a
          worldwide customer base. A thoughtfully designed WordPress-based
          online commerce website offers your clientele a convenient, reliable,
          and user-friendly shopping encounter, instilling confidence and
          ensuring recurring patronage. It extends beyond mere transactions; it
          entails fashioning an engaging virtual shop that mirrors your unique
          brand, showcases your merchandise, and establishes a personal
          connection with your target audience.
        </p>
      </div>
    </div>
  );
}

export default Section;
