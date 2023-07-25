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
        Crafting  Website UI/UX Design For Multiple Platforms
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
            Delivering custom  Website UI/UX Design with dedicated expertise
          </h2>
          <p id="header" ref={sectionRef}>
            Transform your online presence with our expert Website UI/UX Design
            Services. Our skilled team of designers and user experience
            specialists collaborate to create captivating interfaces that leave
            a lasting impact. We craft user-centric designs that seamlessly
            blend aesthetics and functionality, ensuring an intuitive and
            delightful user experience. From wireframing to prototyping, we
            employ industry best practices to enhance user engagement, boost
            conversions, and drive business growth. Whether you're starting from
            scratch or seeking to revamp your existing site, our meticulous
            approach and attention to detail guarantee a visually stunning and
            user-friendly website. Elevate your brand and stay ahead of the
            competition with our innovative UI/UX solutions.
          </p>
        </div>
      </div>
    </div>
  );
}

export default Section1;
