import React, { useRef, useEffect } from "react";
import style from "./Section1.module.css";
import img from "../../../Image/Mobile Backend Development, 2.png";
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
        Crafting  Mobile Backend Development For Multiple Platforms
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
            Delivering custom  Mobile Backend Development with dedicated expertise
          </h2>
          <p id="header" ref={sectionRef}>
            Mobile Backend Development Services: Our team of skilled developers
            empowers your mobile applications with robust backend solutions. We
            specialize in designing, building, and maintaining scalable
            architectures that ensure smooth data management, seamless user
            authentication, and efficient communication between your app and
            server. With a focus on security and performance, we deliver
            reliable APIs and cloud integrations, enabling your app to handle
            high user loads effortlessly. Our expertise spans various platforms
            and frameworks, allowing us to tailor the backend to your specific
            needs. From real-time updates to data storage and analytics, our
            comprehensive solutions ensure your mobile app functions flawlessly,
            providing an exceptional user experience.
          </p>
        </div>
      </div>
    </div>
  );
}

export default Section1;
