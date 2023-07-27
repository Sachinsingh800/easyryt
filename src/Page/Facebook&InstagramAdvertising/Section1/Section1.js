import React, { useRef, useEffect } from "react";
import style from "./Section1.module.css";
import img from "../../../Image/Facebook & Instagram Advertising 2.png";
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
        Digital Marketing Firm That Promises Assured Enhancements
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
            Digital Marketing Firm That Promises Assured Enhancements
          </h2>
          <p id="header" ref={sectionRef}>
            Supercharge your business growth with our highly effective Facebook
            & Instagram Advertising Services. Our team of skilled marketers will
            design and execute compelling ad campaigns tailored to your target
            audience, ensuring maximum reach and engagement. Increase brand
            visibility, drive website traffic, and boost sales with our
            data-driven strategies. We monitor and optimize campaigns
            continuously to achieve the best return on investment (ROI) for your
            advertising budget. Stay ahead of the competition and harness the
            power of social media to connect with potential customers and build
            lasting relationships. Elevate your business to new heights with our
            Facebook & Instagram Advertising Services today.
          </p>
        </div>
      </div>
    </div>
  );
}

export default Section1;
