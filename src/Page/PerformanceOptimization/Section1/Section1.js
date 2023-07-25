import React, { useRef, useEffect } from "react";
import style from "./Section1.module.css";
import img from "../../../Image/crossbg.png";
import { gsap } from "gsap";
import { useIntersection } from "react-use";

function Section1() {
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
      <h1 id="header" ref={sectionRef}>
        Crafting Performance Optimization For Multiple Platforms
      </h1>
      <div className={style.innercontain}>
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
          <h2 id="header" ref={sectionRef}>
            Delivering custom Performance Optimization with dedicated expertise
          </h2>
          <p id="header" ref={sectionRef}>
            Our Performance Optimization Services are designed to elevate your
            organization's efficiency and productivity to new heights. Through
            meticulous analysis and fine-tuning, we optimize your systems,
            applications, and processes, ensuring peak performance and seamless
            user experiences. Our expert team identifies bottlenecks, eliminates
            redundancies, and maximizes resource utilization, delivering
            significant speed and responsiveness improvements. Whether it's web
            applications, databases, or server configurations, we tailor
            solutions to meet your specific needs. With our cutting-edge
            techniques and industry best practices, you can stay ahead of the
            competition and provide your customers with unparalleled
            satisfaction. Experience heightened productivity and reduced
            downtime with our Performance Optimization Services today
          </p>
        </div>
      </div>
    </div>
  );
}

export default Section1;
