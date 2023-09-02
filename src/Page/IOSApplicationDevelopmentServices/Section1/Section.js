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
        <h2 id="header" ref={sectionRef}>
          Why Select IOS App development?
        </h2>
        <p className={style.para} id="header" ref={sectionRef}>
          Developing applications for iOS goes well beyond the realm of coding;
          it entails fashioning an encounter that users thoroughly enjoy
          interacting with. Apple's ecosystem is widely acclaimed for its
          elegant aesthetics and flawless operations, thus constructing an iOS
          app that truly distinguishes itself necessitates a high level of
          proficiency, imagination, and meticulousness. At EasyRyt, we derive
          immense satisfaction from engineering iOS applications that
          effortlessly combine groundbreaking advancements and design that
          centres around the needs of the user.
        </p>
      </div>
    </div>
  );
}

export default Section;
