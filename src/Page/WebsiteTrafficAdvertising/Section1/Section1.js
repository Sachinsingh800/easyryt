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
            Enhance your online presence with our top-notch Website Traffic
            Advertising Services. We specialize in driving targeted and relevant
            traffic to your website, ensuring increased visibility and reaching
            your desired audience. Utilizing advanced advertising strategies and
            data-driven approaches, we optimize campaigns to maximize
            conversions and deliver tangible results for your business. Our
            expert team creates tailored solutions, whether you seek to attract
            more visitors, generate leads, or boost sales. With a focus on
            efficiency and effectiveness, we continuously monitor and fine-tune
            campaigns to ensure optimal performance. Gain a competitive edge in
            the digital landscape and unlock your website's full potential with
            our reliable and results-oriented traffic advertising services.
          </p>
        </div>
      </div>
    </div>
  );
}

export default Section1;
