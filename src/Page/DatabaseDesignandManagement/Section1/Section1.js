import React, { useRef, useEffect } from "react";
import style from "./Section1.module.css";
import img from "../../../Image/Database Design and Management, 2.png";
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
        Crafting Database Design For Multiple Platforms
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
            Delivering custom Database Design with dedicated expertise
          </h2>
          <p id="header" ref={sectionRef}>
            Our Database Design and Management Services offer a comprehensive
            solution to unleash the full potential of your data. With expertise
            in designing, implementing, and optimizing databases, we ensure
            seamless data organization, integrity, and performance. Our team of
            skilled professionals crafts tailored database solutions that cater
            to your specific business needs, empowering you with the right
            information at the right time. From conceptualization to deployment,
            we maintain a focus on security, scalability, and efficiency,
            safeguarding your data and enabling it to grow with your business.
            Embrace the power of data with our reliable services, driving better
            decision-making and boosting overall productivity.
          </p>
        </div>
      </div>
    </div>
  );
}

export default Section1;
