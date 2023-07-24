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
        Crafting App Backend Applications For Multiple Platforms
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
            Delivering custom App Backend apps with dedicated expertise
          </h2>
          <p id="header" ref={sectionRef}>
            Discover our top-notch App Backend Development Services designed to
            empower your mobile or web applications. Our experienced team of
            developers will create robust, scalable, and secure backend
            solutions, optimizing performance and user experience. From crafting
            well-structured APIs to managing databases and implementing
            server-side logic, we tailor our services to meet your app's
            specific requirements. Embrace innovation with our cutting-edge
            technologies, ensuring seamless integration and real-time updates.
            Focus on your app's front-end while we handle the backend
            complexities, ensuring reliability and efficiency. Stay ahead in the
            competitive app market with our customized solutions, enhancing your
            app's functionality and overall success.
          </p>
        </div>
      </div>
    </div>
  );
}

export default Section1;
