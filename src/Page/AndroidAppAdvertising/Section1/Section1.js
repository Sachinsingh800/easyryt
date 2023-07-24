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
            Supercharge your Android app's success with our top-tier Advertising
            Services! Our dedicated team of experts specializes in crafting
            targeted campaigns and strategic promotions to maximize app
            visibility, drive installs, boost user engagement, and increase
            revenue. We leverage data-driven insights and cutting-edge
            techniques to reach the right audience at the right time, ensuring
            your app gets the attention it deserves in the competitive market.
            Whether you're launching a new app or looking to expand your user
            base, our tailored solutions will help you achieve your goals
            efficiently and effectively. Don't miss out on the opportunity to
            unlock your app's true potential – try our Android App Advertising
            Services today!
          </p>
        </div>
      </div>
    </div>
  );
}

export default Section1;
