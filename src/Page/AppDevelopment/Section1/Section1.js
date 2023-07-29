import React, { useRef, useEffect } from "react";
import style from "./Section1.module.css";
import img from "../../../Image/Angular Dvelopment 2.png";
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
        Crafting App Development For Multiple Platforms
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
            Delivering custom App Development with dedicated expertise
          </h2>
          <p id="header" ref={sectionRef}>
            Developers use programming languages such as Java, Swift, or Kotlin,
            and frameworks like React Native or Flutter to build cross-platform
            apps. They strive to create user-friendly interfaces, implement
            functionality, and ensure performance and security. Throughout the
            development cycle, continuous testing and debugging are conducted to
            produce a high-quality, reliable, and engaging app that meets users'
            needs and expectations. The app development process is dynamic and
            iterative, with updates and improvements released regularly to
            enhance the user experience.
          </p>
        </div>
      </div>
    </div>
  );
}

export default Section1;
