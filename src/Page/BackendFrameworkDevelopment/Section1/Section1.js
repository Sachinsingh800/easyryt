import React, { useRef, useEffect } from "react";
import style from "./Section1.module.css";
import img from "../../../Image/Backend Framework Development, 2.png";
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
        Crafting Backend Framework Development For Multiple Platforms
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
            Delivering custom Backend Framework Development with dedicated expertise
          </h2>
          <p id="header" ref={sectionRef}>
            Our Backend Framework Development Services are designed to empower
            your web applications with cutting-edge technology and seamless
            functionality. Our expert team crafts robust, scalable, and
            efficient backend solutions tailored to your unique needs. Whether
            you require API development, database management, or server-side
            optimization, we've got you covered. By leveraging the latest tools
            and technologies, we ensure your application operates at peak
            performance, handling heavy workloads and user interactions with
            ease. Trust us to build a solid foundation for your project,
            enabling you to focus on delivering an exceptional user experience
            while we take care of the technical intricacies behind the scenes.
          </p>
        </div>
      </div>
    </div>
  );
}

export default Section1;
