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
        Crafting Travel Website For Multiple Platforms
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
            Delivering custom Travel Website with dedicated expertise
          </h2>
          <p id="header" ref={sectionRef}>
            Elevate your travel business with our premier Travel Website
            Development Services. Our team of skilled developers and designers
            craft cutting-edge platforms tailored to your unique needs, ensuring
            a seamless user experience for travelers worldwide. From intuitive
            booking systems and interactive maps to engaging content and secure
            payment gateways, we integrate the latest technologies to drive
            conversions and customer satisfaction. Whether you run a travel
            agency, tour operator, or hotel chain, our custom solutions cater to
            your specific goals and branding. Stay ahead in the competitive
            travel industry and unlock new opportunities for growth with our
            expertise in creating dynamic and responsive travel websites
          </p>
        </div>
      </div>
    </div>
  );
}

export default Section1;
