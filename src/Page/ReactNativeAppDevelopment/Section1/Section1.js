import React, { useRef, useEffect } from "react";
import style from "./Section1.module.css";
import img from "../../../Image/React Native App Development 2.png";
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
        Crafting React Native Applications For Multiple Platforms
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
            Delivering custom React native apps with dedicated expertise
          </h2>
          <p id="header" ref={sectionRef}>
            Empower your business with cutting-edge React Native application
            development services. Our team of expert developers crafts
            high-performance, cross-platform mobile apps that seamlessly run on
            both Android and iOS. Harness the power of native functionalities
            combined with the flexibility of JavaScript to deliver exceptional
            user experiences. We ensure smooth UI, rapid development, and
            cost-effective solutions, tailored to meet your specific needs and
            requirements. From concept to deployment, we guarantee top-notch
            quality and timely delivery. Let us bring your vision to life and
            reach a wider audience with our advanced React Native solutions. Get
            in touch today to transform your ideas into reality.
          </p>
        </div>
      </div>
    </div>
  );
}

export default Section1;
