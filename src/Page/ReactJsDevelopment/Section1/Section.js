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
          alt="React JS "
        />
      </div>

      <div>
        <h2 id="header" ref={sectionRef}>
          The Significance of React JS Development
        </h2>
        <p className={style.para} id="header" ref={sectionRef}>
          The Importance of React JS in Contemporary Web Development React JS
          has become a fundamental aspect in up-to-date web development,
          revolutionizing the way applications are created and improving user
          interactions. Its structure based on components simplifies
          development, increasing productivity and the ability to maintain code.
          The virtual DOM guarantees seamless updates in real time, crucial for
          designing captivating user interfaces. Reacts compatibility with
          search engine optimization (SEO) and expansive array of resources
          further emphasize its significance, empowering businesses to generate
          inventive and effective web applications that excel in the dynamic
          digital environment of today.
        </p>
      </div>
    </div>
  );
}

export default Section;
