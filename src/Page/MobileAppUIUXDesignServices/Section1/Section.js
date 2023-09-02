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
          alt="UI/UX in Mobile Apps"
        />
      </div>

      <div>
        <h2 id="header" ref={sectionRef}>
          The importance of UI/UX in Mobile Apps
        </h2>
        <p className={style.para} id="header" ref={sectionRef}>
          In the dynamic realm of mobile applications, the significance of UI/UX
          design cannot be overstated. It plays a crucial role in determining
          the success of an app. A visually captivating and user-centric
          interface (UI) establishes trustworthiness and improves navigation,
          while a seamless user experience (UX) ensures user contentment and
          loyalty. In a fiercely competitive market, where users have abundant
          options, investing in extraordinary UI/UX design goes beyond mere
          enhancement – it becomes a strategic necessity that elevates your app,
          fosters user retention, and propels business growth. At EasyRyt, we
          comprehend this importance and are unwavering in our commitment to
          crafting exceptional mobile app experiences that distinctively
          resonate with users and provide long-lasting value.
        </p>
      </div>
    </div>
  );
}

export default Section;
