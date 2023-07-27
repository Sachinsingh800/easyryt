import React, { useRef, useEffect } from "react";
import style from "./Section1.module.css";
import img from "../../../Image/Content Marketing 2.png";
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
            Our Content Marketing Services are designed to elevate your brand to
            new heights in the digital landscape. We craft compelling and
            relevant content that resonates with your target audience, creating
            a strong connection between your brand and potential customers.
            Through strategic distribution across various platforms, we increase
            brand visibility and engagement, driving organic traffic to your
            website and social channels. Our team of experienced content
            creators, strategists, and data analysts work in harmony to optimize
            your content's performance and ensure maximum ROI. With our
            comprehensive approach, we help you build trust, authority, and
            credibility, ultimately converting prospects into loyal customers.
          </p>
        </div>
      </div>
    </div>
  );
}

export default Section1;
