import React, { useRef, useEffect } from "react";
import style from "./Section1.module.css";
import img from "../../../Image/App Install Advertising 2.png";
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
            App Install Advertising Services: Our cutting-edge platform is
            designed to supercharge your app's success by driving targeted
            installations and user acquisition. We harness the power of
            data-driven insights to identify and engage your ideal audience
            across multiple platforms and devices. With our comprehensive suite
            of advertising solutions, you can effectively promote your app,
            measure performance, and optimize campaigns for maximum ROI. From
            social media to search networks, we ensure your app gains visibility
            and attracts high-quality users. Stay ahead in the competitive app
            market with our strategic and result-oriented approach to app
            install advertising. Grow your user base and achieve your app's full
            potential with us
          </p>
        </div>
      </div>
    </div>
  );
}

export default Section1;
