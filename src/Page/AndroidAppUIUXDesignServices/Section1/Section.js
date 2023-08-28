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
          The importance of Android App UI/UX Design
        </h1>
        <p className={style.para} id="header" ref={sectionRef}>
          The Significance of Android Application Interface and User Experience
          Design In the highly competitive realm of Android applications,
          outstanding UI/UX design has the potential to revolutionize the game.
          An artfully crafted User Interface (UI) guarantees a favourable
          initial impression, while User Experience (UX) design ensures seamless
          interactions and user contentment. Amidst a plethora of options,
          making an investment in UI/UX design constitutes a strategic manoeuvre
          that heightens user involvement, nurtures trust, and distinguishes
          your application. Here at EasyRyt, we acknowledge the importance of
          this aspect and pledge to provide Android application experiences that
          leave a long-lasting imprint on users, fostering both loyalty and
          triumph.
        </p>
      </div>
    </div>
  );
}

export default Section;
