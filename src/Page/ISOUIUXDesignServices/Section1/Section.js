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
          The Influence of a Devoted Affiliate Marketing Website
        </h1>
        <p className={style.para} id="header" ref={sectionRef}>
          In the realm of online trade, possessing a devoted platform for
          Affiliate marketing is crucial. A WordPress Affiliate marketing
          website furnishes the optimal groundwork for efficiently promoting
          Affiliate goods, monitoring performance, and captivating your
          audience. It's not solely about showcasing links – it's about
          constructing an immersive Affiliate experience that seamlessly binds
          products with prospective purchasers.
        </p>
      </div>
    </div>
  );
}

export default Section;
