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
        Crafting Front-End Website Development Services For Multiple Platforms
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
            Delivering custom Front-End Website Development Services with
            dedicated expertise
          </h2>
          <p id="header" ref={sectionRef}>
            Our Front-End Website Development Services offer the expertise and
            creativity to craft visually stunning, user-friendly, and responsive
            websites. With a keen eye for detail, we design intuitive user
            interfaces that enhance user engagement and conversion rates. Our
            skilled team combines the latest technologies and best practices to
            ensure seamless performance across all devices. We prioritize user
            experience, creating websites that leave a lasting impression and
            foster customer loyalty. From concept to implementation, we work
            closely with our clients to bring their visions to life and deliver
            tailored solutions that meet their business objectives. Trust us to
            transform your ideas into captivating, functional, and impactful web
            experiences.
          </p>
        </div>
      </div>
    </div>
  );
}

export default Section1;
