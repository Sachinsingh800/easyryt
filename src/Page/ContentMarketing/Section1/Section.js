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
          alt="Content Advertising"
        />
      </div>

      <div>
        <h2 id="header" ref={sectionRef}>
          Why Content Advertising is Important?
        </h2>
        <p className={style.para} id="header" ref={sectionRef}>
          In a society overwhelmed with data, content advertising serves as your
          guiding light of genuineness. It goes beyond simply providing facts;
          it encompasses crafting compelling tales that strike a chord,
          motivating messages, and stories that provoke sentiments. A strong
          content advertising approach establishes your brand as a pioneer in
          its field, fosters confidence within your target audience, and fosters
          enduring progress through valuable and pertinent content.
        </p>
      </div>
    </div>
  );
}

export default Section;
