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
          alt="UI/UX Designs"
        />
      </div>

      <div>
        <h2 id="header" ref={sectionRef}>
          Importance of UI/UX Designs
        </h2>
        <p className={style.para} id="header" ref={sectionRef}>
          In today's digital environment, outstanding UI/UX design plays a
          pivotal role in achieving success. A meticulously crafted User
          Interface (UI) and User Experience (UX) design not only establish
          favourable initial impressions but also ensure instinctive and
          pleasurable interactions. In a fiercely competitive market, investing
          in UI/UX design services is a deliberate decision that enriches user
          involvement, cultivates loyalty, and differentiates your brand. At
          EasyRyt, we acknowledge the crucial function of UI/UX design in
          shaping user perspectives and encounters. Our proficient team is
          committed to producing designs that merge beauty with utility,
          providing a profound digital presence that resonates with users and
          propels business expansion.
        </p>
      </div>
    </div>
  );
}

export default Section;
