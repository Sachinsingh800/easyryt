import React, { useRef, useEffect } from "react";
import style from "./Section1.module.css";
import img from "../../../Image/ios Application Development Services 2.png";
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
        Crafting IOS Application Development Services For Multiple Platforms
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
            Delivering custom IOS apps with dedicated expertise
          </h2>
          <p id="header" ref={sectionRef}>
            Discover top-tier iOS Application Development Services that bring
            your digital aspirations to life. Our skilled team of developers
            excels at crafting cutting-edge iOS apps that redefine user
            experiences. With a focus on innovation, usability, and performance,
            we tailor every solution to match your unique business requirements.
            From ideation to design and development, we ensure a seamless and
            efficient process. Harness the power of advanced technologies and
            the latest iOS frameworks to create intuitive, feature-rich
            applications. Embrace the future of mobile technology and elevate
            your brand's presence on the App Store. Partner with us to transform
            your ideas into successful, user-centric iOS applications today.
          </p>
        </div>
      </div>
    </div>
  );
}

export default Section1;
