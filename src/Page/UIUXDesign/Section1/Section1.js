import React, { useRef, useEffect } from "react";
import style from "./Section1.module.css";
import img from "../../../Image/UI.UX Design 2.png";
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
        Crafting UI/UX Design For Multiple Platforms
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
            Delivering custom UI/UX Design with dedicated expertise
          </h2>
          <p id="header" ref={sectionRef}>
            Unlock the true potential of your digital presence with our
            top-notch UI/UX design services. Our talented team of designers
            crafts intuitive and visually appealing interfaces that captivate
            users and enhance engagement. By putting users at the center of our
            design process, we create seamless and delightful experiences that
            keep them coming back for more. From wireframes to interactive
            prototypes, we meticulously refine every detail to ensure your
            brand's message shines through. Whether it's a mobile app, website,
            or software, our user-centric approach guarantees increased customer
            satisfaction and improved conversion rates. Elevate your brand's
            online experience today with our cutting-edge UI/UX design
            solutions.
          </p>
        </div>
      </div>
    </div>
  );
}

export default Section1;
