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
          alt="Data in Real-Time"
        />
      </div>

      <div>
        <h1 id="header" ref={sectionRef}>
          The Importance of Processing Data in Real-Time
        </h1>
        <p className={style.para} id="header" ref={sectionRef}>
          In the fast-paced world of modern business, being able to process and
          analyse data in real-time has become a crucial advantage. Real-time
          data processing provides organizations with the ability to make quick
          and informed decisions, responding instantly to changing circumstances
          and emerging opportunities. It allows businesses to identify
          abnormalities, detect trends, and recognize patterns as they occur,
          enabling them to take proactive actions. By leveraging real-time
          insights, organizations can improve operational efficiency, optimize
          resource allocation, and deliver personalized experiences to their
          customers. Real-time data processing is a valuable tool for
          maintaining competitiveness, ensuring flexibility, and maximizing the
          value of data-centric strategies. Investing in professional services
          for real-time data processing equips businesses with the necessary
          resources to make the most of their data, transforming it into
          actionable intelligence that drives growth and fosters innovation.
        </p>
      </div>
    </div>
  );
}

export default Section;
