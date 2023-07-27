import React, { useRef, useEffect } from "react";
import style from "./Section1.module.css";
import img from "../../../Image/Android Application Development Services 2.png";
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
        Crafting Android Applications For Multiple Platforms
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
            Delivering custom Android apps with dedicated expertise
          </h2>
          <p id="header" ref={sectionRef}>
            Discover the power of our Android Application Development Services
            and propel your business forward. Our skilled team of developers is
            committed to crafting innovative, user-friendly, and scalable apps
            that resonate with your target audience. From concept to deployment,
            we ensure a seamless development process, utilizing cutting-edge
            technology to deliver robust and reliable applications. Whether you
            need a native app, a cross-platform solution, or app maintenance and
            updates, we've got you covered. Embrace the endless possibilities of
            Android and reach millions of potential users. Let's collaborate to
            turn your vision into a tangible reality and create a lasting impact
            in the digital world.
          </p>
        </div>
      </div>
    </div>
  );
}

export default Section1;
