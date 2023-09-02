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
          alt="Web Application Creation"
        />
      </div>

      <div>
        <h2 id="header" ref={sectionRef}>
          The Importance of Web Application Creation
        </h2>
        <p className={style.para} id="header" ref={sectionRef}>
          In today's digital world, the development of web applications acts as
          the life force of enterprises, allowing them to connect and interact
          with their intended audiences on a global level. A well-crafted web
          application is more than just a tool; it is a valuable asset that
          facilitates customer engagements, boosts sales, and strengthens brand
          reliability. Web applications serve as platforms for businesses to
          display their offerings, services, and distinctive value proposition
          while providing users with seamless experiences on various devices.
          Furthermore, they empower the collection and analysis of data,
          enabling informed decision-making and personalized user interactions.
          By investing in professional web application creation, you are not
          only keeping up with the ever-evolving technology but also
          establishing a digital presence that resonates with your audience,
          driving growth and positioning your enterprise for success in the
          modern age.
        </p>
      </div>
    </div>
  );
}

export default Section;
