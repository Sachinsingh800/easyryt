import React, { useRef, useEffect } from "react";
import style from "./Section1.module.css";
import img from "../../../Image/Flutter App Development 2.png";
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
        Crafting Flutter  Applications For Multiple Platforms
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
            Delivering custom Flutter  apps with dedicated expertise
          </h2>
          <p id="header" ref={sectionRef}>
            Experience the power of Flutter app development with our expert
            services. Our team of skilled developers will bring your ideas to
            life with stunning cross-platform mobile applications. Harness the
            benefits of Flutter's expressive UI, fast performance, and
            native-like experience on iOS and Android devices. Whether you need
            a simple business app or a complex enterprise solution, we tailor
            our services to meet your specific requirements. From concept to
            deployment, we ensure a smooth and efficient development process.
            Stand out in the competitive app market with our cutting-edge
            Flutter applications that deliver exceptional user experiences.
            Let's create something extraordinary together!
          </p>
        </div>
      </div>
    </div>
  );
}

export default Section1;
