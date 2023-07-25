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
        Crafting Vue.js Development For Multiple Platforms
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
            Delivering custom Vue.js Development with dedicated expertise
          </h2>
          <p id="header" ref={sectionRef}>
            Vue.js Development Services: Harness the power of Vue.js with our
            professional development services. Our team of skilled developers
            excels at crafting dynamic, responsive, and high-performance web
            applications tailored to your unique business needs. From crafting
            engaging user interfaces to integrating Vue.js seamlessly with
            existing systems, we deliver innovative solutions that enhance your
            online presence. Benefit from our expertise in building custom
            components, optimizing application performance, and ensuring
            cross-browser compatibility. Whether you require a full-scale Vue.js
            application or enhancements to an existing project, we are committed
            to delivering exceptional results that drive growth, improve user
            experiences, and exceed your expectations.
          </p>
        </div>
      </div>
    </div>
  );
}

export default Section1;
