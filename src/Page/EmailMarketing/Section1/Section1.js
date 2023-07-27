import React, { useRef, useEffect } from "react";
import style from "./Section1.module.css";
import img from "../../../Image/Email Marketing 2.png";
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
            Supercharge your marketing efforts with our comprehensive Email
            Marketing Services. Reach your audience effectively through expertly
            crafted emails that resonate with their needs and interests. Harness
            the power of automation to streamline your campaigns, saving time
            and resources while maintaining personalized communication. Our
            advanced analytics provide valuable insights into email performance,
            allowing you to optimize strategies for maximum impact. Whether
            you're nurturing leads, promoting products, or building customer
            loyalty, our tailored solutions will help you achieve your business
            goals. Stay ahead of the competition and connect with your audience
            on a deeper level through our result-driven Email Marketing
            Services.pe.
          </p>
        </div>
      </div>
    </div>
  );
}

export default Section1;
