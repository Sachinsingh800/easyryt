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
          The Importance of Laravel Development for your Business
        </h1>
        <p className={style.para} id="header" ref={sectionRef}>
          In the world of web application development, Laravel holds a
          significant role as a fundamental technology that has the potential to
          redefine your online presence. The gracefulness and effectiveness of
          Laravel make it a popular choice among developers and businesses
          alike. With its powerful features, seamless database transition, and a
          wide range of built-in tools, Laravel simplifies the development
          process and saves both time and resources. Its modular structure
          enables the creation of adaptable and sustainable applications,
          ensuring that your solutions can keep up with your business's growth.
          Moreover, Laravel's emphasis on security and user experience
          guarantees that your applications are not only packed with features,
          but also safeguarded and user-friendly. By embracing Laravel
          development, you are investing in a path towards efficient, scalable,
          and custom-tailored applications that cater to the specific
          requirements of your business, granting you a competitive advantage in
          an ever-changing digital landscape.
        </p>
      </div>
    </div>
  );
}

export default Section;
