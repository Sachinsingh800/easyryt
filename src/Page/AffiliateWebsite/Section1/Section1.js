import React, { useRef, useEffect } from "react";
import style from "./Section1.module.css";
import img from "../../../Image/Affiliate Website 2.png";
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
        Crafting Affiliate Marketing Website For Multiple Platforms
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
            Delivering customAffiliate Marketing Website with dedicated expertise
          </h2>
          <p id="header" ref={sectionRef}>
            Elevate your affiliate marketing game with our specialized website
            development services. We excel at crafting high-conversion platforms
            that maximize your revenue potential. Our team of experts ensures
            seamless integration of affiliate programs and user-friendly
            navigation, making it effortless for visitors to discover and
            purchase products. Tailored to your unique needs, our websites
            combine stunning designs with cutting-edge technology, ensuring an
            engaging user experience that keeps your audience coming back for
            more. Unlock the true potential of affiliate marketing and achieve
            unprecedented success with our results-driven approach. Let us build
            the foundation for your online prosperity and take your business to
            new heights today!
          </p>
        </div>
      </div>
    </div>
  );
}

export default Section1;
