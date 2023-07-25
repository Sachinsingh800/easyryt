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
        Crafting Podcast Website For Multiple Platforms
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
            Delivering custom Podcast Website with dedicated expertise
          </h2>
          <p id="header" ref={sectionRef}>
            Transform your podcasting vision into reality with our professional
            website development services. We specialize in creating bespoke
            platforms that showcase your unique audio content. Our expert team
            designs user-friendly interfaces, ensuring a seamless and immersive
            experience for your listeners. With cutting-edge technology and
            seamless integration of audio players, RSS feeds, and social media,
            we elevate your podcast's reach and engagement. From mobile
            responsiveness to search engine optimization, we ensure your website
            performs at its best across all devices. Whether you're a seasoned
            podcaster or just starting, our tailored solutions will captivate
            your audience and establish a strong online presence in the
            ever-evolving world of podcasting.
          </p>
        </div>
      </div>
    </div>
  );
}

export default Section1;
