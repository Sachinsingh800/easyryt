import React, { useRef, useEffect } from "react";
import style from "./Section1.module.css";
import img from "../../../Image/Server Architecture and Configuration, 2.png";
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
        Crafting  Server Architecture For Multiple Platforms
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
            Delivering custom  Server Architecture with dedicated expertise
          </h2>
          <p id="header" ref={sectionRef}>
            Server Architecture and Configuration Services offer comprehensive
            solutions for businesses seeking to establish robust and efficient
            server infrastructures. These services encompass the entire
            lifecycle of server management, from planning and designing tailored
            architectures to deploying and configuring servers according to
            specific needs. Expert technicians ensure optimal performance,
            scalability, and security while adhering to industry best practices.
            By leveraging cutting-edge technologies and systematic approaches,
            these services optimize resource utilization, enhance data
            accessibility, and minimize downtime risks. Ultimately, businesses
            benefit from reliable and high-performing server setups that cater
            to their unique demands, empowering them to focus on core activities
            while leaving server management to the experts
          </p>
        </div>
      </div>
    </div>
  );
}

export default Section1;
