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
        Crafting  Node.js Development For Multiple Platforms
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
            Delivering custom  Node.js Development with dedicated expertise
          </h2>
          <p id="header" ref={sectionRef}>
            Node.js Development Services provide a comprehensive range of
            solutions leveraging the power of Node.js, a server-side JavaScript
            runtime. With a focus on speed, scalability, and efficiency, expert
            developers craft cutting-edge applications, APIs, and real-time web
            solutions. Node.js enables seamless handling of concurrent
            connections, making it ideal for data-intensive and high-traffic
            applications. From building interactive web applications to
            designing robust backends, Node.js development services offer
            versatility across industries. Leveraging the vast ecosystem of
            Node.js libraries and tools, these services ensure rapid development
            and deployment while maintaining the highest standards of
            performance and security. Embrace Node.js to unlock the potential of
            modern, real-time web development for your business needs.
          </p>
        </div>
      </div>
    </div>
  );
}

export default Section1;
