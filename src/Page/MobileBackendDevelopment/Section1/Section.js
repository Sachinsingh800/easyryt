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
          alt="Mobile Backend Development Services"
        />
      </div>

      <div>
        <h2 id="header" ref={sectionRef}>
          The Importance of Mobile Backend Development
        </h2>
        <p className={style.para} id="header" ref={sectionRef}>
          In the constantly changing world of mobile applications, the backend
          plays a vital role in delivering a seamless, secure, and reliable user
          experience. A well-crafted mobile backend acts as the driving force
          behind app functionality, data management, and user interactions. It
          serves as the core infrastructure for user verification, data storage,
          and real-time communication. A robust mobile backend ensures that your
          app runs smoothly, even during periods of high user activity, while
          also having the flexibility to accommodate a growing user base.
          Additionally, a dependable backend is crucial in safeguarding user
          information, implementing authentication procedures, and adhering to
          data privacy regulations. By investing in professional mobile backend
          development services, you not only enhance your app's performance but
          also foster user confidence, data protection, and overall satisfaction
          in an increasingly mobile-oriented world.
        </p>
      </div>
    </div>
  );
}

export default Section;
