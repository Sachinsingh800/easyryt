import React, { useRef, useEffect } from "react";
import style from "./Section1.module.css";
import img from "../../../Image/social media marketing 2.png";
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
            Supercharge your online presence with our cutting-edge Social Media
            Advertising Services. We'll propel your brand to new heights through
            strategic targeting, eye-catching visuals, and captivating content.
            Our team of experts crafts data-driven campaigns across various
            platforms to maximize your ROI and reach your target audience
            effectively. Whether it's Facebook, Instagram, Twitter, or LinkedIn,
            we've got you covered. Unlock the potential of social media
            marketing and watch your business thrive with increased brand
            awareness, website traffic, and customer engagement. Stay ahead of
            the competition and let us transform your social media presence into
            a powerful marketing force. 📱🚀 #SocialMediaAds #DigitalMarketing
          </p>
        </div>
      </div>
    </div>
  );
}

export default Section1;
