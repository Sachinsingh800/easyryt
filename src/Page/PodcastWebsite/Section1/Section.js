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
          alt="Podcast Website"
        />
      </div>

      <div>
        <h2 id="header" ref={sectionRef}>
          Importance of a Dedicated Podcast Website
        </h2>
        <p className={style.para} id="header" ref={sectionRef}>
          In the age of online content, it is crucial to have a specialized
          website for your podcast. A specific podcast website built with
          WordPress serves as a focal point to exhibit your episodes, connect
          with your listeners, and foster a devoted community. It encompasses
          more than simply storing audio files – it is about constructing a
          brand encounter that embodies your unique flair, principles, and the
          core of your podcast.
        </p>
      </div>
    </div>
  );
}

export default Section;
