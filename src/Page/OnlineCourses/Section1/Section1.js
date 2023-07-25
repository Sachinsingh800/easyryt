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
        Crafting Online Courses Website For Multiple Platforms
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
            Delivering custom Online Courses Website with dedicated expertise
          </h2>
          <p id="header" ref={sectionRef}>
            Discover our comprehensive Online Courses Website Development
            Services, where we harness the latest technologies to craft dynamic
            e-learning platforms. Our expert team of developers and designers
            collaborates to create engaging, user-friendly websites that
            facilitate seamless navigation and optimal learning experiences.
            With a focus on interactivity and customization, we ensure that your
            online courses are delivered efficiently, catering to diverse
            learners. From course management systems to secure payment gateways,
            we integrate advanced features to meet your specific requirements.
            Trust us to build a robust, scalable, and responsive platform that
            empowers educators to connect with a global audience and learners to
            access knowledge anytime, anywhere. Start your journey towards a
            successful e-learning venture with our innovative solutions.
          </p>
        </div>
      </div>
    </div>
  );
}

export default Section1;
