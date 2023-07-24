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
        Crafting  Website Development For Multiple Platforms
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
            Delivering custom  Website Development with dedicated expertise
          </h2>
          <p id="header" ref={sectionRef}>
            Unlock your business's online potential with our comprehensive
            Website Development Services. Our skilled team of web developers and
            designers create stunning and intuitive websites that captivate
            audiences and drive results. Whether you need a brand-new site from
            scratch or want to revamp your existing one, we tailor solutions to
            match your unique goals and brand identity. From responsive designs
            that adapt to any device to seamless user experiences that boost
            conversion rates, our services cover all aspects of modern web
            development. Let us elevate your online presence, enhance user
            engagement, and propel your business to new heights.
          </p>
        </div>
      </div>
    </div>
  );
}

export default Section1;
