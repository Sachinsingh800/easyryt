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
        Crafting   Azure For Multiple Platforms
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
            Delivering custom   Azure with dedicated expertise
          </h2>
          <p id="header" ref={sectionRef}>
            Azure is Microsoft's powerful and versatile cloud computing platform
            that caters to businesses and developers alike. It provides a vast
            array of services, including virtual machines, databases, AI, and
            analytics tools, enabling organizations to build, deploy, and manage
            applications with ease. Azure offers high scalability, security, and
            global reach, allowing businesses to innovate and scale on-demand
            without upfront infrastructure costs. With a broad range of
            integration options, seamless hybrid capabilities, and a thriving
            ecosystem, Azure facilitates digital transformation by empowering
            users to harness the full potential of the cloud and gain a
            competitive edge in today's rapidly evolving technology landscape.
          </p>
        </div>
      </div>
    </div>
  );
}

export default Section1;
