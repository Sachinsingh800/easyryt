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
          alt="Solid Internet Existence"
        />
      </div>

      <div>
        <h2 id="header" ref={sectionRef}>
          The Importance of a Solid Internet Existence
        </h2>
        <p className={style.para} id="header" ref={sectionRef}>
          In the current era of technology, possessing a sturdy online existence
          is not simply a benefit - it is an essential requirement. Your site
          frequently serves as the initial encounter that customers have with
          your brand, rendering it an imperative point of contact for
          establishing trust and credibility. A carefully constructed WordPress
          website not only displays your goods or services but also conveys the
          principles and distinct benefits of your brand. Whether you aim to
          create an informative hub or a dominant e-commerce platform, our
          services for developing WordPress websites are designed to fashion an
          online presence that distinguishes you from rivals.
        </p>
      </div>
    </div>
  );
}

export default Section;
