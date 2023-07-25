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
        Crafting   Python Development For Multiple Platforms
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
            Delivering custom   Python Development with dedicated expertise
          </h2>
          <p id="header" ref={sectionRef}>
            Python Development Services: Unlock the full potential of Python
            with our comprehensive development solutions. Our expert team of
            Python developers crafts efficient, scalable, and reliable
            applications for web, software, and data projects. From prototyping
            to deployment, we ensure seamless integration of cutting-edge
            technologies and best practices, providing you with innovative
            solutions tailored to your specific needs. Leverage Python's
            versatility, ease of use, and robust libraries to accelerate your
            project's development and stay ahead of the competition. Whether you
            need custom web applications, data analysis tools, or automation
            scripts, our Python Development Services guarantee top-notch quality
            and exceptional performance for your business.
          </p>
        </div>
      </div>
    </div>
  );
}

export default Section1;
