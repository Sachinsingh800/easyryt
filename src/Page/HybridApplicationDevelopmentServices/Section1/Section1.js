import React, { useRef, useEffect } from "react";
import style from "./Section1.module.css";
import img from "../../../Image/Hybrid Application Development Services 2.png";
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
        Crafting  Hybrid  Applications For Multiple Platforms
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
            Delivering custom  Hybrid  apps with dedicated expertise
          </h2>
          <p id="header" ref={sectionRef}>
            Hybrid Application Development Services offer a dynamic approach to
            crafting applications that combine the best of both worlds: native
            and web technologies. By leveraging frameworks like React Native,
            Xamarin, or Flutter, developers can create versatile,
            cost-effective, and cross-platform compatible apps. These solutions
            cater to diverse user experiences and needs, ensuring a consistent
            user interface and functionality across various devices and
            operating systems. Businesses benefit from faster development
            cycles, reduced costs, and wider market reach, as these hybrid apps
            can be deployed on both Android and iOS platforms. Embrace the power
            of hybrid development to deliver robust, user-friendly, and
            high-performance applications.
          </p>
        </div>
      </div>
    </div>
  );
}

export default Section1;
