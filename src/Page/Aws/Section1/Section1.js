import React, { useRef, useEffect } from "react";
import style from "./Section1.module.css";
import img from "../../../Image/Aws 2.png";
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
        Crafting   AWS For Multiple Platforms
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
            Delivering custom   AWS  with dedicated expertise
          </h2>
          <p id="header" ref={sectionRef}>
            AWS (Amazon Web Services) is a comprehensive and widely adopted
            cloud computing platform provided by Amazon. Offering an extensive
            array of services, including computing power, storage options, and
            databases, AWS empowers businesses and individuals to build and
            deploy applications with ease and flexibility. Its global network of
            data centers ensures reliable performance and low-latency access to
            services. AWS supports various industries and scales, from startups
            to enterprises, enabling cost-effective and secure management of
            data and applications. With a pay-as-you-go model, users can access
            cutting-edge technologies, machine learning, and analytics,
            revolutionizing the way they innovate, scale, and transform their
            digital operations.
          </p>
        </div>
      </div>
    </div>
  );
}

export default Section1;
