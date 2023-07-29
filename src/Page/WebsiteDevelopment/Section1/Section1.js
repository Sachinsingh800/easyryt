import React, { useRef, useEffect } from "react";
import style from "./Section1.module.css";
import img from "../../../Image/Angular Dvelopment 2.png";
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
        Crafting Website Development For Multiple Platforms
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
            Delivering custom Website Development with dedicated expertise
          </h2>
          <p id="header" ref={sectionRef}>
            Unlock your digital potential with our top-notch website development
            services. We are a team of skilled developers and designers
            dedicated to crafting visually captivating and highly functional
            websites. Whether you need an e-commerce platform to boost sales, a
            professional portfolio to showcase your talents, or a dynamic web
            application to streamline operations, we've got you covered. Our
            tailored solutions cater to your unique requirements and target
            audience, ensuring a seamless user experience across all devices.
            From concept to execution, we employ the latest technologies and
            industry best practices to deliver results that exceed expectations.
            Empower your online presence and drive growth with our expertise
            today.
          </p>
        </div>
      </div>
    </div>
  );
}

export default Section1;
