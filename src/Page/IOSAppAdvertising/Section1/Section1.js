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
            Elevate your app's performance with our cutting-edge iOS App
            Advertising Services. Our expert team crafts targeted, data-driven
            campaigns to reach your ideal audience and maximize app visibility.
            Using advanced analytics, we optimize ad placements and refine
            strategies for optimal user engagement and increased downloads.
            Whether you're launching a new app or seeking to boost existing
            downloads, we tailor our services to suit your goals and budget.
            With a focus on ROI, we ensure cost-effective results and continuous
            growth for your app. Embrace the power of effective advertising and
            unlock your app's full potential in the competitive iOS market.
            Partner with us and thrive in the app ecosystem!
          </p>
        </div>
      </div>
    </div>
  );
}

export default Section1;
