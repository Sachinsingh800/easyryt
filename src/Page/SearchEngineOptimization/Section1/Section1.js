import React, { useRef, useEffect } from "react";
import style from "./Section1.module.css";
import img from "../../../Image/crossbg.png";
import { gsap } from "gsap";
import { useIntersection } from "react-use";

function Section1() {
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
      <h1 id="header" ref={sectionRef}>
      Digital Marketing Firm That Promises Assured Enhancements
      </h1>
      <div className={style.innercontain}>
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
          <h2 id="header" ref={sectionRef}>
          Digital Marketing Firm That Promises Assured Enhancements
          </h2>
          <p id="header" ref={sectionRef}>
            SEO Services are a vital component of any successful online
            strategy. They involve optimizing websites to improve their
            visibility and rankings on search engines like Google, Bing, and
            Yahoo. Skilled professionals utilize various techniques, including
            keyword research, content optimization, backlink building, and
            technical SEO, to enhance organic traffic and attract potential
            customers. By aligning with search engine algorithms, SEO experts
            ensure that websites gain a competitive edge in search results.
            Increased online visibility leads to higher brand exposure, improved
            credibility, and ultimately, enhanced business growth. As a result,
            SEO Services play a crucial role in helping businesses thrive in the
            highly competitive digital landscape.
          </p>
        </div>
      </div>
    </div>
  );
}

export default Section1;
