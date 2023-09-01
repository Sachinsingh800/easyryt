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
          alt="API Development for Your Company"
        />
      </div>

      <div>
        <h1 id="header" ref={sectionRef}>
          The Importance of API Development for Your Company
        </h1>
        <p className={style.para} id="header" ref={sectionRef}>
          In the present interconnected digital environment, APIs (Application
          Programming Interfaces) have a significant role in driving innovation
          and facilitating smooth interactions between applications, systems,
          and services. APIs enable businesses to extend their reach by
          providing integrations, granting access to functions for third-party
          developers, and improving user experiences. They facilitate the
          exchange of data, automate processes, and provide real-time updates,
          enabling businesses to rapidly adapt to changing market conditions. By
          embracing API development, you are not only streamlining your
          operations but also creating opportunities for collaborations and
          integrations that can fuel the growth of your company. APIs enhance
          your online presence, making your systems more adaptable, efficient,
          and responsive to the constantly evolving needs of your customers and
          the market.
        </p>
      </div>
    </div>
  );
}

export default Section;
