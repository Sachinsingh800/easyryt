import React, { useRef, useEffect } from "react";
import style from "./Section1.module.css";
import img from "../../../Image/Laravel 2.png";
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
        Crafting  Laravel Development For Multiple Platforms
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
            Delivering custom  Laravel Development with dedicated expertise
          </h2>
          <p id="header" ref={sectionRef}>
            Laravel Development Services offer comprehensive solutions
            leveraging the powerful Laravel framework. Our team of skilled
            developers specializes in crafting dynamic web applications, custom
            software, and seamless API integrations. With a focus on
            reliability, scalability, and performance optimization, we deliver
            tailored solutions that align perfectly with your business
            requirements. From ideation to deployment, our expertise ensures
            smooth project execution, timely delivery, and post-launch support.
            Whether it's building a new application from scratch or enhancing an
            existing one, we are committed to delivering high-quality solutions
            that empower your digital presence and drive business growth. Trust
            us to bring your Laravel-based projects to life with innovation and
            precision.
          </p>
        </div>
      </div>
    </div>
  );
}

export default Section1;
