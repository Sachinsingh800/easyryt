import React, { useRef, useEffect } from "react";
import style from "./Section1.module.css";
import img from "../../../Image/Website Development 2.png";
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
      <h2 id="header" ref={sectionRef}>
        Crafting WordPress Development For Multiple Platforms
      </h2>
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
            Delivering custom WordPress Development with dedicated expertise
          </h2>
          <p id="header" ref={sectionRef}>
            Discover top-notch WordPress Development Services tailored to
            elevate your online presence. Our team of skilled developers crafts
            custom themes and plugins, ensuring a unique and engaging website.
            We specialize in creating responsive and user-friendly designs,
            optimizing your platform for seamless navigation across all devices.
            From concept to implementation, we focus on meeting your specific
            business goals and delivering a compelling digital experience for
            your visitors. Whether you need an e-commerce platform, a corporate
            website, or a personal blog, our expertise in WordPress development
            guarantees exceptional performance, security, and scalability. Let
            us empower your brand with cutting-edge solutions and unlock the
            full potential of your online presence.
          </p>
        </div>
      </div>
    </div>
  );
}

export default Section1;
