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
        Crafting React Native development For Multiple Platforms
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
            Delivering custom React Native development with dedicated expertise
          </h2>
          <p id="header" ref={sectionRef}>
            Our React Native development services offer cutting-edge solutions
            for creating high-performance, cross-platform mobile applications.
            Leveraging the power of JavaScript and native components, we deliver
            seamless user experiences on both iOS and Android platforms. Our
            team of skilled developers excels at crafting feature-rich apps with
            a focus on efficiency, scalability, and rapid deployment. Whether
            you need a new app from scratch or want to optimize an existing one,
            we provide end-to-end services, including design, development,
            testing, and maintenance. Stay ahead in the mobile market with our
            expertise, ensuring your app reaches a wider audience while
            maintaining native-like performance and functionality.
          </p>
        </div>
      </div>
    </div>
  );
}

export default Section1;
