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
          alt="Python Development"
        />
      </div>

      <div>
        <h1 id="header" ref={sectionRef}>
          The Importance of Python Development for Your Company
        </h1>
        <p className={style.para} id="header" ref={sectionRef}>
          In the realm of software creation, Python stands as an adaptable and
          influential programming language that possesses the potential to
          redefine your company's digital capabilities. Python's simplicity,
          readability, and broad array of libraries make it a preferred option
          for creating efficient and inventive solutions. Whether it involves
          constructing web applications, automating procedures, or delving into
          the domains of data analysis and artificial intelligence, Python's
          adaptability guarantees that it is well-prepared for diverse tasks.
          Its resilient community support and extensive collection of resources
          further contribute to its worth, enabling developers to tap into a
          plethora of valuable assets. By embracing Python development, you are
          investing in a technology that not only elevates your software
          solutions but also empowers your company to explore new opportunities
          and remain at the forefront in the ever-changing world of technology.
        </p>
      </div>
    </div>
  );
}

export default Section;
