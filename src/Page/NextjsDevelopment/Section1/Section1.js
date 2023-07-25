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
        Crafting  Next.js Development For Multiple Platforms
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
            Delivering custom  Next.js Development with dedicated expertise
          </h2>
          <p id="header" ref={sectionRef}>
            Next.js Development Services: Empower your web application with the
            cutting-edge capabilities of Next.js. Our expert team leverages this
            powerful React framework to build high-performance, feature-rich,
            and SEO-friendly applications. With server-side rendering, automatic
            code-splitting, and simplified routing, we ensure blazing-fast load
            times and enhanced user experiences. Harness the benefits of
            efficient client-side navigation and optimized performance, enabling
            seamless scalability to handle growing user demands. From e-commerce
            platforms to enterprise solutions, our Next.js development services
            deliver robust, secure, and future-proof applications. Stay ahead of
            the competition and provide your users with a smooth, engaging, and
            interactive web experience with Next.js.
          </p>
        </div>
      </div>
    </div>
  );
}

export default Section1;
