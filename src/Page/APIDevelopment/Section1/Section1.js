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
        Crafting API Development For Multiple Platforms
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
            Delivering custom API Development with dedicated expertise
          </h2>
          <p id="header" ref={sectionRef}>
            Our API Development Services offer a comprehensive solution for
            businesses seeking to build, enhance, and manage Application
            Programming Interfaces. Our expert team specializes in creating
            secure, scalable, and efficient APIs that facilitate seamless data
            exchange and integration between various applications and platforms.
            We ensure optimized performance and compatibility, enabling
            businesses to enhance their software functionality and deliver
            exceptional user experiences. Whether it's developing custom APIs,
            integrating third-party APIs, or providing API consultation, our
            services cater to diverse needs. With a focus on innovation and
            cutting-edge technologies, we empower businesses to stay ahead in
            the dynamic digital landscape with reliable and high-performing API
            solutions.
          </p>
        </div>
      </div>
    </div>
  );
}

export default Section1;
