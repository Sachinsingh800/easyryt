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
          Importance of A WordPress Business Website
        </h1>
        <p className={style.para} id="header" ref={sectionRef}>
          In today's digital terrain, a finely-crafted online presence is not
          simply a choice - it is an absolute necessity. Your website acts as
          the virtual storefront of your enterprise, frequently shaping the
          primary perception for potential clientele. A skilfully created
          WordPress website possesses the ability to enthral, educate, and
          convert visitors into devoted customers. It transcends mere visual
          appeal; it is the user encounter, performance, and adaptability that
          determine whether a visitor remains or departs. Our services in the
          development of WordPress Business Websites comprehend the importance
          of this virtual gateway and strive to build websites that leave an
          enduring impact.
        </p>
      </div>
    </div>
  );
}

export default Section;
