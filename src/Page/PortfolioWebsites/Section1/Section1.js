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
        Crafting Portfolio Website For Multiple Platforms
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
            Delivering custom Portfolio Website with dedicated expertise
          </h2>
          <p id="header" ref={sectionRef}>
            Unlock your potential with our top-notch portfolio website
            development services. We craft bespoke online showcases that
            captivate your audience, highlighting your skills, projects, and
            achievements in an eye-catching and professional manner. Our expert
            team ensures your portfolio is not only visually stunning but also
            fully responsive, adapting seamlessly to various devices. With a
            user-friendly interface and seamless navigation, visitors will
            experience the true essence of your work. Elevate your online
            presence and impress potential clients, employers, or collaborators
            with a captivating portfolio that reflects your unique personality
            and talents. Stay ahead in the digital world with a personalized and
            impactful portfolio website tailored just for you.
          </p>
        </div>
      </div>
    </div>
  );
}

export default Section1;
