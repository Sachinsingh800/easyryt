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
          alt="Travel Website Matters "
        />
      </div>

      <div>
        <h2 id="header" ref={sectionRef}>
          Why an Exclusive Travel Website Matters ?
        </h2>
        <p className={style.para} id="header" ref={sectionRef}>
          In today's digital era, having an exclusive travel website is your
          entrance to a worldwide audience, providing a virtual getaway that
          captures the true essence of various destinations and fuels the
          aspirations of travellers. A WordPress travel website acts as a
          vibrant canvas for storytelling, inspiring thrilling adventures, and
          providing valuable insights to curious explorers. It's more than just
          information – it's about creating a digital environment that sparks
          the wanderlust within.
        </p>
      </div>
    </div>
  );
}

export default Section;
