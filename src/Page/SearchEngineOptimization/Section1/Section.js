import React, { useRef, useEffect } from "react";
import style from "./Section.module.css";
import img from "../../../Image/have-a-great-idea-for-an-app.png";
import { gsap } from "gsap";
import { useIntersection } from "react-use";

function Section() {
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
          alt="SEO"
        />
      </div>

      <div>
        <h1 id="header" ref={sectionRef}>
           The Significance of SEO
        </h1>
        <p className={style.para} id="header" ref={sectionRef}>
          SEO plays a vital role in the world of online marketing. With the vast
          number of internet searches taking place every day, it is crucial to
          emphasize the value of your website appearing prominently on search
          engine results pages. A robust SEO plan not only improves your online
          visibility but also guarantees that your desired clientele can easily
          locate you when actively looking for relevant products, services, or
          industry-related information.
        </p>
      </div>
    </div>
  );
}

export default Section;
