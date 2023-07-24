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
        Crafting Backend Website Development For Multiple Platforms
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
            Delivering custom Backend Website Developmentwith dedicated expertise
          </h2>
          <p id="header" ref={sectionRef}>
            Our Backend Website Development Services offer cutting-edge
            solutions to power your online presence. We excel in building robust
            backend systems that ensure seamless functionality and enhanced user
            experiences. Our expert team crafts scalable APIs, implements
            intricate server-side logic, and manages databases efficiently. With
            a focus on security and performance, we deliver agile solutions that
            adapt to your evolving business needs. Whether it's building from
            scratch or optimizing existing infrastructure, we tailor our
            services to meet your specific requirements. Trust us to create a
            strong foundation that enables your website to handle increasing
            traffic and complexity while driving your online success.
          </p>
        </div>
      </div>
    </div>
  );
}

export default Section1;
