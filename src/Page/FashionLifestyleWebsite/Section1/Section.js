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
          alt=" Dedicated Fashion Lifestyle Website Matters"
        />
      </div>

      <div>
        <h2 id="header" ref={sectionRef}>
          Why a Dedicated Fashion Lifestyle Website Matters
        </h2>
        <p className={style.para} id="header" ref={sectionRef}>
          In the digital era, a dedicated fashion lifestyle website acts as your
          virtual catwalk, providing a medium to express your brand's identity
          and connect with fashion-conscious audiences. A fashion lifestyle
          website driven by state-of-the-art WordPress technology creates an
          immersive experience that enables you to exhibit collections, share
          valuable insights, and cultivate a vibrant community around your
          brand.
        </p>
      </div>
    </div>
  );
}

export default Section;
