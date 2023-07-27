import React, { useRef, useEffect } from "react";
import style from "./Section1.module.css";
import img from "../../../Image/Mobile App UI.UX Design Services 2.png";
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
        Crafting Mobile App UI/UX Design Services For Multiple Platforms
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
            Delivering custom Mobile App UI/UX Design  with dedicated expertise
          </h2>
          <p id="header" ref={sectionRef}>
            Transform your app idea into an exceptional reality with our Mobile
            App UI/UX Design Services. Our team of skilled designers
            meticulously crafts innovative and user-centric interfaces, ensuring
            seamless navigation and captivating visual aesthetics. From
            wireframes to interactive prototypes, we leave no stone unturned in
            enhancing user experiences. We conduct in-depth research to
            understand your target audience and competition, resulting in
            tailored designs that boost engagement and retention. With a keen
            eye for detail, we optimize every element for responsiveness and
            performance across various devices. Elevate your app's success with
            our expertise, delivering a delightful and intuitive journey for
            your users, leading to increased downloads and positive reviews.
          </p>
        </div>
      </div>
    </div>
  );
}

export default Section1;
