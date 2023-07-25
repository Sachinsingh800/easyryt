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
        Crafting React JS Development For Multiple Platforms
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
            Delivering custom React JS Development with dedicated expertise
          </h2>
          <p id="header" ref={sectionRef}>
            Experience top-tier React JS Development Services tailored to
            elevate your digital presence. Our proficient team of React
            developers leverages the cutting-edge framework's capabilities to
            deliver high-performance, interactive, and scalable web
            applications. From concept to deployment, we prioritize user-centric
            design, seamless navigation, and optimized functionality. Whether
            you need a custom web app, e-commerce platform, or a progressive web
            application, we ensure the highest coding standards and best
            practices. Stay ahead of the competition with our agile development
            process, continuous integration, and robust testing methodologies.
            Let us transform your ideas into reality and drive your business
            growth with the power of React JS.
          </p>
        </div>
      </div>
    </div>
  );
}

export default Section1;
