import React, { useRef, useEffect } from "react";
import style from "./Section.module.css";
import img from "../../../Image/have-a-great-idea-for-an-app.png";
import { gsap } from "gsap";
import { useIntersection } from "react-use";

function Section() {
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
      <div>
        <img
          id="header"
          ref={sectionRef}
          className={style.img}
          src={img}
          alt="React Native in Mobile Development"
        />
      </div>

      <div>
        <h2 id="header" ref={sectionRef}>
          The Importance of React Native in Mobile Development
        </h2>
        <p className={style.para} id="header" ref={sectionRef}>
          React Native has become a crucial technology in contemporary mobile
          application development, revolutionizing the process of building and
          experiencing applications across various platforms. Its significance
          lies in simplifying development, enhancing user interaction, and
          enabling compatibility across multiple platforms. React Native enables
          businesses to create visually captivating applications that seamlessly
          operate on both iOS and Android devices. Its cross-platform attributes
          and component-oriented structure improve development effectiveness,
          while its emphasis on performance guarantees flawless user
          experiences. By integrating React Native, businesses can provide
          remarkable mobile experiences that engage users and optimize their
          presence across a wide range of platforms.
        </p>
      </div>
    </div>
  );
}

export default Section;
