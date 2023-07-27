import React, { useRef, useEffect } from "react";
import style from "./Section1.module.css";
import img from "../../../Image/Real-Time Data Processing, 2.png";
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
        Crafting Real-Time Data For Multiple Platforms
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
            Delivering custom  Real-Time Data  with dedicated expertise
          </h2>
          <p id="header" ref={sectionRef}>
            Real-Time Data Processing refers to the swift and seamless handling
            of data as it is generated or received, allowing for immediate
            analysis, interpretation, and response. This dynamic process enables
            organizations to extract valuable insights and make informed
            decisions in real-time, enhancing operational efficiency, customer
            experience, and competitive advantage. Through sophisticated data
            pipelines and streaming technologies, such as Apache Kafka or Spark
            Streaming, this approach handles massive data volumes with low
            latency, ensuring timely data consumption and processing. Industries
            like finance, healthcare, logistics, and IoT benefit significantly
            from real-time data processing, empowering them to adapt swiftly to
            changing scenarios and capitalize on emerging opportunities.
          </p>
        </div>
      </div>
    </div>
  );
}

export default Section1;
