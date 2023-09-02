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
          alt="Advertising for Website"
        />
      </div>

      <div>
        <h2 id="header" ref={sectionRef}>
          Why Advertising for Website Visitors Holds Significance?
        </h2>
        <p className={style.para} id="header" ref={sectionRef}>
          In the vast sea of the internet, your website serves as your digital
          shopfront. However, without the correct visitors, even the most
          aesthetically pleasing website design can go unnoticed. Advertising
          for website visitors serves as the vehicle that propels you from
          obscurity to eminence. By precisely targeting the appropriate audience
          and delivering your message at the opportune moment, it guarantees
          that your website becomes a hub of bustling activity and interaction.
        </p>
      </div>
    </div>
  );
}

export default Section;
