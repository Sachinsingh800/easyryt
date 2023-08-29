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
          alt="img"
        />
      </div>

      <div>
        <h1 id="header" ref={sectionRef}>
          The Importance of Next.js in the Field of Web Development
        </h1>
        <p className={style.para} id="header" ref={sectionRef}>
          Next.js plays a crucial role in modern web development by seamlessly
          merging the capabilities of React with server-side rendering and
          intelligent routing. Its significance lies in its ability to optimize
          performance, ensuring fast loading times and enhancing user
          experiences. Through server-side rendering, Next.js not only
          captivates users but also boosts SEO rankings, leading to increased
          organic traffic. The platform's intelligent routing system enables the
          creation of immersive interfaces, captivating users and promoting
          interaction. Furthermore, Next.js expedites development cycles with
          its user-friendly features, making it an essential tool for efficient
          and impactful web application creation in today's ever-evolving
          digital landscape.
        </p>
      </div>
    </div>
  );
}

export default Section;
