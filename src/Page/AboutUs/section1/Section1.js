import React, { useRef, useEffect } from "react";
import style from "./Section1.module.css";
import img from "../../../Image/have-a-great-idea-for-an-app.png";
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
        <h2 id="header" ref={sectionRef}>
            Welcome to Easyryt!
          </h2>
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
        
          <p id="header" ref={sectionRef}>
            At Easyryt, we are dedicated to transforming your vision into
            reality through cutting-edge technology and innovative solutions. As
            a leading IT company, we offer a comprehensive range of services
            tailored to meet the unique requirements of businesses across
            diverse industries. With a talented team of experts, we take pride
            in delivering exceptional results that drive growth, efficiency, and
            success for our clients.
          </p>
        </div>
      </div>
    </div>
  );
}

export default Section1;
