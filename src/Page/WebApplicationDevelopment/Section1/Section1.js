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
        Crafting Web Application Development For Multiple Platforms
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
            Delivering custom Web Application Development with dedicated expertise
          </h2>
          <p id="header" ref={sectionRef}>
            Our Web Application Development Services are designed to elevate
            your online presence and streamline your business processes. With a
            team of skilled developers, we craft tailored solutions that align
            with your specific requirements and industry standards. From
            conceptualization to deployment, we ensure a smooth and
            collaborative development journey, leveraging the latest
            technologies to deliver high-performance web applications. Our focus
            on user experience and intuitive interfaces guarantees that your
            customers will enjoy seamless interactions with your platform.
            Whether it's a simple web app or a complex enterprise-level
            solution, we are dedicated to bringing your vision to life and
            empowering your business for success in the digital landscape.
          </p>
        </div>
      </div>
    </div>
  );
}

export default Section1;
