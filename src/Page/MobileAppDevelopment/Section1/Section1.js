import React, { useRef, useEffect } from "react";
import style from "./Section1.module.css";
import img from "../../../Image/Mobile App Development 2.png";
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
        Crafting Mobile  Applications For Multiple Platforms
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
            Delivering custom Mobile  apps with dedicated expertise
          </h2>
          <p id="header" ref={sectionRef}>
            Unlock your business's full potential with our top-notch Mobile
            Application Development Services. Our team of skilled developers and
            designers will bring your ideas to life, crafting custom mobile apps
            with seamless functionality for both Android and iOS platforms. From
            concept to launch, we provide comprehensive support, ensuring your
            app meets your specific requirements and exceeds user expectations.
            Whether you need a productivity tool, e-commerce solution, or a
            game-changing app, we've got you covered. Elevate your brand, boost
            customer engagement, and stay ahead of the competition with our
            innovative mobile app solutions. Let's collaborate and transform
            your vision into a successful reality!
          </p>
        </div>
      </div>
    </div>
  );
}

export default Section1;
