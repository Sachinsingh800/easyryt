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
        Crafting Ecommerce Website For Multiple Platforms
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
            Delivering customEcommerce Website with dedicated expertise
          </h2>
          <p id="header" ref={sectionRef}>
            Unlock the full potential of your business with our comprehensive
            Ecommerce Website Online Store Development Services. Our expert team
            specializes in crafting cutting-edge online stores that elevate your
            brand, drive sales, and enhance the customer experience. We
            understand the unique needs of your business and create tailored
            solutions to meet your specific requirements. From user-friendly
            interfaces to secure payment gateways and seamless navigation, our
            services are designed to optimize every aspect of your Ecommerce
            website. Whether you're starting from scratch or looking to revamp
            an existing platform, our team is ready to take your business to new
            heights. Contact us today to discuss your project and embark on a
            successful Ecommerce journey.
          </p>
        </div>
      </div>
    </div>
  );
}

export default Section1;
