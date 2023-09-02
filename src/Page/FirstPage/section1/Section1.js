import React, { useRef, useEffect } from "react";
import style from "./Section1.module.css";
import img from "../../../Image/have-a-great-idea-for-an-app.png";
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
    
     
        <div>
          <img
            id="header"
            ref={sectionRef}
            className={style.img}
            src={img}
            alt="Native Mobile Apps"
          />
        </div>



        <div >
        <h2 id="header" ref={sectionRef}>
        Why Select Native Mobile Apps?
      </h2>
          <p className={style.para} id="header" ref={sectionRef}>
            Native mobile apps are tailored to function exclusively on a
            specific platform, such as iOS or Android. This approach empowers
            them to utilize the complete capabilities of the platform, resulting
            in enhanced performance, quicker load times, and a more
            user-friendly experience. Native apps can exploit device features
            like camera access, GPS, and offline functionality, enabling you to
            provide a lavish and immersive encounter for your users.
          </p>
        </div>


      </div>
   
  );
}

export default Section1;
