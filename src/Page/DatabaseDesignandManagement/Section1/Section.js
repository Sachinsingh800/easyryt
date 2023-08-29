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
          The Importance of Designing and Managing Databases
        </h1>
        <p className={style.para} id="header" ref={sectionRef}>
          In the modern era, information is crucial for making well-informed
          decisions and achieving operational excellence. Efficiently designing
          and managing databases play a key role in accomplishing these goals. A
          well-organized database guarantees that vital information for your
          organization is structured, easily obtainable, and safeguarded. It
          empowers you to swiftly acquire valuable insights, make data-guided
          choices, and promptly adapt to evolving market conditions. Proficient
          database management facilitates collaboration, streamlines procedures,
          and establishes the groundwork for innovation. By embracing
          professional database design and management, you not only optimize the
          storage and retrieval of your data but also lay the foundation for
          future growth and prosperity. It represents a strategic investment in
          harnessing the complete potential of your data to propel your
          organization forward.
        </p>
      </div>
    </div>
  );
}

export default Section;
