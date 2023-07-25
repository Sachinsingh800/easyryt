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
        Crafting Fashion Lifestyle Website For Multiple Platforms
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
            Delivering custom Fashion Lifestyle Websitewith dedicated expertise
          </h2>
          <p id="header" ref={sectionRef}>
            Welcome to our Fashion Lifestyle Website Development Services! Step
            into the world of unparalleled digital elegance as we craft
            captivating and user-centric platforms tailored to your brand's
            unique style. Our team of expert designers and developers combines
            creativity and technical finesse to create visually stunning
            websites that resonate with fashion enthusiasts worldwide. From
            seamless user experiences to responsive design, we prioritize the
            latest trends in web development to ensure your brand shines in the
            digital realm. Let us transform your vision into a virtual reality,
            providing you with a powerful online presence to connect, inspire,
            and engage your audience. Elevate your fashion brand today!
          </p>
        </div>
      </div>
    </div>
  );
}

export default Section1;
