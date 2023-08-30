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
          What the Importance of iPhone App Marketing?
        </h1>
        <p className={style.para} id="header" ref={sectionRef}>
          In an era controlled by smartphones, the iOS platform created by Apple
          represents a testament to creativity, sophistication, and
          state-of-the-art advancements. With an array of applications
          accessible on the App Store, the challenge lies in gaining recognition
          for your app from the appropriate target audience. This is precisely
          where our iOS App Marketing Solutions come into play. The triumph of
          your app is not solely dependent on its functionality - it
          necessitates a strategic promotional strategy that capitalizes on the
          distinctive capabilities of iOS devices, enthrals users, and
          establishes a durable presence on their iPhones and iPads.
        </p>
      </div>
    </div>
  );
}

export default Section;
