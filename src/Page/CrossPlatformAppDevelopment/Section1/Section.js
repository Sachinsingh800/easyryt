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
          alt="Cross-Platform App Development"
        />
      </div>

      <div>
        <h1 id="header" ref={sectionRef}>
          Why Select Cross-Platform App Development?
        </h1>
        <p className={style.para} id="header" ref={sectionRef}>
          The Potential of Cross Platform Application Development Cross platform
          application development is the skill of crafting applications that are
          compatible with numerous operating systems, including iOS, Android,
          and others. It involves providing a cohesive user experience
          irrespective of the device utilized by your clientele. This strategy
          not only amplifies the scope of your application but also reduces the
          duration and expenses associated with its development. Consequently,
          it becomes an optimal selection for enterprises aspiring to generate a
          noteworthy influence in the digital realm.
        </p>
      </div>
    </div>
  );
}

export default Section;
