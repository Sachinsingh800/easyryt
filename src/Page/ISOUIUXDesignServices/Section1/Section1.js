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
        Crafting IOS UI/UX Design For Multiple Platforms
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
            Delivering custom IOS UI/UX Design with dedicated expertise
          </h2>
          <p id="header" ref={sectionRef}>
            Our IOS UI/UX Design Services offer a cutting-edge approach to
            crafting captivating mobile app experiences. With a focus on
            user-centric design, we create intuitive interfaces that engage and
            delight users. Our team of skilled designers combines aesthetics
            with functionality to ensure seamless navigation and effortless
            interactions. From wireframing to prototyping, we meticulously plan
            every aspect to deliver a visually stunning and user-friendly app.
            Whether you're launching a new iOS app or enhancing an existing one,
            we provide the expertise to optimize user satisfaction and
            retention. Elevate your app's performance with our exceptional iOS
            UI/UX Design Services.
          </p>
        </div>
      </div>
    </div>
  );
}

export default Section1;
