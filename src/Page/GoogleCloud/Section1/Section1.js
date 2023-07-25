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
        Crafting Google Cloud For Multiple Platforms
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
            Delivering custom Google Cloud with dedicated expertise
          </h2>
          <p id="header" ref={sectionRef}>
            Google Cloud is a comprehensive and cutting-edge cloud computing
            platform that empowers businesses with a wide array of services and
            tools to tackle their most demanding challenges. With a global
            network of data centers, it offers secure storage, compute power,
            and robust data analytics capabilities, driving innovation and
            scalability for enterprises of all sizes. Google Cloud's machine
            learning and AI services enable businesses to derive valuable
            insights from their data and build intelligent applications. Its
            commitment to sustainability and industry-leading security measures
            ensure data protection and environmental responsibility. From
            startups to multinational corporations, Google Cloud facilitates
            digital transformation, fostering efficiency, agility, and growth.
          </p>
        </div>
      </div>
    </div>
  );
}

export default Section1;
