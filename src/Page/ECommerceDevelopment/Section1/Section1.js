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
        Crafting E-Commerce website Development Services For Multiple Platforms
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
            Delivering custom E-Commerce website Development Services with
            dedicated expertise
          </h2>
          <p id="header" ref={sectionRef}>
            Welcome to our top-notch E-Commerce website development services! We
            specialize in crafting dynamic, user-friendly online stores that
            drive sales and customer satisfaction. Our team of skilled
            developers will create a customized platform tailored to your unique
            business needs, ensuring seamless navigation and an engaging
            shopping experience for your customers. With a focus on security and
            data privacy, we implement the latest technology and best practices
            to safeguard your transactions and customer information. From
            intuitive product catalogs to efficient checkout processes, our
            E-Commerce solutions are optimized for success. Let us transform
            your vision into a thriving online business, empowering you to reach
            new heights in the digital marketplace.
          </p>
        </div>
      </div>
    </div>
  );
}

export default Section1;
