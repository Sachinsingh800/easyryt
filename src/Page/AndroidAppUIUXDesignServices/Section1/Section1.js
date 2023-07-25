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
        Crafting Android app For Multiple Platforms
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
            Delivering custom Android app with dedicated expertise
          </h2>
          <p id="header" ref={sectionRef}>
            Unlock the full potential of your Android app with our top-notch
            UI/UX design services. Our team of skilled designers will craft
            visually stunning and intuitive interfaces that captivate users from
            the moment they open your app. We prioritize user-centric design,
            ensuring seamless navigation and delightful interactions that keep
            users engaged and coming back for more. From wireframing to
            prototyping, we meticulously refine every aspect to create an
            unforgettable user experience. Whether you're launching a new app or
            looking to revamp an existing one, our expertise will elevate your
            app's appeal, usability, and overall success in the competitive app
            market.
          </p>
        </div>
      </div>
    </div>
  );
}

export default Section1;
