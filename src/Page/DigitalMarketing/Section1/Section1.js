import React, { useRef, useEffect } from "react";
import style from "./Section1.module.css";
import img from "../../../Image/Digital Marketing (2).png";
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
        Crafting Digital MarketingFor Multiple Platforms
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
            Delivering custom Digital Marketing Development with dedicated
            expertise
          </h2>
          <p id="header" ref={sectionRef}>
            Our Digital Marketing Services empower your business to thrive in
            the digital realm. We craft a customized approach, combining search
            engine optimization (SEO), pay-per-click (PPC) advertising, social
            media management, content marketing, and more. Our expert team
            devises data-driven strategies to enhance your online visibility,
            attract targeted traffic, and convert visitors into loyal customers.
            From designing engaging campaigns to analyzing key performance
            metrics, we ensure your brand reaches its full potential in the
            digital landscape. Stay ahead of the competition and achieve your
            goals with our result-oriented, ROI-focused solutions. Elevate your
            online presence and drive business growth with our cutting-edge
            digital marketing expertise.
          </p>
        </div>
      </div>
    </div>
  );
}

export default Section1;
