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
        Crafting  Angular Development For Multiple Platforms
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
            Delivering custom  Angular Development with dedicated expertise
          </h2>
          <p id="header" ref={sectionRef}>
            Angular Development Services: Our team of skilled Angular developers
            provides comprehensive solutions for businesses seeking robust web
            applications. Leveraging the power of Angular, we create dynamic,
            responsive, and user-friendly interfaces that enhance customer
            engagement and drive growth. Our services encompass everything from
            custom application development to seamless integration of APIs,
            ensuring your business stays ahead in the digital landscape. With a
            focus on performance optimization, cross-platform compatibility, and
            cutting-edge technologies, we deliver scalable solutions that meet
            your specific needs. Trust us to elevate your web presence and
            empower your business with top-notch Angular development services.
          </p>
        </div>
      </div>
    </div>
  );
}

export default Section1;
